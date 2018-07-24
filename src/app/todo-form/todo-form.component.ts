import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ItemService} from '../item.service';
import {from} from 'rxjs';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }
  onAddItem(form: NgForm) {
    this.itemService.addPost(form.value.item);
    form.reset();
  }
}
