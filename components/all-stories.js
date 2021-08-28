import PostPreview from '../components/post-preview'
import Link from "next/link"

export default function AllStories({ posts }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl text-center border-b md:text-6xl font-bold font-serif tracking-tighter leading-tight">
        Article Collection
      </h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32">
        {posts.map((post) => (
          <li key={post.slug} className="shadow-xl px-2 pb-2 hover:transition-transform hover:-translate-y-2 duration-150 rounded-lg">
            
          <a as={`/posts/${post.slug}`} href={`/posts/${post.slug}`}>
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
      </ul>
    </section>
  )
}
