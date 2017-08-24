import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-starts',
  templateUrl: './starts.component.html',
  styleUrls: ['./starts.component.css']
})
export class StartsComponent implements OnInit {
  // 组件的输入属性
  @Input()
  public rating = 0; // 赋值之后无需指定类型,程序会进行类型推断
  public stars: boolean[];
  @Input()
  public readonly = true;
  // ratingChange 这个名字很关键 rating + Change
  @Output()
  public ratingChange: EventEmitter<number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.stars = [];
    for ( let i = 1; i <= 5; i++) {
      this.stars.push( i > this.rating);
    }
  }
  clickStart(i: number) {
    if(!this.readonly){
      this.rating = i + 1;
      this.ngOnInit();
      this.ratingChange.emit(this.rating);
    }
  }

}
