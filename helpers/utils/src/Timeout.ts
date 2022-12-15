
interface ITimeout {
  start(fn: Function, delay: number): void;
  cancel(): void;
}


class Timeout implements ITimeout {
  private instance: number = 0;

  start(fn: Function, delay: number) {
    const start = new Date().getTime();

    const loop = () => {
      const delta = new Date().getTime() - start;

      if (delta >= delay) {
        return fn();
      }

      this.instance = requestAnimationFrame(loop);
    };

    this.instance = requestAnimationFrame(loop);
  }

  cancel() {
    cancelAnimationFrame(this.instance);
  }
}

export default Timeout;