import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


// class MyTel {
//   constructor(public area: string, public exchange: string, public subscriber: string) {}
// }


export class RegisterComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  options: FormGroup;
  // parts: FormGroup;

  // @Input()
  // get value(): MyTel | null {
  //   let n = this.parts.value;
  //   if (n.area.length === 3 && n.exchange.length === 3 && n.subscriber.length === 4) {
  //     return new MyTel(n.area, n.exchange, n.subscriber);
  //   }
  //   return null;
  // }
  // set value(tel: MyTel | null) {
  //   tel = tel || new MyTel('', '', '');
  //   this.parts.setValue({area: tel.area, exchange: tel.exchange, subscriber: tel.subscriber});
  // }

  constructor(private formBuilder: FormBuilder) { 
    // this.parts =  formBuilder.group({
    //   area: '',
    //   exchange: '',
    //   subscriber: '',
    // });
  }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
   }

}

