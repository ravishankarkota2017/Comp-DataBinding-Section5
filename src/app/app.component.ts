import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  serverElements = [
    { name: "Zen-Server-1", type: "server", content: "Zen ePortal Server" },
    { name: "Zen-PC-1", type: "blueprint", content: "Zen Terminal" }
  ];

  remoteElements = [
    { name: "Remote-Server-1", type: "server", content: "Remote HP ePortal Server" },
    { name: "Remote-PC-1", type: "blueprint", content: "Remote DELL Terminal" }
  ];

  onNewServerAdded(newServerData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: "server",
      name: newServerData.serverName,
      content: newServerData.serverContent
    });
  }

  onNewBlueprintAdded(newBPData: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: "blueprint",
      name: newBPData.serverName,
      content: newBPData.serverContent
    });
  }
}
