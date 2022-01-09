import { Component } from '@angular/core';
import { SearchHabibIMDBService } from './search-habib-imdb.service';
import { TopContent } from './Models/TopContent';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'habibIMDB';
  topContents : Array<TopContent> = [];
  query = "";
  type = true;
  searchControl: FormControl;
  private debounce: number = 400;
  subscription;

  constructor(private SearchHabibService: SearchHabibIMDBService) {

   }
   ngOnInit() {
    this.searchControl = new FormControl('');
    this.searchControl.valueChanges
      .pipe(debounceTime(this.debounce), distinctUntilChanged())
      .subscribe(query => {
        this.query = query;
        if(this.query.length <= 2){
          this.loadData("", this.type, 0);
        }else {
          this.loadData(query, this.type, 0);
        }
      });

    this.loadData("",this.type, 0);
  }
   loadData(query, type, page){
      if ( this.subscription ) {
        this.subscription.unsubscribe();
    }
    this.subscription = this.SearchHabibService.searchContent(query,type,page).subscribe(data => {
      if(page == 0)
        this.topContents = [];
      for(let i = 0; i < data.length; i++)
        this.topContents.push(data[i]);
    });
   }
   loadMoreData(){
     if(this.topContents.length % 10 == 0){
      this.loadData(this.query, this.type, this.topContents.length / 10);
     }
   }
}
