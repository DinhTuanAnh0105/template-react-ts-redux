export interface IAction {
  type: string;
  payload: any;
  error: any;
}

export interface IState {
  isLogin: boolean;
  checkingAuth: boolean;
  error: any;
  user: any
}
