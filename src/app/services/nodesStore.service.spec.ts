import { ApiService } from './api.service';
import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { NodesStore } from './nodesStore.service';

describe('NodesStore', () => {
  let httpTestingController: HttpTestingController;
  let nodesStore: NodesStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [NodesStore, ApiService]
    });

    httpTestingController = TestBed.get(HttpTestingController);
    nodesStore = TestBed.get(NodesStore);
  });

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    const service: NodesStore = TestBed.get(NodesStore);
    expect(service).toBeTruthy();
  });

  it('should fetch the objects according each state', () => {

    nodesStore.getStatus();

    const req1 = httpTestingController.expectOne('https://thawing-springs-53971.herokuapp.com/api/v1/status');
    const req2 = httpTestingController.expectOne('https://secret-lowlands-62331.herokuapp.com/api/v1/status');
    const req3 = httpTestingController.expectOne('https://calm-anchorage-82141.herokuapp.com/api/v1/status');
    const req4 = httpTestingController.expectOne('http://localhost:3002/api/v1/status');

    req1.flush({node_name: 'The name 1'});
    req2.flush({node_name: 'The name 2'});
    req3.flush({node_name: 'The name 3'});
    req4.flush('Error', {status: 404, statusText: 'Not found'});

    expect(nodesStore.state[0].name).toEqual('The name 1');

    expect(nodesStore.state[1].name).toEqual('The name 2');
    expect(nodesStore.state[2].name).toEqual('The name 3');

    expect(nodesStore.state[3].online).toBeFalse();

  });
});
