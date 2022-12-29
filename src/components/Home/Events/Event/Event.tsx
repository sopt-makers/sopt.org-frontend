import { EventDetailNumbers } from '@src/types/EventDetailNumbers';
import Image from 'next/image';

import DetailInfo from '../DetailInfo';

import * as S from './Event.style';

interface EventProps {
  titleKorean: string;
  titleEnglish: string;
  imageSrc: string;
  eventDetails: EventDetailNumbers[];
}

function Event({ titleKorean, titleEnglish, imageSrc, eventDetails }: EventProps) {
  return (
    <S.Wrap>
      <S.TitleWrap>
        <S.TitleKorean>{titleKorean}</S.TitleKorean>
        <S.TitleEnglish>{titleEnglish}</S.TitleEnglish>
      </S.TitleWrap>
      <Image
        src={imageSrc}
        width={260}
        height={195}
        alt="행사 이미지"
        blurDataURL={imageSrc}
        placeholder="blur"
      />
      <S.TextWrap>
        {eventDetails.map((event: EventDetailNumbers) => (
          <DetailInfo key={event.order} eventInfo={event} />
        ))}
      </S.TextWrap>
    </S.Wrap>
  );
}

export default Event;
