import { Component } from "@angular/core";
import { AlertController } from "@ionic/angular";
import { ToastController } from "@ionic/angular";
import { Router } from "@angular/router"; //路由传参用到


import { ActivatedRoute, Params } from "@angular/router"; //获取路由传参用到
@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  errText = "";
  id = "";
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
  constructor( private activateInfo: ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    public toastController: ToastController,
   
  ) {
    activateInfo.queryParams.subscribe((queryParams) => {
      const data = JSON.parse(sessionStorage.getItem("data") || "[]");
      this.id = queryParams["id"];
      this.form = data.filter((item: any) => item.memberId == this.id)[0];
    });
  }
  async handleSubmit() {
    this.errText = "";

    const form = this.form;
    const data = JSON.parse(sessionStorage.getItem("data") || "[]");
    if (!form.memberId) {
      this.errText = "member id must be entered.";
    }
    // const temp = data.filter((item: any) => item.memberId == form.memberId);
    // if (temp.length) {
    //   this.errText = "duplicate member id";
    // }
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
    const toast = await this.toastController.create({
      message: "saved success",
      duration: 2000,
      color: "success",
    });
    toast.present();
    data.forEach((item: any) => {
      if (item.memberId == form.memberId) {
        item.fullName = form.fullName;
        item.birth = form.birth;
        item.gender = form.gender;
        item.membershipType = form.membershipType;
        item.membershipStart = form.membershipStart;
        item.contactNumber = form.contactNumber;
        item.addr = form.addr;
        item.email = form.email;
        item.emergencyContactNumber = form.emergencyContactNumber;
        item.condition = form.condition;
      }
    });
    sessionStorage.setItem('data', JSON.stringify(data));
  }
}
