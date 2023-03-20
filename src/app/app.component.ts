import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {MyValidators} from "./my.validators";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit {
  //======================================================
  appState = 'off'
  handleChange() {
    console.log(this.appState)
  }
  //======================================================
  form: FormGroup
  submit() {
    if (this.form.valid) {
      // console.log('Form: ', this!.form)
      const formData = {...this.form.value}
      console.log('Form Data: ', formData)
      this.form.reset()
    }
  }
  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmails
      ], [MyValidators.uniqEmail]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl('', Validators.required)
      }),
      skills: new FormArray([])
    })


  }

  setCapital() {
    let cityMap = {
      ru: 'Москва',
      ua: 'Киев',
      by: 'Минск'
    }
    let cityKey = this.form.get('address').get('country').value
    let city = cityMap[cityKey]
    this.form.patchValue({address: {city}})
  }

  addSkill() {
   let control = new FormControl('', Validators.required);
    // (<FormArray>this.form.get('skills')).push(control)
   (this.form.get('skills')as FormArray).push(control)
  }

  getSkills(): AbstractControl[]{
    return (this.form.get('skills') as FormArray).controls
  }


}





