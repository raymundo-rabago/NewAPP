
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link";

export default function layout() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <Link className="flex items-center gap-2" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="sr-only">Acme Inc</span>
          </Link>
          <div className="grid gap-2 py-6">
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              Home
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              About
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              Services
            </Link>
            <Link className="flex w-full items-center py-2 text-lg font-semibold" href="#">
              Contact
            </Link>
          </div>
        </SheetContent>
      </Sheet>
      <div className="w-[150px] hidden lg:flex">
        <Link className="flex items-center gap-2" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
      </div>
      <nav className="flex-1 hidden lg:flex justify-center">
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <Link className="hover:underline" href="#">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="#">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="#">
              Services
            </Link>
          </li>
          <li>
            <Link className="hover:underline" href="#">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className="ml-auto">
        <Button>Get Started</Button>
      </div>
    </header>
  )
}