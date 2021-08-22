import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

interface IConsole {
  log: any;
}
@Injectable({
  providedIn: 'root',
})
export class LogService {
  console: IConsole;
  constructor() {
    this.console = LogService.isActiveLogging()
      ? LogService.ActiveLogging()
      : LogService.NoLogging();
  }

  private static isActiveLogging(): boolean {
    return environment.ConsoleLogging ? true : false;
  }

  private static ActiveLogging(): IConsole {
    return {
      log: console.log,
    };
  }

  private static NoLogging(): IConsole {
    const NO_OPERATION = () => {};
    return {
      log: NO_OPERATION,
    };
  }
}
