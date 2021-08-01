import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { IconDefinition } from '@ant-design/icons-angular';
import { DeleteOutline } from '@ant-design/icons-angular/icons';
import { NzIconModule } from 'ng-zorro-antd/icon';
import AppComponent from './app.component';
import { AppStore } from './app.store';

const icons: IconDefinition[] = [DeleteOutline];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NzIconModule.forRoot(icons),
  ],
  providers: [AppStore],
  bootstrap: [AppComponent],
})
export class AppModule {}
