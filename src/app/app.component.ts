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
  constructor(private SearchHabibService: SearchHabibIMDBService) {

   }
   test(){
    this.SearchHabibService.searchContent("eff",true,0).subscribe(data => {
      for(let i = 0; i < data.length; i++)
        this.topContents.push(data[i]);
    });

   }
}
