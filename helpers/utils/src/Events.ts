
type TCallback = (data: any) => void;

interface IEventObject {
  [eventName: string]: Array<TCallback>;
}

interface IEventsClass {
  events: IEventObject;
  on(eventName: string, cb: TCallback): void;
  off(eventName: string, cb: TCallback): void;
  emit(eventName: string, data: any): void;
}


class Events implements IEventsClass {
  events: IEventObject = {};

  emit(eventName: string, data: any) {
    if ( ! eventName) {
      throw new Error('EventName is not set');
    }
    if ( ! (eventName in this.events)) {
      return void 0;
    }
    const handlers = this.events[eventName];
    for (let index in handlers) {
      handlers[index].call(null, data);
    }
  }

  on(eventName: string, callback: TCallback) {
    if ( ! eventName) {
      throw new Error('EventName is not set');
    }
    if ( ! this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  off(eventName: string, callback: TCallback) {
    if ( ! eventName) {
      throw new Error('EventName is not set');
    }
    if ( ! (eventName in this.events)) {
      return void 0;
    }
    this.events[eventName]  = this.events[eventName].filter((handler: TCallback) => handler !== callback);
  }
}

export default Events;
