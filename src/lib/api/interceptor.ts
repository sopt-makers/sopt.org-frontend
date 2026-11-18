import { AxiosError, AxiosResponse } from 'axios';

type ApiResponse = { success: boolean; message: string; data: unknown };

export const handleApiResponse = (response: AxiosResponse) => {
  const body = response.data as ApiResponse | null;
  const isApiResponseShape =
    body !== null &&
    typeof body === 'object' &&
    typeof body.success === 'boolean' &&
    typeof body.message === 'string' &&
    'data' in body;

  if (!isApiResponseShape) {
    return response;
  }

  if (!body.success) {
    // TODO: 서버 통합 후 레거시 응답을 통과시키는 위 분기를 제거합니다.
    // `if (!isApiResponseShape || !body.success)`로 통합하고, 형식 오류에는 고정 문구를 사용합니다.
    throw new AxiosError(
      body.message,
      AxiosError.ERR_BAD_RESPONSE,
      response.config,
      response.request,
      response,
    );
  }

  response.data = body.data;
  return response;
};
