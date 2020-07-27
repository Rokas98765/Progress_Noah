"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const path_1 = require("path");
const Config_1 = require("../Config");
class BotClient extends discord_akairo_1.AkairoClient {
    constructor(config) {
        super({
            ownerID: config.owners
        });
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: path_1.join(__dirname, "..", "listeners")
        });
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            directory: path_1.join(__dirname, "..", "commands"),
            prefix: Config_1.prefix,
            allowMention: true,
            handleEdits: true,
            commandUtil: true,
            commandUtilLifetime: 3e5,
            defaultCooldown: 6e4,
            argumentDefaults: {
                prompt: {
                    modifyStart: (_, str) => `$[str]\n\nType \`cancel\` to cancel the command...`,
                    modifyRetry: (_, str) => `$[str]\n\nType \`cancel\` to cancel the command...`,
                    timeout: "You took too long, the command has now been cancelled...",
                    ended: "You exceeded the maximum amount of tries, this command has now been cancelled...",
                    cancel: "This command has now bee cancelled...",
                    retries: 3,
                    time: 3e4
                },
                otherwise: ""
            },
            ignorePermissions: Config_1.owners
        });
        this.config = config;
    }
    async _init() {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            process
        });
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
    }
    async start() {
        await this._init();
        return this.login(this.config.token);
    }
}
exports.default = BotClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBNkU7QUFFN0UsK0JBQTBCO0FBQzFCLHNDQUF5QztBQWN6QyxNQUFxQixTQUFVLFNBQVEsNkJBQVk7SUE2Qi9DLFlBQW1CLE1BQWtCO1FBQ2pDLEtBQUssQ0FBQztZQUNGLE9BQU8sRUFBRSxNQUFNLENBQUMsTUFBTTtTQUN6QixDQUFDLENBQUM7UUE5QkEsb0JBQWUsR0FBb0IsSUFBSSxnQ0FBZSxDQUFDLElBQUksRUFBRTtZQUNoRSxTQUFTLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDO1NBQ2hELENBQUMsQ0FBQztRQUVJLG1CQUFjLEdBQW1CLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQUU7WUFDN0QsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQztZQUM1QyxNQUFNLEVBQUUsZUFBTTtZQUNkLFlBQVksRUFBRSxJQUFJO1lBQ2xCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLFdBQVcsRUFBRSxJQUFJO1lBQ2pCLG1CQUFtQixFQUFFLEdBQUc7WUFDeEIsZUFBZSxFQUFFLEdBQUc7WUFDcEIsZ0JBQWdCLEVBQUU7Z0JBQ2QsTUFBTSxFQUFFO29CQUNKLFdBQVcsRUFBRSxDQUFDLENBQVUsRUFBRSxHQUFXLEVBQVUsRUFBRSxDQUFDLG9EQUFvRDtvQkFDdEcsV0FBVyxFQUFFLENBQUMsQ0FBVSxFQUFFLEdBQVcsRUFBVSxFQUFFLENBQUMsb0RBQW9EO29CQUN0RyxPQUFPLEVBQUUsMERBQTBEO29CQUNuRSxLQUFLLEVBQUUsa0ZBQWtGO29CQUN6RixNQUFNLEVBQUUsdUNBQXVDO29CQUMvQyxPQUFPLEVBQUUsQ0FBQztvQkFDVixJQUFJLEVBQUUsR0FBRztpQkFDWjtnQkFDRCxTQUFTLEVBQUUsRUFBRTthQUNoQjtZQUNELGlCQUFpQixFQUFFLGVBQU07U0FDNUIsQ0FBQyxDQUFDO1FBTUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDekIsQ0FBQztJQUVPLEtBQUssQ0FBQyxLQUFLO1FBQ2YsSUFBSSxDQUFDLGNBQWMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxXQUFXLENBQUM7WUFDN0IsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjO1lBQ25DLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxPQUFPO1NBQ1YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFTSxLQUFLLENBQUMsS0FBSztRQUNkLE1BQU0sSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25CLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pDLENBQUM7Q0FDSjtBQXBERCw0QkFvREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0FrYWlyb0NsaWVudCwgQ29tbWFuZEhhbmRsZXIsIExpc3RlbmVySGFuZGxlcn0gZnJvbSBcImRpc2NvcmQtYWthaXJvXCI7XHJcbmltcG9ydCB7VXNlciwgTWVzc2FnZX0gZnJvbSBcImRpc2NvcmQuanNcIjtcclxuaW1wb3J0IHtqb2lufSBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQge3ByZWZpeCwgb3duZXJzfSBmcm9tIFwiLi4vQ29uZmlnXCI7XHJcblxyXG5kZWNsYXJlIG1vZHVsZSBcImRpc2NvcmQtYWthaXJvXCIge1xyXG4gICAgaW50ZXJmYWNlIEFrYWlyb0NsaWVudHtcclxuICAgICAgICBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXI7XHJcbiAgICAgICAgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmludGVyZmFjZSBCb3RPcHRpb25ze1xyXG4gICAgdG9rZW4/OiBzdHJpbmc7XHJcbiAgICBvd25lcnM/OiBzdHJpbmcgfCBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm90Q2xpZW50IGV4dGVuZHMgQWthaXJvQ2xpZW50e1xyXG4gICAgcHVibGljIGNvbmZpZzogQm90T3B0aW9ucztcclxuICAgIHB1YmxpYyBsaXN0ZW5lckhhbmRsZXI6IExpc3RlbmVySGFuZGxlciA9IG5ldyBMaXN0ZW5lckhhbmRsZXIodGhpcywge1xyXG4gICAgICAgIGRpcmVjdG9yeTogam9pbihfX2Rpcm5hbWUsIFwiLi5cIiwgXCJsaXN0ZW5lcnNcIilcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBjb21tYW5kSGFuZGxlcjogQ29tbWFuZEhhbmRsZXIgPSBuZXcgQ29tbWFuZEhhbmRsZXIodGhpcywge1xyXG4gICAgICAgIGRpcmVjdG9yeTogam9pbihfX2Rpcm5hbWUsIFwiLi5cIiwgXCJjb21tYW5kc1wiKSxcclxuICAgICAgICBwcmVmaXg6IHByZWZpeCxcclxuICAgICAgICBhbGxvd01lbnRpb246IHRydWUsXHJcbiAgICAgICAgaGFuZGxlRWRpdHM6IHRydWUsXHJcbiAgICAgICAgY29tbWFuZFV0aWw6IHRydWUsXHJcbiAgICAgICAgY29tbWFuZFV0aWxMaWZldGltZTogM2U1LFxyXG4gICAgICAgIGRlZmF1bHRDb29sZG93bjogNmU0LFxyXG4gICAgICAgIGFyZ3VtZW50RGVmYXVsdHM6IHtcclxuICAgICAgICAgICAgcHJvbXB0OiB7XHJcbiAgICAgICAgICAgICAgICBtb2RpZnlTdGFydDogKF86IE1lc3NhZ2UsIHN0cjogc3RyaW5nKTogc3RyaW5nID0+IGAkW3N0cl1cXG5cXG5UeXBlIFxcYGNhbmNlbFxcYCB0byBjYW5jZWwgdGhlIGNvbW1hbmQuLi5gLFxyXG4gICAgICAgICAgICAgICAgbW9kaWZ5UmV0cnk6IChfOiBNZXNzYWdlLCBzdHI6IHN0cmluZyk6IHN0cmluZyA9PiBgJFtzdHJdXFxuXFxuVHlwZSBcXGBjYW5jZWxcXGAgdG8gY2FuY2VsIHRoZSBjb21tYW5kLi4uYCxcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IFwiWW91IHRvb2sgdG9vIGxvbmcsIHRoZSBjb21tYW5kIGhhcyBub3cgYmVlbiBjYW5jZWxsZWQuLi5cIixcclxuICAgICAgICAgICAgICAgIGVuZGVkOiBcIllvdSBleGNlZWRlZCB0aGUgbWF4aW11bSBhbW91bnQgb2YgdHJpZXMsIHRoaXMgY29tbWFuZCBoYXMgbm93IGJlZW4gY2FuY2VsbGVkLi4uXCIsXHJcbiAgICAgICAgICAgICAgICBjYW5jZWw6IFwiVGhpcyBjb21tYW5kIGhhcyBub3cgYmVlIGNhbmNlbGxlZC4uLlwiLFxyXG4gICAgICAgICAgICAgICAgcmV0cmllczogMyxcclxuICAgICAgICAgICAgICAgIHRpbWU6IDNlNFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvdGhlcndpc2U6IFwiXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlnbm9yZVBlcm1pc3Npb25zOiBvd25lcnNcclxuICAgIH0pO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcihjb25maWc6IEJvdE9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIG93bmVySUQ6IGNvbmZpZy5vd25lcnNcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIF9pbml0KCk6UHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgdGhpcy5jb21tYW5kSGFuZGxlci51c2VMaXN0ZW5lckhhbmRsZXIodGhpcy5saXN0ZW5lckhhbmRsZXIpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJIYW5kbGVyLnNldEVtaXR0ZXJzKHtcclxuICAgICAgICAgICAgY29tbWFuZEhhbmRsZXI6IHRoaXMuY29tbWFuZEhhbmRsZXIsXHJcbiAgICAgICAgICAgIGxpc3RlbmVySGFuZGxlcjogdGhpcy5saXN0ZW5lckhhbmRsZXIsXHJcbiAgICAgICAgICAgIHByb2Nlc3NcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21tYW5kSGFuZGxlci5sb2FkQWxsKCk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lckhhbmRsZXIubG9hZEFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBzdGFydCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIGF3YWl0IHRoaXMuX2luaXQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5sb2dpbih0aGlzLmNvbmZpZy50b2tlbik7XHJcbiAgICB9XHJcbn0iXX0=