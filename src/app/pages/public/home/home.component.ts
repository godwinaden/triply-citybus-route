import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DialogData} from "../../../globals";
import {MatDialog} from "@angular/material/dialog";
import {CookiesComponent} from "../../../components/cookies/cookies.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  cookiesDialogData: DialogData = {
    title: "We value your privacy",
    paragraph_1: "We and our partners store and/or access information on a device, such as cookies and process personal data, such as unique identifiers and standard information sent by a device for personalised ads and content, ad and content measurement, and audience insights, as well as to develop and improve products.",
    paragraph_2: "With your permission we and our partners may use precise geolocation data and identification through device scanning. You may click to consent to our and our partners’ processing as described above. Alternatively you may click to refuse to consent or access more detailed information and change your preferences before consenting.",
    paragraph_3: "Please note that some processing of your personal data may not require your consent, but you have a right to object to such processing. Your preferences will apply to this website only. You can change your preferences at any time by returning to this site or visit our privacy policy."
  };

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let hasAgreed = localStorage.getItem('agreedToCookies');
    if(!!hasAgreed) hasAgreed = JSON.parse(hasAgreed);
    if(!hasAgreed) this.openDialog();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CookiesComponent, {
      width: '80%',
      data: this.cookiesDialogData,
      ariaLabelledBy: "label",
      ariaDescribedBy: "label"
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.cookiesDialogData = result;
    });
  }

}
