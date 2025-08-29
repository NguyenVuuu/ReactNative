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
//Write a function that rejects a Promise with the error "Something went wrong" after 1 second
function rejectsPromise() {
    return new Promise((resolve, rejects) => {
        setTimeout(() => rejects(new Error('Something went wrong asdasdasd')), 1000);
    });
}
;
function reject() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield rejectsPromise();
        }
        catch (error) {
            console.error('error: ', error.message);
        }
        ;
    });
}
;
reject();
