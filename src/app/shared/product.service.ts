import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, '第1个商品', 1.99, 3.5, '这是第一个商品,是我在学习angular时创建的.', ['电子产品', '硬件设备']),
    new Product(2, '第2个商品', 12.99, 4.5, '这是第2个商品,是我在学习angular时创建的.', ['电子产品']),
    new Product(3, '第3个商品', 13.99, 2.5, '这是第3个商品,是我在学习angular时创建的.', ['电子产品', '硬件设备']),
    new Product(4, '第4个商品', 14.99, 4.5, '这是第4个商品,是我在学习angular时创建的.', ['硬件设备']),
    new Product(5, '第5个商品', 15.99, 3.5, '这是第5个商品,是我在学习angular时创建的.', ['电子产品', '硬件设备'])
  ];
  private comments: Comment[] = [
    new Comment(1, 1, '2017-08-24', '张三', 4, '东西不错'),
    new Comment(2, 1, '2017-08-24', '张三', 4, '东西不错'),
    new Comment(3, 1, '2017-08-24', '张三', 4, '东西不错'),
    new Comment(4, 1, '2017-08-24', '张三', 4, '东西不错'),
    new Comment(5, 2, '2017-08-24', '张三', 4, '东西不错')
  ];
  constructor() { }
  getProducts(): Product[] {
    return this.products;
  }
  getProduct(id: number): Product {
    return this.products.find(product => product.id === id);
  }
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter(comment => comment.productId === id);
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
export class Comment {
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}
