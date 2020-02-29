import { Component } from '@angular/core';
import { FreeApiService } from './free-api.service';
import { ShowsData } from './show-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show-app-sample';
  
  constructor(private _freeApiService: FreeApiService){}

  showsData:ShowsData[]
  ngOnInit(){
    this._freeApiService.getTVShow("girls").subscribe(
      data => {
        console.log(data);
        this.showsData = data;}
    );
    
  }

}
