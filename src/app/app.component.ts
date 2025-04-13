import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {


  title = 'lakasdekor';
  page = "main";

  constructor(private router: Router){}


  changePage(page: any) {
    console.log('Navigating to:', page);
    this.router.navigateByUrl(page);
  }

  


 
}
