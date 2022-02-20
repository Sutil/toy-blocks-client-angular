import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { BlocksStoreService } from './blocks-store.service';

describe('BlocksStoreService', () => {
  let httpTestingController: HttpTestingController;
  let blocksStore: BlocksStoreService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    })

    httpTestingController = TestBed.get(HttpTestingController);
    blocksStore = TestBed.get(BlocksStoreService);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    const service: BlocksStoreService = TestBed.get(BlocksStoreService);
    expect(service).toBeTruthy();
  });

  it('should fetch blocs', () => {

    blocksStore.getBlocks('http://fakeUrl');

    const req = httpTestingController.expectOne('http://fakeUrl/api/v1/blocks');

    req.flush({
      data: [{index: 1, data: 'This is an block'}]
    });

    expect(blocksStore.state.error).toBeFalse();
    expect(blocksStore.state.loading).toBeFalse();
    expect(blocksStore.state.data.length).toBe(1);
    expect(blocksStore.state.data[0]['index']).toBe(1);
    expect(blocksStore.state.data[0]['data']).toBe('This is an block');

  })

});
