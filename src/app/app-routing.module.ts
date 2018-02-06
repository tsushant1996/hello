/**
 * App Routing.
 */
import {NgModule}     from '@angular/core';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', 
                loadChildren: 'app/components/login/login.module#LoginModule'
            },
            {
                path: 'login', 
                loadChildren: 'app/components/login/login.module#LoginModule'
            },
            {   path: '**', 
                redirectTo: '' 
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}