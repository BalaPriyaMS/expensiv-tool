import axios from "axios";
import { z } from "zod";

export type SignUpDetails = {
  name: string;
  email: string;
  password: string;
};

export const signInSchema = z.object({
  name: z.string().min(1, "Enter Name"),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, "Enter valid password"),
});

export type SignUpFormData = z.infer<typeof signInSchema>;
export const useAuth = () => {
  const getSignUp = async (data: SignUpFormData) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/signup",
        data
      );
      console.log(response);
    } catch (error) {
      console.error("Error SignUp:", error);
    }
  };
  return { getSignUp };
};
