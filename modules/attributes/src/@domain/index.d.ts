
interface IUnit {
  uuid: string;
  name: string;
  description: string;
}

interface IAttribute {
  uuid: string;
  code: string;
  name: string;
  description: string;
  unit?: IUnit;
}

interface IMeta {
  totalRows: number;
}

interface IFilter {
  unitUuid?: string;
  search?: string;
  page?: number;
}

interface IResult<T> {
  data: T[],
  meta: IMeta,
}
