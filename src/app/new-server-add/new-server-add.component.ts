import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-new-server-add",
  templateUrl: "./new-server-add.component.html",
  styleUrls: ["./new-server-add.component.css"]
})
export class NewServerAddComponent implements OnInit {

  @ViewChild('newServerContent') inputServerContent:ElementRef

  constructor() {
    
  }
  ngOnInit() {
    console.log(this.inputServerContent); 
  }

  @Output()
  serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated")
  blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

 // newServerName: string = "Zen-Test-Server";
 // newServerContent: string = "";

  onAddServer(inputServerName: HTMLInputElement) {
    console.log(inputServerName);
    this.serverCreated.emit({
      serverName: inputServerName.value,
      serverContent: this.inputServerContent.nativeElement.value
    });
  }

  onAddBlueprint(inputServerName: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: inputServerName.value,
      serverContent: this.inputServerContent.nativeElement.value
    });
  }
}
