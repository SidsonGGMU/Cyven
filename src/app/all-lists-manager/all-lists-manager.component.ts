import { Component, OnInit, OnDestroy } from '@angular/core';
import { ListsManagerService } from '../lists-manager.service';
import { List } from '../list-data/List';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-all-lists-manager',
  templateUrl: './all-lists-manager.component.html',
  styleUrls: ['./all-lists-manager.component.css']
})
export class AllListsManagerComponent implements OnInit, OnDestroy {

  lists: List[];
  subscription: Subscription;

  constructor(private liste_service: ListsManagerService) { }

  ngOnInit() {
    this.subscription = this.liste_service.getData().subscribe (data => {
      console.log('Lists : ', this.lists = data); 
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
