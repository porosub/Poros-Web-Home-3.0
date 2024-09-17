"use client";

import type { FC } from "react";
import useLoginForm from "@/hooks/useLoginForm";
import Image from "next/image";
import { Mail, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import tabletImage from "@/public/svg/fragments/tablet-login.svg";
import BgAuth from "@/components/login/background/bg-auth";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const LoginPage: FC = () => {
  const { form, onSubmit } = useLoginForm();
  const { errors, isSubmitted } = form.formState;

  return (
    <main className="flex h-screen  justify-center relative">
      <BgAuth />
      <section className="w-full mx-5 md:mx-8 h-fit md:h-5/6 overflow-hidden rounded-3xl bg-white shadow-2xl self-center">
        <div className="flex flex-col md:flex-row h-full">
          <div className=" items-center h-full justify-center bg-gray-200 md:w-1/2 hidden md:flex">
            <Image src={tabletImage} alt="tablet login" className="w-3/5" />
          </div>
          <div className="p-5 md:p-12 md:w-1/2 my-auto">
            <h2 className=" pb-4 md:pb-6 text-4xl font-bold text-gray-800 md:text-start text-center [text-shadow:_0_3px_0_rgb(0_0_0_/_20%)]">
              User login
            </h2>
            <Form {...form}>
              {/* //? sisa Promise-returning function provided to attribute where a void return was expected. udah aku coba pake async IIFE wrapper tetep gabisa */}
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
                            placeholder="Email address"
                            type="email"
                            className={`py-6 focus:border-green-400 focus:border-2 focus:outline-none focus:ring-0 focus:ring-offset-0 transition-colors duration-200${Boolean(errors.email) && Boolean(isSubmitted) && " border-red-500"}`}
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
                            className={`py-6 focus:border-green-400 focus:border-2 focus:outline-none focus:ring-0 focus:ring-offset-0 transition-colors duration-200 ${Boolean(errors.password) && Boolean(isSubmitted) ? "border-red-500" : null} `}
                            placeholder="Password"
                            {...field}
                          />
                          <Lock className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {errors.root != null && (
                  <p className="text-sm text-red-500 font-bold">
                    {errors.root.message}
                  </p>
                )}
                <div className="pt-6">
                  <Button
                    type="submit"
                    className="w-full py-6 bg-green-500 hover:bg-green-600 text-white"
                  >
                    Sign in
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
