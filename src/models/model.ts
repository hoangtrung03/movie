export interface AuthLogin {
  method: string;
  url: string;
  data: AuthLoginBody;
}

export interface AuthLoginBody {
  email: string;
  password: string;
}
