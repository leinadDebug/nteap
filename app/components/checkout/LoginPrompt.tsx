import Link from "next/link";

export default function LoginPrompt() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Customer Checkout
      </h1>
      <p className="text-gray-600 mb-5">
        Ensure your details are accurate before you submit your order
      </p>

      {/* Login Button */}
      <button className="w-full bg-yellow-400 text-white text-left  font-semibold p-3 mb-5 rounded-lg shadow-xs">
        Have an account?{" "}
        <Link href={"./login"}>
          <span className="underline underline-offset-2">Login</span>
        </Link>
      </button>
    </div>
  );
}
