import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gifApp';
  gifs : any[] = [];

  constructor(private dataservice : DataService){ }


  search(searchValue : string){
    if(searchValue != ''){
      this.dataservice.searchGif(searchValue)
      .subscribe((response:any) =>{
        console.log('Search Data', response);
        this.gifs = response.data;
      });
    }
    else { 
      this.dataservice.getGif()
      .subscribe((response : any) => {
      console.log(response);
      this.gifs = response.data;
      });
   }
  }
}
