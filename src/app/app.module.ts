import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeadingComponent } from './heading/heading.component';
import { ItemComponent } from './item/item.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { FormsModule} from '@angular/forms';

import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeadingComponent,
    ItemComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
