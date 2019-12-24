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

    constructor(){
        setTimeout(() => {
            this.IsServerDisabled = false;
        } , 2000); //Enable button after two seconds.
    }

    ngOnInit(): void {
                    throw new Error("Method not implemented.");
                }
}