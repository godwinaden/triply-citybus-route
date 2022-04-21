import {Component, Input, OnInit} from '@angular/core';
import {TransportModeService} from "../../services/transport-mode/transport-mode.service";
import * as Leaf from 'leaflet';
import {LeafletControlLayersConfig} from "@asymmetrik/ngx-leaflet";
import {tileLayer} from "leaflet";
import {PopulationService} from "../../services/population/population.service";
import {Located} from "../../models/located/located";

@Component({
  selector: 'app-leaflet-map',
  templateUrl: './leaflet-map.component.html',
  styleUrls: ['./leaflet-map.component.scss']
})
export class LeafletMapComponent implements OnInit {

  @Input("transportMode") transportMode!: string;
  selectedTransportMode: any;
  layersControl: LeafletControlLayersConfig = {baseLayers: {}, overlays: {}};
  options = {
    layers: [
      Leaf.tileLayer(
        'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
        maxZoom: 20,
        attribution: `<a href=”http://www.openstreetmap.org/copyright">OpenStreetMap</a> `
      })
    ],
    zoom: 17,
    // center: Leaf.latLng(47.2815118872144, 15.990487812776836)
  };

  constructor(private transportModeService: TransportModeService, private population: PopulationService ) {
    this.selectMode();
  }

  ngOnInit(): void {
    Leaf.Icon.Default.imagePath = "assets/leaflet/";
    let tMS = this.transportModeService, stops = tMS.stops;
    let citymarkers = Leaf.layerGroup([
      Leaf.marker(stops.hatric_shopping_center, {})
        .bindPopup( '<a href="' + "#" + '" target="_blank">' + "Hatric Shopping Center" + '</a>'),
      Leaf.marker(stops.hauptplatz, {})
        .bindPopup( '<a href="' + "#" + '" target="_blank">' + "Hauptplatz" + '</a>'),
      Leaf.marker(stops.angersiedlung, {})
        .bindPopup( '<a href="' + "#" + '" target="_blank">' + "Angersiedlung" + '</a>'),
    ]);

    this.layersControl = {
      baseLayers: {
        'Open Street Map': tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' }),
        'Open Cycle Map': tileLayer('http://{s}.tile.opencyclemap.org/cycle/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
      },
      overlays: {
        "Bus Stops": citymarkers,
      }
    };
    this.getMapOverlays();
  }

  createGroup(data: Located[], iconType: number = 0): any {
    let iconOption: any = {
      iconSize: [ 15, 15 ],
      iconAnchor: [ 2, 0 ],
      iconUrl: `assets/images/${iconType == 0? 'child.png':
        (iconType == 1? 'youth.png' : (iconType == 2? "woman.png" : "old-people.png"))}` ,
      // shadowUrl: 'assets/leaflet/marker-shadow.png',
    };
    let option = { icon: Leaf.icon(iconOption),};
    return Leaf.layerGroup(data.map(
        (child: Located) => {
          // console.log("Child: ", child, child.latitude, child.longitude);
          return Leaf.marker([child.latitude, child.longitude], option)
            .bindPopup( '<img alt="marker" src="' + iconOption.iconUrl + '" /><p>'+ (iconType == 0? 'Infant: 0 - 5 years':
              (iconType == 1? 'Youth: 15 - 24 years' : (iconType == 2? "Woman: 15 - 49 years" : "Old Person: 60+"))) +'</p>');
        }));
  }

  getLatLong(lat: number, lng: number, radius: number) {
    const earth = 6371;// earth radius in miles
    const maxLat = ((lat + Math.PI / 2) * 180) / Math.PI;
    const minLat = ((lat - Math.PI / 2) * 180) / Math.PI;
    const maxLng = ((lng + (Math.PI * radius) / earth) * 180) / Math.PI;
    const minLng = ((lng - (Math.PI * radius) / earth) * 180) / Math.PI;
    return {
      maxLat: maxLat,
      minLat: minLat,
      maxLng: maxLng,
      minLng: minLng,
    }
  }

  addPopulationMarkers(map: Leaf.Map){
    this.population.get_all().then((data) => {
      let childrenMarkers = this.createGroup(data.children, 0);
      let womenMarkers = this.createGroup(data.women, 2);
      let youthMarkers = this.createGroup(data.youths, 1);
      let elderlyMarkers = this.createGroup(data.elderly, 3);
      this.layersControl.overlays["Children | 0 - 5 years | " + data.children.length] = childrenMarkers;
      this.layersControl.overlays["Women | 15 - 49 years | " + data.women.length] = womenMarkers;
      this.layersControl.overlays["Youths | 15 - 24 years | " + data.youths.length] = youthMarkers;
      this.layersControl.overlays["Elderly | 60+ 5 years | " + data.elderly.length] = elderlyMarkers;
      this.layersControl.overlays["Children | 0 - 5 years | " + data.children.length].addTo(map);
    }).catch((ex) => {
      console.log('Exception Handler: ', ex);
    });
  }

  getMapOverlays(){
    let tMS = this.transportModeService;
    tMS.angersiedlung_bike.subscribe(data => {
      let angersiedlungCatchmentAreaMarkers = Leaf.layerGroup([]);
      for (const c of data.features) {
        // const lon = c.geometry.coordinates[0];
        for(const geo of c.geometry.coordinates){
          for(const coors of geo[0]){
            angersiedlungCatchmentAreaMarkers.addLayer((Leaf.marker(Leaf.latLng(coors[0],coors[1]), {})
              .bindPopup( '<a href="' + "#" + '" target="_blank">' + c.id + '</a>').bindTooltip('<p> Time X: ' + c.properties.time + + ' m</p>')));
          }
        }

      }

      this.layersControl.overlays["Angersiedlung Bike Catchment Area"] = angersiedlungCatchmentAreaMarkers;
      this.layersControl.overlays["angersiedlung_bike"] = Leaf.geoJSON(data);
    });
    tMS.hauptplatz_bike.subscribe(data => {
      this.layersControl.overlays["hauptplatz_bike"] = Leaf.geoJSON(data);
    });
    tMS.hauptplatz_walk.subscribe(data => {
      this.layersControl.overlays["hauptplatz_walk"] = Leaf.geoJSON(data);
    });
    tMS.hatric_walk.subscribe(data => {
      this.layersControl.overlays["hatric_walk"] = Leaf.geoJSON(data);
    });
    tMS.hatric_bike.subscribe(data => {
      this.layersControl.overlays["hatric_bike"] = Leaf.geoJSON(data);
    });
    tMS.angersiedlung_walk.subscribe(data => {
      this.layersControl.overlays["angersiedlung_walk"] = Leaf.geoJSON(data);
    });

  }

  onMapReady(map: Leaf.Map) {
    // Leaf.geoJSON(this.selectedTransportMode).addTo(map);
    this.addPopulationMarkers(map);
    let stops = this.transportModeService.stops;
    this.layersControl.baseLayers["Open Street Map"].addTo(map);
    this.layersControl.overlays["Bus Stops"].addTo(map);
    map.fitBounds([
      [stops.angersiedlung.lat, stops.angersiedlung.lng],
      [stops.hauptplatz.lat, stops.hauptplatz.lng],
      [stops.hatric_shopping_center.lat, stops.hatric_shopping_center.lng]
    ]);
    Leaf.control.layers(this.layersControl.baseLayers, this.layersControl.overlays).addTo(map);
  }

  selectMode(){
    switch(this.transportMode){
      case "angersiedlung_bike": {
        this.selectedTransportMode = this.transportModeService.angersiedlung_bike;
        break;
      }
      case "angersiedlung_walk": {
        this.selectedTransportMode = this.transportModeService.angersiedlung_walk;
        break;
      }
      case "hatric_bike": {
        this.selectedTransportMode = this.transportModeService.hatric_bike;
        break;
      }
      case "hatric_walk": {
        this.selectedTransportMode = this.transportModeService.hatric_walk;
        break;
      }
      case "hauptplatz_bike": {
        this.selectedTransportMode = this.transportModeService.hauptplatz_bike;
        break;
      }
      default: this.selectedTransportMode = this.transportModeService.hauptplatz_walk;
    }
  }

}
