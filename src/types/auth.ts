export interface AuthData {
  username: string;
  password: string;
}

export type SignInReturnType = {
  success: boolean;
  access_token?: string;
};
