import { Component, OnInit } from '@angular/core';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  linkTheme = document.querySelector('#theme');
  links?: NodeListOf<Element>;//document.querySelectorAll('.selector');

  constructor(
    private settingsService: SettingsService
  ) { }
  
  ngOnInit(): void {
    this.settingsService.checkCurrentTheme();
    // console.log(this.links);
  }

  changeTheme(theme: string){
    this.settingsService.changeTheme(theme);
  }
}
