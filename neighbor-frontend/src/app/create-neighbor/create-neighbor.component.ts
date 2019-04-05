import { Component, OnInit } from '@angular/core';
import {Neighbor} from '../Neighbor';
import {NeighborService} from '../neighbor.service';

@Component({
  selector: 'app-create-neighbor',
  templateUrl: './create-neighbor.component.html',
  styleUrls: ['./create-neighbor.component.css']
})
export class CreateNeighborComponent implements OnInit {

  neighbor: Neighbor = new Neighbor();
  submitted = false;

  constructor(private neighborService: NeighborService) { }

  ngOnInit() {
  }

  newNeighbor(){
    this.submitted = false;
    this.neighbor = new Neighbor();
  }

  save() {
    this.neighborService.createNeighbor(this.neighbor)
      .subscribe(data => console.log(data), error1 => console.log(error1));
    this.neighbor = new Neighbor();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
