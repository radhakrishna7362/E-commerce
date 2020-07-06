import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Product} from '../shared/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:Product[];
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
    this.products=this.productsService.getProducts()
  }
}
