export interface LeaderType {
  id: number;
  part?: string;
  name?: string;
  content?: string;
  image?: string;
}

export const seperateLeaderType = (leaders: Array<LeaderType>) => {
  const secondSection: Array<LeaderType> = [];
  const thirdSection: Array<LeaderType> = [];

  leaders?.map((item) => {
    if (item?.part?.includes('파트장')) {
      thirdSection.push(item);
    } else {
      secondSection.push(item);
    }
  });

  return { secondSection, thirdSection };
};
