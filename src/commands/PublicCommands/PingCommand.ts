import {Command} from "discord-akairo";
import {Message} from "discord.js";

import request from 'request';

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

export default class PingCommand extends Command{
    public constructor(){
        super("emergency", {
            aliases: ["emergency"],
            category: "PublicCommands",
            description: {
                content: "Provide support for the frontline troopers",
                usage:"emergency",
                examples: [
                    "emergency"
                ]
            },
            ratelimit: 3
        });
    }
    public exec(message:Message): Promise<Message>{
        return message.channel.send(request.get('https://i.pinimg.com/736x/5a/6b/0d/5a6b0d677a4b3c73a58404546cddd7e1.jpg'));
        

        //const response = await axios.get(config.urls.emergency)
        //return message.channel.send(response.data)
    }
}