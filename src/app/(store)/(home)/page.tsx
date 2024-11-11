import Image from "next/image";
import Link from "next/link";

export default async function Home() {

// estudar os display grid

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link 
      href={'/'}
      className=" group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">

      <Image 
      className="group-hover:scale-105 transition-transform duration-700"
      src={"/store/moletom-never-stop-learning.png"} 
      alt={"store-closet"} 
      width={920} 
      height={920} 
      quality={100}>       
      </Image>


      <div
      className="absolute bottom-28 right-28 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
      >
      <span className="text-sm truncate">Moletom not stop learning</span>
      <span className="flex flex-row text-center h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">R$129</span>
      </div>
      </Link>



      <Link 
      href={'/'}
      className=" group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
      <Image 
      className="group-hover:scale-105 transition-transform duration-700"
      src={"/store/moletom-java.png"} 
      alt={"store-closet"} 
      width={920} 
      height={920} 
      quality={100}>

      </Image>

      
  <div
      className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
      >
      <span className="text-sm truncate">Moletom not stop learning</span>
      <span className="flex flex-row text-center h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">R$129</span>
      </div>
      </Link>

      <Link 
      href={'/'}
      className=" relative group col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end">
      <Image 
      className="group-hover:scale-105 transition-transform duration-700"
      src={"/store/moletom-ai-side.png"} 
      alt={"store-closet"} 
      width={920} 
      height={920} 
      quality={100}>     
      </Image>

      
      <div
      className="absolute bottom-10 right-10 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5"
      >
      <span className="text-sm truncate">Moletom not stop learning</span>
      <span className="flex flex-row text-center h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">R$129</span>
      </div>
      </Link>
      
      
      
    </div>
  );
}
