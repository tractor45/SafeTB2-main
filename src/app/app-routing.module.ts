import { ServicioCreaeditaComponent } from './page/servicio-creaedita/servicio-creaedita.component';
import { ServicioComponent } from './page/servicio/servicio.component';
import { DestinoCreaeditaComponent } from './page/destino-creaedita/destino-creaedita.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DestinoComponent } from './page/destino/destino.component';
import { PresupuestoComponent } from './page/presupuesto/presupuesto.component';

const routes: Routes = [{
  path: 'destinos', component: DestinoComponent,children:[
    {path:'nuevo', component: DestinoCreaeditaComponent},
    {
      path: 'edicion/:id',component:DestinoCreaeditaComponent}

  ]
} 
,{
  path:'presupuesto',component:PresupuestoComponent,children:[

  ]
},
{
  path :'servicio',component:ServicioComponent,children:[
    {path:'nuevo',component:ServicioCreaeditaComponent},
    {
      path:'edicion/:id',component:ServicioCreaeditaComponent
    }
  ]
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
