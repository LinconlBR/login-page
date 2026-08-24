import {ArrowRight, Briefcase} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return ( 
        <div className=" text-foreground">   
            <nav className="border-b border-gray-400 mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
                
                <Link href="/" className="flex text-xl font-bold tracking-tight">
                <Briefcase />
                Fin<span className="text-primary">+</span>
                </Link>

                <div className="hidden items-center gap-4 text-sm text-muted-foreground md:flex ">
                <Link href="/" className="transition-colors hover:text-foreground">
                    Features
                </Link>
                <Link href="/" className="transition-colors hover:text-foreground">
                    About
                </Link>
                <Link href="/" className="transition-colors hover:text-foreground">
                    Contact
                </Link>
                </div>
                <div>
                    <Link href="/login" >
                        <Button  
                            variant="link"
                        >
                            Log in
                        </Button>
                    </Link>
                    <Link href="/signup">
                    <Button  
                        className="rounded-full border border-border px-5 py-2 text-sm font-medium transition-colors"
                    >
                        Get started {<ArrowRight className="ml-2 h-4 w-4" />}
                    </Button>
                    </Link>
                </div>
            </nav>
        </div> 
    )
  }