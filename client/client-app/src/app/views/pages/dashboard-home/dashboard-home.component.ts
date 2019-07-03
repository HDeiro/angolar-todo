import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  texto : string = 'Wenceslau Braz - Cuidado com as cargas';
  userMarkers: Array<any> = [];
  userLocation: any = {};
  latitude: number;
  longitude: number;
  zoom: number = 20;
  overlayBaseStyle: any;

  constructor() { 
    this.overlayBaseStyle = {
      body: {
        'min-width': '120px',
        'min-height': '30px',
        'background': 'lightgray',
        'border-radius': '6px',
        'display': 'flex',
        'align-items': 'center',
        'justify-content': 'flex-start',
        'padding': '6px',
        'font-size': '18px',
        'position': 'relative',
        'border': '1px solid gray'
      },
      triangle: {
        'width': '0',
        'height': '0',
        'border-left': '10px solid transparent',
        'border-right': '10px solid transparent',
        'border-top': '10px solid lightgray',
        'position': 'absolute',
        'bottom': '-10px',
        'left': 'calc(50%)',
        'transform': 'translateX(-50%)'
      },
      triangleShadow: {
        'width': '0',
        'height': '0',
        'border-left': '12px solid transparent',
        'border-right': '12px solid transparent',
        'border-top': '12px solid gray',
        'position': 'absolute',
        'bottom': '-12px',
        'left': 'calc(50%)',
        'transform': 'translateX(-50%)'
      }
  };

    navigator && navigator.geolocation.getCurrentPosition(pos => {
      this.userLocation.latitude = +pos.coords.latitude;
      this.userLocation.longitude = +pos.coords.longitude;

      for(let i = 0; i < 1000; i++) {
        this.userMarkers.push({
          latitude: this.userLocation.latitude - (i % 2 ? i : -i)/10000,
          longitude: this.userLocation.longitude - (i % 2 ? i : -i)/10000,
          iconUrl: 'https://picsum.photos/25',
          title: `Marker nº ${i + 1}`,
          content: `Este é o marcador de testes número ${i+1}`
        });
      }
    });
  }

  cssfy(object) {
    return Object.keys(object)
      .map(key => `${key}: ${object[key]}`)
      .join(', ');
  }

  ngOnInit() {
  }

}
