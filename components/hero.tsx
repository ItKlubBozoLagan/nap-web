import { Button } from "@/components/ui/button";
import { Code2, Trophy, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
    return (
        <section className="relative overflow-hidden border-b border-border/40">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />

            <div className="w-full relative px-4 py-20 md:py-32 md:px-6 lg:px-8 max-w-[1920px] mx-auto">
                <div className="mx-auto max-w-4xl text-center space-y-8">
                    <div className="flex justify-center mb-8">
                        <div className="relative w-48 h-48 md:w-56 md:h-56">
                            <Image
                                src="/logo-simple.svg"
                                alt="NAP Logo"
                                width={224}
                                height={224}
                                className="w-full h-full object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Heading */}
                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
                            Natjecanje u{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#9ec8b0] to-primary">
                                Algoritamskom
                            </span>{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#007fd2] to-secondary">
                                Programiranju
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                            Individualno natjecanje otvoreno za sve učenike i studente. Testiraj
                            svoje vještine u rješavanju zahtjevnih algoritamskih problema.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Link href={"https://kontestis.ac"} target="_blank">
                            <Button size="lg" className="text-base px-8 cursor-pointer">
                                Prijava na Evaluator
                            </Button>
                        </Link>
                        <Button
                            size="lg"
                            variant="outline"
                            className="text-base px-8 bg-transparent"
                        >
                            Pogledaj rezultate
                        </Button>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
                        <div className="flex flex-col items-center gap-2 p-6 rounded-lg bg-card border border-border/50">
                            <Trophy className="w-8 h-8 text-primary mb-2" />
                            <div className="text-3xl font-bold text-foreground">500€</div>
                            <div className="text-sm text-muted-foreground">Prva nagrada</div>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-6 rounded-lg bg-card border border-border/50">
                            <Code2 className="w-8 h-8 text-secondary mb-2" />
                            <div className="text-3xl font-bold text-foreground">5</div>
                            <div className="text-sm text-muted-foreground">Online rundi</div>
                        </div>
                        <div className="flex flex-col items-center gap-2 p-6 rounded-lg bg-card border border-border/50">
                            <Users className="w-8 h-8 text-primary mb-2" />
                            <div className="text-3xl font-bold text-foreground">3</div>
                            <div className="text-sm text-muted-foreground">Kategorije</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
