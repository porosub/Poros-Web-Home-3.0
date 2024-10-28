// Login
export interface ILoginPayloadRoot {
  username: string;
  password: string;
}

export interface ILoginResponseRoot {
  token: string;
}
