"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card" 
import { Monitor , Smartphone } from "lucide-react"
import {Chart, ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from "@/components/ui/chart"


import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Organize suas finanças",
    description:
      "Tenha uma visão clara das suas receitas, despesas e compromissos financeiros.",
  },
  {
    number: "02",
    title: "Planeje seu futuro",
    description:
      "Defina metas realistas e acompanhe seu progresso para alcançar seus objetivos.",
  },
  {
    number: "03",
    title: "Tome decisões melhores",
    description:
      "Receba orientações simples para cuidar melhor do seu dinheiro todos os dias.",
  },
];

const chartData = [
  { month: "January", desktop: 40, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    icon: Monitor,
    // A color like 'hsl(220, 98%, 61%)' or 'var(--color-name)'
    color: "#2563eb",
    // OR a theme object with 'light' and 'dark' keys
    theme: {
      light: "#2563eb",
      dark: "#dc2626",
    },
  },
  mobile: {
    label: "Mobile",
    icon: Smartphone,
    color: "#f97316",
    theme: {
      light: "#f97316",
      dark: "#facc15",
    },
  },
} satisfies ChartConfig


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero section */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-16 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-20 lg:grid-cols-2 lg:px-8 lg:pb-32 lg:pt-28">
          {/* Left column */}
          <div>
            {/* Badge */}
            <Badge className=" mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-5 py-4 text-md text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Apoio para sua vida financeira
            </Badge>
            {/* Heading */}
            <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl">
              Cuide melhor do seu{" "}
              <span className="text-primary">dinheiro.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Encontre informações, ferramentas e orientações para organizar sua
              vida financeira e construir um futuro mais tranquilo.
            </p>
            <div id="get-started" className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/"
                className="rounded-full bg-primary px-6 py-3 text-center font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Começar Agora
              </Link>
              <Link
                href="#about"
                className="rounded-full border border-border px-6 py-3 text-center font-semibold transition-colors hover:bg-accent"
              >
                Saiba mais <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          {/* Right column */}
          {/* Financial summary card */}
          <div className="rounded-3xl border border-border bg-card p-5 shadow-xl">
            <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
              <div>
                <p className="text-sm text-muted-foreground">Resumo financeiro</p>
                <p className="mt-1 font-semibold">Evolução mensal</p>
              </div>

              <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                +24,8%
              </span>
            </div>

            <Chart chartData={chartData} chartConfig={chartConfig} />
          </div>
        
        </div>
      </section>
      
      {/* Features section */}
      <section
        id="features"
        className="border-t border-border bg-muted/40 px-6 py-20 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Mais tranquilidade para você
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Informação para transformar sua relação com o dinheiro.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <Card key={feature.number}>
                <CardHeader>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>subtitulo</CardDescription>
                  <CardAction>imagem</CardAction>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* About section */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <h2 className="text-3xl font-bold">
          Orientação financeira de forma simples.
        </h2>

        <p className="mt-4 max-w-2xl text-muted-foreground">
          Aprenda a controlar seu orçamento, reduzir dívidas e tomar decisões
          mais seguras para alcançar seus objetivos.
        </p>
      </section>

     
    </main>
  );
}
