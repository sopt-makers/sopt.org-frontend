import { MotionValue, useMotionValueEvent } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { HERO_TIMELINE_PERCENT, percentToProgress } from './scrollTimeline';

// 페이지 데이터와 병렬로 오르빗 코드를 불러오도록 브라우저에서 미리 요청합니다.
const orbitScenePromise =
  typeof window === 'undefined' ? null : import('./orbit-scene').catch(() => null);

interface OrbitScene {
  setScroll: (progress: number) => void;
  setTextFade: (value: number) => void;
  setAmbient: (value: boolean) => void;
  setActive: (value: boolean) => void;
  setQuality: (value: number) => void;
}

export default function useOrbitScene(
  scrollYProgress: MotionValue<number>,
  sceneOpacity: MotionValue<number>,
) {
  const orbitRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<OrbitScene | null>(null);

  const [isOrbitReady, setIsOrbitReady] = useState(false);
  const [isSceneBlurred, setIsSceneBlurred] = useState(false);

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    const shouldBlurScene = progress >= percentToProgress(HERO_TIMELINE_PERCENT.orbit.blurStart);
    if (isSceneBlurred !== shouldBlurScene) setIsSceneBlurred(shouldBlurScene);

    const scene = sceneRef.current;
    scene?.setScroll(
      Math.min(1, progress / percentToProgress(HERO_TIMELINE_PERCENT.orbit.motionEnd)),
    );
  });

  useEffect(
    function synchronizeOrbitActivity() {
      if (!isOrbitReady) return;

      const scene = sceneRef.current;
      scene?.setActive(sceneOpacity.get() > 0);

      return sceneOpacity.on('change', (opacity) => scene?.setActive(opacity > 0));
    },
    [isOrbitReady, sceneOpacity],
  );

  useEffect(
    function synchronizeOrbitCanvas() {
      let cancelled = false;
      let dispose: (() => void) | undefined;

      orbitScenePromise
        ?.then((module) => {
          if (!module || cancelled || !orbitRef.current) return;

          const scene = module.createOrbitScene(orbitRef.current, (ready: boolean) => {
            if (cancelled) return;
            if (!ready) sceneRef.current?.setActive(false);
            setIsOrbitReady(ready);
          });

          sceneRef.current = scene;
          scene.setScroll(
            Math.min(
              1,
              scrollYProgress.get() / percentToProgress(HERO_TIMELINE_PERCENT.orbit.motionEnd),
            ),
          );
          dispose = () => scene.dispose();
        })
        .catch(() => {
          if (!cancelled) setIsOrbitReady(false);
        });

      return () => {
        cancelled = true;
        dispose?.();
        sceneRef.current = null;
      };
    },
    [scrollYProgress],
  );

  useEffect(
    function synchronizeOrbitAmbientMode() {
      if (!isOrbitReady) return;

      const scene = sceneRef.current;
      scene?.setTextFade(isSceneBlurred ? 1 : 0);
      scene?.setAmbient(isSceneBlurred);

      if (!isSceneBlurred) {
        scene?.setQuality(1);
        return;
      }

      const timer = window.setTimeout(() => scene?.setQuality(0.45), 1000);
      return () => window.clearTimeout(timer);
    },
    [isOrbitReady, isSceneBlurred],
  );

  return { orbitRef, isOrbitReady, isSceneBlurred };
}
