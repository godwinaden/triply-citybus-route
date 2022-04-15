import {Component, Inject, OnInit} from '@angular/core';
import {DialogData} from "../../globals";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-cookies',
  templateUrl: './cookies.component.html',
  styleUrls: ['./cookies.component.scss']
})
export class CookiesComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CookiesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) { }

  ngOnInit(): void {
  }

  onAgreedClicked(): void{
    localStorage.setItem("agreedToCookies", JSON.stringify(true));
  }

  onDisagreedClicked(): void{
    localStorage.setItem("agreedToCookies", JSON.stringify(false));
  }

  onMoreOptionsClicked(): void {
    this.dialogRef.close();
  }
}
