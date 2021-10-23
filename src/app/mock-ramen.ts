import { Ramen } from './ramens';
export const Ramens: Ramen[] = [
   {
    id: 1,
    name: "人類みな麺類",
    star: 4,
    detail: "ここはうまい",
    date: 2021 / 10 / 1,
    kinds:"醤油",
    pictureUrl: "./assets/gps.png",
    address: "大阪市西中島南方",
    latlng: {
      lat: 34.732711,
      lng: 135.405791
    },
    label: {
      text: '世界一暇なラーメン屋'
    },
  }
]

// firebaseでリアルタイムDB．これがあるほうが、どちらかというと実装もしやすそう。それに伴って、registerフォームが必要で、登録したらデータベースへ。そしたら、マップ上にピンがたつようにすれば、ある程度は行ける。その後に、ログインとかは最後かなー。詳細ラーメンページを作ってもいいかも！！写真とか登録するの、めんどくさそう。出来るかな。
