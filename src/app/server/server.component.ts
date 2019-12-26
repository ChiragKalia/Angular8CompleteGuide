import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:[`span{ color: green }
    `]
})
export class ServerComponent implements OnInit{
    ServerNumber = 10;
    ServerStatus = 'Online';
    IsServerDisabled = true;
    ServerCreationStatus = "No Server Was Created!";
    ServerName = '';
    constructor(){
        setTimeout(() => {
            this.IsServerDisabled = false;
        } , 2000); //Enable button after two seconds.
    }

    OnServerCreated(){
        this.ServerCreationStatus = "One Server Was Created!";
    }
    OnServerNameUpdate(event: Event){
        this.ServerName = (<HTMLInputElement>event.target).value;
    }
    ngOnInit(): void {
                    throw new Error("Method not implemented.");
                }
}