import { Injectable } from '@angular/core';
import {Located} from "../../models/located/located";
import {Papa, ParseError} from "ngx-papaparse";

@Injectable({
  providedIn: 'root'
})
export class PopulationService {

  elderly_60_above: Located[] = [];
  women_15_to_49: Located[] = [];
  youths_15_to_24: Located[] = [];
  children_0_to_5: Located[] = [];

  constructor(private papaParse: Papa){
  }

  protected async parse(url: string, saveField: number): Promise<any> {
    return new Promise((resolve, reject) => {
      this.papaParse.parse(url, {
        complete: (results, file) =>  {
          if(results && results.data){
            let locatedAts: Located[] = [];
            for(let child of results.data){
              if(child && child.longitude && child.latitude){
                let locatedAt = new Located();
                locatedAt.latitude = child.latitude;
                locatedAt.longitude = child.longitude;
                locatedAt.id = child.aut;
                // console.log("Child: ", locatedAt, locatedAt.latitude, locatedAt.longitude);
                locatedAts.push(locatedAt);
              }
            }
            resolve(locatedAts);
          }
          resolve(results);
        },
        error: (error: ParseError) => {
          console.log('Error: ', error);
          return reject([]);
        },
        header: true,
        download: true,
      });
    });
  }

  protected async get_children(){
    this.children_0_to_5 = await this.parse("assets/dataset/children.csv", 3);
  }

  protected async get_women(){
    this.women_15_to_49 = await this.parse("assets/dataset/women.csv", 1);
  }

  protected async get_youth(){
    this.youths_15_to_24 = await this.parse("assets/dataset/youth.csv", 2);
  }

  protected async get_elderly(){
    this.elderly_60_above = await this.parse("assets/dataset/elderly.csv", 0);
  }

  async get_all(){
    await this.get_elderly();
    await this.get_youth();
    await this.get_women();
    await this.get_children();
    return {
      children: this.children_0_to_5,
      women: this.women_15_to_49,
      elderly: this.elderly_60_above,
      youths: this.youths_15_to_24
    }
  }
}
