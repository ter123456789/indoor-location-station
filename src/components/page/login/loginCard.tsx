"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FromLoginSchema, FromLoginType } from "@/schema/fromLogin";
import { useToast } from "@/hooks/use-toast";
import { BorderBeam } from "@/components/magicui/border-beam";

export const LoginCard = () => {
  const { toast } = useToast();
  const { handleSubmit, register } = useForm<FromLoginType>({
    resolver: zodResolver(FromLoginSchema),
  });
  const onSubmit: SubmitHandler<FromLoginType> = (data) =>
    toast({
      title: "Noti",
      description: data.username + " : " + data.password,
    });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Card className="z-10 relative py-10 px-2 min-w-80 bg-white">
        <CardHeader>
          <CardTitle className="flex justify-center">Login</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="capitalize">
                username
              </Label>
              <Input
                {...register("username")}
                id="username"
                placeholder="Enter username"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework" className="capitalize">
                password
              </Label>
              <Input
                {...register("password")}
                id="password"
                placeholder="Enter password"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-start mt-4 flex-col">
          <Button type="submit" className="w-full">
            login
          </Button>
          <p className="flex justify-end w-full mt-1 text-stone-500">
            Forgot your password
          </p>
        </CardFooter>
        <BorderBeam size={250} duration={12} delay={9} />
      </Card>
    </form>
  );
};
