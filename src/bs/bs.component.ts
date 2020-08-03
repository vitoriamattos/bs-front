import { Component } from '@angular/core';
import { BsService } from './bs.service';

@Component({
  selector: 'app-root',
  templateUrl: './bs.component.html',
  providers: [ BsService ],
  styleUrls: ['./bs.component.css']
})
export class BsComponent {

  title = 'front';

  brawlers = undefined;
  error: any;

  constructor(private bsService: BsService) {
    
  }

  clear() {
    this.error = undefined;
  }

  showConfig() {
    this.bsService.getConfig()
      .subscribe((data) => {
        this.brawlers = data; 
        console.log(data);
      }); 
  }

}
