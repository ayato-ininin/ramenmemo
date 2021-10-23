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
