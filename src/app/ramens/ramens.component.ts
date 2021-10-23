import { Component, Input, OnInit } from '@angular/core';
import { Ramens } from '../mock-ramen';
import { Router } from '@angular/router';
import { Markers } from '../mock-ramenMarker';
import { DialogViewComponent } from '../dialog-view/dialog-view.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-ramens',
  templateUrl: './ramens.component.html',
  styleUrls: ['./ramens.component.css']
})
export class RamensComponent implements OnInit {
  dialogRef: any;
  constructor(private router:Router,public dialog: MatDialog) { }
  title = "Favorite ramenMap";
  ramens = Ramens;
  markers = Markers;

  map: google.maps.Map;
  marker: google.maps.Marker;
  center: google.maps.LatLng;
  latlngs: google.maps.LatLng[] = [];
  nowLatlng: google.maps.LatLng;

  image ="./assets/gps.png";
  myPositionImage = "./assets/position2.png";

  zoom = 16;
    // 地図のオプション
  options: google.maps.MapOptions = {
      disableDefaultUI: true
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      const latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      this.center = latLng;
    });
  }

  gpsRegister(): void {
    this.ramens.push({
      id: 2,
      name: "人類みな麺",
      star: 5,
      detail: "ここはうまい",
      date: 2021 / 10 / 1,
      kinds:"醤油",
      pictureUrl: "URLURLURL",
      address: "大阪市西中島南方",
      latlng: {
        lat: 34.732,
        lng: 135.405
      },
      label: {
        text: "人類皆めん"
      },
    });
  }

  openDetail(id: number) {
    this.router.navigate(['/detail',`${id}`]);
  }
  click(event: google.maps.MapMouseEvent) {
    this.latlngs.push(event.latLng);
    this.nowLatlng = event.latLng;
    console.log(event.latLng);
    this.openDialog();
  }
  openDialog() {
    this.dialogRef = this.dialog.open(DialogViewComponent, {
      height: '400px',
      width: '600px',
      data:{nowLatlng:this.nowLatlng}
    });
  }


  }


