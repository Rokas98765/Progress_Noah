"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const axios_1 = __importDefault(require("axios"));
class PingCommand extends discord_akairo_1.Command {
    constructor() {
        super("emergency", {
            aliases: ["emergency"],
            category: "PublicCommands",
            description: {
                content: "Provide support for the frontline troopers",
                usage: "emergency",
                examples: [
                    "emergency"
                ]
            },
            ratelimit: 3
        });
    }
    async exec(message) {
        const response = await axios_1.default.get('https://emergency.nofap.com/director.php?cat=em&religious=false');
        return message.channel.send(response.data);
    }
}
exports.default = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGluZ0NvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvUHVibGljQ29tbWFuZHMvUGluZ0NvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBdUM7QUFFdkMsa0RBQXlCO0FBR3pCLE1BQXFCLFdBQVksU0FBUSx3QkFBTztJQUM1QztRQUNJLEtBQUssQ0FBQyxXQUFXLEVBQUU7WUFDZixPQUFPLEVBQUUsQ0FBQyxXQUFXLENBQUM7WUFDdEIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixXQUFXLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLDRDQUE0QztnQkFDckQsS0FBSyxFQUFDLFdBQVc7Z0JBQ2pCLFFBQVEsRUFBRTtvQkFDTixXQUFXO2lCQUNkO2FBQ0o7WUFDRCxTQUFTLEVBQUUsQ0FBQztTQUNmLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQWU7UUFDN0IsTUFBTSxRQUFRLEdBQUcsTUFBTSxlQUFLLENBQUMsR0FBRyxDQUFDLGlFQUFpRSxDQUFDLENBQUM7UUFDcEcsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUNKO0FBcEJELDhCQW9CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbWFuZH0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7TWVzc2FnZX0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpbmdDb21tYW5kIGV4dGVuZHMgQ29tbWFuZHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKFwiZW1lcmdlbmN5XCIsIHtcclxuICAgICAgICAgICAgYWxpYXNlczogW1wiZW1lcmdlbmN5XCJdLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJQdWJsaWNDb21tYW5kc1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJQcm92aWRlIHN1cHBvcnQgZm9yIHRoZSBmcm9udGxpbmUgdHJvb3BlcnNcIixcclxuICAgICAgICAgICAgICAgIHVzYWdlOlwiZW1lcmdlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICBleGFtcGxlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZW1lcmdlbmN5XCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZTpNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPntcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9lbWVyZ2VuY3kubm9mYXAuY29tL2RpcmVjdG9yLnBocD9jYXQ9ZW0mcmVsaWdpb3VzPWZhbHNlJyk7XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgfVxyXG59Il19