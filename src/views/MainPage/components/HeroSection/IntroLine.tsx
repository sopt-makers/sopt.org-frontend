import { MotionValue } from 'framer-motion';
import IntroCharacter from './IntroCharacter';
import * as S from './style';

interface IntroLineProps {
  text: string;
  progress: MotionValue<number>;
  reduceMotion: boolean | null;
}

export default function IntroLine({ text, progress, reduceMotion }: IntroLineProps) {
  return (
    <S.IntroLine>
      {Array.from(text).map((character, index) => (
        <S.BaseCharacter key={index}>{character}</S.BaseCharacter>
      ))}
      <S.IntroFill aria-hidden="true">
        {Array.from(text).map((character, index) => (
          <IntroCharacter
            key={index}
            character={character}
            index={index}
            length={text.length}
            progress={progress}
            reduceMotion={reduceMotion}
          />
        ))}
      </S.IntroFill>
    </S.IntroLine>
  );
}
