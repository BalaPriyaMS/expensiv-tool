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
