import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgxDocViewerModule} from "ngx-doc-viewer";
import { DocViewComponent } from './doc-view/doc-view.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { DetailsUploadComponent } from './upload/details-upload/details-upload.component';
import { FormUploadComponent } from './upload/form-upload/form-upload.component';
import { ListUploadComponent } from './upload/list-upload/list-upload.component';


@NgModule({
  declarations: [
    AppComponent,
    DocViewComponent,
    DetailsUploadComponent,
    FormUploadComponent,
    ListUploadComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDocViewerModule,
    AngularFileUploaderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
