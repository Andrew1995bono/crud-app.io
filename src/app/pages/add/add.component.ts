import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{

  public addForm!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.addForm = this.getForm();
  }

  private getForm(): FormGroup {
    return this.fb.group({
      itemName: ['', Validators.required],
      itemCategory: ['', Validators.required],
      itemDescription: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    console.warn(this.addForm.value);
  }

  public checkIfFieldIsValid(controlName: string, message: string): string {
    if (this.addForm.get(controlName)?.hasError('required')) {
      return `Please enter an ${message}`;
    }
    return '';
  }

}
