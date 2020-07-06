import { Injectable } from '@angular/core';
import {PRODUCTS} from '../shared/products';
import {Product} from '../shared/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { 
    
  }
  getProducts():Product[]{
    return PRODUCTS;
  }
  getProduct(id:number): Product {
    return PRODUCTS.filter((product)=> (product.id===id))[0];
  }
}
