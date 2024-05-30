'use client';

import { Dispatch, SetStateAction, createContext, useState } from 'react';

type CartContextType = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

type CartContextProviderProps = {
  children: React.ReactNode;
};

export const CartContext = createContext<CartContextType>({
  isOpen: false,
  setIsOpen: () => {}
});

export default function CartContextProvider({ children }: CartContextProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  return <CartContext.Provider value={{ isOpen, setIsOpen }}>{children}</CartContext.Provider>;
}
