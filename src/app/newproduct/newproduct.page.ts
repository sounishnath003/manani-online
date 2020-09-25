import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { ToastController } from "@ionic/angular";
import { DataService, Product } from "../services/data.service";

@Component({
  selector: "app-newproduct",
  templateUrl: "./newproduct.page.html",
  styleUrls: ["./newproduct.page.scss"],
})
export class NewproductPage implements OnInit {
  public productform: FormGroup = new FormGroup({
    name: new FormControl("", Validators.required),
    custName: new FormControl("", { validators: Validators.required }),
    wholesaler: new FormControl("", { validators: Validators.required }),
    contact: new FormControl("", { validators: Validators.required }),
    costprice: new FormControl("", { validators: Validators.required }),
    sellingPrice: new FormControl("", { validators: Validators.required }),
    address: new FormControl("", { validators: Validators.required }),
    photo: new FormControl("", Validators.required),
  });

  constructor(
    private router: Router,
    private dataService: DataService,
    public toastController: ToastController
  ) {}

  ngOnInit() {}

  public gotoSubmit() {
    if (this.productform.valid) {
      const productValue = this.productform.value;
      console.log(productValue);
      this.dataService.insertNewProduct(productValue);
      this.productform.reset();
      this.router.navigateByUrl("/");
      this.presentToast();
      // this.reloadPage();
    } else {
      console.log(this.productform.value);
    }
  }

  private reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 200);
  }

  public fileupload(event): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const imageData = reader.result.toString();
        this.productform.patchValue({
          photo: imageData,
        });
      };
    }
  }

  private async presentToast() {
    const toast = await this.toastController.create({
      message: "New product succesfully added.",
      duration: 2000,
    });
    toast.present();
    this.router.navigateByUrl("/");
  }
}
