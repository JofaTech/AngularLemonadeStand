import { Component, NgModule } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Lemonade } from "./lemonade/lemonade";
//import { ConvertMeasurementPipe } from './lemonade/product/convert-measurement.pipe';

@Component({
  selector: 'app-root',
  imports: [Lemonade],
  //imports: [RouterOutlet, Lemonade],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected title = 'lemonadestand';
}


