import { Component } from '@angular/core';

//@Component decorator is used to mark this class as component
@Component({
  //properties

  //<app-root></app-root> is the tag name that can be used any other html file (like partial view)
  selector: 'app-root',
  //this AppComponent will return this view
  templateUrl: './app.component.html',
  //with this css style
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MovieStoreSPA';
}
