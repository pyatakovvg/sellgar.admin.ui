
interface IImage {
  uuid: string;
}

interface IBrand {
  uuid: string;
  image?: IImage,
  code: string;
  name: string;
  description: string;
}

interface IMeta {
  totalRows: number;
}

interface IFilter {
  search?: string;
  page?: number;
}

interface IResult<T> {
  data: T[],
  meta: IMeta,
}
