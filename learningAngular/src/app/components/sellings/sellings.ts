import { Component } from '@angular/core';
import { Film } from '../film/film';
import { NgClass, NgStyle } from '@angular/common';

@Component({
  selector: 'app-sellings',
  imports: [Film, NgClass, NgStyle],
  templateUrl: './sellings.html',
  styleUrl: './sellings.scss',
})
export class Sellings {

  public paint: boolean = true;

  public show: string = "no";

  public myStyles: { [key: string] : string} = {
    'background-color' : 'blue',
    'color' : 'white',
    'font-size' : '20px',
    'border-radius' : '40px',
    'padding' : '10px'
  }

  public tooglePaint():void{
    this.paint = !this.paint;
  }
  public toogleBackgroundColor():void{
    if(this.show == 'yes')
      this.show = 'no';
    else
      this.show = 'yes';
  }

}
