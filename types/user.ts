
export declare namespace UserData {

    export interface login {
        Username?:string
        Email?:string
        Password:string

        Recaptcha:string
    }
    export interface signup {
        Username?:string
        Email?:string
        Password:string
        Key:string

        Recaptcha:string
    }
    export interface User extends settings {
        ID: number;
        Username: string;
        Password: string;
        PowerID: number;
        Email: string;
        RegisteredAT: string;
        Subscriptions?: any;
        RegisteredIP: string;
        LastIP: string;
        KEYID: string;
        AvatarUri?: any;
        password?: any;
        DiscordID : string,
        DiscordUser : string
        CreatedInvites? : number
        InvitedBy : string,
        EmailVerified:boolean,
        EmailCode:string,
        PasswordReset:string
        EmailResetCount:number
        EmailLastReset: string;
    }

    interface settings {
        Theme :string
        Bio : string
    }
}

