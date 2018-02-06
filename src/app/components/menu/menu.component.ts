/**
 * Menu Page Component.
 */

import { Component, OnInit, ViewChild, Input, Output, EventEmitter, Inject, Renderer, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { User } from '../../components/models/user';
import { CommonAppService, UserService } from '../../services/index';

@Component({
    moduleId: "menuModule",
    selector: 'menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    providers: [
        CommonAppService,
        UserService
    ]
})

export class MenuComponent implements OnInit, AfterViewInit {
    public currentUser: any;
    public activePage = 'home';
    constructor(
        public _route: ActivatedRoute,
        public _router: Router,
        public _commonAppService: CommonAppService,
        public _userService: UserService
    ) {

        let THIS = this;
    }

    public ngOnInit() {

    }

    public ngAfterViewInit() {
    }

    public goToPage(page: any) {
        this.activePage = page;
        this._router.navigate([page]);
    }

    public logout() {
        let THIS = this;
        window.location.href = '/login';
    }
}
