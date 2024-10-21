export interface IResponse<T> {
  data: T;
  totalPages?: number;
  currentPage?: number;
}

export interface IGeneralFilter {
  search?: string;
  page?: number;
}
