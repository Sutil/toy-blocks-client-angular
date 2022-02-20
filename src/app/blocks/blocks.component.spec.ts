import { BlocksStoreService } from './../services/blocks-store.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksComponent } from './blocks.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BlocksComponent', () => {
  let component: BlocksComponent;
  let fixture: ComponentFixture<BlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ BlocksComponent ],
      providers: [BlocksStoreService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
