import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { DateFormatPipe } from "../../shared/pipes/date-format.pipe";
import { Furniture } from '../../shared/interfaces/Furniture';
import { Cart } from '../../shared/interfaces/Cart';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { UsernameFormatPipe } from '../../shared/pipes/username-format.pipe';
import { Price } from '../../shared/interfaces/Price';



@Component({
  selector: 'app-gallery',
  imports: [MatCardModule,
    MatIconModule,
    DateFormatPipe,
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatLabel,
    DateFormatPipe,
    UsernameFormatPipe,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  cartContent: Furniture[] = [];
  unitPrice: Price = {
    amount: 50000,
    currency: 'HUF'
  };
  buyForm: FormGroup;
  selectedItem: Furniture | null = null;
  pictureBlock: string[] = [];
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

  constructor(private fb: FormBuilder){
    for (let i = 1; i <= this.pictureCount; i++) {
      this.pictureBlock.push(`/assets/pictures/${i}.jpg`);
    }
    this.buyForm = this.fb.group({
      quantity: [1, [Validators.required, Validators.min(1)]],
      price: [{ value: this.unitPrice.amount, disabled: true }]
    });
  this.buyForm.get('quantity')!.valueChanges.subscribe(qty => {
    const quantity = qty && qty > 0 ? qty : 1;
    this.buyForm.patchValue({
      price: quantity * this.unitPrice.amount
    }, { emitEvent: false });
  });
  }

  addToCart(item: Furniture) {
    this.selectedItem = item;
    this.cartContent.push(item);
    this.buyForm.reset({ quantity: 1, price: this.unitPrice });
        const cart: Cart={
          id: "",
          userid: "",
          items: this.cartContent ,
        }
        console.log(cart);
    }

    isNew(item: Furniture): boolean {
      const cutoff = new Date('2025-03-01');
      return item.date >= cutoff;
    }
  
    buy() {
    if (this.buyForm.valid) {
      console.log('Purchased:', {
        item: this.selectedItem,
        ...this.buyForm.value
      });
      this.selectedItem = null; // Close popup
      }
    }

    cancel() {
      this.selectedItem = null; // Close popup
    }

}
