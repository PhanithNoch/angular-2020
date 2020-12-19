import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  today: number = Date.now();

  title = "holidays";
  mode = "light";
  // array 1 dimensional
  users: any = [
    { name: "tida", gender: "female" },
    { name: "nini", gender: "female" },
    { name: "vanda", gender: "male" },
  ];

  onPress() {
    console.log(this.title);
  }

  onChagenColor() {
    if (this.mode == "light") {
      this.mode = "dark";
    } else {
      this.mode = "light";
    }
  }
}
