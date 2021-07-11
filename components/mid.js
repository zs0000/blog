import Image from "next/image";
import Spotlight from "../public/assets/spotlight/spotlight.jpg"

export default function Mid() {
    return(
        <section>
        <div className="w-auto pb-16">
        <div className="text-center mb-4 border rounded-xl hover:-translate-y-2 transition duration-300 hover:bg-opacity-75 py-2 bg-green-900 shadow-sm bg-opacity-20">
        <h2 className="font-serif text-4xl">Spotlight Crested Gecko: Demi</h2>
        <span className="text-gray-700">For a chance to be featured on the Front Page Spotlight, Follow us on social media's @collectgeckos</span>
          </div>
          <div className="md:grid md:grid-cols-4 flex flex-col">
            
            <div className="md:col-span-2 mx-2 transition-transform  hover:delay-150 hover:scale-125 hover:duration-500">
          <Image src={Spotlight} height={505} width={672} layout="intrinsic" />
          </div>
          <div className="md:col-span-2 lg:my-10">
            
          <div className="border flex justify-center items-center bg-green-900 bg-opacity-20 rounded-t-xl">
          <h3 className="m-1 ">Owned by @CollectGeckos</h3>
          </div>
          <div className="border flex justify-center items-center bg-green-900 bg-opacity-10 rounded-b-xl">
          <p className="font-serif text-lg md:text-xl lg:text-2xl lg:tracking-normal lg:leading-relaxed tracking-normal m-1 my-2">Demi is a 100% Pinstripe, Harlequin Crested Gecko with a few Dalmatian spots here and there.
           Demi has an astounding dorsal, head, and crests, taking after the High-End genetics she was produced from. A beautiful production of Sevacko Exotic's, Demi is a sweet, very energetic gecko! We hope she will become one of the largest in our collection! </p>
          </div>

          </div>
          </div>
        </div>
        </section>
    );
}