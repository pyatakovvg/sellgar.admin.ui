
interface IFolder {
  uuid: string;
  name: string;
  parentUuid?: string;
}

interface IImage {
  uuid: string;
  name: string;
  width: number;
  height: number;
  mime: string;
  size: number;
}

interface IParent {
  uuid: string;
  name: string;
}

interface IResult {
  folders: Array<IFolder>;
  images: Array<IImage>;
  parent: Array<IParent>;
  folder?: IFolder;
}