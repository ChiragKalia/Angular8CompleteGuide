import { Component } from '@angular/core';
import { read } from 'fs';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent{
    ServerNumber = 10;
    ServerStatus = 'Online';
    ServerCreated = false;
    ServerCreationStatus = "No Server Was Created!";
    ServerName = "";
    constructor(){
        this.ServerStatus = Math.random() > 0.5 ? 'Online' : 'Offline'
    }

    OnServerCreated(){
        this.ServerCreated = true;
        this.ServerCreationStatus = "One Server Was Created! Server Name is "+ this.ServerName;
    }

    getColor(){
        return this.ServerStatus === 'Online' ? 'green' : 'red';
    }


}