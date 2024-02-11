
import HeroSection from "@/app/_components/hero/HeroSection";

import {Services} from "@/app/_components/services/Services";

import SectionSeparator from "@/app/_components/ui/section-separator";
import {About} from "@/app/_components/about/About";

import {Contact} from "@/app/_components/contact/Contact";
import {Suspense} from "react";

function SearchBarFallback() {
    return <p className="border-gray-300 h-20 w-20 animate-spin rounded-full border-8 border-t-primary"/>
}

export default function Home() {

    return (
        <main className=" flex flex-col justify-center items-center py-10 px-4">
        <HeroSection/>
        <SectionSeparator title={"Services"}/>
          <Suspense fallback={<SearchBarFallback />}>
              <Services/>
          </Suspense>

        <SectionSeparator title={"À propos"}/>
        <About/>
        <SectionSeparator title={"Contact"}/>
        <Contact/>
      </main>
  );
}