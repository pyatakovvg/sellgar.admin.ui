
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

interface IAttribute {
  uuid: string;
  name: string;
}

interface IAttributeGroup {
  uuid: string;
  name: string;
  values: IAttribute[];
}

interface IMeta {
  totalRows: number;
}

interface IProduct {
  uuid: string;
  externalId: string;
  name: string;
  description: string;
  groupUuid: string;
  categoryUuid: string;
  images: IImage[];
  productUuid: string;
  attributes: IAttributeGroup[];
  isUse: boolean;
  createdAt: string;
  updatedAt: string;
}

interface IResult<T> {
  data: T[],
  meta: IMeta,
}
