import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-portofolio',
  standalone: true,
  imports: [CommonModule,],
  templateUrl: './portofolio.html',
  styleUrls: ['./portofolio.css']
})
export class Portofolio {

imgSrc=[
{src:'images/home.png', alt:'home'},
{src:'images/play.png', alt:'play'},
{src:'images/tart.png', alt:'tart'},
{src:'images/home.png', alt:'home'},
{src:'images/play.png', alt:'play'},
{src:'images/tart.png', alt:'tart'},

];

selectedImge:string|null=null;

openImg(src:string){
  this.selectedImge=src;
}

closeImg(){
  this.selectedImge=null;
}




}