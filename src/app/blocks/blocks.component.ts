import { Component, Input, OnInit } from '@angular/core';
import { Blocks } from './../../models/block.model';
import { BlocksStoreService } from './../services/blocks-store.service';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.scss']
})
export class BlocksComponent implements OnInit {

  @Input() nodeUrl: string;

  blocks: Blocks = {
    loading: true,
    error: false,
    data: [],
    empty: true
  };

  constructor(private store: BlocksStoreService) { }

  ngOnInit() {
    this.store.getBlocks(this.nodeUrl);
    this.subscribeToBlocksFetch();
  }

  private subscribeToBlocksFetch() {
    this.store.state$.subscribe( blocks =>
      this.blocks = blocks
    )
  }

}
