
interface IRoute {
  path: string;
  wrapper?: 'default' | 'composite';
  module: React.LazyExoticComponent<React.ComponentType<any>>;
}

interface INavigate {
  title: string;
  path: string;
  icon?: string;
  navigate?: INavigate[];
}

interface IProfile {
  role: string;
  permissions: any[];
}
