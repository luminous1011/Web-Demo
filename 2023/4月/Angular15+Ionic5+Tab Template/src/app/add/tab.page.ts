import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { ToastController } from '@ionic/angular';
@Component({
  selector: "app-tab",
  templateUrl: "tab.page.html",
  styleUrls: ["tab.page.scss"],
})
export class Tab1Page {
  errText = "";

  form = {
    memberId: "",
    fullName: "",
    birth: "",
    gender: "",
    membershipType: "",
    membershipStart: "",
    contactNumber: "",
    email: "",
    addr: "",
    emergencyContactNumber: "",
    condition: "",
  };
  constructor(public alertController: AlertController,public toastController: ToastController) {}
  async handleSubmit() {
    this.errText = "";

    const form = this.form;
    const data = JSON.parse(sessionStorage.getItem("data") || "[]");
    if (!form.memberId) {
      this.errText = "member id must be entered.";
    }
    const temp = data.filter((item: any) => item.memberId == form.memberId);
    if (temp.length) {
      this.errText = "duplicate member id";
    }
    if (!form.fullName) {
      this.errText = "full Name must be entered.";
    }
    if (!form.birth) {
      this.errText = "Date of birth must be entered.";
    }
    if (!form.gender) {
      this.errText = "Gender must be entered.";
    }
    if (!form.membershipType) {
      this.errText = "Membership type must be entered.";
    }
    if (!form.membershipStart) {
      this.errText = "Membershipstartday start day must be entered.";
    }
    if (!form.contactNumber) {
      this.errText = "Contact number must be entered.";
    }
    if (!form.email) {
      this.errText = "Email must be entered.";
    }
    if (!form.addr) {
      this.errText = "Residential address must be entered.";
    }
    if (!form.emergencyContactNumber) {
      this.errText = "Emergency contact numbers must be entered.";
    }
    if (!form.condition) {
      this.errText = "Medical condition must be entered.";
    }
    if (this.errText) {
      const alert = await this.alertController.create({
        header: "Message",
        message: this.errText,
        buttons: ["confirm"],
      });
      await alert.present();
      return;
    }
    data.push(form);
    const toast = await this.toastController.create({
      message: 'saved success',
      duration: 2000,
      color​:"success"
    });
    toast.present();
    sessionStorage.setItem("data", JSON.stringify(data));
  }
}
