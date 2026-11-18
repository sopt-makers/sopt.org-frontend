import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

/**
 * 통합 백엔드(sopt-makers-backend)의 공통 응답 형식.
 * 레거시 서버는 이 형식으로 감싸지 않고 데이터를 그대로 응답한다.
 */
interface BaseResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

/**
 * 레거시 응답 DTO에도 `data`, `message` 필드가 있어서
 * `success`가 boolean이고 `message`가 문자열일 때만 공통 응답으로 판단한다.
 */
const isBaseResponse = (body: unknown): body is BaseResponse<unknown> => {
  if (typeof body !== 'object' || body === null) return false;
  const { success, message } = body as Partial<BaseResponse<unknown>>;
  return typeof success === 'boolean' && typeof message === 'string';
};

// TODO(#613): 통합 백엔드 전환이 끝나면 판별 없이 항상 data를 꺼내고, 감싸지 않은 응답은 에러로 처리
const unwrapBaseResponse = (response: AxiosResponse) => {
  if (!isBaseResponse(response.data)) return response;
  if (!response.data.success) {
    return Promise.reject(
      new AxiosError(
        response.data.message,
        AxiosError.ERR_BAD_RESPONSE,
        response.config,
        response.request,
        response,
      ),
    );
  }
  response.data = response.data.data;
  return response;
};

/**
 * 공통 응답 형식이면 `data`만 꺼내 주는 axios 인스턴스를 만든다.
 * 에러 응답(2xx 외)은 인터셉터를 거치지 않고 그대로 reject된다.
 */
export const createApiClient = (config?: AxiosRequestConfig) => {
  const client = axios.create(config);
  client.interceptors.response.use(unwrapBaseResponse);
  return client;
};
