import { MotionValue, useTransform } from 'framer-motion';
import * as S from './style';

interface IntroCharacterProps {
  character: string;
  index: number;
  length: number;
  progress: MotionValue<number>;
  reduceMotion: boolean | null;
}

export default function IntroCharacter({ character, index, length, progress, reduceMotion }: IntroCharacterProps) {
  const opacity = useTransform(progress, [index / length, (index + 1) / length], [0, 1]);

  return (
    <S.IntroCharacter style={{ opacity: reduceMotion ? 1 : opacity }}>{character}</S.IntroCharacter>
  );
}
