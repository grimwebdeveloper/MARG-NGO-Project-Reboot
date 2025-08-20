
import GenericCard from "./GenericCard";




export default function HeartWarmingSection() {
  return (
   <section className="px-4 text-center bg-[#eeede9] pt-16 pb-6">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="font-bold text-3xl lg:text-4xl mb-8 uppercase">Heart-warming stories</h1>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
         <GenericCard/>
         <GenericCard/>
         <GenericCard/>
        </div>
      </div>
   </section>
  );
}
  