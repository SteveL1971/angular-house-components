import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { AuthService } from "./auth.service";

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html',
    styleUrls: ['./auth.component.css']
})
export class AuthComponent {
    isLoginMode = true;
    isLoading = false;
    error: string = "";
    roles = ['user', 'admin'];

    constructor(private authService: AuthService,
                private dataStorageService: DataStorageService,        
        private router: Router) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onSubmit(form: NgForm) {
        if (!form.valid){
            return;
        }
        const email = form.value.email;
        const password = form.value.password;

        this.isLoading=true;

        if(this.isLoginMode){
            this.authService.login(email,password).subscribe(
                resData => {
                    console.log(resData);
                    this.isLoading=false;
                    this.dataStorageService.fetchHouses().subscribe();
                    this.dataStorageService.fetchItems().subscribe();
                    this.dataStorageService.fetchOrders().subscribe();
                    this.router.navigate(['/']);
                },
                errorMessage => {
                    console.log(errorMessage);
                    this.error=errorMessage;
                    this.isLoading=false;
                }
            );
        } else {
            this.authService.signup(email, password).subscribe(
                resData => {
                    console.log(resData);
                    this.isLoading=false;
                    this.router.navigate(['/'])
                },
                errorMessage => {
                    console.log(errorMessage);
                    this.error=errorMessage;
                    this.isLoading=false;
                }
            );
    
            form.reset();
        }

    }
}