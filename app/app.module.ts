import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';


/*
> https://angular.io/docs/ts/latest/quickstart.html

The QuickStart application doesn't do anything else, so you don't need any other modules. 
In a real application, you'd likely import FormsModule as well as RouterModule and HttpModule. 
These are introduced in the Tour of Heroes Tutorial.
> https://angular.io/docs/ts/latest/tutorial/
*/

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
