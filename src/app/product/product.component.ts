import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import 'rxjs/Rx';
import {Product, ProductService} from "../shared/product.service"; // 让debounceTime起作用

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public products: Array<Product>;
  public keywords: string;
  // 响应式编程，input输入框的值改变的时候会发送valueChange事件
  public filterField: FormControl = new FormControl();

  constructor(private productService: ProductService) {
    // 订阅filterField字段的valueChange事件
    this.filterField.valueChanges.debounceTime(500).subscribe(value => this.keywords = value);
    this.products = productService.getProducts();
  }

  ngOnInit() {

  }

}

