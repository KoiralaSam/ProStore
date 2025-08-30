import { Button } from "@/components/ui/button";
import ModeToggle from "./mode-toggle";
import Link from "next/link";
import { Menu as MenuIcon, ShoppingCart, UserIcon, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

const Menu = () => {
  return (
    <div className="flex justify-end gap-3">
      <nav className="hidden md:flex w-full max-w-xs gap-1">
        <ModeToggle />
        <Button asChild variant="ghost">
          <Link href="/cart">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Cart
          </Link>
        </Button>
        <Button asChild>
          <Link href="/sign-in">
            <UserIcon className="w-4 h-4 mr-2" />
            Sign In
          </Link>
        </Button>
      </nav>
      <nav className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="relative">
              <MenuIcon className="w-5 h-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-80 p-0 bg-background/95 backdrop-blur-sm border-l border-border/50"
          >
            <SheetHeader className="px-6 py-4 border-b border-border/50">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-xl font-semibold">Menu</SheetTitle>
                <SheetClose asChild></SheetClose>
              </div>
              <SheetDescription className="text-left text-muted-foreground">
                Navigate through our store
              </SheetDescription>
            </SheetHeader>

            <div className="flex flex-col gap-4 p-6">
              <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Account
                </h3>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start h-12 text-left"
                  >
                    <Link href="/sign-in" className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-primary/10">
                        <UserIcon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Sign In</div>
                        <div className="text-xs text-muted-foreground">
                          Access your account
                        </div>
                      </div>
                    </Link>
                  </Button>
                </SheetClose>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Shopping
                </h3>
                <SheetClose asChild>
                  <Button
                    asChild
                    variant="ghost"
                    className="w-full justify-start h-12 text-left"
                  >
                    <Link href="/cart" className="flex items-center gap-3">
                      <div className="p-2 rounded-md bg-primary/10">
                        <ShoppingCart className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">Shopping Cart</div>
                        <div className="text-xs text-muted-foreground">
                          View your items
                        </div>
                      </div>
                    </Link>
                  </Button>
                </SheetClose>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Settings
                </h3>
                <div className="flex items-center justify-between p-3 rounded-lg border border-border/50">
                  <div>
                    <div className="font-medium text-sm">Theme</div>
                    <div className="text-xs text-muted-foreground">
                      Toggle dark/light mode
                    </div>
                  </div>
                  <ModeToggle />
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};

export default Menu;
