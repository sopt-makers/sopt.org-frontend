import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { FXAAShader } from 'three/addons/shaders/FXAAShader.js';
import {
  ACESFilmicToneMapping,
  BackSide,
  CanvasTexture,
  CircleGeometry,
  Clock,
  Color,
  CylinderGeometry,
  DoubleSide,
  Group,
  HalfFloatType,
  LatheGeometry,
  LinearFilter,
  LinearMipmapLinearFilter,
  Mesh,
  MeshBasicMaterial,
  MeshPhysicalMaterial,
  PMREMGenerator,
  PerspectiveCamera,
  PlaneGeometry,
  PointLight,
  Quaternion,
  SRGBColorSpace,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  Vector2,
  Vector3,
  WebGLRenderTarget,
  WebGLRenderer,
} from 'three';

export function createOrbitScene(canvas, onReady) {
  // 장면 설정
  const P = {
    count: 10,
    // 참조 화면의 밝은 영역 크기(16:9 기준 0.60 × 0.87)를
    // bboxW = 2R + D, bboxH = 2R*cos(tilt) + D에 대입해 계산했다.
    radius: 3.29,
    discSize: 0.99,
    // 참조 원판의 두께는 지름의 약 6~7%다. 10%까지 두꺼워지면 동전처럼 보인다.
    thickness: 0.12,
    bevel: 0.032, // 각진 테두리를 위한 모따기
    // 깊이 차이는 원근에 의해 궤도를 찌그러뜨리므로 0으로 유지한다.
    // 원판 크기의 시각적 변화는 기울기로 표현한다.
    spread: 0,
    // 밝기 분포의 프레임별 회전을 누적해 참조 속도를 측정했다(-14.5도/초).
    // 11.98초 동안 180도 회전하며, 10개 원판은 36도마다 같은 패턴이므로
    // 전체 주기를 한 번에 비교하지 않고 작은 구간으로 나눠 측정했다.
    orbit: -0.253, // 라디안/초. 음수는 참조와 반대 방향
    loop: 11.98, // 참조 반복 주기. 회전은 이 주기의 정수배
    // 참조 원판 중심을 주성분 분석한 타원의 단축/장축 비율은 0.59, 장축 각도는 -30도다.
    // 깊이 차이가 없으면 비율이 cos(tilt)이므로 tilt = acos(0.59), roll = 30도로 맞췄다.
    ringTilt: 0.94,
    ringRoll: 0.52,
    // 좌우 반전은 위치와 법선을 함께 뒤집고 회전 방향도 바꿔야 한다.
    // ringRoll만 바꾸면 위치와 기울기가 어긋난다.
    mirror: 1,
    // 참조 원판의 투영 타원 비율은 0.10~0.62다.
    // 카메라 정면을 향해 동전처럼 보이지 않도록 시선과의 각도를 이 범위로 제한한다.
    tiltMid: 1.19, // 시선 축 기준 약 68도
    tiltAmp: 0.28, // 측정된 cos(mid-amp)=0.62, cos(mid+amp)=0.10 범위
    // 원판의 공전당 회전수는 정수로 유지해야 매 주기 같은 배치로 돌아온다.
    patternTurns: 3,
    swirl: 1,
    // 기울어지는 방향의 위상 차이다. 법선의 방향에 따라 원판이 세로 또는 가로 타원으로 보인다.
    // 이 보정이 없으면 궤도 앞쪽 원판이 가로로 눕는다.
    lean: 1.86,
    // 모든 원판이 같은 방향으로 회전하도록 하나의 회전축을 공유한다.
    axisA: 0.6, // 궤도 평면 내부 회전축 방향
    axisZ: 0.25, // 평면 밖으로 기울어진 정도
    phaseSpread: 2.1, // 궤도상 시작 각도의 차이
    // 불투명도는 1로 유지한다. 낮추면 굴절을 거치지 않은 배경이 알파 블렌딩으로 섞인다.
    // 1에서는 투과 경로만 사용하므로 원판 뒤 글자가 굴절되고 흐려진다.
    opacity: 1.0,
    atten: 8, // 유리 내부에서 파란색이 누적되는 거리
    // 알파 혼합을 제거한 뒤 원판이 불투명하게 보이지 않도록 감쇠 거리를 늘렸다.
    // 자체 발광은 면 전체를 균일하게 밝히므로 작게 유지한다.
    glow: 0.0,
    irid: 0.22,
    core: 28, // 중앙의 보이지 않는 광원. 거리 감쇠로 면을 밝힌다
    rim: 1.62, // 테두리 밝기. 너무 높으면 흰색으로 날아간다
    faceDark: 0.21, // 면 내부의 그라데이션을 유지하는 어두움
    faceGlow: 0.55, // 중앙에 가까워질 때 면이 밝아지는 정도
    // 평평한 면의 법선에 작은 물결을 넣어 뒤쪽 글자가 단순히 이동하지 않고 휘어 보이게 한다.
    warp: 0.6,
    warpScale: 1.9, // 원판 하나에 적용되는 물결 빈도
    blur: 0.14, // 투과 샘플을 흐리는 거칠기
    depth: 2.6, // 굴절로 배경을 밀어내는 재질 두께
    sat: 1.04, // 전체 채도. 0은 회색, 1은 조명 색 유지
    satFall: 0.7, // 원판 내부의 채도 감소량. 0이면 균일
    bloom: 0.29, // 과한 반짝임을 피하는 약한 빛 번짐
    exposure: 1.35,
  };

  const BG = 0x000000; // 참조 배경은 순수한 검정

  // 렌더러 설정
  // 선명한 장면은 기기 성능에 맞춰 조절하되 레티나 화면에서 최소 DPR 1.5를 유지한다.
  let qualityScale = 1;
  let adaptiveScale = 1;
  function renderScale() {
    const dpr = Math.min(devicePixelRatio, 2);
    return Math.max(Math.min(dpr, 1.5), dpr * adaptiveScale) * qualityScale;
  }

  // 매 프레임 후면 버퍼를 복사하는 비용을 피하려고 preserveDrawingBuffer를 사용하지 않는다.
  let disposed = false;
  let frameId;
  const renderer = new WebGLRenderer({ canvas, antialias: false });
  renderer.setPixelRatio(renderScale());
  renderer.setSize(innerWidth, innerHeight);
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = P.exposure;

  const handleContextLost = (event) => {
    event.preventDefault();
    onReady(false);
  };
  const handleContextRestored = () => onReady(true);
  canvas.addEventListener('webglcontextlost', handleContextLost);
  canvas.addEventListener('webglcontextrestored', handleContextRestored);

  const scene = new Scene();
  scene.background = new Color(BG);

  const camera = new PerspectiveCamera(32, innerWidth / innerHeight, 0.1, 100);
  camera.position.set(0, 0, 14);

  // 환경 조명
  // 유리는 조명을 반사하므로 흰색 대신 색이 있는 광원으로 참조의 색감을 만든다.
  function buildEnvironment() {
    const env = new Scene();

    // 수직 그라데이션으로 원판이 기울 때 면의 밝기가 자연스럽게 변하도록 한다.
    env.add(
      new Mesh(
        new SphereGeometry(60, 48, 32),
        new ShaderMaterial({
          side: BackSide,
          uniforms: {
            top: { value: new Color(0x060d1e) },
            mid: { value: new Color(0x1b4d8c) },
            bot: { value: new Color(0x02040c) },
          },
          vertexShader:
            'varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
          fragmentShader: `
        varying vec3 vP; uniform vec3 top, mid, bot;
        void main(){
          float h = normalize(vP).y * 0.5 + 0.5;
          vec3 c = h < 0.5 ? mix(bot, mid, smoothstep(0.0, 0.5, h))
                           : mix(mid, top, smoothstep(0.5, 1.0, h));
          gl_FragColor = vec4(c, 1.0);
        }`,
        }),
      ),
    );

    // 원판 둘레 전체에 밝은 테두리가 생기도록 모든 방향에서 들어오는 띠 조명을 사용한다.
    const band = new Mesh(
      new CylinderGeometry(26, 26, 26, 64, 1, true),
      new MeshBasicMaterial({ side: BackSide }),
    );
    // 넓고 약한 조명으로 각도에 관계없이 부드럽게 채운다.
    // 너무 밝으면 면이 평평해지고 테두리가 묻힌다.
    band.material.color.set(0x7aa8e0).multiplyScalar(0.3);
    env.add(band);

    const panel = (w, h, hex, intensity, pos) => {
      // 조명의 색은 유지하되 원형 가장자리를 흐려 사각 조명 형태가 반사되지 않게 한다.
      const mat = new ShaderMaterial({
        side: DoubleSide,
        uniforms: { tint: { value: new Color(hex).multiplyScalar(intensity) } },
        vertexShader:
          'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }',
        fragmentShader:
          'varying vec2 vUv; uniform vec3 tint; void main(){ float fade = 1.0 - smoothstep(0.15, 0.5, length(vUv - 0.5)); gl_FragColor = vec4(tint * fade, 1.0); }',
      });
      const mesh = new Mesh(new CircleGeometry(1, 64), mat);
      mesh.scale.set(w / 2, h / 2, 1);
      mesh.position.set(...pos);
      mesh.lookAt(0, 0, 0);
      env.add(mesh);
    };

    // 좁은 광원은 회전 중 반짝임이 튀므로 사용하지 않는다.
    // 중앙 광원이 형태를 드러내고 주변 조명은 부드럽게 보완한다.
    panel(7, 7, 0x8ff0ff, 1.5, [-8, 5, 5]); // 청록색 조명
    panel(6, 6, 0x7a7cff, 1.1, [8, -3, 4]); // 반대편의 보라색 조명

    const pmrem = new PMREMGenerator(renderer);
    const rt = pmrem.fromScene(env, 0.02);
    pmrem.dispose();
    return rt.texture;
  }
  scene.environment = buildEnvironment();

  // 투과는 환경 맵이 아니라 실제 뒤쪽 장면을 샘플링한다.
  // 검은 배경에서 원판이 비어 보이지 않도록 불투명한 배경광을 그린다.
  const backdrop = new Mesh(
    new PlaneGeometry(17, 13),
    new ShaderMaterial({
      uniforms: { core: { value: new Color(0x0a1c3e) }, edge: { value: new Color(0x000000) } },
      vertexShader:
        'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: `
      varying vec2 vUv; uniform vec3 core; uniform vec3 edge;
      void main(){
        float d = length((vUv - vec2(0.5, 0.48)) * vec2(1.6, 2.0));
        gl_FragColor = vec4(mix(edge, core, pow(smoothstep(1.0, 0.0, d), 2.0)), 1.0);
      }`,
    }),
  );
  backdrop.position.z = -6;
  scene.add(backdrop);

  // 궤도 중앙 광원은 모든 원판과 거리가 같아 안쪽 가장자리를 일정하게 밝힌다.
  const coreLight = new PointLight(0x9fe8ff, P.core, 0, 2);
  scene.add(coreLight);

  // 중앙에는 보이는 물체를 두지 않는다. 점광원만 배치해 중앙은 비워 둔다.

  // 원판 구성
  // 둥근 모서리 대신 짧고 평평한 경사면으로 테두리의 선명한 반사를 만든다.
  function discGeometry(radius, halfThickness, bevel) {
    const b = Math.max(0.004, Math.min(bevel, halfThickness * 0.85, radius * 0.4));
    const geo = new LatheGeometry(
      [
        new Vector2(0, halfThickness),
        new Vector2(radius - b, halfThickness),
        new Vector2(radius, halfThickness - b),
        new Vector2(radius, -(halfThickness - b)),
        new Vector2(radius - b, -halfThickness),
        new Vector2(0, -halfThickness),
      ],
      128,
    );
    geo.rotateX(Math.PI / 2); // 면 법선을 +Z 방향으로 정렬
    return geo;
  }

  const glass = new MeshPhysicalMaterial({
    color: 0xffffff,
    metalness: 0,
    // 거칠기가 0에 가까우면 회전 중 반사가 날카롭게 튀므로 약간의 거칠기를 유지한다.
    roughness: P.blur,
    ior: 1.5,
    transmission: 1,
    // thickness는 실제 판 두께와 별개로 빛이 유리 안에서 이동하는 거리를 나타낸다.
    thickness: P.depth,
    attenuationColor: new Color(0x4f9bff),
    attenuationDistance: P.atten,
    clearcoat: 1,
    clearcoatRoughness: 0.02,
    envMapIntensity: 2.0,
    emissive: new Color(0x1b3f9c),
    emissiveIntensity: P.glow,
    iridescence: P.irid,
    iridescenceIOR: 1.3,
    iridescenceThicknessRange: [180, 620],
    // 양면을 그려 반대쪽 테두리도 유리 너머로 보이도록 한다.
    side: DoubleSide,
    transparent: true,
    opacity: P.opacity,
    // 유리가 깊이 버퍼에 기록되면 원판끼리나 배경을 가려 불투명해지므로 깊이를 기록하지 않는다.
    depthWrite: false,
  });

  // 기울이기와 화면 평면에서의 회전을 순서대로 적용하려고 그룹을 두 단계로 나눈다.
  const rollGroup = new Group();
  scene.add(rollGroup);
  // 참조의 시작 구도에 맞춰 전체 그룹의 위치와 크기만 보정한다.
  // 반지름과 원판 크기 설정은 유지한다.
  rollGroup.scale.setScalar(1.077);
  const RING_OFFSET = new Vector2(0.93, 0.85); // 시작 구도에만 적용
  const RING_END_Y = 0.42; // 끝 구도에서 고리를 끌어올리는 양
  const ring = new Group();
  rollGroup.add(ring);

  // 같은 원판을 원 위에 균등하게 배치한다.
  // Three.js의 투과 배경에는 투과 재질이 제외되므로 유리끼리 서로 굴절되지 않는다.
  // 원판을 포함한 별도 배경은 원판 자신까지 굴절시켜 잔상을 만들기 때문에 사용하지 않는다.

  let discs = [];
  let discGeo = null;
  function buildDiscs() {
    for (const m of discs) ring.remove(m);
    if (discGeo) discGeo.dispose();
    discGeo = discGeometry(P.discSize, P.thickness, P.bevel);
    discs = [];
    for (let i = 0; i < P.count; i++) {
      const mesh = new Mesh(discGeo, glass);
      ring.add(mesh);
      discs.push(mesh);
    }
  }
  buildDiscs();

  // 3D 글자
  // 글자를 DOM 대신 장면 내부 평면에 배치해 원판이 글자 앞뒤로 지나가게 한다.
  let headlines = [];
  // 본문으로 넘어갈 때 0에서 1로 간다. 1이면 글자가 완전히 어두워져 사라지고
  // 배경에는 공전만 남는다.
  let textFade = 0;
  let textFadeTarget = 0;

  // 글꼴 자체 여백에 대문자 크기 비율만큼 자간을 추가한다. 참조처럼 촘촘하게 배치한다.
  const TRACK = 0.03;
  const CAP_RATIO = 0.43; // 평면 높이 대비 대문자의 보이는 높이

  function textPlane(text, height) {
    // 글자를 크게 그린 뒤 축소해 대각선 가장자리의 계단 현상을 줄인다.
    // 원판에 가려지도록 글자는 불투명 렌더링 단계에서 처리한다.
    const px = 720;
    const measure = document.createElement('canvas').getContext('2d');
    const font = `${px}px "BebasNeue", Impact, sans-serif`;
    const tracking = `${px * TRACK}px`;
    measure.font = font;
    measure.letterSpacing = tracking;

    const pad = px * 0.22;
    const cw = Math.ceil(measure.measureText(text).width) + pad * 2;
    const ch = Math.ceil(px * 1.25) + pad * 2;

    const canvas = document.createElement('canvas');
    canvas.width = cw;
    canvas.height = ch;
    const ctx = canvas.getContext('2d');
    ctx.font = font;
    ctx.letterSpacing = tracking;
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, cw / 2, ch / 2);

    const tex = new CanvasTexture(canvas);
    tex.colorSpace = SRGBColorSpace;
    tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
    tex.generateMipmaps = true;
    tex.minFilter = LinearMipmapLinearFilter;
    tex.magFilter = LinearFilter;

    const mesh = new Mesh(
      new PlaneGeometry((height * cw) / ch, height),
      new MeshBasicMaterial({
        map: tex,
        // 글자는 알파 혼합 대신 잘라내기를 사용해 깊이를 기록한다.
        // 일반 투명 글자는 투과 원판보다 나중에 그려져 항상 맨 위에 보이기 때문이다.
        alphaTest: 0.5,
        alphaToCoverage: true,
        depthWrite: true,
        toneMapped: false,
      }),
    );
    scene.add(mesh);

    // 같은 글꼴과 자간으로 측정한 각 글자 중심을 평면 중심 기준의 월드 좌표로 변환한다.
    const planeW = (height * cw) / ch;
    const glyphX = (k) => {
      const pre = measure.measureText(text.slice(0, k)).width;
      const gw = measure.measureText(text[k]).width;
      return (pad + pre + gw / 2 - cw / 2) * (planeW / cw);
    };

    // measureText에는 마지막 글자 뒤 자간도 포함되므로 실제 글자 영역을 기준으로 정렬한다.
    const inkHalfW = ((measure.measureText(text).width - px * TRACK) / 2) * (planeW / cw);

    return { mesh, glyphX, inkHalfW };
  }

  // 단어마다 원판의 앞뒤 위치를 달리해야 하므로 단어별 평면을 사용한다.
  // 시작 구도는 1440×960 참조를 기준으로 하고, 모인 구도는 첫 줄 왼쪽과 둘째 줄 오른쪽 여백을 맞춘다.
  const TEXT_HEIGHT = 4.05; // 글자 평면 높이. 보이는 대문자 높이는 CAP_RATIO 배
  const WORD_GAP = 0.13; // 평면 높이 단위의 단어 간격
  // 앞쪽 단어는 원판 중심뿐 아니라 가장자리의 최대 깊이보다 앞에 둔다.
  // depthK로 크기를 보정하므로 앞쪽으로 옮겨도 화면상 크기는 유지된다.
  // 뒤쪽 단어는 원판의 가장 먼 끝(-4.06)보다 뒤에 배치한다.
  const BACK_Z = -4.6;
  const FRONT_Z = 4.6;

  // 글자의 배치는 월드 좌표가 아니라 화면 비율로 정의하고 카메라 거리에 맞춰 변환한다.
  // 카메라가 가까워져도 글자가 화면 밖으로 커지지 않게 한다.
  // x와 y는 화면 중심에서 각각 반너비와 반높이를 기준으로 한 비율이다.
  const SCATTER = [
    { leftF: -0.882, yF: 0.59 },
    { leftF: -0.493, yF: -0.423 },
  ];
  // 줄 너비 대신 대문자 높이를 기준으로 크기를 고정해 자간이나 단어 간격 변경의 영향을 줄인다.
  const SCATTER_CAP_F = 0.234;
  const GATHER_CAP_F = 0.234;
  // 줄 간격은 대문자 높이의 배수로 지정한다. 1이면 두 줄의 대문자가 맞닿는다.
  const GATHER_LEADING = 1.56;

  // 스크롤 끝에서는 모인 헤드라인 구도를 유지한다.

  function buildType() {
    const spec = [
      { text: 'SHOUT', line: 0, front: true },
      { text: 'OUR', line: 0, front: false },
      { text: 'PASSION', line: 1, front: false },
      { text: 'TOGETHER', line: 1, front: true },
    ];

    headlines = spec.map((w) => {
      const built = textPlane(w.text, TEXT_HEIGHT);
      if (w.front) {
        // 모든 원판보다 앞에 있으므로 가려질 일이 없다. 가려질 일이 없으면 깊이를
        // 쓸 이유도 없고, 깊이를 안 쓰면 알파 컷아웃을 쓸 이유가 없다 — 컷아웃이
        // 바로 가장자리를 울퉁불퉁하게 만들던 1비트 실루엣이었다. 평범한 블렌딩
        // 으로 바꾸면 알파가 256단계로 살아나고 글자 테두리가 매끄러워진다.
        const m = built.mesh.material;
        m.alphaTest = 0;
        m.alphaToCoverage = false;
        m.transparent = true;
        m.depthWrite = false;
        m.depthTest = false;
        built.mesh.renderOrder = 10; // 투과 패스 뒤에 그려 항상 맨 위에 얹는다
      }
      return {
        mesh: built.mesh,
        text: w.text,
        glyphX: built.glyphX,
        inkHalfW: built.inkHalfW,
        line: w.line,
        z: w.front ? FRONT_Z : BACK_Z,
        front: w.front,
      };
    });

    // 각 줄을 순회해 기본 배율에서 단어별 시작 위치를 계산한다.
    for (const li of [0, 1]) {
      const ws = headlines.filter((w) => w.line === li);
      const total =
        ws.reduce((a, w) => a + w.inkHalfW * 2, 0) + WORD_GAP * TEXT_HEIGHT * (ws.length - 1);
      ws.forEach((w, k) => {
        const before = ws
          .slice(0, k)
          .reduce((a, p) => a + p.inkHalfW * 2 + WORD_GAP * TEXT_HEIGHT, 0);
        w.offset = before + w.inkHalfW; // 줄의 왼쪽 글자 경계에서 측정한 중심
        w.lineWidth = total;
      });
    }
  }

  // 대체 글꼴로 텍스처가 만들어지지 않도록 Bebas 글꼴을 불러온 뒤 글자를 그린다.
  let isTypeReady = false;
  let hasAnnouncedReady = false;
  new FontFace('BebasNeue', 'url(/fonts/BebasNeue-Regular.ttf)')
    .load()
    .then((f) => {
      if (!disposed) {
        document.fonts.add(f);
        buildType();
        isTypeReady = true;
      }
    })
    .catch(() => {
      if (!disposed) onReady(false);
    });

  // 법선의 |n.z|로 평평한 면과 두께를 이루는 테두리를 구분한다.
  // 테두리는 밝게, 면은 어둡게 유지하되 중앙에 가까워지면 밝힌다.
  // 높이에 따라 색을 바꿔 단색으로 보이지 않게 한다.
  glass.onBeforeCompile = (shader) => {
    Object.assign(shader.uniforms, {
      uC0: { value: new Color(0x1b3fb8) }, // 짙은 파랑
      uC1: { value: new Color(0x3f8fff) }, // 파랑
      uC2: { value: new Color(0x9fefff) }, // 하늘색
      uEdge: { value: P.rim },
      uFaceDark: { value: P.faceDark },
      uFaceGlow: { value: P.faceGlow },
      uFalloff: { value: 5.2 },
      // 그라데이션 범위를 원판 지름에 맞춰 각 원판 내부에도 색 변화가 생기게 한다.
      uSpan: { value: 4.0 },
      uFaceFres: { value: 0.75 },
      uSat: { value: P.sat },
      uSatFall: { value: P.satFall },
      uAxis: { value: new Vector3(0.35, 1.0, 0.25).normalize() },
      uWarp: { value: P.warp },
      uWarpScale: { value: P.warpScale },
    });

    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        `#include <common>
      varying vec3 vObjN;
      varying vec3 vObjPos;
      varying vec3 vTanV;
      varying vec3 vBitV;
      varying vec3 vWN;
      varying vec3 vWPos;`,
      )
      .replace(
        '#include <begin_vertex>',
        `#include <begin_vertex>
      vObjN = normal;
      vObjPos = position;
      vTanV = normalize( normalMatrix * vec3( 1.0, 0.0, 0.0 ) );
      vBitV = normalize( normalMatrix * vec3( 0.0, 1.0, 0.0 ) );
      vWN = normalize( mat3( modelMatrix ) * normal );
      vWPos = ( modelMatrix * vec4( position, 1.0 ) ).xyz;`,
      );

    shader.fragmentShader = shader.fragmentShader
      // 굴절 광선이 변경된 법선을 사용하도록 transmission_fragment보다 먼저 법선을 보정한다.
      .replace(
        '#include <normal_fragment_maps>',
        `#include <normal_fragment_maps>
      {
        // 평평한 면에만 물결을 적용해 테두리의 선명한 경사면은 유지한다.
        float warpFace = abs( normalize( vObjN ).z );
        vec2 wp = vObjPos.xy * uWarpScale;
        // 서로 다른 각도의 두 파형을 섞어 줄무늬처럼 보이지 않게 한다.
        vec3 ripple = vec3(
          sin( wp.x * 1.7 + wp.y * 1.1 ) + 0.6 * sin( wp.y * 3.1 - wp.x * 0.7 ),
          sin( wp.y * 2.3 - wp.x * 1.3 ) + 0.6 * sin( wp.x * 2.9 + wp.y * 0.5 ),
          0.0
        );
        vec3 tilt = vTanV * ripple.x + vBitV * ripple.y;
        normal = normalize( normal + tilt * uWarp * warpFace * 0.12 );
      }`,
      )
      .replace(
        '#include <common>',
        `#include <common>
      varying vec3 vObjN;
      varying vec3 vObjPos;
      varying vec3 vTanV;
      varying vec3 vBitV;
      varying vec3 vWN;
      varying vec3 vWPos;
      uniform float uWarp;
      uniform float uWarpScale;
      uniform vec3 uC0;
      uniform vec3 uC1;
      uniform vec3 uC2;
      uniform float uEdge;
      uniform float uFaceDark;
      uniform float uFaceGlow;
      uniform float uFalloff;
      uniform float uSpan;
      uniform float uFaceFres;
      uniform float uSat;
      uniform float uSatFall;
      uniform vec3 uAxis;
      vec3 ramp3( float t ) {
        t = clamp( t, 0.0, 1.0 );
        return t < 0.5 ? mix( uC0, uC1, t * 2.0 ) : mix( uC1, uC2, ( t - 0.5 ) * 2.0 );
      }`,
      )
      .replace(
        '#include <dithering_fragment>',
        `{
        // 양면 렌더링에서 뒤쪽 평면이 작은 원판처럼 보이지 않도록 뒤쪽 테두리만 남긴다.
        float faceMask = abs( normalize( vObjN ).z ) * ( gl_FrontFacing ? 1.0 : 0.0 );
        float edgeMask = 1.0 - abs( normalize( vObjN ).z );

        // 원판 크기 범위에서 위치에 따라 색을 바꿔 면 전체에 색 변화가 흐르도록 한다.
        float g = clamp( dot( vWPos, uAxis ) / uSpan * 0.5 + 0.5, 0.0, 1.0 );

        vec3 wn = normalize( vWN );
        vec3 vdir = normalize( cameraPosition - vWPos );
        float ndv = abs( dot( wn, vdir ) );

        // 테두리는 색 변화가 아니라 시선과의 각도에 따라 밝힌다.
        // 정면은 어둡고 비스듬한 부분은 밝게 처리한다.
        float edgeLight = pow( 1.0 - ndv, 1.6 );

        gl_FragColor.rgb *= mix( 1.0, uFaceDark, abs( normalize( vObjN ).z ) );
        if ( !gl_FrontFacing ) gl_FragColor.rgb *= mix( 1.0, 0.0, abs( normalize( vObjN ).z ) );

        // 면에는 중앙까지의 거리와 시선 각도에 따른 밝기를 함께 적용한다.
        float prox = 1.0 - clamp( length( vWPos ) / uFalloff, 0.0, 1.0 );
        float faceFres = pow( 1.0 - ndv, 2.5 );
        gl_FragColor.rgb += ramp3( g ) * faceMask *
                            ( pow( prox, 2.2 ) * uFaceGlow + faceFres * uFaceFres );

        gl_FragColor.rgb += ramp3( 0.35 + 0.65 * edgeLight ) * edgeMask * uEdge * edgeLight;
        gl_FragColor.a = clamp( gl_FragColor.a + edgeMask * edgeLight * 0.45, 0.0, 1.0 );

        // 색 그라데이션을 따라 채도도 낮춘다. 화면 전체가 아니라 각 원판 내부에서 변하도록
        // 후처리 대신 프래그먼트 셰이더에서 계산한다.
        float satAmt = uSat * ( 1.0 - uSatFall * g );
        float lum = dot( gl_FragColor.rgb, vec3( 0.2126, 0.7152, 0.0722 ) );
        gl_FragColor.rgb = mix( vec3( lum ), gl_FragColor.rgb, satAmt );
      }
      #include <dithering_fragment>`,
      );
    glass.userData.shader = shader;
  };
  glass.customProgramCacheKey = () => 'edge-face';

  // React 컴포넌트에서 장면 상태를 제어하는 인터페이스다.
  const controller = {
    setScroll: (v) => {
      scrollTarget = Math.max(0, Math.min(1, v));
      lastScrollAt = performance.now();
    },
    setAmbient: (v) => {
      ambient = v;
    },
    setActive: (v) => {
      if (disposed || active === v) return;
      active = v;
      if (active) {
        clock.getDelta();
        frameId = requestAnimationFrame(tick);
      } else {
        cancelAnimationFrame(frameId);
        lastFrameAt = frameTime = frameCount = fastWindows = renderElapsed = 0;
      }
    },
    // 0이면 그대로, 1이면 헤드라인이 어두워져 사라진다. 호스트가 본문으로
    // 넘어갈 때 1을 던지면 된다.
    setTextFade: (v) => {
      textFadeTarget = Math.max(0, Math.min(1, v));
    },
    setQuality: (v) => {
      const nextQuality = Math.max(0.1, Math.min(1, v));
      if (qualityScale === nextQuality) return;
      qualityScale = nextQuality;
      // CSS 블러가 완성된 배경에는 가장자리 보정이 필요 없다.
      fxaa.enabled = qualityScale === 1;
      applySize();
    },
  };

  // 후처리
  // 레티나는 기기 해상도와 FXAA로 가장자리를 보정하고, DPR 1에서만 추가 샘플링한다.
  const ssScale = () => renderScale() * (devicePixelRatio > 1 ? 1 : 1.15);
  const ssW = () => Math.round(innerWidth * ssScale());
  const ssH = () => Math.round(innerHeight * ssScale());

  // 반정밀도 버퍼의 다중 샘플 해소 비용을 줄이기 위해 MSAA 대신 FXAA를 사용한다.
  // FXAA는 알파 잘라내기로 생기는 글자의 고대비 가장자리에도 적합하다.
  const msaa = new WebGLRenderTarget(ssW(), ssH(), {
    type: HalfFloatType,
    samples: 0,
  });
  const composer = new EffectComposer(renderer, msaa);
  composer.setPixelRatio(1);
  composer.setSize(ssW(), ssH());
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new Vector2(ssW() / 2, ssH() / 2), P.bloom, 0.85, 1.02);
  // 블룸은 부드러운 광원 효과이므로 절반 해상도로 처리한다.
  // 크기 변경 때도 같은 비율을 유지하도록 setSize를 보정한다.
  const bloomSetSize = bloom.setSize.bind(bloom);
  bloom.setSize = (w, h) => bloomSetSize(Math.round(w / 2), Math.round(h / 2));
  composer.addPass(bloom);
  composer.addPass(new OutputPass());
  // 톤 매핑 이후의 가장자리를 보정하도록 OutputPass 뒤에 배치한다.
  // resolution은 렌더 크기의 역수로 갱신한다.
  const fxaa = new ShaderPass(FXAAShader);
  composer.addPass(fxaa);
  const syncFxaa = () => fxaa.material.uniforms.resolution.value.set(1 / ssW(), 1 / ssH());
  syncFxaa();

  // 스크롤 상태
  let scrollTarget = 0;
  let scroll = 0;
  let lastScrollAt = 0;

  function applySize() {
    if (!innerWidth || !innerHeight) return;
    camera.aspect = innerWidth / innerHeight;
    camera.updateProjectionMatrix();
    if (renderer.getPixelRatio() !== renderScale()) renderer.setPixelRatio(renderScale());
    renderer.setSize(innerWidth, innerHeight);
    composer.setSize(ssW(), ssH());
    syncFxaa();
  }
  addEventListener('resize', applySize);

  // 프레임 저하가 지속될 때만 해상도를 낮추고, 여유가 오래 유지되면 천천히 복구한다.
  let lastFrameAt = 0,
    frameTime = 0,
    frameCount = 0,
    fastWindows = 0,
    averageFrameMs = 0;
  function adaptResolution(now) {
    const elapsed = now - lastFrameAt;
    lastFrameAt = now;
    if (ambient || elapsed > 250 || !elapsed) {
      frameTime = frameCount = fastWindows = 0;
      return;
    }
    frameTime += elapsed;
    frameCount++;
    if (frameTime < 1500) return;
    averageFrameMs = frameTime / frameCount;
    frameTime = frameCount = 0;

    // 스크롤 중 버퍼 재할당으로 끊기지 않도록 이동이 멈춘 뒤에만 조절한다.
    if (now - lastScrollAt < 250 || Math.abs(scrollTarget - scroll) > 0.001) return;
    const previousScale = renderScale();
    if (averageFrameMs > 30) {
      const minimumScale = Math.min(1, 1.5 / Math.min(devicePixelRatio, 2));
      adaptiveScale = Math.max(minimumScale, adaptiveScale * 0.9);
      fastWindows = 0;
    } else if (averageFrameMs < 20) {
      if (++fastWindows >= 3) {
        adaptiveScale = Math.min(1, adaptiveScale * 1.05);
        fastWindows = 0;
      }
    } else {
      fastWindows = 0;
    }
    if (Math.abs(renderScale() - previousScale) > 0.01) applySize();
  }

  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp01 = (x) => Math.min(1, Math.max(0, x));

  // 애니메이션 반복 처리
  const clock = new Clock();
  let time = 0;
  let ambient = false;
  let active = true;
  let lastRender = 0;
  let renderElapsed = 0;
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

  const DISC_N = new Vector3(0, 0, 1); // +Z로 회전한 원판 자체의 법선
  const normal = new Vector3();
  const quat = new Quaternion();
  const ringInv = new Quaternion();

  function tick(now = 0) {
    if (disposed || !active) return;
    frameId = requestAnimationFrame(tick);
    const dt = Math.min(clock.getDelta(), 0.05);
    if (document.hidden || !innerWidth || !innerHeight) {
      lastFrameAt = frameTime = frameCount = fastWindows = renderElapsed = 0;
      return;
    }
    if (!reducedMotion.matches) time += dt;
    scroll += (scrollTarget - scroll) * (reducedMotion.matches ? 1 : 1 - Math.exp(-12 * dt));
    adaptResolution(now);
    renderElapsed += dt;
    // 60/120Hz 화면에서 일정한 간격으로 갱신하고, 누적 오차는 다음 프레임에 넘긴다.
    const interval = 1000 / 30;
    if (ambient && now - lastRender < interval - 0.5) return;
    if (ambient) lastRender += Math.floor((now - lastRender + 0.5) / interval) * interval;
    else lastRender = now;
    const renderDt = renderElapsed;
    renderElapsed = 0;

    // 스크롤 확대는 반지름을 키우지 않고 카메라를 이동해 구현한다.
    // 시작은 멀리, 끝은 가까이 두되 최종 거리를 8.6으로 조정해 과도한 확대를 줄인다.
    camera.position.set(0, 0, lerp(29.0, 8.6, scroll));
    camera.lookAt(0, 0, 0);

    ring.rotation.x = -P.ringTilt; // 궤도 평면을 카메라 반대쪽으로 기울인다
    const mir = P.mirror ? -1 : 1;
    rollGroup.rotation.z = P.ringRoll * mir; // 기울인 타원을 화면 평면에서 회전한다
    // 스크롤이 진행되면 시작 위치 보정을 줄여 마지막에는 궤도와 헤드라인이 가운데 모이게 한다.
    const centring = 1 - scroll;
    // 끝에서 0이 아니라 살짝 위로 간다. 가운데에 정확히 두면 아래로 처져 보인다.
    rollGroup.position.set(
      (innerWidth < 768 ? 0 : RING_OFFSET.x) * centring,
      RING_OFFSET.y * centring + RING_END_Y * scroll,
      0,
    );
    rollGroup.updateWorldMatrix(true, true);
    ring.getWorldQuaternion(ringInv).invert();

    const r = P.radius;
    const TAU = Math.PI * 2;
    for (let i = 0; i < discs.length; i++) {
      const mesh = discs[i];
      const phase = (i / discs.length) * TAU;
      const a = phase + time * P.orbit;

      // 원판의 깊이는 이동 각도가 아닌 고정된 인덱스로 결정해 공전 궤도가 흔들리지 않게 한다.
      mesh.position.set(Math.cos(a) * r * mir, Math.sin(a) * r, Math.sin(phase * 2) * P.spread);

      // 시선과의 각도와 기울어지는 방향으로 월드 법선을 구한 뒤 궤도 회전을 역으로 보정한다.
      // 각도는 시간 대신 궤도 위치에 연결해 한 바퀴마다 같은 배치가 반복되게 한다.
      const T = P.tiltMid + P.tiltAmp * Math.sin(a * P.patternTurns);
      const phi = a * P.swirl + P.lean;
      normal.set(Math.sin(T) * Math.cos(phi) * mir, Math.sin(T) * Math.sin(phi), Math.cos(T));
      quat.setFromUnitVectors(DISC_N, normal);
      mesh.quaternion.copy(ringInv).multiply(quat);
    }

    // 카메라 이동과 궤도 정렬, 글자 모으기에 같은 0~1 진행도를 사용한다.
    // 요소마다 별도 구간을 두면 멈췄다 움직이는 것처럼 보여 하나의 연속 동작으로 맞춘다.
    const g = scroll;
    const camZ = camera.position.z;
    // 앞쪽 평면은 크게 보이므로 시야 절두체 비율로 크기와 위치를 보정한다.
    const depthK = (z) => (camZ - z) / camZ;

    // z=0 평면의 화면 범위를 계산한다. 카메라가 가까워질수록 범위가 줄어
    // 원판은 커져도 글자의 화면상 크기는 유지된다.
    const halfH = Math.tan((camera.fov * Math.PI) / 360) * camZ;
    const halfW = halfH * camera.aspect;

    const maxLine = Math.max(1, ...headlines.map((w) => w.lineWidth));
    const sc = Math.min(
      (lerp(SCATTER_CAP_F, GATHER_CAP_F, g) * halfH) / (TEXT_HEIGHT * CAP_RATIO),
      (halfW * (innerWidth < 700 ? 1.52 : 1.4)) / maxLine,
    );
    // 대문자 높이에 비례해 줄 간격을 계산한다.
    const gY = (TEXT_HEIGHT * CAP_RATIO * sc * GATHER_LEADING) / 2;

    // 어두워지는 쪽으로 천천히 따라간다. 호스트 페이지가 목표값만 던지면 된다.
    textFade += (textFadeTarget - textFade) * (1 - Math.exp(-4.35 * renderDt));
    const lit = 1 - clamp01(textFade * 1.15);

    for (const w of headlines) {
      const S = SCATTER[w.line];
      // 참조 여백: 위 줄 시작은 6%에서 11.5%로, 아래 줄 끝은 94%에서 88.5%로 이동한다.
      const edge = lerp(0.88, 0.77, g) * halfW;
      const left = w.line === 0 ? -edge : edge - w.lineWidth * sc;
      w.cx = left + w.offset * sc;
      // Bebas 대문자는 글꼴 상자에서 위쪽에 치우쳐 있어 시각적 중심을 조금 아래로 보정한다.
      const gCy = (w.line === 0 ? gY : -gY) - 0.025 * halfH;
      w.cy = lerp(S.yF * halfH, gCy, g);
      w.cs = sc;
      const k = depthK(w.z);
      w.mesh.position.set(w.cx * k, w.cy * k, w.z);
      w.mesh.scale.setScalar(sc * k);

      // 색을 검정 쪽으로 끌어내려 어두워지게 한다. 앞 단어는 블렌딩이라 투명도도
      // 같이 뺀다. 다 꺼지면 아예 숨긴다 — 뒤 단어는 깊이를 쓰므로 남겨 두면
      // 보이지 않는 채로 유리를 뚫는다.
      w.mesh.material.color.setScalar(lit);
      if (w.front) w.mesh.material.opacity = lit;
      w.mesh.visible = lit > 0.02;
    }

    composer.render();
    if (isTypeReady && !hasAnnouncedReady) {
      hasAnnouncedReady = true;
      onReady(true);
    }
  }
  tick();
  return {
    ...controller,
    dispose() {
      disposed = true;
      cancelAnimationFrame(frameId);
      removeEventListener('resize', applySize);
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);
      const resources = new Set();
      scene.traverse((object) => {
        if (object.geometry) resources.add(object.geometry);
        const materials = Array.isArray(object.material) ? object.material : [object.material];
        for (const material of materials) {
          if (!material) continue;
          resources.add(material);
          for (const value of Object.values(material)) if (value?.isTexture) resources.add(value);
        }
      });
      if (scene.environment) resources.add(scene.environment);
      for (const resource of resources) resource.dispose();
      for (const pass of composer.passes) pass.dispose?.();
      composer.dispose();
      renderer.dispose();
    },
  };
}
