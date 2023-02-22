import {Injectable} from '@angular/core';
import {Item} from "../shared/models/item.model";
import {LOCAL_STORAGE_KEY} from "../shared/constants/local-storage-key/local-storage-key";

@Injectable({
  providedIn: 'root'
})

export class LocalStorageService {

  public arr!: Item[];

  public addItem(item: Item): void {
    this.getItems();
    this.addDeleteItem([...this.arr, item]);
  }

  public deleteItem(item: Item): void {
    const arrWithoutDeletedItem = this.arr.filter(el => el.id !== item.id);
    this.addDeleteItem(arrWithoutDeletedItem);
    this.getItems();
  }

  public getItems(): void {
    this.arr = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string) || [];
  }

  public editCurrentItem(item: Item): void {
    const filteredArr = this.arr.filter(el => el.id !== item.id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify([...filteredArr, item]));
  }

  private addDeleteItem(items: Item[]): void {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  }

}
