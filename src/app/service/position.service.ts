import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PositionService {

  constructor() { }
  // 自分の現在地を取得し、緯度経度を返す
  getPosition(): Promise<google.maps.LatLng>{
    let CurrentPosition = new Promise<google.maps.LatLng>(function (resolve) {
      navigator.geolocation.getCurrentPosition((position) => {
        const CurrentPosition = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        resolve(CurrentPosition)
      });
    })
    return CurrentPosition;
  }
}

