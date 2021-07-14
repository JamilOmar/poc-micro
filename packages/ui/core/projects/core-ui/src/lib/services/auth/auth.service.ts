import { Injectable } from "@angular/core";
import { KeycloakService } from "keycloak-angular";

@Injectable({
    providedIn: 'root',
})
export class AuthService{
    constructor(private client: KeycloakService){

    }

    async login(){
        return await this.client.login();
    }
    async logout(){
        return await this.client.logout();
    }
    async isLoggedIn(){
        return await this.client.isLoggedIn();
    }
    async loadUserProfile(){
        return await this.client.loadUserProfile();
    }
}