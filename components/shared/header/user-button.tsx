import Link from "next/link";
import { signOutUser } from "@/lib/actions/user.actions";
import { Button } from "@/components/ui/button";
import { UserIcon } from "lucide-react";
import { auth } from "@/auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserButton = async () => {
  const session = await auth();
  if (!session) {
    return (
      <Button
        asChild
        variant="ghost"
        className="w-full justify-start h-12 text-left"
      >
        <Link href="/sign-in" className="flex items-center gap-3">
          <div className="p-2 rounded-md bg-primary/10">
            <UserIcon className="w-4 h-4 text-primary" />
          </div>
          Sign In
        </Link>
      </Button>
    );
  }

  const firstInitial = session.user?.name?.charAt(0).toUpperCase() ?? "U";
  const nameParts = session.user?.name?.split(" ") ?? [];
  const lastInitial =
    nameParts.length > 1 ? nameParts.pop()?.charAt(0).toUpperCase() ?? "" : "";

  return (
    <div className="flex gap-2 items-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="flex items-center">
            <Button
              variant="ghost"
              className="relative w-8 h-8 rounded-full ml-2 flex items-center justify-center bg-gray-200"
            >
              {firstInitial}
              {lastInitial}
            </Button>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end" forceMount>
          <DropdownMenuLabel className="font-normal">
            <div className="flex flex-col space-y-1">
              <div className="text-sm font-medium leading-none">
                {session.user?.name}
              </div>
              <div className="text-sm text-muted-foreground leading-none">
                {session.user?.email}
              </div>
            </div>
          </DropdownMenuLabel>
          <div className="mb-2 flex">
            <form action={signOutUser} className="w-full">
              <button
                className="w-full py-2 px-2 min-h-8 justify-center items-center flex border-2 rounded-2xl text-center"
                type="submit"
              >
                Sign Out
              </button>
            </form>
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserButton;
