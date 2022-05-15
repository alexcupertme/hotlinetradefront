export interface IUser {
  token: string;
  verified: boolean,
  mailSended: boolean,
  isLoading: boolean;
  error: string;
}

export interface IUserData {
  nickname?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  password: string;
  // isLoading?: boolean,
  // error?: string
}
