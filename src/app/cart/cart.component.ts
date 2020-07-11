import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Product } from '../shared/product';
import {Cart} from './../detail/detail.component';
import { createAttribute } from '@angular/compiler/src/core';
import { Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  displayedColumns=['title','quantity','price','actions'];
  cart:Product[] =Cart;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  getTotalCost() {
    let total:number=0;
    this.cart.forEach(x=>{
      total=total+(x.Quantity*x.price);
    })
    return total;
  }
  getQuantity(){
    let total:number=0;
    this.cart.forEach(x=>{
      total=total+x.Quantity*1;
    })
    return total;
  }

  delete(id:number){
    for(let i=0;i<this.cart.length;i++){
      if(this.cart[i].id===id){
        this.cart.splice(i,1);
      }
    }
    this.router.navigate(['view']);
  }
  deleteAll(){
    this.cart.splice(0,this.cart.length)
    this.router.navigate(['view']);
  }
}
