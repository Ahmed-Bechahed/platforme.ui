import Link from "next/link";
import SigninForm from "./signinform";

export default function SigninPage() {
  return (
    <div className="flex w-full flex-col items-center">
      <SigninForm />
      <span className="mt-5 text-xs font-semibold text-gray-400">
        Don&apos;t have an account?
        <Link
          href="/signup"
          className="text-secondary_blue hover:text-primary_blue">
          Sign up
        </Link>
      </span>
    </div>
  );
}
