import { RouterModule, Routes } from '@angular/router';



import { AngularInventoryComponent } from './layout/angular-inventory/angular-inventory.component';
import { ProductsComponent } from './Products/index-products/index-products.component';
import { Component, NgModule } from '@angular/core';
import { CategoriesComponent } from './Categories/index-categories/index-categories.component';

export const routes : Routes = [
    {
         path: '',

        component: AngularInventoryComponent,
       children: [
      { path: 'products', component: ProductsComponent },
      { path: 'categories', component: CategoriesComponent},
      { path: '', redirectTo: 'products', pathMatch: 'full' }
    ]
  }
];

    
