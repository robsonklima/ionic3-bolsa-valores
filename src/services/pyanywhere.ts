import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Config } from '../models/config';
import { Observable } from "rxjs/Observable";
import { Stock } from '../models/stock';

@Injectable()
export class PyAnywhere {
  constructor(
    private http: Http
  ) { }

  getStocks(): Observable<Stock[]> {
    return this.http.get(Config.API_URL + 'acoes')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json())
    );
  }
}