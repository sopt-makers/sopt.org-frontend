import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';
import { ActivitySelectType } from '@src/lib/types/main';
import type { ParsedUrlQuery } from 'querystring';
import { BlogTabType, SelectedType } from '../components/BlogTab/types';

const REVIEW_TAGS = ['recruit', 'activity'] as const;

type QueryParamValue = string | string[] | undefined;
type ReviewTag = (typeof REVIEW_TAGS)[number];

const toBlogTab = (raw: QueryParamValue) => Object.values(BlogTabType).find((tab) => tab === raw);

const toReviewTag = (raw: QueryParamValue) => REVIEW_TAGS.find((tag) => tag === raw);

const toActivity = (raw: QueryParamValue) => {
  if (typeof raw !== 'string' || !(raw in ActivitySelectType)) return undefined;

  return ActivitySelectType[raw as keyof typeof ActivitySelectType];
};

const readSelectedFromQuery = (query: ParsedUrlQuery) => {
  const selectedTab = toBlogTab(query.tab);
  const tag = toReviewTag(query.tag);
  const selectedActivity = toActivity(query.activity);

  return {
    ...(selectedTab && { selectedTab }),
    ...(tag && { tag }),
    ...(selectedActivity && { selectedActivity }),
  };
};

/** Activity Carousel에서 특정 활동 후기로 진입할 때 사용 */
const useApplyBlogQueryParams = (
  selected: SelectedType,
  setSelected: (value: SelectedType) => void,
) => {
  const router = useRouter();
  const didApplyQuery = useRef(false);

  useEffect(() => {
    if (!router.isReady || didApplyQuery.current) return;
    didApplyQuery.current = true;

    const selectedFromQuery = readSelectedFromQuery(router.query);
    if (Object.keys(selectedFromQuery).length === 0) return;

    setSelected({ ...selected, ...selectedFromQuery });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady]);
};

export default useApplyBlogQueryParams;
