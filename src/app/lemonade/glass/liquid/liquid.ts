import { Component, Input } from '@angular/core';
import { Wave } from "./wave/wave";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-liquid',
  imports: [Wave, NgFor],
  templateUrl: './liquid.html',
  styleUrl: './liquid.css'
})
export class Liquid {

  @Input() percentLemonJuiceLiquid: number = 0
  @Input() percentSugarLiquid: number = 0
  @Input() numberOfIceCubesLiquid: number = 0

}
