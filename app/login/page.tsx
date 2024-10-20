import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IconBrandGithub, IconBrandGoogle } from "@tabler/icons-react";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#1E201E] text-[#eee] border border-[#ECDFCC] dark:bg-black">
      <h2 className="font-bold text-xl text-gray-400">Welcom back</h2>
      <p>Please provide all the necessary information</p>
      <form className="my-8">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="JohnDoe@provider.com"
          type="email"
          name="email"
        />

        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          placeholder="******"
          type="password"
          name="password"
        />
        <Button className="w-full rounded-md h-10 font-medium mt-4">Sign in</Button>
        <p className="text-sm text-gray-500 mt-2">You dont have an account? <Link className="text-blue-400" href='/register'>Sign up</Link></p>
      </form>
      
      <section className="flex gap-3 w-full">
        <form className="w-1/2">
            <Button className="w-full" type="submit">
                <IconBrandGithub className="w-4"/>
                <span>Github</span>
            </Button>
        </form>
        <form className="w-1/2">
            <Button className="w-full" type="submit">
                <IconBrandGoogle className="w-4"/>
                <span>Google</span>
            </Button>
        </form>
      </section>
    </div>
  );
}
