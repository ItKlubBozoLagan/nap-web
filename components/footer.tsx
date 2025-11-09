import Link from "next/link";
import { FileText, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer id="rulebooks" className="border-t border-border/40 bg-card">
            <div className="w-full px-4 py-12 md:py-16 md:px-6 lg:px-8 max-w-[1920px] mx-auto">
                <div className="grid gap-12 md:grid-cols-2 lg:gap-16">
                    {/* Rulebooks Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <FileText className="w-5 h-5 text-foreground" />
                            Pravilnici
                        </h3>
                        <div className="space-y-3">
                            <Link
                                href="https://docs.google.com/document/d/1ozJd5pfSUSc74250P5bZoIZL1aBoLgHmVjMWKnouk0c/edit?usp=sharing"
                                target="_blank"
                                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                            >
                                <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                <span className="text-sm font-medium text-foreground">
                                    Pravilnik o natjecanju
                                </span>
                            </Link>
                            <Link
                                href="https://forms.gle/ZZRPHiwhELS2SVGL6"
                                target="_blank"
                                className="flex items-center gap-3 p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                            >
                                <FileText className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                <span className="text-sm font-medium text-foreground">
                                    Privola za maloljetne natjecatelje
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-semibold flex items-center gap-2">
                            <Mail className="w-5 h-5 text-foreground" />
                            Kontakt
                        </h3>
                        <div className="space-y-4">
                            <div className="p-4 rounded-lg border border-border">
                                <p className="text-sm text-muted-foreground mb-2">Email</p>
                                <Link
                                    href="mailto:xfer.hr@gmail.com"
                                    className="text-base font-medium text-primary hover:underline"
                                >
                                    xfer.hr@gmail.com
                                </Link>
                            </div>
                            <div className="p-4 rounded-lg border border-border">
                                <p className="text-sm text-muted-foreground mb-2">Organizator</p>
                                <p className="text-base font-medium text-foreground">X.FER</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-border/40">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-muted-foreground">
                            © {new Date().getFullYear()} NAP! - Natjecanje u Algoritamskom
                            Programiranju
                        </p>
                        <div className="flex items-center gap-6">
                            <Link
                                href="/#about"
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                O natjecanju
                            </Link>
                            <Link
                                href="/rezultati"
                                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                                Rezultati
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
