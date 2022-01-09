import { Component, OnInit } from '@angular/core';
import { SearchHabibIMDBService } from '../search-habib-imdb.service';
@Component({
  selector: 'app-all-movies',
  templateUrl: './all-movies.component.html',
  styleUrls: ['./all-movies.component.css']
})
export class AllMoviesComponent implements OnInit {

  constructor(private SearchHabibService: SearchHabibIMDBService) { }
  subscription;
  topContents=[];
  query = "";
  type=true;
  ngOnInit(): void {
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
   return true;
  }
}

vote(id){

 this.SearchHabibService.vote(id,5,true).subscribe(data => {
   console.log(data)
 });

}

}
