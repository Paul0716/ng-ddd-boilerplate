import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  constructor(private formBuilder: FormBuilder) {}

  getTodoFormGroup(): FormGroup {
    return this.formBuilder.group({
      todo: ['', [Validators.required]],
    });
  }
}
