import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatepollComponent } from './createpoll/createpoll.component';
import { AnswerpollComponent } from './answerpoll/answerpoll.component';
import { ViewpollsComponent } from './viewpolls/viewpolls.component';

const routes: Routes = [
    {path: '', component: AnswerpollComponent},
    {path: 'create', component: CreatepollComponent},
    {path: 'view', component: ViewpollsComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule {}