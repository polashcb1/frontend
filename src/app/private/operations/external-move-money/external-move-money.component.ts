import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-external-move-money',
  templateUrl: './external-move-money.component.html',
  styleUrls: ['./external-move-money.component.scss']
})
export class ExternalMoveMoneyComponent implements OnInit {
  extmoveMoneyForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.extmoveMoneyForm = this.fb.group({
      sourceaccnum: ['', [Validators.required]],
      sourceaccoutlet: ['', [Validators.required]],
      destaccounttitle: ['', [Validators.required]],
      transfertype: ['', [Validators.required]],
      amount: ['', [Validators.required]],
      sourceacctitle: ['', [Validators.required]],
      destaccnum: ['', [Validators.required]],
      destaccoutlet: ['', [Validators.required]],
      transactionremarks: ['', [Validators.required]]

    });
  }
  // Getters for easy access in the template
  get sourceaccnum() {
    return this.extmoveMoneyForm.get('sourceaccnum');
  }

  get sourceaccoutlet() {
    return this.extmoveMoneyForm.get('sourceaccoutlet');
  }

  get destaccounttitle() {
    return this.extmoveMoneyForm.get('destaccounttitle');
  }

  get transfertype() {
    return this.extmoveMoneyForm.get('transfertype');
  }

  get amount() {
    return this.extmoveMoneyForm.get('amount');
  }

  get sourceacctitle() {
    return this.extmoveMoneyForm.get('sourceacctitle');
  }

  get destaccnum() {
    return this.extmoveMoneyForm.get('destaccnum');
  }

  get destaccoutlet() {
    return this.extmoveMoneyForm.get('destaccoutlet');
  }

  get transactionremarks() {
    return this.extmoveMoneyForm.get('transactionremarks');
  }
}