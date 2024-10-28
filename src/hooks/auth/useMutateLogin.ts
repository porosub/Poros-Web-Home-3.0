import { useMutation } from "@tanstack/react-query";
import { type AxiosError } from "axios";
import { UserAPI } from "../../repository/user-services";
import type {
  ILoginResponseRoot,
  ILoginPayloadRoot,
} from "@/lib/types/user-types";
import { useRouter } from "next/navigation";
import { setCookie } from "@/lib/cookie";
import * as z from "zod";
import { useForm, type UseFormReturn } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface IUseMutateLogin {
  mutate: (payload: ILoginPayloadRoot) => void;
  error: unknown;
  isPending: boolean;
  form: UseFormReturn<LoginFormValues>;
}

const formSchema = z.object({
  username: z.string().min(1, { message: "Username is required!" }),
  password: z.string().min(1, { message: "Password is required!" }),
});

export type LoginFormValues = z.infer<typeof formSchema>;

const useMutateLogin = (): IUseMutateLogin => {
  const router = useRouter();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const login = async (
    payload: ILoginPayloadRoot,
  ): Promise<ILoginResponseRoot> => {
    const data = await UserAPI.login(payload);
    return data;
  };

  const handleError = (error: AxiosError): void => {
    form.setError("username", {
      type: "manual",
      message: "",
    });
    form.setError("password", {
      type: "manual",
      message: "",
    });
    form.setError("root", {
      type: "manual",
      message: (error.response?.data as { message: string }).message,
    });
  };

  const { mutate, error, isPending } = useMutation({
    mutationFn: async (payload: ILoginPayloadRoot) => {
      return await login(payload);
    },
    onError: handleError,
    onSuccess: async (response: ILoginResponseRoot) => {
      const { token } = response;

      await setCookie("token", token);

      router.push("/admin");
    },
  });
  return { mutate, error, isPending, form };
};

export default useMutateLogin;
