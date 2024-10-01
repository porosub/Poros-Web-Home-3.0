import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { setCookie } from "@/lib/cookie";

const formSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required!" })
    .email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Password is required!" }),
});

export type LoginFormValues = z.infer<typeof formSchema>;

interface ILoginFormProps {
  form: UseFormReturn<LoginFormValues>;
  onSubmit: (values: LoginFormValues) => Promise<void>;
}

const useLoginForm = (): ILoginFormProps => {
  const router = useRouter();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: LoginFormValues): Promise<void> => {
    if (
      values.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
      values.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
    ) {
      await setCookie("token", "random-token");
      router.push("/admin");
    } else {
      form.setError("email", {
        type: "manual",
        message: "",
      });
      form.setError("password", {
        type: "manual",
        message: "",
      });
      form.setError("root", {
        type: "manual",
        message: "Email or password is incorrect",
      });
    }
  };
  return { onSubmit, form };
};

export default useLoginForm;
