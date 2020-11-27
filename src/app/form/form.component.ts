import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../user.class';
import {asyncUrlValidator, emailValidator, observableUrlValidator, rangeValidator} from '../custom-validators';
import {FORM_ERRORS, FORM_SUCCESS, PLACEHOLDERS, ROLES, VALIDATION_MESSAGES} from '../form-data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm: FormGroup;
  roles: string[] = ROLES;
  submitted = false;
  formErrors = FORM_ERRORS;
  formSuccess = FORM_SUCCESS;
  validationMessages = VALIDATION_MESSAGES;
  placeholders = PLACEHOLDERS;

  user: User;

  login: AbstractControl;
  password: AbstractControl;
  email: AbstractControl;
  age: AbstractControl;
  role: AbstractControl;
  site: AbstractControl;

  constructor(private fb: FormBuilder) {
    this.user = new User(1, null, null, null, null, null, null);
  }

  ngOnInit(): void {
    this.buildForm();
    this.createControls();
  }

  buildForm(): void {
    this.userForm = this.fb.group ({
      login: [this.user.login, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      password: [this.user.password, [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
      email: [this.user.email, [Validators.required, emailValidator]],
      role: [this.user.role, [Validators.required]],
      age: [this.user.age, [Validators.required, rangeValidator(1, 122)]],
      site: [this.user.site, [Validators.required], [observableUrlValidator]],
    });

    this.userForm.valueChanges.subscribe(() => this.onValueChanged());
  }

  createControls(): void {
    this.login = this.userForm.controls.login;
    this.password = this.userForm.controls.password;
    this.email = this.userForm.controls.email;
    this.age = this.userForm.controls.age;
    this.role = this.userForm.controls.role;
    this.site = this.userForm.controls.site;
  }

  onValueChanged(): void {
    if (!this.userForm) {
      return;
    }

    const form = this.userForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';

      const control = form.get(field);

      if (control && control.dirty && control.invalid) {
        const message = this.validationMessages[field];

        for (const key in control.errors) {
          console.log(message[key]);
          this.formErrors[field] += message[key] + ' ';
        }
      }
    }
  }

  onSubmit(): void {
    console.log(this.userForm);
  }


  //Первый вариант создания формы с валидацией
  // model: User = new User(0, '', '', null);
  // roles: string[] = ['Guest', 'Moderator', 'Administrator'];
  // submitted = false;
  //
  // formErrors = {
  //   name: '',
  //   age: ''
  // };
  //
  // validationMessages = {
  //   name: {
  //     required: 'Имя обязательно.',
  //     minlength: 'Имя должно быть минимум 4 символа.'
  //   },
  //   age: {
  //     required: 'Возраст обязателен.'
  //   }
  // };
  //
  // @ViewChild('userForm') userForm: NgForm;
  //
  // constructor() { }
  //
  // ngOnInit(): void {
  // }
  //
  // ngAfterViewInit(): void {
  //   this.userForm.valueChanges.subscribe(() => this.onValueChanged());
  // }
  //
  // onValueChanged(data?: any): void {
  //   if (!this.userForm) {
  //     return;
  //   }
  //
  //   const form = this.userForm.form;
  //
  //   for (const field in this.formErrors) {
  //     this.formErrors[field] = '';
  //
  //     const control = form.get(field);
  //
  //     if (control && control.dirty && control.invalid) {
  //       const message = this.validationMessages[field];
  //
  //       for (const key in control.errors) {
  //         console.log(message[key]);
  //         this.formErrors[field] += message[key];
  //       }
  //     }
  //   }
  // }
  //
  // onSubmit(): void{
  //   this.submitted = true;
  //   console.log('Form submitted');
  // }
}


