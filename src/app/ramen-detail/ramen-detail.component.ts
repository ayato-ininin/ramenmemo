import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ramen } from '../ramens';
import { RamenService } from '../service/ramen.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-ramen-detail',
  templateUrl: './ramen-detail.component.html',
  styleUrls: ['./ramen-detail.component.css']
})
export class RamenDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,private location: Location,private ramenService:RamenService) { }

  ngOnInit(): void {
    this.getRamenMarker();
  }
  ramen: Ramen;
  getRamenMarker(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.ramenService.getRamen(id)
      .subscribe(ramen => this.ramen = ramen);
  }
  goBack(): void {
    this.location.back();
  }

}
