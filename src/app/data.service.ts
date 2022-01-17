import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  apiKey = 'bQp9xnaxnGROBDJUX1JOFMoeHFvviDIk'
  apiUrl = 'https://api.openweathermap.org/data/2.5'

  constructor(private http:HttpClient) { }

  getGif(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${this.apiKey}&limit=48`);
  }

  searchGif(gifName : string){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${this.apiKey}&limit=48`);

  }
}
