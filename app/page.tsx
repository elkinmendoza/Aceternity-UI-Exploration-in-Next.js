import { Hero } from "@/components/hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/grid";

import { navItems } from "@/data";
import { RecentEvents } from "@/components/recentEvents";
import LatestEvents from "@/components/RecentProjects";


export default function Home() {
  return (
    // <div clas
    // sName="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <main>
    <div className="relative dark:bg-black-100  text-white flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">

      <Hero></Hero>

      <FloatingNav
      navItems={navItems}
      
      >


      </FloatingNav>


      

      </div>

    
    </div>

    <Grid>

    </Grid>

    <LatestEvents>
      
    </LatestEvents>


    <RecentEvents>

    </RecentEvents>


    </main>
    
  );
}
