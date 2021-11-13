import { Component, Inject, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-view',
  templateUrl: './dialog-view.component.html',
  styleUrls: ['./dialog-view.component.css']
})
export class DialogViewComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { nowLatlng: google.maps.LatLng },
    private router: Router) {
    this.getValue = { data: this.data.nowLatlng };
    // 受け取った値を、変数にしまう。
  }

  getValue: {data:google.maps.LatLng};
  postDataLat:number;
  postDataLng:number;
  param: {
    lat: number;
    lng: number;
  };

  ngOnInit(): void {
  // オブジェクトで引き渡せるように設定。
    this.postDataLat = +this.getValue.data.lat();
    this.postDataLng = +this.getValue.data.lng();
    const param = {
      lat: this.postDataLat,
      lng:this.postDataLng
    }
    this.param = param;
  }



  toRegister() :void{
  this.router.navigate(['/ramenRegister',this.param])
  }


}
