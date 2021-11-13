export interface Ramen{
  id: number;
  name: string;
  star: number;
  detail?: string;
  date: number;
  kinds: string;
  pictureUrl?: string;
  address?: string;
  latlng?: google.maps.LatLngLiteral;
  label?: {
    text: string;
  };
}

export interface ramenMarkers{
  id: number;
  position:{
    lat: number,
    lng: number
  };
  label: {
    text: string
  };
  title: string;
  options: any;
}

export const ramenKinds: string[] = [
  '醤油ラーメン',
  '塩ラーメン',
  '味噌ラーメン',
  '豚骨ラーメン',
  '豚骨魚介ラーメン',
  '豚骨醤油ラーメン',
  '鶏白湯ラーメン',
  '鶏清湯ラーメン',
  '担々麺',
  '二郎系',
  '煮干しラーメン',
  '油そば',
  'まぜそば',
  '豚骨魚介つけ麺',
  'つけ麺'
]

export const reviewStarNumberList:number[]= [
  0.5,
  1,
  1.5,
  2,
  2.5,
  3,
  3.5,
  4,
  4.5,
  5
]
