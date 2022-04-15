import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  pins: Array<any> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '#', '$', '%','*', '&', "@"];
  myPin: String = '';
  pinCount: number = 0;
  errorMsg: string = "";

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.pins = this.shuffle(this.pins);
  }

  clear(): void{
    this.myPin = "";
    this.pinCount = 0;
  }

  trackByPins(index: number, pin: any): number { return pin; }

  shuffle(anyArray: Array<any>): Array<any>{
    if (anyArray.length === 1) {return anyArray}
    const rand = Math.floor(Math.random() * anyArray.length);
    return [anyArray[rand], ...this.shuffle(anyArray.filter((_, i) => i != rand))];
  }

  onPinEntered(pin: any){
    this.pinCount++;
    this.myPin = this.myPin + pin;
    if(this.pinCount == 6) this.authenticate();
  }

  authenticate(): void{
    if(this.myPin == '#8584#'){
      localStorage.setItem("hasPermissions", JSON.stringify(true));
      this.router.navigateByUrl("/dashboard/catchment-area").then(() => {});
    }else{
      this.errorMsg = "Invalid Pin. Try Again Later!";
    }
  }

}
