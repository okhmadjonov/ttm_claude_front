export interface IApiError {
  detail: string | { loc: (string | number)[]; msg: string; type: string }[];
}

export interface IPaginated<T> {
  items: T[];
  total: number;
  page: number;
  size: number;
}
