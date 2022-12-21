
interface IImage {
  uuid: string;
  name: string;
}

interface IGroup {
  uuid: string;
  name: string;
}

interface ICategory {
  uuid: string;
  name: string;
}

interface IBrand {
  uuid: string;
  name: string;
}

interface ICurrency {
  code: string;
  displayName: string;
}

interface IMeta {
  totalRows: number;
}

interface IStoreProduct {
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

interface IProduct {
  uuid: string;
  externalId: string;
  name: string;
  description: string;
  group: IGroup;
  category: ICategory;
  images: IImage[];
  product: IStoreProduct;
  isUse: boolean;
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
