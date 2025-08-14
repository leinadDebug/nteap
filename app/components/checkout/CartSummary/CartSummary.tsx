// components/checkout/CartSummary.tsx
import { CartSummaryHeader } from "./CartSummaryHeader";
import { SubtotalRow } from "./SubtotalRow";
import { DeliveryFeeNotice } from "./DeliveryFeeNotice";
import { CheckoutButton } from "./CheckoutButton";

type CartSummaryProps = {
  subtotal: string;
  showCheckoutButton?: boolean;
  onCheckout?: () => void;
};

export const CartSummary = ({
  subtotal,
  showCheckoutButton = true,
  onCheckout,
}: CartSummaryProps) => (
  <div className="lg:col-span-1 shadow-xl h-fit rounded-2xl">
    <div>
      <CartSummaryHeader />
      <div className="p-6">
        <SubtotalRow amount={subtotal} />
        <DeliveryFeeNotice />
        {showCheckoutButton && (
          <CheckoutButton disabled onClick={onCheckout}>
            Add Delivery Address
          </CheckoutButton>
        )}
      </div>
    </div>
  </div>
);
