"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyNIN = void 0;
const axios_1 = __importDefault(require("axios"));
function verifyNIN(nin) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.post(`https://ors.brela.go.tz/um/load/load_nida/${nin}`);
            console.log(response.data);
            return {
                success: true,
                data: response.data,
            };
        }
        catch (error) {
            if (error instanceof Error) {
                return {
                    success: false,
                    error: error.message,
                };
            }
            else if (typeof error === "string") {
                return {
                    success: false,
                    error: error,
                };
            }
            else {
                return {
                    success: false,
                    error: "An unknown error occurred",
                };
            }
        }
    });
}
exports.verifyNIN = verifyNIN;
//# sourceMappingURL=index.js.map