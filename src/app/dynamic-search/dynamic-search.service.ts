import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { AppService } from '../app.service';
import { Movie } from './movie';

@Injectable()
export class DynamicSearchService {

  constructor(private baseService: AppService) { }

  // This service make the search happens refining the data.
  public getSearchData(search): any {
    const infomsg = '';
    return this.baseService.getData().map(outputData => {
      let controlInputData: Movie[] = outputData.movies;
      controlInputData = this.filterStates(search.keyWord, controlInputData);
      const firstIndex = search.lastindex * search.numbeOfResults;
      const pagedControlInputData = controlInputData.slice(firstIndex, firstIndex + search.numbeOfResults);
        if (search.sort) {
        if (search.sort === 'date') {
          pagedControlInputData.sort(function (a, b) { return a.year - b.year; });
        } else if (search.sort === 'name') {
          pagedControlInputData.sort(function (a, b) { return a.title - b.title; });
        } else if (search.sort === 'nameReverse') {
          pagedControlInputData.sort(function (a, b) { return a.title - b.title; });
          pagedControlInputData.reverse();
        } else if (search.sort === 'dateReverse') {
          pagedControlInputData.sort(function (a, b) { return a.year - b.year; });
          pagedControlInputData.reverse();
        }
      }
      const outputDataDetails = {
        data: pagedControlInputData,
        isLastPage: controlInputData.length < (firstIndex + search.numbeOfResults)
      };
      return outputDataDetails;
    });
  }

  // Function to filter the data
  filterStates(name: string, data: any[]): Movie[] {
    return data.filter(state =>
      state.title.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
}
