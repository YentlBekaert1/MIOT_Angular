export interface Auth {
  access_token:string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  token_type : string;
  athlete: any;
}

export interface ReAuth {
  access_token:string;
  expires_at: number;
  expires_in: number;
  refresh_token: string;
  token_type : string;
}
