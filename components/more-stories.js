import PostPreview from '../components/post-preview'
import Link from "next/link"

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl text-center border-b md:text-6xl font-bold font-serif tracking-tighter leading-tight">
        Other Articles
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
        {posts.slice(0,6).map((post) => (
          <li className="shadow-xl px-2 pb-2 hover:transition-transform hover:-translate-y-2 duration-150 rounded-lg">

            <a key={post.slug} as={`/posts/${post.slug}`} href="/posts/[slug]" > 
          
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
            excerpt={post.excerpt}
          />
       
          </a>
          </li>
        ))}

        <div className="w-full flex justify-center items-center md:col-span-2 col-span-1">
          <Link href="/articlecollection">
          <a className="border border-gray-60 border-opacity-40 bg-green-700 text-white text-3xl rounded-2xl hover:underline hover:transition-transform hover:-translate-y-3 hover:scale-110 hover:shadow-xl hover:drop-shadow-lg transform duration-500 px-4 py-2 mb-4">View All Articles</a>
          </Link>
        </div>
      </ul>
    </section>
  )
}
