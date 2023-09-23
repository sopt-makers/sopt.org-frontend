import { St } from './style';

interface JobPostingCardProps {
  imgSrc: string;
  type: string;
  title: string;
  corporation: string;
  career: string;
  location: string;
}

const JobPostingCard = ({
  imgSrc,
  type,
  title,
  corporation,
  career,
  location,
}: JobPostingCardProps) => {
  return (
    <St.Card>
      <St.Logo src={imgSrc} alt={`${corporation} 로고`} width={80} height={80} />
      <St.Contents>
        <St.Chip>{type}</St.Chip>
        <St.Title>{title}</St.Title>
        <St.Corporation>{corporation}</St.Corporation>
        <St.RestInfo>
          {career} | {location}
        </St.RestInfo>
      </St.Contents>
    </St.Card>
  );
};

export default JobPostingCard;
