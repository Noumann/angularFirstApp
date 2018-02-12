import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'they are Okay';

  i: number=0;
  t: string;
  hidden : boolean=true;
  count(){
    this.i++;
  }

  show(){
    if(this.hidden==true){
     this.t="Look at the star";
     this.hidden=false;
  }else if(this.hidden==false){
    this.hidden=true;
  }
}

}
