"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDTO = void 0;
class LoginDTO {
    constructor(email, password, confirmPassword) {
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}
exports.LoginDTO = LoginDTO;
