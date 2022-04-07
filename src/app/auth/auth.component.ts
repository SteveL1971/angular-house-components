import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { DataStorageService } from "../shared/data-storage.service";
import { Role } from "../shared/role.model";
import { ShoppingListService } from "../shopping-list.service";
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
                private shoppingListService: ShoppingListService,
                private dataStorageService: DataStorageService,        
        private router: Router) {}

    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }

    onCreateRole(localId: string, role: string) {
        const userRole = new Role(localId, role)
        this.shoppingListService.addRole(userRole);
        this.dataStorageService.storeRoles(); 
    }

    onSubmit(form: NgForm) {
        if (!form.valid){
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        const role = form.value.role;

        this.isLoading=true;

        if(this.isLoginMode){
            this.authService.login(email,password).subscribe(
                resData => {
                    this.isLoading=false;
                    this.dataStorageService.fetchHouses().subscribe();
                    this.dataStorageService.fetchItems().subscribe();
                    this.dataStorageService.fetchOrders().subscribe();
                    this.dataStorageService.fetchRoles().subscribe();
                    this.router.navigate(['/']);
                },
                errorMessage => {
                    this.error=errorMessage;
                    this.isLoading=false;
                }
            );
        } else {
            this.authService.signup(email, password).subscribe(
                resData => {
                    this.onCreateRole(resData.localId, role);
                    this.isLoading=false;
                    this.router.navigate(['/'])
                },
                errorMessage => {
                    this.error=errorMessage;
                    this.isLoading=false;
                }
            );
    
            form.reset();
        }

    }
}