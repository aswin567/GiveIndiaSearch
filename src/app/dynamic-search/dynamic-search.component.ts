import { Component, ViewChild, ViewEncapsulation, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/startWith';
import { DynamicSearchService } from './dynamic-search.service';
import { ResultsComponent } from '../results/results.component';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-dynamic-search',
  templateUrl: './dynamic-search.component.html',
  styleUrls: ['./dynamic-search.component.scss'],
  providers: [DynamicSearchService]
})
export class DynamicSearchComponent implements OnInit {
  @ViewChild(ResultsComponent) resultsComponent: ResultsComponent;
  searchKeyWord: string;
  index = 0;
  numberOfResults = 10;
  isLastPage: boolean;
  searchCtrl: FormControl;
  sortCtrl: FormControl;
  movies: any[] = [];

  constructor(private dynamicSearchService: DynamicSearchService, private matSNacksBar: MatSnackBar) {
    this.searchCtrl = new FormControl();
    this.sortCtrl = new FormControl();
  }
  ngOnInit() {
  }
  onSearch(value) {
    this.index = 0;
    this.sortCtrl.reset();
    this.getData(value, this.index);
  }
  getData(filter, index, sort?): void {
    const search = {
      keyWord: filter,
      lastindex: index,
      numbeOfResults: this.numberOfResults,
      sort: sort
    };
    this.dynamicSearchService.getSearchData(search).subscribe((outputData) => {
      this.movies = outputData.data;
      this.isLastPage = outputData.isLastPage;
    }, (error) => {
      this.matSNacksBar.open(error, 'Ok', {
        duration: 1005000
      });
    });
  }
  getSort(filter, sort): void {
    this.index = 0;
    this.getData(filter, this.index, sort);
  }
  getNextPage(filter, sort, index): void {
    const lastIndex = index;
    this.index = index;
    this.getData(filter, lastIndex, sort);
  }
  getSearchByPage(): void {
    const msg = 'Make search again to get more results in page';
    this.matSNacksBar.open(msg, 'Ok', {
      duration: 500
    });
  }
}

