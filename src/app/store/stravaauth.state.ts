import { Auth, ReAuth} from "./stravaauth.model";

export interface AuthState {
  loading: boolean;
  refresh_token: string;
  access_token: string;
  Authresult: Auth[],
}
