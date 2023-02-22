import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LocalStorageService} from "../../services/local-storage.service";
import {Item} from "../../shared/models/item.model";


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})

export class ItemsComponent implements OnInit {

  constructor(
    private router: Router,
    public localStorage: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.localStorage.getItems();
  }

  public redirectToEditItem(item: Item): void {
    this.router.navigate(['edit', item.id]);
  }

  public deleteItem(item: Item): void {
    this.localStorage.deleteItem(item);
  }

}
