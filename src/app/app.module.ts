//agregado por mi
import { RouterModule, Routes } from '@angular/router';




import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SkillsComponent } from './components/skills/skills.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { PortafolioComponent } from './components/portafolio/portafolio.component';
import { BasicComponent } from './components/basic/basic.component';
import { BotonFlotanteComponent } from './components/boton-flotante/boton-flotante.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'portafolio', component: PortafolioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full'},
  { path: '**', component: InicioComponent } // error 404
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PerfilComponent,
    InicioComponent,
    SkillsComponent,
    AvatarComponent,
    PortafolioComponent,
    BasicComponent,
    BotonFlotanteComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
