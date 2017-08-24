import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Product, Comment, ProductService} from "../shared/product.service";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  public product: Product;
  public comments: Comment[];
  public newComment: string;
  public newRating = 5;
  constructor(private routerInfo: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.routerInfo.params.subscribe((params: Params) => {
      // 从路由中获取的参数都是字符串，需要转为数字类型的id
      const productId: number = Number.parseInt(params['id']);
      this.product = this.productService.getProduct(productId);
      this.comments = this.productService.getCommentsForProductId(productId);
    });
  }
  addComment() {
    this.comments.unshift(new Comment(0, this.product.id, '2017-08-24', 'zhangsan', this.newRating, this.newComment));
  }

}
