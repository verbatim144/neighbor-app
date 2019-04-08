import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Neighbor} from '../Neighbor';
import {NeighborService} from '../neighbor.service';

@Component({
  selector: 'app-neighbor-list',
  templateUrl: './neighbor-list.component.html',
  styleUrls: ['./neighbor-list.component.css']
})
export class NeighborListComponent implements OnInit {

  neighbors: Observable<Neighbor[]>;

  constructor(private neighborService: NeighborService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteNeighbors(){
    this.neighborService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error1 => console.log('Error' + error1));
  }

  reloadData(){
    this.neighbors = this.neighborService.getNeighborsList();
  }

}
