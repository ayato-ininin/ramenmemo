import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RamenRegisterFormService {

  constructor(private router: Router,) { }
  geocoder: google.maps.Geocoder;
  LatlngInput: google.maps.LatLng;
  arrangedAddress: Promise<string | void>;

  //#region 評価点に基づき、レビュー用のrateを返す
  reviewRateCheck(value: { ramenStar: string; }): Promise<string> {
    return new Promise<string>(function (resolve, reject) {
      switch (value.ramenStar) {
        case "0.5":
          resolve("10%");
          break;
        case "1":
          resolve("20%");
          break;
        case "1.5":
          resolve("30%");
          break;
        case "2":
          resolve("40%");
          break;
        case "2.5":
          resolve("50%");
          break;
        case "3":
          resolve("60%");
          break;
        case "3.5":
          resolve("70%");
          break;
        case "4":
          resolve("80%");
          break;
        case "4.5":
          resolve("90%");
          break;
        case "5":
          resolve("100%");
          break;
        default:
          reject("正しい値を選択してください");
          break;
      }
    });
  }
  //#endregion

  //#region リバースジオコーディング・緯度経度から住所を出す
  geocodeAddress(Latlng):Promise<string | void>{
    const promise: Promise<void> = new Promise((resolve,reject) => {
      this.geocoder = new google.maps.Geocoder();
      let Result:void= this.geocoder.geocode(
        {
          location: Latlng
        },
        function (results, status) {
          if (status == google.maps.GeocoderStatus.OK) {
            //取得が成功した場合住所を取得します。
            const address = results[0].formatted_address;
            console.log(address);
            return address;

          } else if (status == google.maps.GeocoderStatus.ZERO_RESULTS) {
            alert("住所が見つかりませんでした。画面を戻ります。");
            reject("住所が見つかりませんでした。");
          } else if (status == google.maps.GeocoderStatus.ERROR) {
            alert("サーバ接続に失敗しました。画面を戻ります。");
            reject("サーバ接続に失敗しました。");
          } else if (status == google.maps.GeocoderStatus.INVALID_REQUEST) {
            alert("リクエストが無効でした。画面を戻ります。");
            reject("リクエストが無効でした。");
          } else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
            alert("リクエストの制限回数を超えました。画面を戻ります。");
            reject("リクエストの制限回数を超えました。");
          } else if (status == google.maps.GeocoderStatus.REQUEST_DENIED) {
            alert("サービスが使えない状態でした。画面を戻ります。");
            reject("サービスが使えない状態でした。");
          } else if (status == google.maps.GeocoderStatus.UNKNOWN_ERROR) {
            alert("原因不明のエラーが発生しました。画面を戻ります。");
            reject("原因不明のエラーが発生しました。");
          }
          return reject('error:addressGetMiss');
        });
      resolve(Result);
    });
    // 住所を整形して引き渡す
    return this.arrangedAddress = promise.then((response) => {
      const GetAddress:Promise<string> = new Promise<string>((resolve) => {
        console.log(response);
        let address:any = response;
        let useToPlusAddress: string;
        let shapingAddress: string = '';

        // 日本と郵便番号を取得しないように引き算
        let ResultLength = address.results[0].address_components.length - 3;
        console.log(ResultLength);
        console.log(address);

        for (let i = ResultLength; i >= 0; i--) {
          useToPlusAddress = address.results[0].address_components[i].long_name;
          shapingAddress += useToPlusAddress;
        }
        resolve(shapingAddress);
      })
      return GetAddress;
    }).catch(err => {
      console.log(err)
      // ここのエラー処理どうするか
      this.router.navigate(['/'])
    });
  }
  //#endregion
}
