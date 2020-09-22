import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DataService, Product } from '../services/data.service';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.page.html',
  styleUrls: ['./newproduct.page.scss'],
})
export class NewproductPage implements OnInit {
  public productform: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    custName: new FormControl('', { validators: Validators.required }),
    wholeselar: new FormControl('', { validators: Validators.required }),
    contact: new FormControl('', { validators: Validators.required }),
    costprice: new FormControl('', { validators: Validators.required }),
    sellingPrice: new FormControl('', { validators: Validators.required }),
    address: new FormControl('', { validators: Validators.required }),
    photo: new FormControl(''),
  });

  constructor(
    private router: Router,
    private dataService: DataService,
    public toastController: ToastController
  ) {}

  ngOnInit() {}
  public gotoSubmit() {
    if (this.productform.valid) {
      console.log(this.productform.value);
      const productData: Product = this.productform.value;
      this.dataService.insertNewProduct(productData);
      this.productform.reset();
      this.router.navigateByUrl('/');
      this.presentToast();
    } else {
    }
  }

  private async presentToast() {
    const toast = await this.toastController.create({
      message: 'New product succesfully added.',
      duration: 2000,
    });
    toast.present();
    this.router.navigateByUrl('/');
  }
}
