import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-password-form-field",
  templateUrl: "./password-form-field.component.html",
  styleUrls: ["./password-form-field.component.scss"]
})
export class PasswordFormFieldComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;
  userForm: any;

  constructor() {}

  ngOnInit() {}

  get passwordControl() {
    return this.userForm.get("password");
  }
}
