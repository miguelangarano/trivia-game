import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
    userService: UserService
    router: Router
    constructor(userService: UserService, router: Router) {
        this.userService = userService
        this.router = router
    }

    ngOnInit() {
        this.isLoggedIn()
    }

    userName = ""

    onUserNameCreate() {
        if (this.userName === "") {
            alert("El nombre no debe estar vacío.")
            return
        }
        this.userService.createUserName(this.userName)
        this.router.navigateByUrl('/game');
    }

    isLoggedIn() {
        const userName = localStorage.getItem("userName")
        if (userName != null) {
            this.userService.createUserName(userName)
            this.router.navigateByUrl('/game')
        }
    }

}
