import { Component } from '@angular/core';
import { Cart } from 'src/app/shared/interfaces/Cart';
import { Furniture } from 'src/app/shared/interfaces/Furniture';


@Component({
  standalone: false,
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

  pictures: string[] = [];
  pictureCount = 8;
  furnitureList: Furniture[] = [
    { id: '1', type: 'Chair', userid: 'user1', date: new Date('2024-10-01') },
    { id: '2', type: 'Double bed', userid: 'user2', date: new Date('2024-10-03') },
    { id: '3', type: 'Mirror', userid: 'user3', date: new Date('2024-11-15') },
    { id: '4', type: 'Mirror', userid: 'user1', date: new Date('2024-12-05') },
    { id: '5', type: 'Plant', userid: 'user2', date: new Date('2025-01-20') },
    { id: '6', type: 'Sofa', userid: 'user4', date: new Date('2025-02-11') },
    { id: '7', type: 'Sofa', userid: 'user3', date: new Date('2025-03-02') },
    { id: '8', type: 'Sofa', userid: 'user4', date: new Date('2025-04-10') },
  ];

  constructor(){
    for(let i = 1 ; i <= this.pictureCount; i++) {
      this.pictures.push(`assets/pictures/${i}.jpg`);
    }
  }

  addToCart(item: Furniture) {
        const cart: Cart={
          id: "",
          userid: "",
          items: this.furnitureList ,
        }
        console.log(cart);
    }
}
