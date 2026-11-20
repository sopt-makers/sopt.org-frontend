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
  rawScrollProgress: MotionValue<number>,
  scrollYProgress: MotionValue<number>,
  isSceneInView: boolean,
  reduceMotion: boolean | null,
) {
  const orbitRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<OrbitScene | null>(null);

  const [isOrbitReady, setIsOrbitReady] = useState(false);
  const [isSceneBlurred, setIsSceneBlurred] = useState(false);
  const shouldPauseAmbientOrbit = reduceMotion === true && isSceneBlurred;

  useMotionValueEvent(rawScrollProgress, 'change', (progress) => {
    const shouldBlurScene = progress >= percentToProgress(HERO_TIMELINE_PERCENT.orbit.blurStart);
    if (isSceneBlurred !== shouldBlurScene) setIsSceneBlurred(shouldBlurScene);
  });

  useMotionValueEvent(scrollYProgress, 'change', (progress) => {
    sceneRef.current?.setScroll(
      progress / percentToProgress(HERO_TIMELINE_PERCENT.orbit.motionEnd),
    );
  });

  useEffect(
    function synchronizeOrbitActivity() {
      if (!isOrbitReady) return;

      sceneRef.current?.setActive(isSceneInView && !shouldPauseAmbientOrbit);
    },
    [isOrbitReady, isSceneInView, shouldPauseAmbientOrbit],
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
            scrollYProgress.get() / percentToProgress(HERO_TIMELINE_PERCENT.orbit.motionEnd),
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

      if (shouldPauseAmbientOrbit) return;

      const timer = window.setTimeout(() => scene?.setQuality(0.45), 1000);
      return () => window.clearTimeout(timer);
    },
    [isOrbitReady, isSceneBlurred, shouldPauseAmbientOrbit],
  );

  return { orbitRef, isSceneBlurred, isOrbitVisible: isOrbitReady && !shouldPauseAmbientOrbit };
}
