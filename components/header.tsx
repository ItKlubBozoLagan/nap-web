"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="w-full flex h-16 items-center justify-between px-4 md:px-6 lg:px-8 max-w-[1920px] mx-auto">
                <Link href="/" className="flex items-center space-x-2">
                    <Image
                        src="/logo-simple.svg"
                        alt="NAP Logo"
                        width={40}
                        height={40}
                        className="w-10 h-10"
                    />
                    <span className="text-xl font-bold text-foreground font-mono hidden sm:inline">
                        NAP!
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-6">
                    <Link
                        href="/"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        O natjecanju
                    </Link>
                    <Link
                        href="/rezultati"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                        Rezultati
                    </Link>
                    <Link
                        href="/#rulebooks"
                        className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors scroll-smooth"
                    >
                        Pravilnici
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <Menu className="h-5 w-5" />
                </Button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur">
                    <nav className="w-full flex flex-col gap-4 p-4 max-w-[1920px] mx-auto">
                        <Link
                            href="/"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            O natjecanju
                        </Link>
                        <Link
                            href="/rezultati"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Rezultati
                        </Link>
                        <Link
                            href="/#rulebooks"
                            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Pravilnici
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}
