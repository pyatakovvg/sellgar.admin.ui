
interface IBrand {
  uuid: string;
  code: string;
  name: string;
  description: string;
}

interface ICurrency {
  code: string;
  displayName: string;
}

interface IMeta {
  totalRows: number;
}

interface IProduct {
  uuid: string;
  name: string;
  description: string;
  vendor: string;
  barcode: string;
  brand: IBrand;
  price: number;
  purchasePrice: number;
  currency: ICurrency;
  count: number;
  reserve: number;
  createdAt: string;
  updatedAt: string;
}

interface IFilter {
  groupUuid?: string;
  categoryUuid?: string;
  brandUuid?: string;
  search?: string;
  page?: number;
}

interface IResult<T> {
  data: T[],
  meta: IMeta,
}
