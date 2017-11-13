import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, transition, animate, group } from '@angular/animations';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],

  animations: [
    trigger('itemAnim', [
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class ResultsComponent implements OnInit {
  _data: any[] = [];
  @Input() set data(v: any[]) {
    if (v) {
      this._data = v;
      window.scrollTo(0, 0);
    }
  }
  get data(): any[] {
    return this._data;
  }
  constructor() { }

  ngOnInit() {
  }
  onSort(value) {
    if (value === 'date') {
      this.data.sort(function (a, b) { return a.year - b.year; });
    } else {
      this.data.sort(function (a, b) { return a.title - b.title; });
    }
  }
}
