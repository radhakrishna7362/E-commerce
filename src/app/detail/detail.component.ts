import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import { ProductsService } from '../services/products.service';
import { Product } from '../shared/product';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  selected="1";
  product:Product;
  constructor(private productsService:ProductsService,private route:ActivatedRoute,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    let id=this.route.snapshot.params['id'];
    this.product=this.productsService.getProduct(parseInt(id));
  }

  addToCart(id) {
    this.product.Quantity=parseInt(this.selected);
    if(Cart.length===0){
      Cart.push(this.product)
      this.snackBar.open(this.product.title + ' Added To Cart', 'OK', {
        duration: 3000,
      });
    }
    else{
      let f=0;
      for(let i=0;i<Cart.length;i++){
        if(Cart[i].id===id){
          f=1;
          this.snackBar.open('Already in the cart', 'OK', {
            duration: 3000,
          });
          break;
        }
      }
      if(f===0){
        Cart.push(this.product);
        this.snackBar.open(this.product.title + ' Added To Cart', 'OK', {
          duration: 3000,
        });
      }
    }
  }

}

export const Cart:Product[]=[];



