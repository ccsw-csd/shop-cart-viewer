import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { EVENT_DATA } from './mock';
import { KafkaService } from './kafka-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {

    data : any[] = [];
    topics: any = {
        "shop_order": { "ok": [false, false, false, false], "ko" : [false, false, false, false]}, 
        "invoice": { "ok": [false, false, false, false], "ko" : [false, false, false, false]}, 
        "payment": { "ok": [false, false, false, false], "ko" : [false, false, false, false]}, 
        "shipment": { "ok": [false, false, false, false], "ko" : [false, false, false, false]}, 
        "stock": { "ok": [false, false, false, false], "ko" : [false, false, false, false]}, 
        "notification": { "ok": [false, false, false, false], "ko" : [false, false, false, false]}
    };
    

    constructor(        
        private kafkaService: KafkaService,
    ) { 
    }

    ngOnInit(): void {

        //setInterval(() => this.loadData(), 5000);
        
        this.loadData();

    }

    loadData() : void {
        this.kafkaService.getEvents().subscribe((data) => {
            this.refreshDataOnView(data);
        });
    }

    cleanFlagsTeam(team) {
        this.topics["shop_order"]["ok"][team] = false;
        this.topics["shop_order"]["ko"][team] = false;

        this.topics["invoice"]["ok"][team] = false;
        this.topics["invoice"]["ko"][team] = false;

        this.topics["payment"]["ok"][team] = false;
        this.topics["payment"]["ko"][team] = false;

        this.topics["shipment"]["ok"][team] = false;
        this.topics["shipment"]["ko"][team] = false;

        this.topics["stock"]["ok"][team] = false;
        this.topics["stock"]["ko"][team] = false;

        this.topics["notification"]["ok"][team] = false;
        this.topics["notification"]["ko"][team] = false;
    }

    refreshDataOnView(data: any[]) : void {
        let inverseOrderData = data.sort((a,b) => a.timestamp - b.timestamp);

        inverseOrderData.forEach(item => {

            let topic = item.topic;
            let team = item.data.team-1;
            let success = item.data.success;
            
            if (topic === "stock" && success) {
                this.cleanFlagsTeam(team);
            }

            if (success)
                this.topics[topic]["ok"][team] = true;
            else
                this.topics[topic]["ko"][team] = true;
            
        })

        this.data = data.sort((a,b) => b.timestamp - a.timestamp);        
    }





}
