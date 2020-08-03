"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GithubApiService = void 0;
const request = __importStar(require("request"));
class GithubApiService {
    getUserInfo() {
        request.get('https://i.pinimg.com/736x/5a/6b/0d/5a6b0d677a4b3c73a58404546cddd7e1.jpg', (error, response, body) => {
            return body;
        });
    }
    getRepos() {
    }
}
exports.GithubApiService = GithubApiService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiR2l0aHViQXBpU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tYW5kcy9QdWJsaWNDb21tYW5kcy9HaXRodWJBcGlTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBbUM7QUFFbkMsTUFBYSxnQkFBZ0I7SUFDekIsV0FBVztRQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMseUVBQXlFLEVBQUUsQ0FBQyxLQUFTLEVBQUUsUUFBYSxFQUFFLElBQVMsRUFBRSxFQUFFO1lBQzNILE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUNELFFBQVE7SUFFUixDQUFDO0NBQ0o7QUFURCw0Q0FTQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJlcXVlc3QgZnJvbSAncmVxdWVzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgR2l0aHViQXBpU2VydmljZSB7XHJcbiAgICBnZXRVc2VySW5mbygpIHtcclxuICAgICAgICByZXF1ZXN0LmdldCgnaHR0cHM6Ly9pLnBpbmltZy5jb20vNzM2eC81YS82Yi8wZC81YTZiMGQ2NzdhNGIzYzczYTU4NDA0NTQ2Y2RkZDdlMS5qcGcnLCAoZXJyb3I6YW55LCByZXNwb25zZTogYW55LCBib2R5OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldFJlcG9zKCkge1xyXG5cclxuICAgIH1cclxufSJdfQ==