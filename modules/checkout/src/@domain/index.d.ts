
interface IImage {
  uuid: string;
}

interface ICheckout {

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
