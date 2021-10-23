import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-ramen-register',
  templateUrl: './ramen-register.component.html',
  styleUrls: ['./ramen-register.component.css']
})
export class RamenRegisterComponent implements OnInit {

  lat:number;
  lng: number;
  LatlngInput: google.maps.LatLng;
  geocoder: google.maps.Geocoder;

  PostAddress='';
  value = "";
  min = 0;
  max = 5;
  step = 0.5;


constructor(private route: ActivatedRoute) {

   }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.lat = +params.get('lat');
      this.lng = +params.get('lng');
    });
    this.LatlngInput = new google.maps.LatLng(this.lat, this.lng);
    this.geocoder = new google.maps.Geocoder();
    let newaddress:string;

    this.geocoder.geocode(
      {
        location: this.LatlngInput
      },
      function(results, status) {

        if (status == google.maps.GeocoderStatus.OK) {
        //取得が成功した場合

          //住所を取得します。
          const address = results[0].formatted_address;
          console.log(address);
          newaddress = address;
          console.log(newaddress);

        } else if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
          alert("住所が見つかりませんでした。");
        } else if (status == google.maps.GeocoderStatus.ERROR) {
          alert("サーバ接続に失敗しました。");
        } else if (status == google.maps.GeocoderStatus.INVALID_REQUEST) {
          alert("リクエストが無効でした。");
        } else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
          alert("リクエストの制限回数を超えました。");
        } else if (status == google.maps.GeocoderStatus.REQUEST_DENIED) {
          alert("サービスが使えない状態でした。");
        } else if (status == google.maps.GeocoderStatus.UNKNOWN_ERROR) {
          alert("原因不明のエラーが発生しました。");
        }

      });
    // async ??

    console.log(newaddress);
    this.PostAddress = newaddress;

    console.log(this.PostAddress);

  }
  }


  // GoogleLatlng  = new google.maps.LatLng()

