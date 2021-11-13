import { Component, Input, OnInit } from '@angular/core';
import { Ramens } from '../mock-ramen';
import { Router } from '@angular/router';
import { Markers } from '../mock-ramenMarker';
import { DialogViewComponent } from '../dialog-view/dialog-view.component';
import { MatDialog } from '@angular/material/dialog';
import { PositionService } from '../service/position.service';


@Component({
  selector: 'app-ramens',
  templateUrl: './ramens.component.html',
  styleUrls: ['./ramens.component.css']
})
export class RamensComponent implements OnInit {
  dialogRef: any;
  title = "Favorite ramenMap";
  ramens = Ramens;
  markers = Markers;

  map: google.maps.Map;
  marker: google.maps.Marker;
  // centerは現在地が入り、mapの中心に来る
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

  constructor(
    private router: Router,
    public dialog: MatDialog,
    private positionService:PositionService) { }
  ngOnInit(): void {
    this.getCurrentlatLng();
  }
// 現在地を最初に取得
  getCurrentlatLng() {
    this.positionService.getPosition().then(CurrentValue =>
      this.center = CurrentValue
      )
  }
  // マーカをクリックしたら詳細画面へ
  openDetail(id: number) {
    this.router.navigate(['/detail',`${id}`]);
  }

// 下記はデータの保存では修正がいる
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

// この辺は、データをこのcomponentに格納してしまっている。これもサービス化すべきか。
  // クリックしたところのデータを一次保存して、登録画面へ引き渡す。
  click(event: google.maps.MapMouseEvent) {
    this.latlngs.push(event.latLng);
    this.nowLatlng = event.latLng;
    console.log(event.latLng);
    this.openDialog();
  }
// これも、上記のclickイベントで保存したデータ使ってるから、結果、一時的なデータを使ってる。これもサービスにいれるとして、それならローカルストレージか何か、共通のローカルデータに入れるほうがいいのか？
  openDialog() {
    this.dialogRef = this.dialog.open(DialogViewComponent, {
      height: '400px',
      width: '600px',
      data:{nowLatlng:this.nowLatlng}
    });
  }


  }


