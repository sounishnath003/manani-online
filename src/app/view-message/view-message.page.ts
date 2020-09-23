import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService, FindProduct, Product } from '../services/data.service';
import { ToastController } from '@ionic/angular';
import { encode } from 'punycode';

@Component({
  selector: 'app-view-message',
  templateUrl: './view-message.page.html',
  styleUrls: ['./view-message.page.scss'],
})
export class ViewMessagePage implements OnInit {
  tdata: FindProduct;
  public product: Product;
  private id: number = null;

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    public toastController: ToastController,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'), 10);
    this.data.findProductById(this.id).subscribe((res) => {
      this.tdata = res;
      this.product = this.tdata.product;
    });
  }

  getBackButtonText() {
    const win = window as any;
    const mode = win && win.Ionic && win.Ionic.mode;
    return mode === 'ios' ? 'Back' : ' ';
  }

  public async presentToast() {
    const toast = await this.toastController.create({
      message: 'You\'ve succesfully deleted.',
      duration: 2000,
    });
    this.data.deleteProductById(this.product.id);
    toast.present();
    this.router.navigateByUrl('/');
  }

  public constructImageFromBlob(baseImage: any) {
    return `${baseImage}`;
  }

}
