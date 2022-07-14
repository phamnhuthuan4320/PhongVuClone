import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StripeService, StripePaymentElementComponent } from 'ngx-stripe';
import { StripeElementsOptions, PaymentIntent } from '@stripe/stripe-js';
import { PaymentService } from 'src/app/user/services/payment.service';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})
export class StripeComponent implements OnInit {

  @ViewChild(StripePaymentElementComponent)
  paymentElement: StripePaymentElementComponent;

  paymentElementForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
  });

  elementsOptions: StripeElementsOptions = {
    locale: 'en'
  };

  isAdded: boolean = false;
  isLoading: boolean = false;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private stripeService: StripeService,
    private _payment: PaymentService
  ) { }

  ngOnInit() {
    this.isLoading = true;

    this._payment.postPM().subscribe(data => {
      this.elementsOptions.clientSecret = data.data.client_secret;
    })

    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  pay() {
    if (this.paymentElementForm.valid) {
      this.stripeService.confirmSetup({
        elements: this.paymentElement.elements,
        confirmParams: {
          payment_method_data: {
            billing_details: {
              name: this.paymentElementForm.get('name').value,
              email: this.paymentElementForm.get('email').value,
            }
          }
        },
        redirect: 'if_required'
      }).subscribe(result => { 
        this.isAdded = true;
        setTimeout(() => {
          this.isAdded = false;
        }, 3000);
      });
    }
  }
}