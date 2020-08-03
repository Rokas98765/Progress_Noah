import {Command} from "discord-akairo";
import {Message} from "discord.js";
import axios from 'axios'


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

    public async exec(message:Message): Promise<Message>{
        const response = await axios.get('https://emergency.nofap.com/director.php?cat=em&religious=false');
        return message.channel.send(response.data);
    }
}