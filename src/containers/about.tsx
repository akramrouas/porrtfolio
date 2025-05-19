import SectionTitle from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { Effect } from "@/components/ui/effect";
import { getStatistics } from "@/app/constants/statistics";
import { cn } from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react";
import React from "react";

const AboutSection = async () => {
  const { statistics } = await getStatistics();

  return (
    <section id="about" className="relative">
      <Effect className="-left-32 md:-left-44 -top-12" />
      <article className="relative max-w-[50rem] mx-auto bg-background/90 border rounded-lg p-6 flex flex-col gap-y-6">
        <Effect
          variant="square"
          size="default"
          className="-top-4 -right-5 -z-10 rotate-12"
        />
        <SectionTitle
          title="about me"
          description="a quick introduction about me"
          className="items-start"
        />
        <p className="text-lg">
        I’m Akram Rouas, a dedicated full-stack developer with a strong passion for creating user-friendly and performant web applications. Skilled in JavaScript, React, and backend technologies, I focus on writing clean, scalable code and continuously learning new skills to deliver high-quality project
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-end">
          {statistics.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center md:items-start"
            >
              <p className="text-foreground text-2xl md:text-4xl font-bold">
                +{item.value}
              </p>
              <p className="whitespace-nowrap text-sm md:text-lg">
                {item.label}
              </p>
            </div>
          ))}
          <a
            href="#skills"
            className={cn(
              buttonVariants({ size: "lg" }),
              "col-span-2 md:col-span-1"
            )}
          >
            <span>discover skills</span>
            <ArrowRightCircle className="size-4" />
          </a>
        </div>
      </article>
    </section>
  );
};

export default AboutSection;