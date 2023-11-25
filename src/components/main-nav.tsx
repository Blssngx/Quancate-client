"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu"


const components: { title: string; href: string; description: string }[] = [
  {
    title: "About",
    href: "/",
    description:
      "Meet our team",
  },
  {
    title: "Blog",
    href: "/",
    description:
      "Explore our articles",
  },
  {
    title: "Careers",
    href: "/",
    description:
      "Join our team",
  },
  {
    title: "Privacy Policy",
    href: "/",
    description: "Read through our privacy policy",
  },
]

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Creative Hub</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      WANTOW HUB
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Start your cinematic journey with WANTOW today. Let's create, collaborate, and change the world of filmmaking together.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Create">
              Share your scripts, spark ideas, and build your creative team.
              </ListItem>
              <ListItem href="/" title="Collaborate">
              Find the perfect collaborators within our network. Connect with fellow creators who share your vision.
              </ListItem>
              <ListItem href="/" title="Fund Pact">
              Craft compelling funding proposals using our platform. Utilize smart contracts for transparent and efficient fund allocation.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Fund & Invest</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      WANFUND
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Start your cinematic journey with WANTOW today. Let's create, collaborate, and change the world of filmmaking together.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Fund">
                Find compelling stories to invest in
              </ListItem>
              <ListItem href="/" title="Start a campaign">
                Submit your campaign 
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Stream and Monetize</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Icons.logo className="h-6 w-6" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      WANSCAPE
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Start your cinematic journey with WANTOW today. Let's create, collaborate, and change the world of filmmaking together.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Stream">
              Enjoy films on our Web3 streaming platform.
              </ListItem>
              <ListItem href="/" title="Monetize">
              Tokenize your creations with ERC-721 tokens. 
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Company</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}

      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
