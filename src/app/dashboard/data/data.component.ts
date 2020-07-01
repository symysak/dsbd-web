import {Component, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../service/data.service";


class dataStruct {
  public id: string;
  public as: number;
  public ipv4: string[];
  public ipv6: string[];
  public service: string;
  public name: string;
  public fee: string;
  public assign: string;
  public connection: string;
  public noc: string;
  public terminatedAddress: string;
  public linkInfov4: { our: string, your: string };
  public linkInfov6: { our: string, your: string };

}

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {

  constructor(
    private dataService: DataService,
  ) {
  }

  public data: dataStruct[] = [];


  ngOnInit() {
    this.dataService.getUserNetData().then(d => {
      d.forEach(d => {
        console.log(d.id + '=>' + d.data());
        this.data.push({
          as: d.data().as,
          assign: d.data().assign,
          fee: d.data().fee,
          ipv4: d.data().v4.split(','),
          ipv6: d.data().v6.split(','),
          name: d.data().name,
          service: d.data().service,
          id: d.id,
          connection: d.data().connection,
          noc: d.data().noc,
          terminatedAddress: d.data().terminatedAddress,
          linkInfov4: {our: d.data().v4_your, your: d.data().v4_our},
          linkInfov6: {our: d.data().v6_your, your: d.data().v6_our},
        })
        // this.id = d.id;
        // this.service = d.data().as;
        // this.ipv4 = d.data().v4.split(',');
        // this.ipv6 = d.data().v6.split(',');
        // this.service = d.data().service;
        // this.name = d.data().name;
        // this.fee = d.data().fee;
        // this.assign = d.data().assign;

        // this.contract = {service: d.data().service, name: d.data().name, fee: d.data().fee, assign: d.data().assign}
        // console.log(this.contract.service)
      })
    })
  }
}
