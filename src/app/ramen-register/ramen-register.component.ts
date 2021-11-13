import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ramenKinds, reviewStarNumberList } from '../ramens';
import { RamenRegisterFormService } from '../service/ramen-register-form.service';



@Component({
  selector: 'app-ramen-register',
  templateUrl: './ramen-register.component.html',
  styleUrls: ['./ramen-register.component.css']
})
export class RamenRegisterComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private ramenRegisterFormService:RamenRegisterFormService) {
}

  lat:number;
  lng: number;
  LatlngInput: google.maps.LatLng;
  geocoder: google.maps.Geocoder;
  ramens: string[] = ramenKinds;
  reviewNumberList: number[] = reviewStarNumberList;
  PostAddress: string | void;

  file: File = null;
  imgSrc: string | ArrayBuffer = "";
  reviewRate: string= "";

  ramenRegistration = this.fb.group({
    datePick: [''],
    ramenStoreName: ['',Validators.required],
    ramenStar: ['',Validators.required],
    ramenKind: ['',Validators.required],
    review: [''],
    ramenPicture:[''],
    postAddress: ['',Validators.required]
  })

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.lat = +params.get('lat');
      this.lng = +params.get('lng');
    });
    this.LatlngInput = new google.maps.LatLng(this.lat, this.lng);
    this.ramenRegisterFormService.geocodeAddress(this.LatlngInput)
      .then(ramenAddress => this.PostAddress = ramenAddress);
  }

  // get ramenStar() { return this.ramenRegistration.get('ramenStar'); }
  onSubmit() {
    console.warn(this.ramenRegistration.value);
  }

  ramenReviewRate(value: { ramenStar: string; }) {
    this.ramenRegisterFormService.reviewRateCheck(value).then(
      (reviewRate:string) => this.reviewRate = reviewRate
    ).catch((err: string) => {
      console.log(err)
      alert(err)
    });
  }

  onChangeFile(event) {
    if (event.target.files.length === 0) {
      this.file = null;
      this.imgSrc = "";
      return;
    }
    let reader = new FileReader();
    this.file = event.target.files[0];
    reader.onload = () => {
      this.imgSrc = reader.result;
    }
    reader.readAsDataURL(this.file);
  }
  // 初期値としてformに送れないため、値をセットするメソッド
  setValue() {
    this.ramenRegistration.patchValue({
      postAddress: this.PostAddress
    })
  }


  }



