import { Component, OnInit } from '@angular/core';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-multiple-pics',
  templateUrl: './multiple-pics.page.html',
  styleUrls: ['./multiple-pics.page.scss'],
})
export class MultiplePicsPage implements OnInit {

  constructor(
    private restService: RestService
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.restService.stopCamera();
  }

  stop() {
    this.restService.stopCamera();
  }

}
