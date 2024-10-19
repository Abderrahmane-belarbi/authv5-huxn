import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="mt-10 max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-[#1E201E] text-[#eee] border border-[#ECDFCC] dark:bg-black">
      <h2 className="font-bold text-xl text-gray-400">Welcom to MyShop</h2>
      <p>Please provide all the necessary information</p>
      <form className="my-8">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
          <div className="flex flex-col md:w-1/2">
            <Label htmlFor="firstname">First Name</Label>
            <Input
              id="firstname"
              placeholder="John"
              type="text"
              name="firstname"
            />
          </div>
          <div className="flex flex-col md:w-1/2">
            <Label htmlFor="lastname">Last Name</Label>
            <Input
              id="lastname"
              placeholder="Doe"
              type="text"
              name="lastname"
            />
          </div>
        </div>
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
        <Button className="w-full rounded-md h-10 font-medium mt-4">Signup</Button>
        <p className="text-sm text-gray-500 mt-2">Already have an account? <Link className="text-blue-400" href='/login'>Login</Link></p>
      </form>
    </div>
  );
}
