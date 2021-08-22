import { ContentChild, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable()
export class DataService {
  private content = new BehaviorSubject<string>('Default Data');
public share = this.content.asObservable();
  constructor() { }

}
