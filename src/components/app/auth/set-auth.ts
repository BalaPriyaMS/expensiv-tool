import { create } from "zustand";

type LoggedInStore = {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
};

export const useLoggedInStore = create<LoggedInStore>((set) => ({
  loggedIn: false,
  setLoggedIn: (loggedIn) => set({ loggedIn }),
}));

type ErrorMsgStore = {
  isErrorMsg: string;
  setIsErrorMsg: (error: string) => void;
};

export const useErrorMsgStore = create<ErrorMsgStore>((set) => ({
  isErrorMsg: "",
  setIsErrorMsg: (isErrorMsg) => set({ isErrorMsg }),
}));

type ErrorStore = {
  isError: boolean;
  setIsError: (error: boolean) => void;
};

export const useErrorStore = create<ErrorStore>((set) => ({
  isError: false,
  setIsError: (isError) => set({ isError }),
}));

type ForgetPasswordStore = {
  forgetPassword: boolean;
  setForgetPassword: (error: boolean) => void;
};

export const useForgetPasswordStore = create<ForgetPasswordStore>((set) => ({
  forgetPassword: false,
  setForgetPassword: (forgetPassword) => set({ forgetPassword }),
}));

type RestPasswordStore = {
  resetPassword: boolean;
  setResetPassword: (error: boolean) => void;
};

export const useRestPasswordStore = create<RestPasswordStore>((set) => ({
  resetPassword: false,
  setResetPassword: (resetPassword) => set({ resetPassword }),
}));
