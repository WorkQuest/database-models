export declare enum AdminRole {
    Main = "Main",
    Dispute = "Dispute",
    Support = "Support",
    Advertising = "Advertising"
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
