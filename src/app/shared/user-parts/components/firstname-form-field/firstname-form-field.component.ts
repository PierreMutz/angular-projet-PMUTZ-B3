import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-firstname-form-field",
  templateUrl: "./firstname-form-field.component.html",
  styleUrls: ["./firstname-form-field.component.scss"]
})
export class FirstnameFormFieldComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;
  userForm: any;

  constructor() {}

  ngOnInit() {}
  get firstNameControl() {
    return this.userForm.get("first_name");
  }
}
