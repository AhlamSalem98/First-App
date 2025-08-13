import { Routes } from '@angular/router';
import { Contact } from './componenets/contact/contact';
import { Portofolio } from './componenets/portofolio/portofolio';
import { Notfound } from './componenets/notfound/notfound';
import { Startpage } from './componenets/startpage/startpage';
import { About } from './componenets/about/about';

export const routes: Routes = [

{path:'',redirectTo:'startpage', pathMatch:'full'},
{path:'about',component:About,title:'about page'},
{path:'contact',component:Contact, title:'contact page'},
{path:'portfolio',component:Portofolio ,title:'portofolio page'},
{path:'startpage',component:Startpage,title:'start page'},
{path:'**',component:Notfound,title:'not found page'},
];
