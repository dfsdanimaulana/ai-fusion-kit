import { DescriptionHeadingText } from "@/components/modules/home/DescriptionHeadingText";
import { FeatureItems } from "@/components/modules/home/FeatureItems";
import { HeroBannerImage } from "@/components/modules/home/HeroBannerImage";
import { buttonVariants } from "@/components/ui/Button";
import { MainLayout } from "@/components/ui/common/MainLayout";
import { cn } from "@/lib/utils";
import { Play } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Fusion Kit",
  description: "A feature-rich, highly customizable AI Chatbot Template, empowered by Next.js.",
}

export default async function Home() {
  return (
    <MainLayout>
      <div className="px-4 pt-16">
        <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-20">
          <div className="container flex max-w-[64rem] flex-col items-center gap-6 text-center">
            <h1 className="font-heading bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-3xl font-bold leading-[1.1] tracking-tighter text-transparent dark:from-white dark:to-gray-500 sm:text-5xl md:text-6xl">
           AI Fusion Kit
            </h1>
            <DescriptionHeadingText/>
            <div className="flex items-center space-x-4">
              <Link
                href="https://www.youtube.com/watch?v=GWalKzuC0Rg"
                target="_blank"
                className={cn(buttonVariants({
                  variant: 'outline'
                }))}
              >
                <Play className="mr-2" size={16}/> Demo
              </Link>
              <Link href="/apps/chat" className={cn(buttonVariants())}>
              Get Started
              </Link>
            </div>
          </div>
        </section>
        <HeroBannerImage/>
        <section
          id="features"
          className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
        >
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-heading bg-gradient-to-r from-gray-900 to-gray-500 bg-clip-text text-3xl font-bold leading-[1.1] tracking-tighter text-transparent dark:from-white dark:to-gray-500 sm:text-4xl">
            Modern Web Tools for Chatbot App
            </h2>
            <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Revolutionize the way you build chatbot applications with the power of Next.js, Server Components, and Supabase. This template provides you with a solid foundation to create cutting-edge chatbot apps that are feature-rich and responsive, all while taking advantage of the latest Next.js technology.
            </p>
          </div>
          <FeatureItems/>
        </section>
      </div>
    </MainLayout>
  )
}
