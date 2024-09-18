import { Component } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  standalone: true,
  imports: [],
  templateUrl: './sidemenu.component.html',
  styleUrl: './sidemenu.component.css'
})
export class SidemenuComponent {
  userName: string = "Dorian";
  theme: string = "";
  widhtMenu: number = 25;
  visibleMenu: boolean = true;
  visibleBtnMenu: boolean = false;

  setVisibilitiBtnMenu():boolean{
    this.visibleBtnMenu = !this.visibleBtnMenu;
    return this.visibleBtnMenu;
  }

  setVisibilitiMenu():boolean{
    this.visibleMenu = !this.visibleMenu;
    return this.visibleMenu;
  }

  setThemeColor(color:string):string{
    return this.theme = color;
  }

  setSizeMenu(){
    this.widhtMenu+=10;
    if(this.widhtMenu>200){
      this.widhtMenu = 25;
    }
  }
}
