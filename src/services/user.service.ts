import { api } from '@/api/axios';
import { ENDPOINTS } from '@/api/endpoints';
import type { IPaginated, IUser } from '@/interfaces';

export const userService = {
  getAll: async (params?: { page?: number; size?: number }) => {
    const { data } = await api.get<IPaginated<IUser>>(ENDPOINTS.USERS.LIST, { params });
    return data;
  },
  getById: async (id: number) => {
    const { data } = await api.get<IUser>(ENDPOINTS.USERS.DETAIL(id));
    return data;
  },
};
