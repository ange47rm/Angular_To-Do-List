import { Component } from '@angular/core';

@Component({              // DECORATOR (metadata for the component)
  selector: 'app-root',   // Included in index.html
  templateUrl: './app.component.html',  // Points to HTML template
  styleUrls: ['./app.component.css']    // Points to CSS file
})
export class AppComponent {
  name:string = 'Angelo';
}
