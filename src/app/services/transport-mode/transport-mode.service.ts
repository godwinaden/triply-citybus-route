import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import * as Leaf from 'leaflet';
import * as geoJSon from 'geojson';
import {take} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TransportModeService {

  hauptplatz_walk!: Observable<any>;
  hauptplatz_bike!: Observable<any>;
  hatric_bike!: Observable<any>;
  hatric_walk!: Observable<geoJSon.GeoJSON>;
  angersiedlung_walk!: Observable<any>;
  angersiedlung_bike!: Observable<any>;
  public stops = {
    hatric_shopping_center: Leaf.latLng(47.2815118872144, 15.990487812776836),
    angersiedlung: Leaf.latLng(47.2874698130766, 15.979676523116735),
    hauptplatz: Leaf.latLng(47.28111248016136, 15.969186572879872),
  };

  constructor(private http: HttpClient){
    this.getAll();
  }

  public getGeoJSON(url: string): Observable<any> {
    return this.http.get(url);
  }

  public getGeoAsObservable(url: string): Observable<geoJSon.GeoJSON>{
    let subject = new Subject<geoJSon.GeoJSON>();
    this.getGeoJSON(url).pipe(take(1)).subscribe(data => {
      subject.next(data);
      subject.complete();
    });
    return subject.asObservable();
  }

  get_angersiedlung_bike() {
    this.angersiedlung_bike = this.getGeoAsObservable('assets/geojsons/angersiedlung_bike.geojson');
  }

  get_angersiedlung_walk() {
    this.angersiedlung_walk = this.getGeoAsObservable('assets/geojsons/angersiedlung_walk.geojson');
  }

  get_hatric_walk() {
    this.hatric_walk = this.getGeoAsObservable('assets/geojsons/hatric_walk.geojson');
  }

  get_hatric_bike() {
    this.hatric_bike = this.getGeoAsObservable('assets/geojsons/hatric_bike.geojson');
  }

  get_hauptplatz_bike() {
    this.hauptplatz_bike = this.getGeoAsObservable('assets/geojsons/hauptplatz_bike.geojson');
  }

  get_hauptplatz_walk() {
    this.hauptplatz_walk = this.getGeoAsObservable('assets/geojsons/hauptplatz_walk.geojson');
  }

  getAll(){
    this.get_angersiedlung_bike();
    this.get_angersiedlung_walk();
    this.get_hatric_bike();
    this.get_hatric_walk();
    this.get_hauptplatz_bike();
    this.get_hauptplatz_walk();
  }
}
