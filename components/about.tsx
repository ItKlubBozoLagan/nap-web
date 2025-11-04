import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Trophy, Code, MapPin } from "lucide-react";
import Link from "next/link";

export function About() {
    return (
        <section id="about" className="py-20 md:py-32 border-b border-border/40">
            <div className="w-full px-4 md:px-6 lg:px-8 max-w-[1920px] mx-auto">
                <div className="mx-auto max-w-5xl space-y-12">
                    {/* Section Header */}
                    <div className="space-y-4 text-center">
                        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                            O natjecanju
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                            NAP je individualno natjecanje u algoritamskom programiranju koje
                            studentska udruga X.FER organizira već četvrtu godinu.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid gap-8 md:grid-cols-2">
                        {/* About Card */}
                        <Card className="border-border/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Trophy className="w-5 h-5 text-primary" />
                                    Nagrade
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-4">
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">
                                            Osnovna škola
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Nagrade za ovu kategoriju će biti naknadno određene
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">
                                            Srednja škola
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Nagrade za ovu kategoriju će biti naknadno određene
                                        </p>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">
                                            Fakultet
                                        </h4>
                                        <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                                            <li>
                                                • Prvo mjesto:{" "}
                                                <span className="text-primary font-semibold">
                                                    500€
                                                </span>
                                            </li>
                                            <li>
                                                • Drugo mjesto:{" "}
                                                <span className="text-primary font-semibold">
                                                    300€
                                                </span>
                                            </li>
                                            <li>
                                                • Treće mjesto:{" "}
                                                <span className="text-primary font-semibold">
                                                    200€
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground italic">
                                    Naši sponzori Farseer i Mireo osigurali su nagrade za najbolje
                                    natjecatelje.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Schedule Card */}
                        <Card className="border-border/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-primary" />
                                    Raspored
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10">
                                        <span className="text-sm font-medium">Runda 1</span>
                                        <span className="text-sm text-muted-foreground">
                                            18. 10. 2025. u 10:00
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10">
                                        <span className="text-sm font-medium">Runda 2</span>
                                        <span className="text-sm text-muted-foreground">
                                            8. 11. 2025. u 10:00
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10">
                                        <span className="text-sm font-medium">Runda 3</span>
                                        <span className="text-sm text-muted-foreground">
                                            6. 12. 2025. u 10:00
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10">
                                        <span className="text-sm font-medium">Runda 4</span>
                                        <span className="text-sm text-muted-foreground">2026.</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-primary/10">
                                        <span className="text-sm font-medium">Runda 5</span>
                                        <span className="text-sm text-muted-foreground">2026.</span>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-primary/30 to-secondary/30 border border-primary/50">
                                        <span className="text-sm font-semibold text-foreground">
                                            Finale
                                        </span>
                                        <span className="text-sm font-semibold text-primary">
                                            2026.
                                        </span>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground italic">
                                    *Raspored se još može promjeniti
                                </p>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Additional Info Cards */}
                    <div className="grid gap-6 md:grid-cols-2">
                        <Card className="border-border/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Code className="w-5 h-5 text-primary" />
                                    Format natjecanja
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                                <p>
                                    Online runde sastoje se od 7 algoritamskih zadataka različitih
                                    težina koje natjecatelji trebaju riješiti pisanjem programa u
                                    proizvoljnom programskom jeziku.
                                </p>
                                <p>
                                    Natjecanje se odvija na platformi{" "}
                                    <Link
                                        href="https://kontestis.ac"
                                        target={"_blank"}
                                        className="text-primary hover:underline"
                                    >
                                        Kontestis
                                    </Link>
                                    . Natjecatelji se na platformu trebaju prijaviti putem AAI
                                    sustava.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-border/50">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <MapPin className="w-5 h-5 text-accent" />
                                    Finale
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                                <p>
                                    Na finale će biti pozvano najboljih 10 natjecatelja iz svake
                                    kategorije. Finale će se održati uživo u Zagrebu.
                                </p>
                                <p>
                                    Nakon proglašenja pobjednika, bit će dodijeljene diplome trima
                                    najboljim natjecateljima iz svake kategorije te promotivne
                                    majice svim natjecateljima.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}
