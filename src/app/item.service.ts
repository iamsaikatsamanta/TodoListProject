import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Item} from './item.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Item[] = [];
  private itemUpdated = new Subject();
  constructor(private http: HttpClient) {}

  getPosts() {
    this.http.get<{message: string, items: any}>('http://localhost:3000/api/item')
      .pipe(map((itemData) => {
        return itemData.items.map(item => {
          return {
            title: item.title,
            id: item._id
          };
        });
      }))
      .subscribe((items => {
      this.items = items;
      this.itemUpdated.next([...this.items]);
    }));
  }
  addPost(itemName: string) {
    const item = {
      id: null,
      title: itemName
    };
    this.http.post<{message: string, item: Item}>('http://localhost:3000/api/item', item).subscribe((resData) => {
      this.items.push(resData.item);
      this.itemUpdated.next([...this.items]);
    });
  }
  deleteItem(itemId: string) {
    this.http.delete('http://localhost:3000/api/item/' + itemId).subscribe(() => {
      const updatedItems = this.items.filter(item => item.id !== itemId );
      this.items = updatedItems;
      this.itemUpdated.next([...this.items]);
    });
  }
  getItemListener() {
    return this.itemUpdated.asObservable();
  }
}
