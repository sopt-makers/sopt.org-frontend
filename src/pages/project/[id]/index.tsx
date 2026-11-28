import { NextPageContext } from 'next';
import { api } from '@src/lib/api';
import axios from 'axios';

export { default } from '@src/views/ProjectDetailPage';

export const getServerSideProps = async ({ query }: NextPageContext) => {
  const id = Number(query.id);
  if (!Number.isInteger(id)) return { notFound: true };

  try {
    const { project } = await api.projectAPI.getProjectDetail(id);
    return {
      props: { project },
    };
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 404) return { notFound: true };
    throw e;
  }
};
