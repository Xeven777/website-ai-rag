import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import robo1 from "@/assets/08b6fe7d-978c-45f9-b5e9-3c20093b21cf.webp";
import Image from "next/image";
import robo2 from "@/assets/Designer (6).png";
import { BotIcon, CheckIcon } from "lucide-react";
import InputSection from "./InputSection";
import BackgroundGrid from "./ui/BgGrid";

export function LandingPage() {
  return (
    <div className="flex flex-col">
      <BackgroundGrid color="#3d4a60" />
      <header className="px-4 z-40 lg:px-6 h-14 flex items-center max-w-7xl shadow-lg shadow-zinc-800/30 top-0 sticky backdrop-blur rounded-2xl w-full mx-auto">
        <Link
          href="/"
          className="flex gap-2 items-center justify-center"
          prefetch={false}
        >
          <BotIcon className="size-7" />
          AskWebsite
          <span className="sr-only">AI Chatbot</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
        </nav>
      </header>
      <main className="flex-1 px-3 z-20">
        <section className="w-full py-12 max-w-7xl mx-auto md:py-24 lg:py-32">
          <div className="grid gap-6 px-2 md:px-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Unlock the Power of AI Conversation
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Our advanced AI chatbot helps you provide personalized support
                  and engage with your customers like never before.
                </p>
              </div>
              <div className="flex flex-col gap-2 md:gap-4 min-[400px]:flex-row">
                <a href="#main">
                  <button className="group relative rounded-lg border-2 border-zinc-500 bg-zinc-500 px-5 py-2 font-medium text-white duration-1000 hover:shadow-lg hover:shadow-zinc-500/50">
                    <span className="absolute left-0 top-0 size-full rounded-md border border-dashed border-zinc-50 shadow-inner shadow-white/30 group-active:shadow-white/10"></span>
                    <span className="absolute left-0 top-0 size-full rotate-180 rounded-md border-zinc-50 shadow-inner shadow-black/30 group-active:shadow-black/10"></span>
                    Get Started
                  </button>
                </a>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
            <Image
              priority
              fetchPriority="high"
              src={robo1}
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto object-cover overflow-hidden rounded-xl object-top sm:w-full lg:order-last aspect-square"
            />
          </div>
        </section>
        <InputSection />
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50 rounded-2xl">
          <div className="container px-4 sm:px-10 md:px-16">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful AI Capabilities
                </h2>
                <p className="max-w-5xl text-muted-foreground md:text-xl lg:text-base xl:text-xl">
                  Our AI chatbot leverages advanced natural language processing
                  and machine learning to provide personalized responses and
                  seamless integration with your business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src={robo2}
                width="550"
                placeholder="blur"
                height="500"
                priority={false}
                fetchPriority="low"
                alt="Features"
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-4">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">
                        Natural Language Processing
                      </h3>
                      <p className="text-muted-foreground">
                        Understand and respond to natural language with
                        human-like conversation.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">
                        Personalized Responses
                      </h3>
                      <p className="text-muted-foreground">
                        Tailor your chatbot&apos;s responses to each user&apos;s
                        unique needs and preferences.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="text-lg font-bold">
                        Seamless Integration
                      </h3>
                      <p className="text-muted-foreground">
                        Easily integrate our chatbot with your existing
                        platforms and workflows.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 sm:px-10 md:px-16">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Testimonials
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Customers Say
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Hear from our satisfied customers about how our AI chatbot has
                  transformed their customer support experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card className="flex flex-col gap-4 p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold">John Doe</h4>
                    <p className="text-muted-foreground">CEO, Acme Inc.</p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  &quot;Our customer satisfaction has skyrocketed since we\n
                  implemented the AI chatbot. It&apos;s been a game-changer
                  for\n our business.&quot;
                </p>
              </Card>
              <Card className="flex flex-col gap-4 p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-lg font-semibold">Jane Smith</h4>
                    <p className="text-muted-foreground">
                      Customer Support Manager, Acme Inc.
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  &quot;The AI chatbot has been a lifesaver for our customer\n
                  support team. It handles routine inquiries with ease,\n
                  allowing us to focus on more complex issues.&quot;
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 sm:px-10 md:px-16 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 AskWebSite. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
