"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const axios_1 = __importDefault(require("axios"));
/*
request('http://www.google.com', function (error, response, body) {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body); // Print the HTML for the Google homepage.
});
*/
/*
request
    .get('https://i.pinimg.com/736x/5a/6b/0d/5a6b0d677a4b3c73a58404546cddd7e1.jpg')
    .on('response', function (response) {
        console.log(response.statusCode) // 200
        console.log(response.headers['content-type']) // 'image/png'
    })
    
*/
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
    /*
    const req = request(
        {
            host: 'emergency.nofap.com',
            path: '/director.php?cat=em&religious=false',
            method: 'GET',
        },
        response => {
            response.pipe(fileStream);
        }
    );
    */
    async exec(message) {
        const response = await axios_1.default.get('https://emergency.nofap.com/director.php?cat=em&religious=false');
        return message.channel.send(response.data);
        //return message.channel.send(request.get);
        //https://jsonplaceholder.typicode.com/posts/1
        //const response = await axios.get(config.urls.emergency)
        //return message.channel.send(response.data)
    }
}
exports.default = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGluZ0NvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvUHVibGljQ29tbWFuZHMvUGluZ0NvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBdUM7QUFJdkMsa0RBQXlCO0FBRXpCOzs7Ozs7RUFNRTtBQUVGOzs7Ozs7OztFQVFFO0FBRUYsTUFBcUIsV0FBWSxTQUFRLHdCQUFPO0lBQzVDO1FBQ0ksS0FBSyxDQUFDLFdBQVcsRUFBRTtZQUNmLE9BQU8sRUFBRSxDQUFDLFdBQVcsQ0FBQztZQUN0QixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRTtnQkFDVCxPQUFPLEVBQUUsNENBQTRDO2dCQUNyRCxLQUFLLEVBQUMsV0FBVztnQkFDakIsUUFBUSxFQUFFO29CQUNOLFdBQVc7aUJBQ2Q7YUFDSjtZQUNELFNBQVMsRUFBRSxDQUFDO1NBQ2YsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNEOzs7Ozs7Ozs7OztNQVdFO0lBSUssS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFlO1FBQzdCLE1BQU0sUUFBUSxHQUFHLE1BQU0sZUFBSyxDQUFDLEdBQUcsQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDO1FBQ3BHLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTNDLDJDQUEyQztRQUczQyw4Q0FBOEM7UUFDOUMseURBQXlEO1FBQ3pELDRDQUE0QztJQUNoRCxDQUFDO0NBQ0o7QUF6Q0QsOEJBeUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21tYW5kfSBmcm9tIFwiZGlzY29yZC1ha2Fpcm9cIjtcclxuaW1wb3J0IHtNZXNzYWdlfSBmcm9tIFwiZGlzY29yZC5qc1wiO1xyXG5pbXBvcnQgeyBjcmVhdGVXcml0ZVN0cmVhbSB9IGZyb20gJ2ZzJztcclxuaW1wb3J0IHJlcXVlc3QgZnJvbSAncmVxdWVzdCc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbi8qXHJcbnJlcXVlc3QoJ2h0dHA6Ly93d3cuZ29vZ2xlLmNvbScsIGZ1bmN0aW9uIChlcnJvciwgcmVzcG9uc2UsIGJvZHkpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yOicsIGVycm9yKTsgLy8gUHJpbnQgdGhlIGVycm9yIGlmIG9uZSBvY2N1cnJlZFxyXG4gICAgY29uc29sZS5sb2coJ3N0YXR1c0NvZGU6JywgcmVzcG9uc2UgJiYgcmVzcG9uc2Uuc3RhdHVzQ29kZSk7IC8vIFByaW50IHRoZSByZXNwb25zZSBzdGF0dXMgY29kZSBpZiBhIHJlc3BvbnNlIHdhcyByZWNlaXZlZFxyXG4gICAgY29uc29sZS5sb2coJ2JvZHk6JywgYm9keSk7IC8vIFByaW50IHRoZSBIVE1MIGZvciB0aGUgR29vZ2xlIGhvbWVwYWdlLlxyXG59KTtcclxuKi9cclxuXHJcbi8qXHJcbnJlcXVlc3RcclxuICAgIC5nZXQoJ2h0dHBzOi8vaS5waW5pbWcuY29tLzczNngvNWEvNmIvMGQvNWE2YjBkNjc3YTRiM2M3M2E1ODQwNDU0NmNkZGQ3ZTEuanBnJylcclxuICAgIC5vbigncmVzcG9uc2UnLCBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5zdGF0dXNDb2RlKSAvLyAyMDBcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5oZWFkZXJzWydjb250ZW50LXR5cGUnXSkgLy8gJ2ltYWdlL3BuZydcclxuICAgIH0pXHJcbiAgICBcclxuKi9cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpbmdDb21tYW5kIGV4dGVuZHMgQ29tbWFuZHtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKFwiZW1lcmdlbmN5XCIsIHtcclxuICAgICAgICAgICAgYWxpYXNlczogW1wiZW1lcmdlbmN5XCJdLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJQdWJsaWNDb21tYW5kc1wiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJQcm92aWRlIHN1cHBvcnQgZm9yIHRoZSBmcm9udGxpbmUgdHJvb3BlcnNcIixcclxuICAgICAgICAgICAgICAgIHVzYWdlOlwiZW1lcmdlbmN5XCIsXHJcbiAgICAgICAgICAgICAgICBleGFtcGxlczogW1xyXG4gICAgICAgICAgICAgICAgICAgIFwiZW1lcmdlbmN5XCJcclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmF0ZWxpbWl0OiAzXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAgY29uc3QgcmVxID0gcmVxdWVzdChcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGhvc3Q6ICdlbWVyZ2VuY3kubm9mYXAuY29tJyxcclxuICAgICAgICAgICAgcGF0aDogJy9kaXJlY3Rvci5waHA/Y2F0PWVtJnJlbGlnaW91cz1mYWxzZScsXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJlc3BvbnNlLnBpcGUoZmlsZVN0cmVhbSk7XHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuICAgICovXHJcblxyXG4gICAgXHJcblxyXG4gICAgcHVibGljIGFzeW5jIGV4ZWMobWVzc2FnZTpNZXNzYWdlKTogUHJvbWlzZTxNZXNzYWdlPntcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldCgnaHR0cHM6Ly9lbWVyZ2VuY3kubm9mYXAuY29tL2RpcmVjdG9yLnBocD9jYXQ9ZW0mcmVsaWdpb3VzPWZhbHNlJyk7XHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKHJlcXVlc3QuZ2V0KTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgLy9odHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHMvMVxyXG4gICAgICAgIC8vY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoY29uZmlnLnVybHMuZW1lcmdlbmN5KVxyXG4gICAgICAgIC8vcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKHJlc3BvbnNlLmRhdGEpXHJcbiAgICB9XHJcbn0iXX0=