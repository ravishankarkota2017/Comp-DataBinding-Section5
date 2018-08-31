import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-new-server-add",
  templateUrl: "./new-server-add.component.html",
  styleUrls: ["./new-server-add.component.css"]
})
export class NewServerAddComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
  str1 = new EventEmitter<string>();

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

  newServerName: string = "Zen-Test-Server";
  newServerContent: string = "A Test Server for new Projects";

  onAddServer() {
    this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });

    this.str1.emit("test");
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }
}
