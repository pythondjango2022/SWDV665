import { Component } from '@angular/core';
import { IonText, NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  title = "Grocery List";

  items = [

    {

      name: "Milk",
      quantity: 2

    },

    {

      name: "Bread",
      quantity: 1

    },

    {

      name: "Banana",
      quantity: 3

    },

    {

      name: "Sugar",
      quantity: 1

    },



  ];

  constructor(public navCtrl: NavController, public toastController: ToastController, private alertController: AlertController) {}

  async removeItem(item: any) {

    console.log("Message here", item);
    const toast = await this.toastController.create({
      message: 'The file has been deleted.' + item.name + "...",
      duration: 2000
    });
    toast.present();
  }

addItem() {

  console.log("Adding an item");
  this.showAddItemPrompt();
}

async showAddItemPrompt() {
  const alert = await this.alertController.create({
    header: 'Add Item',
    buttons: [{

      text: 'Cancel',
      handler: data => {
        console.log("Cancel clicked");
      }
    },

    {
      text: 'Save',
      handler: item=> {
        console.log("Saved clicked", this.items.push(item));
      }
    }

    ],

    inputs: [
      {
        name: 'name',
        placeholder: 'Enter Grocery Item Name'
      },

      {
        name: 'quantity',
        type: 'number',
        placeholder: 'Enter Quantity',
        min: 1,
        max: 100
      },
    ]
  });

  await alert.present();
}



}
function item(item: any): any {
  throw new Error('Function not implemented.');
}

