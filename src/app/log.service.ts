import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}

  trace(...data: any[]): void {
    console.log(data);
  }
  log(...data: any[]): void {
    console.log(data);
  }
}
