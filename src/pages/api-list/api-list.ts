import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//Rest Api
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-api-list',
  templateUrl: 'api-list.html'
})

export class ApiListPage {
  public countries: any;
  private errorMessage: string;

  data: any;
  public records: any;
  public count: number;

  constructor(public navCtrl: NavController, public rest: RestProvider) {
  }

  ionViewDidLoad() {
    this.getCountries();
    this.getProducts();
  }

  getCountries() {
    this.rest.getCountries()
      .subscribe(
        countries => this.countries = countries,
        error =>  this.errorMessage = <any>error
      );
  }

  getProducts(){
    this.rest.getProducts().subscribe(
      res => {
        this.data = res;
        this.count = this.data.count;
        this.records = this.data.result;
        console.log(this.records);
      },
      error =>  this.errorMessage = <any>error
    );
  }
}
