import Container from './container';
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-gray-100">
      <Container>
      <div className="container items-center mx-auto">
            <footer className="text-blueGray-700 transition duration-500 ease-in-out transform bg-white border rounded-lg ">
              <div className="container flex flex-col flex-wrap p-8 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
                <div className="flex flex-wrap flex-grow mt-8 text-left md:mt-0 ">
                  <div className="w-full pr-4 md:w-2/4">
                    <h2 className="mx-auto mb-6 text-xl font-semibold leading-snug tracking-tighter text-black title-font">  </h2>
                    <span className="inline-flex justify-start sm:mb-12">
                      <a className="text-blue-500 hover:text-black" target="_blank" href="https://www.facebook.com/EverythingCrestedGecko">
                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="ml-3 text-blue-500 hover:text-black" target="_blank" href="https://www.instagram.com/collectgeckos">
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </a>

                    </span>
                    <h2 className="mb-4 text-xs font-semibold tracking-widest text-black uppercase title-font">Stay connected. Follow @CollectGeckos on social media <br/><br/> © 2021 ReptiKeep • All Rights Reserved </h2>
                  </div>
                  <div className="w-full px-8 md:w-1/4 ">
                   
                    <nav className="mb-10 space-y-4 list-none">
                      <li>
                      <Link href="/"> 
                        <a className=" mr-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Home</a>
                      </Link>
                      </li>
                      <li>
                      <Link href="/articlecollection">
                        <a className=" mr-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Articles</a>
                        </Link>
                      </li>
                      <li>
                      <Link href="/posts/what-is-a-crested-gecko-morph">
                        <a className=" mr-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Morphs</a>
                        </Link>
                      </li>
                      <li>
                      <Link href="/posts/what-do-crested-geckos-eat">
                        <a className=" mr-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Diet</a>
                        </Link>
                      </li>
                    </nav>
                  </div>
                  <div className="w-full px-8 md:w-1/4">

                    <nav className="mb-10 space-y-5 list-none">
                      <li>
                      <Link href="/privacy-policy">
                        <a className=" mr-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Privacy Policy</a>
                        </Link>
                      </li>
                      <li>
                      <Link href="/terms-and-conditions">
                        <a className=" mr-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Terms Of Service</a>
                        </Link>
                      </li>
                      <li>
                      <Link href="/cookie-policy">
                        <a className=" mr-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Cookie Policy</a>
                        </Link>
                        </li>
                        <li>
                      <Link href="/sitemap.xml">
                        <a className=" mr-1 text-sm text-blueGray-500 transition duration-500 ease-in-out transform rounded-sm focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2">Sitemap</a>
                        </Link>
                      </li>
                    </nav>
                  </div>
                </div>
              </div>
            </footer>
          </div>
      </Container>
    </footer>
  )
}
