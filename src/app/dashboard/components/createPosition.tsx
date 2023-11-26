"use client"

import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function CreatePostion() {
    return (
        <Card>
            <CardHeader className="space-y-1">
                <CardTitle className="text-2xl">Create Your Position</CardTitle>
            </CardHeader>

            <CardContent className="grid gap-4">
                <Select defaultValue="BTC/USD">
                    <SelectTrigger id="area">
                        <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="BTC/USD">BTC/USD</SelectItem>
                        <SelectItem value="CELO/USD">CELO/USD</SelectItem>
                        <SelectItem value="ETH/USD">ETH/USD</SelectItem>
                        <SelectItem value="cEUR/USD">cEUR/USD</SelectItem>
                        <SelectItem value="cREAL/USD">cREAL/USD</SelectItem>
                    </SelectContent>
                </Select>
                {/* <div className="grid grid-cols-2 gap-6">
                    <Button variant="outline">
                        <Icons.gitHub className="mr-2 h-4 w-4" />
                        Github
                    </Button>
                    <Button variant="outline">
                        <Icons.google className="mr-2 h-4 w-4" />
                        Google
                    </Button>
                </div> */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="CELO_RPC_URL">CELO RPC URL</Label>
                    <Input id="email" type="url" placeholder="https://forno.celo.org" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="password">Private Key</Label>
                    <Input id="password" type="password" />
                </div>
                <div className="grid gap-2">
                    <Label htmlFor="CELO_RPC_URL">Stake Amount (cUSD)</Label>
                    <Input id="email" type="number" placeholder="" />
                </div>
            </CardContent>
            <CardFooter>
                <Button className="w-full">Execute Trade</Button>
            </CardFooter>
        </Card>
    )
}