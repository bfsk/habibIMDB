import { Component } from '@angular/core';
import { SearchHabibIMDBService } from './search-habib-imdb.service';
import { TopContent } from './Models/TopContent';
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
  constructor(private SearchHabibService: SearchHabibIMDBService) {

   }
   ngOnInit() {
    this.loadData("",this.type, 0);
  }
   loadData(query, type, page){
    this.SearchHabibService.searchContent(query,type,page).subscribe(data => {
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
