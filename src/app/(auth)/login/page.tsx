/* eslint-disable @typescript-eslint/strict-boolean-expressions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Image from "next/image";
import { Mail, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import tabletImage from "@/public/svg/fragments/tablet-login.svg";
import BgAuth from "@/components/home/backgrounds/bg-auth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const LoginPage = () => {
  const formSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least 1 capital letter",
      }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    alert(values);
  }

  return (
    <main className="flex h-screen  justify-center relative">
      <BgAuth />
      <section className="w-full mx-0 md:mx-8 h-screen md:h-5/6 sm:overflow-hidden rounded-none md:rounded-3xl bg-white shadow-2xl self-center">
        <div className="flex flex-col md:flex-row h-full">
          <div className="flex items-center h-full justify-center bg-gray-200 md:w-1/2">
            <Image src={tabletImage} alt="tablet login" className="w-3/5" />
          </div>
          <div className="py-2 px-12 md:py-12 md:w-1/2 my-auto">
            <h2 className="my-6 text-4xl font-bold text-gray-800 md:text-start text-center [text-shadow:_0_3px_0_rgb(0_0_0_/_20%)]">
              User login
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Enter your email"
                            type="email"
                            className="py-6 focus:border-green-400 focus:border-2 focus:outline-none transition-colors duration-200"
                            {...field}
                          />
                          <Mail className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            type="password"
                            className="py-6 focus:border-green-400 focus:border-2 focus:outline-none focus:ring-0 focus:ring-offset-0 transition-colors duration-200"
                            placeholder="6+ Characters, 1 Capital letter"
                            {...field}
                          />
                          <Lock className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  className="w-full py-6 bg-green-500 hover:bg-green-600 text-white"
                >
                  Sign in
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
