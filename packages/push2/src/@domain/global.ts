
export interface IPush {
  uuid: string;
  mode?: 'danger' | 'success' | undefined;
  title: string;
  content?: string;
  autoClose?: boolean;
}
