export enum AdminRole {
  main = "main",
  dispute = "dispute",
  advertising = "advertising",
  kyc = "kyc",
}

export interface AdminTOTP {
  secret: string;
}

export interface AdminSecurity {
  TOTP: AdminTOTP;
}

export interface AdminAccountSettings {
  security: AdminSecurity;
}
