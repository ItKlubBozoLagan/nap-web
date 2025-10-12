import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ResultsView } from "@/components/results-view"

export default function ResultsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="w-full px-4 py-12 md:py-16 md:px-6 lg:px-8 max-w-[1920px] mx-auto overflow-x-hidden">
        <div className="mx-auto max-w-7xl space-y-8">
          <div className="space-y-4 text-center">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Rezultati natjecanja</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Pregledajte rezultate svih rundi i kategorija
            </p>
          </div>
          <ResultsView />
        </div>
      </div>
      <Footer />
    </main>
  )
}
