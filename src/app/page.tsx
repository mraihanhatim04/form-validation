import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-4 row-start-2 items-center sm:items-start">
        <Image
          className="bg-white py-4 px-10 rounded-xl"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <p className=" text-2xl font-serif flex flex-col">
            Form-Validation
            <span className="text-lg mt-4">zod</span>
            <span className="text-lg">react-hook-form</span>
            <span className="text-lg mb-2">hookform-resolvers</span>
          </p>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Link href={"/login"}>
            <Button className="bg-slate-200 text-black hover:bg-slate-300">
              Login Form
            </Button>
          </Link>
          <Link href={"/register"}>
            <Button className="bg-slate-200 text-black hover:bg-slate-300">
              Register Form
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
