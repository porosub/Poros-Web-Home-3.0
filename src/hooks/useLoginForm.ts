import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import type { UseFormReturn } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";

//* Data for checking validate login form
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
      values.email === dataDummy.email &&
      values.password === dataDummy.password
    ) {
      router.push("/admin/list-anggota");
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
