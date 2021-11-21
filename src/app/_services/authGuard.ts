
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
    isAuth: boolean = true;
    canActivate(
        _route: ActivatedRouteSnapshot,
        _state: RouterStateSnapshot
    ): boolean {
        let text = localStorage.getItem('user');
        let user: any = {};
        if (text) {
            user = JSON.parse(text);
            if (user.isLogin) {
                this.isAuth = true;
            } else {
                this.isAuth = false;
            }
        } else {
            this.isAuth = false;
        }
        if (_state.url == '/login') {
            if (this.isAuth) {
                this.router.navigateByUrl('/blog');
                return false;
            } else {
                return true;
            }
        }

        if (this.isAuth) {
            return true;
        } else {
            this.router.navigateByUrl('/blog');
            return false;
        }
    }


}