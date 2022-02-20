import { map, catchError } from 'rxjs/operators';
import { ApiService } from './api.service';
import { Blocks } from './../../models/block.model';
import { Store } from './store';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocksStoreService extends Store<Blocks> {

  constructor(private api: ApiService) {
    super({data: [], error: false, loading: false, empty: true})
  }

  public getBlocks(url) {
    this._getBlocks(url).subscribe(
        result => this.setState(result)
      )
  }

  _getBlocks(url) {
    return this.api.get(`${url}/api/v1/blocks`)
      .pipe(
        map(result => ({... result, loading: false, error: false, empty: result.data.length === 0})),
        catchError(error => of({loading: false, error: true, empty: true}))
      )
  }
}
