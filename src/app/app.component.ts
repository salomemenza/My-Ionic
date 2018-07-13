import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav, AlertController, ModalController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Personalizado
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { ApiListPage } from '../pages/api-list/api-list';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  showedAlert: boolean;
  confirmAlert;

  // make HelloIonicPage the root (or first) page
  rootPage = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public alertCtrl: AlertController,
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public modalCtrl: ModalController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'My API List', component: ApiListPage },
      { title: 'Iniciar Sesion', component: LoginPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.showedAlert = false;

        // Confirm exit
        this.platform.registerBackButtonAction(() => {
            if (this.nav.length() == 1) {
                if (!this.showedAlert) {
                    this.confirmExitApp();
                } else {
                    this.showedAlert = false;
                    this.confirmAlert.dismiss();
                }
            }

            this.nav.pop();
        });
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  confirmExitApp() {
    this.showedAlert = true;
    this.confirmAlert = this.alertCtrl.create({
        title: "Salir",
        message: "¿ Esta seguro que desea salir de la aplicación ?",
        buttons: [
            {
                text: 'Cancelar',
                handler: () => {
                    this.showedAlert = false;
                    return;
                }
            },
            {
                text: 'Aceptar',
                handler: () => {
                    this.platform.exitApp();
                }
            }
        ]
    });
    this.confirmAlert.present();
}

}
