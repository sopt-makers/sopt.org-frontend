import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * 통합 백엔드(sopt-makers-backend)의 공통 응답 형식이에요.
 * 레거시 서버는 이 형식으로 감싸지 않고 데이터를 그대로 응답해요.
 */
interface BaseResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

/**
 * 레거시 응답 DTO에도 `data`, `message` 필드가 있어서
 * `success`가 boolean이고 `message`가 문자열일 때만 공통 응답으로 판단해요.
 */
const isBaseResponse = (body: unknown): body is BaseResponse<unknown> => {
  if (typeof body !== 'object' || body === null) return false;
  const { success, message } = body as Partial<BaseResponse<unknown>>;
  return typeof success === 'boolean' && typeof message === 'string';
};

const unwrapBaseResponse = (response: AxiosResponse) => {
  if (isBaseResponse(response.data)) {
    response.data = response.data.data;
  }
  return response;
};

/**
 * 공통 응답 형식이면 `data`만 꺼내 주는 axios 인스턴스를 만들어요.
 * 레거시 서버와 통합 백엔드 중 어디에 연결해도 호출부는 같은 값을 받아요.
 * 에러 응답(2xx 외)은 그대로 reject되므로 기존처럼 상태 코드로 처리하면 돼요.
 */
export const createApiClient = (config?: AxiosRequestConfig) => {
  const client = axios.create(config);
  client.interceptors.response.use(unwrapBaseResponse);
  return client;
};
