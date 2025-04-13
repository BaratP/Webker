import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-menu',
  imports: 
  [
    RouterLink,
    MatToolbarModule,
    MatButtonModule,
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

  @Output() selectedPage: EventEmitter<string> = new EventEmitter();

  menuSwitch(pageValue: string) {
    this.selectedPage.emit(pageValue);
  }

}
