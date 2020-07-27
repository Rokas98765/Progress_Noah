"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("./Config");
const BotClient_1 = __importDefault(require("./client/BotClient"));
const client = new BotClient_1.default({ token: Config_1.token, owners: Config_1.owners });
client.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUF1QztBQUN2QyxtRUFBMkM7QUFFM0MsTUFBTSxNQUFNLEdBQWMsSUFBSSxtQkFBUyxDQUFDLEVBQUMsS0FBSyxFQUFMLGNBQUssRUFBQyxNQUFNLEVBQU4sZUFBTSxFQUFDLENBQUMsQ0FBQztBQUN4RCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3Rva2VuLCBvd25lcnN9IGZyb20gXCIuL0NvbmZpZ1wiO1xyXG5pbXBvcnQgQm90Q2xpZW50IGZyb20gXCIuL2NsaWVudC9Cb3RDbGllbnRcIjtcclxuXHJcbmNvbnN0IGNsaWVudDogQm90Q2xpZW50ID0gbmV3IEJvdENsaWVudCh7dG9rZW4sb3duZXJzfSk7XHJcbmNsaWVudC5zdGFydCgpOyJdfQ==