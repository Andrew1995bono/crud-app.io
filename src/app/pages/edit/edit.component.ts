import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {LocalStorageService} from "../../services/local-storage.service";
import {Item} from "../../shared/models/item.model";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit{

  public editForm!: FormGroup;
  public editedItem!: Item;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private localStorage: LocalStorageService,
    private router: Router) { }

  ngOnInit(): void {
    this.localStorage.getItems();
    this.getItem();
    this.editForm = this.getForm();
  }

  public checkIfFieldIsValid(controlName: string, message: string): string {
    if (this.editForm.get(controlName)?.hasError('required')) {
      return `Please enter an ${message}`;
    }
    return '';
  }

  public editCurrentItem(): void {
    this.localStorage.editCurrentItem({...this.editForm.value, id : this.editedItem.id});
    this.router.navigate(['items']);
  }

  private getItem(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.editedItem = this.localStorage.arr?.find(el => el.id === id) as Item;
  }

  private getForm(): FormGroup {
    return this.fb.group({
      itemName: [this.editedItem.itemName, Validators.required],
      itemCategory: [this.editedItem.itemCategory, Validators.required],
      itemDescription: [this.editedItem.itemDescription, Validators.required],
    });
  }

}
