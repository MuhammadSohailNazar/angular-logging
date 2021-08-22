import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  constructor() {}

  trace(source: string, ...data: any[]): void {
    console.log(source, data);
  }
  log(source: string, ...data: any[]): void {
    console.log(source,data);
  }
}
