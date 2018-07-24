import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ItemService} from '../item.service';
import { Subscription } from 'rxjs';
import {Item} from '../item.model';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnDestroy {
  items: Item[] = [] ;
  private itemSub: Subscription;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getPosts();
    this.itemSub = this.itemService.getItemListener()
      .subscribe((item: Item[]) => {
        this.items = item;
      });
  }
  onDel(itemId: string) {
    this.itemService.deleteItem(itemId);
  }
  ngOnDestroy() {
    this.itemSub.unsubscribe();
  }


}
