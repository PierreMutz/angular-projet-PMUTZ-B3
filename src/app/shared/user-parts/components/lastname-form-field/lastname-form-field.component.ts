import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-lastname-form-field",
  templateUrl: "./lastname-form-field.component.html",
  styleUrls: ["./lastname-form-field.component.scss"]
})
export class LastnameFormFieldComponent implements OnInit {
  @Input() parentFormGroup: FormGroup;
  userForm: any;

  constructor() {}

  ngOnInit() {}

  get lastNameControl() {
    return this.userForm.get("last_name");
  }
}
