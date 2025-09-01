"use server";
import { CartItem } from "@/types";

export async function addItemToCart(data: CartItem) {
  return {
    sucess: false,
    message: "Item couldn't be added to Cart",
  };
}
