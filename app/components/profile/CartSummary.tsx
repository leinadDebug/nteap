import { CartSummaryHeader } from "./cartSummaryHeader";
import { CheckoutButton } from "./checkoutButton";
import { DeliveryFeeNotice } from "./deliveryFeeNotice";
import { SubtotalRow } from "./subTotalRow";

type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type Address = {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
} | null;

type CartSummaryProps = {
  items: CartItem[];
  address?: Address;
  showCheckoutButton?: boolean;
  onCheckout?: () => void;
};

const DELIVERY_FEE = 2500; // Naira

export const CartSummary = ({
  items,
  address,
  showCheckoutButton = true,
  onCheckout,
}: CartSummaryProps) => {
  // Calculate subtotal from items
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate total including delivery fee if address exists
  const total = address ? subtotal + DELIVERY_FEE : subtotal;

  return (
    <div className="lg:col-span-1 shadow-xl h-fit rounded-2xl">
      <div>
        <CartSummaryHeader />
        <div className="p-6">
          <SubtotalRow
            amount={`₦${subtotal.toLocaleString()}`}
            label="Item total"
            isBold
          />

          {address ? (
            <>
              <SubtotalRow
                amount={`₦${DELIVERY_FEE.toLocaleString()}`}
                label="Delivery Fee"
              />
              <SubtotalRow
                amount={`₦${total.toLocaleString()}`}
                label="Total"
                isBold
              />
            </>
          ) : (
            <DeliveryFeeNotice message="Delivery fee not included" />
          )}

          {showCheckoutButton && (
            <CheckoutButton
              disabled={!address}
              onClick={onCheckout}
              className="mt-4"
            >
              {address ? "Submit Order" : "Add Delivery Address"}
            </CheckoutButton>
          )}
        </div>
      </div>
    </div>
  );
};
