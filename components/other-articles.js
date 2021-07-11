import Link from "next/link"
import Image from "next/image"
import { useRouter } from 'next/router'
import First from "../public/assets/blog/what-do-crested-geckos-eat/13.jpg"
import Second from "../public/assets/blog/what-is-a-lilly-white-crested-gecko/costello.jpeg"
import Third from "../public/assets/blog/breeding-crested-geckos-beginners-guide/18.jpg"
export default function OtherStories() {
  const router = useRouter()
  return (
      
    <section>
      <h3 className="text-center mb-2 text-3xl border-b border-t font-serif">Other Crested Gecko Articles</h3>
      <div className="flex flex-row justify-evenly items-center">
      <div className="m-1">
        <div className="flex flex-col items-center justify-center cursor-pointer text-center border rounded-xl bg-gray-200   p-1 transition-transform hover:-translate-y-2 hover:shadow-sm hover:drop-shadow hover:underline">
        <Link href="/posts/what-do-crested-geckos-eat">
        <Image src={First} height={200} width={275} layout="intrinsic" />
        </Link>
        <Link href="/posts/what-do-crested-geckos-eat">
        <h2 className="m-1 md:mx-2 md:text-lg  md:w-4/6">What Do Crested Geckos Eat? Wild vs Pet</h2>
        </Link>    
        </div>
      </div>
      <div className="m-1">
        <div className="flex flex-col items-center justify-center cursor-pointer text-center border rounded-xl bg-gray-200  p-1 transition-transform hover:-translate-y-2 hover:shadow-sm hover:drop-shadow hover:underline">
        <Link href="/posts/what-is-a-lilly-white-crested-gecko">
        <Image src={Second} height={200} width={275} layout="intrinsic" />
        </Link>
        <Link href="/posts/breeding-crested-geckos-beginner-guide">
        <h2 className="m-1 md:mx-2 md:text-lg md:w-4/6">What Is A Lilly White Crested Gecko?</h2>
        </Link>    
        </div>
      </div>
      <div className="m-1 ">
        <div className="flex flex-col items-center justify-center cursor-pointer text-center border rounded-xl bg-gray-200 p-1 transition-transform hover:-translate-y-2 hover:shadow-sm hover:drop-shadow hover:underline">
        <Link href="/posts/breeding-crested-geckos-beginner-guide">
        <Image src={Third} height={200} width={275} layout="intrinsic" />
        </Link>
        <Link href="/posts/breeding-crested-geckos-beginner-guide">
        <h2 className="m-1 md:mx-2 md:text-lg md:w-4/6">Breeding Crested Geckos: Beginners guide</h2>
        </Link>    
        </div>
      </div>
      </div>
    <div className="flex flex-row items-center justify-center pb-4">
      <div><button onClick={() => router.back()} className="border border-gray-900 hover:bg-gray-600 transition duration-300 border-opacity-30 px-4 py-2 bg-gray-400 text-white rounded-xl mx-2">Back To Last Page</button></div>
      <div><Link href="/articlecollection"><a className="border border-gray-900 border-opacity-30 px-4 py-2 hover:bg-green-800 transition duration-300 bg-green-600 text-white rounded-xl mx-2">Go To Article Collection</a></Link></div>
    </div>
    </section>
  )
}

