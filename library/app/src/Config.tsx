
interface IConfig {
  navigate: Array<any>;
}


class Config {
  readonly config: IConfig;

  constructor(config: IConfig) {
    this.config = config;
  }
}

export default Config;
