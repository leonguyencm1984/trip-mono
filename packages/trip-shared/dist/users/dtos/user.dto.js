"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginDTO = exports.RegisterDTO = void 0;
class RegisterDTO {
    constructor(phone, password, confirmPassword) {
        this.phone = phone;
        this.password = password;
        this.confirmPassword = confirmPassword;
    }
}
exports.RegisterDTO = RegisterDTO;
class LoginDTO {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }
}
exports.LoginDTO = LoginDTO;
