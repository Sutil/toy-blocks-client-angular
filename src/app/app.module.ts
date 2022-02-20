import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NodeComponent } from './node/node.component';
import { NodesComponent } from './nodes/nodes.component';
import { StatusComponent } from './status/status.component';
import { BlocksComponent } from './blocks/blocks.component';
import { IndexFormatterPipe } from './pipes/index-formatter.pipe';

@NgModule({
  declarations: [AppComponent, NodeComponent, NodesComponent, StatusComponent, BlocksComponent, IndexFormatterPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
