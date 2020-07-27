"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class PingCommand extends discord_akairo_1.Command {
    constructor() {
        super("ping", {
            aliases: ["ping"],
            category: "PublicCommands",
            description: {
                content: "Check the latency of the ping to the Discord API",
                usage: "ping",
                examples: [
                    "ping"
                ]
            },
            ratelimit: 3
        });
    }
    exec(message) {
        return message.util.send(`Pong! \`${this.client.ws.ping}ms\``);
    }
}
exports.default = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGluZ0NvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvUHVibGljQ29tbWFuZHMvUGluZ0NvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBdUM7QUFHdkMsTUFBcUIsV0FBWSxTQUFRLHdCQUFPO0lBQzVDO1FBQ0ksS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNWLE9BQU8sRUFBRSxDQUFDLE1BQU0sQ0FBQztZQUNqQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsa0RBQWtEO2dCQUMzRCxLQUFLLEVBQUMsTUFBTTtnQkFDWixRQUFRLEVBQUU7b0JBQ04sTUFBTTtpQkFDVDthQUNKO1lBQ0QsU0FBUyxFQUFFLENBQUM7U0FDZixDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ00sSUFBSSxDQUFDLE9BQWU7UUFDdkIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUM7SUFDbkUsQ0FBQztDQUNKO0FBbEJELDhCQWtCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbWFuZH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpbmdDb21tYW5kIGV4dGVuZHMgQ29tbWFuZHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKFwicGluZ1wiLCB7XHJcbiAgICAgICAgICAgIGFsaWFzZXM6IFtcInBpbmdcIl0sXHJcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcIlB1YmxpY0NvbW1hbmRzXCIsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIkNoZWNrIHRoZSBsYXRlbmN5IG9mIHRoZSBwaW5nIHRvIHRoZSBEaXNjb3JkIEFQSVwiLFxyXG4gICAgICAgICAgICAgICAgdXNhZ2U6XCJwaW5nXCIsXHJcbiAgICAgICAgICAgICAgICBleGFtcGxlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwicGluZ1wiXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJhdGVsaW1pdDogM1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGV4ZWMobWVzc2FnZTpNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPntcclxuICAgICAgICByZXR1cm4gbWVzc2FnZS51dGlsLnNlbmQoYFBvbmchIFxcYCR7dGhpcy5jbGllbnQud3MucGluZ31tc1xcYGApO1xyXG4gICAgfVxyXG59Il19