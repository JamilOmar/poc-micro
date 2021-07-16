import { Injectable } from "@angular/core";
import { KeycloakService } from "keycloak-angular";

@Injectable({
    providedIn: 'root',
})
export class AuthService{
    constructor(private client: KeycloakService){

    }

    async init(options:any){
        return this.client.init(options)
    }

    async login(){
        return  this.client.login();
    }
    async logout(){
        return  this.client.logout();
    }
    async isLoggedIn(){
        return  this.client.isLoggedIn();
    }
    async loadUserProfile(){
        return  this.client.loadUserProfile();
    }
}