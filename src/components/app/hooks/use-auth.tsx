import axios from "axios";
import { z } from "zod";

import {
  useErrorMsgStore,
  useErrorStore,
  useLoggedInStore,
} from "../auth/set-auth";

export type SignUpDetails = {
  name: string;
  email: string;
  password: string;
};

export type LogInDetails = {
  email: string;
  password: string;
};

export type ForgetPasswordDls = {
  email: string;
};

export type ResetPasswordDetails = { newPassword: string };

export const signInSchema = z.object({
  name: z.string().min(1, "Enter Name"),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, "Enter valid password"),
});

export type SignUpFormData = z.infer<typeof signInSchema>;
export const useAuth = () => {
  const { setLoggedIn } = useLoggedInStore();
  const { setIsError } = useErrorStore();
  const { setIsErrorMsg } = useErrorMsgStore();
  const getSignUp = async (data: SignUpFormData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        data
      );
      console.log(response);
      setLoggedIn(true);
    } catch (error) {
      setIsError(true);
      setIsErrorMsg("User already exists");
      console.error("Error SignUp:", error);
    }
  };

  const getLogIn = async (data: LogInDetails) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        data
      );
      console.log(response);
      setLoggedIn(true);
    } catch (error) {
      setIsError(true);
      setIsErrorMsg(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (error as any).response?.data?.message || (error as any).message
      );
      console.error("Error LogIn", error);
    }
  };

  const getForgetPassword = async (data: ForgetPasswordDls) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/forget-password",
        data
      );
      return response;
    } catch (error) {
      setIsError(true);
      setIsErrorMsg("user");
      console.error("Error LogIn", error);
    }
  };

  const getResetPassword = async (
    data: ResetPasswordDetails,
    token?: string
  ) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/auth/reset-password/${token}`,
        data
      );
      return response;
    } catch (error) {
      setIsError(true);
      setIsErrorMsg("user");
      console.error("Error LogIn", error);
    }
  };
  return { getSignUp, getLogIn, getForgetPassword, getResetPassword };
};
