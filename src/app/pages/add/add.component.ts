import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LocalStorageService} from "../../services/local-storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {

  public addForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private localStorage: LocalStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.addForm = this.getForm();
  }

  public checkIfFieldIsValid(controlName: string, message: string): string {
    if (this.addForm.get(controlName)?.hasError('required')) {
      return `Please enter an ${message}`;
    }
    return '';
  }

  public addItem(): void {
    const id = Math.floor(Math.random() * 1000);
    this.localStorage.addItem({...this.addForm.value, id});
    this.router.navigate(['items']);
  }

  private getForm(): FormGroup {
    return this.fb.group({
      itemName: ['', Validators.required],
      itemCategory: ['', Validators.required],
      itemDescription: ['', Validators.required],
    });
  }

}
