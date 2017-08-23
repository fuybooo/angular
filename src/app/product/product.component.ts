import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import 'rxjs/Rx'; // 让debounceTime起作用

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

  constructor() {
    // 订阅filterField字段的valueChange事件
    this.filterField.valueChanges.debounceTime(500).subscribe(value => this.keywords = value);
  }

  ngOnInit() {

    this.products = [
      new Product(1, '第1个商品', 1.99, 3.5, '这是第一个商品,是我在学习angular时创建的.', ['电子产品', '硬件设备']),
      new Product(2, '第2个商品', 12.99, 4.5, '这是第2个商品,是我在学习angular时创建的.', ['电子产品']),
      new Product(3, '第3个商品', 13.99, 2.5, '这是第3个商品,是我在学习angular时创建的.', ['电子产品', '硬件设备']),
      new Product(4, '第4个商品', 14.99, 4.5, '这是第4个商品,是我在学习angular时创建的.', ['硬件设备']),
      new Product(5, '第5个商品', 15.99, 3.5, '这是第5个商品,是我在学习angular时创建的.', ['电子产品', '硬件设备'])
    ];
  }

}

export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {

  }
}
