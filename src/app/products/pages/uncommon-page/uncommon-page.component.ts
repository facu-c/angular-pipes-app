import { Component } from '@angular/core';
import { interval } from 'rxjs';

type genders = 'male' | 'female';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Facundo';
  public gender: genders = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  public changeClient():void {
    this.name = 'Eva';
    this.gender = 'female';
  }

  // i18n Plural
  public clientes: string[] = ['maria','eva','leonidas','alejandro','milagros'];
  public clientesMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  public deleteClient(): void {
    this.clientes.shift();
  }

  //KeyValue Pipe
  public person = {
    name: 'Facundo',
    age: 22,
    address: 'Buenos Aires, Argentina'
  }

  //Async Pipe
  public myObservableTimer = interval(2000);

}
