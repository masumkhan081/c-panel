import EnhancedText from "@/components/ui-custom/EnhancedText";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" bg_sl_1 w-full min-h-screen flex flex-col gap-5 justify-center items-center">
      <EnhancedText kind="one" color="text-neutral-600">
        Home
      </EnhancedText>

      <Link href="/login">
        <EnhancedText kind="three" color="text-blue-700 underline">
          Log In
        </EnhancedText>
      </Link>
    </div>
  );
}
