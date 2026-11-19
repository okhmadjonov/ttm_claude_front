import { api } from '@/api/axios';
import { ENDPOINTS } from '@/api/endpoints';
import type { ILoginRequest, ITokenResponse, IUser } from '@/interfaces';

export const authService = {
  login: async (payload: ILoginRequest) => {
    const { data } = await api.post<ITokenResponse>(ENDPOINTS.AUTH.LOGIN, payload);
    return data;
  },
  me: async () => {
    const { data } = await api.get<IUser>(ENDPOINTS.AUTH.ME);
    return data;
  },
};
