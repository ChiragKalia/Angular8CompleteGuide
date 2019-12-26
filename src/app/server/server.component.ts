import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:[`span{ color: green }
    `]
})
export class ServerComponent{
    ServerNumber = 10;
    ServerStatus = 'Online';
    ServerCreated = false;
    ServerCreationStatus = "No Server Was Created!";
    ServerName = "";
    constructor(){

    }

    OnServerCreated(){
        this.ServerCreated = true;
        this.ServerCreationStatus = "One Server Was Created! Server Name is "+ this.ServerName;
    }


}