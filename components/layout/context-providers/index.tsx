import CartContextProvider from 'store/cart-context';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <CartContextProvider>{children}</CartContextProvider>;
}
