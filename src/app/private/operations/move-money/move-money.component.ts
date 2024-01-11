import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-move-money',
  templateUrl: './move-money.component.html',
  styleUrls: ['./move-money.component.scss']
  // imports: [NgIf, NgFor]
})
export class MoveMoneyComponent implements OnInit {
  moveMoneyForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.moveMoneyForm = this.fb.group({
      sourceaccnum: ['', [Validators.required]],
      sourceaccoutlet: ['', [Validators.required]],
      destaccounttitle: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      sourceacctitle: ['', [Validators.required]],
      destaccnum: ['', [Validators.required]],
      destaccoutlet: ['', [Validators.required]],
      transactionremarks: ['', [Validators.required]]
    });

  }
  // Getters for easy access in the template
  get sourceaccnum() {
    return this.moveMoneyForm.get('sourceaccnum');
  }

  get sourceaccoutlet() {
    return this.moveMoneyForm.get('sourceaccoutlet');
  }

  get destaccounttitle() {
    return this.moveMoneyForm.get('destaccounttitle');
  }

  get amount() {
    return this.moveMoneyForm.get('amount');
  }
  
  get sourceacctitle() {
    return this.moveMoneyForm.get('sourceacctitle');
  }

  get destaccnum() {
    return this.moveMoneyForm.get('destaccnum');
  }

  get destaccoutlet() {
    return this.moveMoneyForm.get('destaccoutlet');
  }

  get transactionremarks() {
    return this.moveMoneyForm.get('transactionremarks');
  }
}
