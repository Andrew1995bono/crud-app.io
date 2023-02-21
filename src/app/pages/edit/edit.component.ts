import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit{

  public editForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editForm = this.getForm();
  }

  private getForm(): FormGroup {
    return this.fb.group({
      itemName: ['', Validators.required],
      itemCategory: ['', Validators.required],
      itemDescription: ['', Validators.required],
    });
  }

  public onSubmit(): void {
    console.warn(this.editForm.value);
  }

  public checkIfFieldIsValid(controlName: string, message: string): string {
    if (this.editForm.get(controlName)?.hasError('required')) {
      return `Please enter an ${message}`;
    }
    return '';
  }
}
