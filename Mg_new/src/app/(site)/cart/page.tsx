import { prisma } from "@/lib/prisma";
import { CartClient } from "@/components/cart/CartClient";
import type { Product } from "@prisma/client";

export default async function CartPage() {
  let upsells: Product[] = [];

  try {
    upsells = await prisma.product.findMany({
      take: 3,
      orderBy: { createdAt: "desc" },
      include: { variants: { select: { quantity: true } } }
    });
  } catch (error) {
    console.error("[CartPage] Database unreachable — product upsells unavailable.", error);
    // Return empty array to allow cart page to render
    upsells = [];
  }

  return <CartClient upsells={upsells} />;
}
