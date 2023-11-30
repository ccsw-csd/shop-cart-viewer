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
        "shop_order": { "ok": [0, 0, 0, 0], "ko" : [0, 0, 0, 0]}, 
        "invoice": { "ok": [0, 0, 0, 0], "ko" : [0, 0, 0, 0]}, 
        "payment": { "ok": [0, 0, 0, 0], "ko" : [0, 0, 0, 0]}, 
        "shipment": { "ok": [0, 0, 0, 0], "ko" : [0, 0, 0, 0]}, 
        "stock": { "ok": [0, 0, 0, 0], "ko" : [0, 0, 0, 0]}, 
        "notification": { "ok": [0, 0, 0, 0], "ko" : [0, 0, 0, 0]}
    };
    

    constructor(        
        private kafkaService: KafkaService,
    ) { 
    }

    ngOnInit(): void {

        setInterval(() => this.loadData(), 5000);
        
        //this.loadData();

    }

    loadData() : void {
        this.kafkaService.getEvents().subscribe((data) => {
            this.refreshDataOnView(data);
        });
    }

    cleanFlagsTeam(team) {
        this.topics["shop_order"]["ok"][team] = 0;
        this.topics["shop_order"]["ko"][team] = 0;

        this.topics["invoice"]["ok"][team] = 0;
        this.topics["invoice"]["ko"][team] = 0;

        this.topics["payment"]["ok"][team] = 0;
        this.topics["payment"]["ko"][team] = 0;

        this.topics["shipment"]["ok"][team] = 0;
        this.topics["shipment"]["ko"][team] = 0;

        this.topics["stock"]["ok"][team] = 0;
        this.topics["stock"]["ko"][team] = 0;

        this.topics["notification"]["ok"][team] = 0;
        this.topics["notification"]["ko"][team] = 0;
    }

    refreshDataOnView(data: any[]) : void {
        let inverseOrderData = data.sort((a,b) => a.timestamp - b.timestamp);

        let indexTeam = [1, 1, 1, 1];

        inverseOrderData.forEach(item => {

            let topic = item.topic;
            let team = item.data.team-1;
            let success = item.data.success;
            
            if (topic === "stock" && success) {
                this.cleanFlagsTeam(team);
                indexTeam[team] = 1;
            }

            if (success)
                this.topics[topic]["ok"][team] = indexTeam[team]++;
            else
                this.topics[topic]["ko"][team] = indexTeam[team]++;
            
        })

        this.data = data.sort((a,b) => b.timestamp - a.timestamp);        
    }





}
