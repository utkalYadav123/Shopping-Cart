import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './checkout.component.html',
    styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
    
    products =  []
    totalProducts: any;
    totalPrice= 0;
    productQuantity= 0;
    constructor (
        private router: Router
    ){}


    ngOnInit(){
        
        let data = this.router.getNavigatedData()
        if(data===undefined || data===null || data==='' ){
            this.router.navigateByData({
                url: ["/"],
                data: ""
            });
        }
        data.forEach(element => {
            this.products.push(element) 
        });
        this.products.map(single=>{
            this.totalPrice += single.price*single.quantity
            this.productQuantity ++;
        })
    }

    removeProduct(item){
        this.totalPrice = 0;
        this.productQuantity = 0;
        var index = this.products.indexOf(item);
      if (index > -1) {
        this.products.splice(index, 1);
      }
        this.products.map(single=>{
            this.totalPrice += single.price*single.quantity
            this.productQuantity ++;
        })
        if(this.products.length<1){
            this.router.navigateByData({
                url: ["/"],
                data: ""
            }); 
        }
    }

    quantityChange(value, i){
        this.products[i].quantity = value;
        this.totalPrice = 0;
        this.products.map(single=>{
            this.totalPrice += single.price*single.quantity
        })
    }
}
