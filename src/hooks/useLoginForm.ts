import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

// Data for checking validate login form
const dataDummy = {
  id: 1,
  email: "dummy@gmail.com",
  password: "Admin123",
};

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Invalid password" }),
});

export type LoginFormValues = z.infer<typeof formSchema>;

const useLoginForm = (): any => {
  const [loginError, setLoginError] = useState<string | null>(null);
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: LoginFormValues): void {
    if (
      values.email === dataDummy.email &&
      values.password === dataDummy.password
    ) {
      setLoginError(null);
      alert("Login successful!");
    } else {
      setLoginError("Email or password is incorrect");
    }
  }

  return { onSubmit, form, loginError, setLoginError };
};

export default useLoginForm;
