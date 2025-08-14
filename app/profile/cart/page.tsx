// import { CartSummary } from "@/app/components/checkout";

import { CartItem } from "@/app/components/profile/cartItem";
import { CartSummary } from "@/app/components/profile/CartSummary";
import { Header } from "@/app/components/profile/header";
import { Sidebar } from "@/app/components/profile/sideBar";
import { Alert, Button } from "@mui/material";

import { ChevronRight } from "lucide-react";

const CartItems = [
  {
    id: "1",
    name: "biology-oxford.csv",
    price: 21000,
    quantity: 1,
  },
  {
    id: "1",
    name: "biology-oxford.csv",
    price: 21000,
    quantity: 2,
  },
];

const Address = {
  street: "sonyclose",
  city: "lagos",
  state: "lagos",
  postalCode: "11002",
  country: "string",
};

export default function CartPage() {
  return (
    <div className="flex flex-col md:flex-row bg-gray-50 min-h-screen ">
      <Sidebar activeItemId="cart" />
      <div className=" flex-1 flex flex-col m-10 min-h-svh max-w-7xl mx-auto ">
        <Header />
        <main className="flex-1 p-4 sm:p-6 md:p-8 ">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              {/* Left column - Cart items */}
              <div className="lg:col-span-2 space-y-4 sm:space-y-6">
                <Alert
                  severity="success"
                  variant="outlined"
                  icon={false}
                  action={
                    <Button color="inherit" size="small">
                      <ChevronRight className="w-4 h-4 text-green-600" />
                    </Button>
                  }
                  className="text-sm sm:text-base"
                >
                  <span>
                    No Delivery Address found!
                    <span className="text-green-600 font-medium ml-1">
                      Enter your delivery address
                    </span>
                  </span>
                </Alert>

                <div>
                  <h1 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-slate-900">
                    Cart (1)
                  </h1>
                  <CartItem fileName="biology-oxford.csv" price="NGN21,000" />
                </div>
              </div>

              {/* Right column - Summary */}
              <div className="space-y-4 sm:space-y-6">
                <CartSummary items={CartItems} address={Address} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
