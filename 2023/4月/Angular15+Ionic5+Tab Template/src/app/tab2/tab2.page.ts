import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { ToastController } from '@ionic/angular';

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  data: any[] = [];
  constructor(public alertController: AlertController,public toastController: ToastController) {
    this.data = JSON.parse(sessionStorage.getItem("data") || "[]");
  }
  ionViewWillEnter() {
    this.data = JSON.parse(sessionStorage.getItem("data") || "[]");
    console.error(this.data);
  }
  doRefresh(event) {
    this.data = JSON.parse(sessionStorage.getItem("data") || "[]");
    setTimeout(() => {
      console.log("Async operation has ended");
      event.target.complete();
    }, 2000);
  }
  emergency(idx:number){
    this.data[idx].emergency=!this.data[idx].emergency
    sessionStorage.setItem('data', JSON.stringify(this.data));
  }
  async delete(name: string,index:number) {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Confirm!",
      message:'Do you really want to delete ' + name ,
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: (blah) => {

          },
        },
        {
          text: "Confirm",
          handler: async() => {
            this.data.splice(index, 1);
            sessionStorage.setItem("data",JSON.stringify(this.data))
            const toast = await this.toastController.create({
              message: 'delete success',
              duration: 2000,
              color​:"success"
            });
            toast.present();
          },
        },
      ],
    });
    await alert.present();
  }
}
