import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Product, ProductsService } from '../../services/products.service';




@Component({
  selector: 'app-angular-inventory',
  imports: [RouterOutlet, RouterLink ],
  templateUrl: './angular-inventory.component.html',
  styleUrl: './angular-inventory.component.css'
})
export class AngularInventoryComponent {
 currentYear = new Date().getFullYear();

 
   products : Product[] = [];

 

 constructor(
    
    private productsService: ProductsService
  ) {}


   ngOnInit(): void {
    
    // Load products
    this.productsService.getProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Error fetching products:', err)
    });

 }
}




    
    
  


