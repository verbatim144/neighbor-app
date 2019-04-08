import {Component, Input, OnInit} from '@angular/core';
import {Neighbor} from '../Neighbor';
import {NeighborService} from '../neighbor.service';
import {NeighborListComponent} from '../neighbor-list/neighbor-list.component';

@Component({
  selector: 'app-neighbor-details',
  templateUrl: './neighbor-details.component.html',
  styleUrls: ['./neighbor-details.component.css']
})
export class NeighborDetailsComponent implements OnInit {

  @Input() neighbor: Neighbor;

  constructor(private neighborService: NeighborService, private listComponent: NeighborListComponent) { }

  ngOnInit() {
  }

  deleteNeighbor() {
    this.neighborService.deleteNeighbor(this.neighbor.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }

}
