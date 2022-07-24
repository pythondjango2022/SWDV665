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

  constructor(public navCtrl: NavController, public toastController: ToastController, public alertController: AlertController) {}

  async removeItem(item: any, index) {
    
    console.log("Message here", item);
    const toast = await this.toastController.create({
      message: 'The file has been deleted.' + item.name + item.quantity + "...",
      duration: 2000
    });
    toast.present();

    this.items.splice(item,1)
  }



  async editItem(item, index) {
    
    console.log("Edit message here - this is working", item);
    const toast = await this.toastController.create({
      message: "Editing item " + index + "",
      duration: 2000
    });
    toast.present();
    this.showEditItemPrompt(item, index);

  }

  async showEditItemPrompt(item, index) {
    const alert = await this.alertController.create({
      header: 'Edit Item',
      inputs: [
        {
          name: 'name',
          placeholder: 'Enter Grocery Item Name',
          value: item.name,
        },
  
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'Enter Quantity',
          value: item.quantity,
          min: 1,
          max: 100
        },
      ],
      buttons: [
        {
        text: 'Cancel',
        handler: data => {
          console.log("Cancel clicked");
        }
      },
  
      {
        text: 'Save',
        handler: item => {
          console.log('Save clicked', item);
        this.items[index] = item;
        }
      }
  
      ]
      
      
  
      
    });
    
    await alert.present();
    console.log(this.items)
    
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
        console.log("Details", + item.name + item.quantity + "");
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

function index(index: any, arg1: number) {
  throw new Error('Function not implemented.');
}

