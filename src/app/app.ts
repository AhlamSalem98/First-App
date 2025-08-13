import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './componenets/navbar/navbar';
import { About } from "./componenets/about/about";
import { Contact } from "./componenets/contact/contact";
import { Footer } from "./componenets/footer/footer";
import { Portofolio } from "./componenets/portofolio/portofolio";
import { Startpage } from './componenets/startpage/startpage';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar, About, Contact,Footer, Portofolio,Startpage],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('first-app');



}




