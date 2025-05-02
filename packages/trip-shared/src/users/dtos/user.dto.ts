export class RegisterDTO {
    constructor(
      public phone: string,
      public password: string,
      public confirmPassword: string
    ) {}
  }

  export class LoginDTO {
    constructor(
      public email: string,
      public password: string,
      public confirmPassword: string
    ) {}
  }