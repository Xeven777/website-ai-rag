"use client";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import robo2 from "@/assets/jajd.jpg";
import { ArrowRight, Loader2 } from "lucide-react";

import React, { FormEvent, useState } from "react";

const InputSection = () => {
  const [websitelink, setWebsitelink] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      if (websitelink) {
        setLoading(true);
        window.location.href = "/" + websitelink;
      }
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32" id="main">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
              Key Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Powerful AI Capabilities
            </h2>
            <p className="max-w-5xl text-muted-foreground md:text-xl lg:text-base xl:text-xl">
              Our AI chatbot leverages advanced natural language processing and
              machine learning to provide personalized responses and seamless
              integration with your business.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <form
            className="flex flex-col justify-center space-y-2"
            onSubmit={(e) => handleSubmit(e)}
          >
            <h2>Just enter the website/blog /article link :</h2>
            <Input
              value={websitelink}
              name="url"
              id="url"
              onChange={(e) => setWebsitelink(e.target.value)}
              placeholder="Website url"
              type="url"
            />
            <Button className="w-min" type="submit">
              Let&apos;s Go!{" "}
              <span>
                {loading ? (
                  <Loader2 size={18} className="animate-spin" />
                ) : (
                  <ArrowRight size={18} />
                )}
              </span>
            </Button>
          </form>

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
        </div>
      </div>
    </section>
  );
};

export default InputSection;
