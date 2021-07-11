import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import Link from 'next/link'


export default function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <section>
      <div className="lg:pr-8 lg:pl-8 shadow-xl hover:transition-colors hover:bg-gray-200 duration-200">
        <div className="drop-shadow-sm shadow-sm rounded-lg">
        <h3 className="text-center py-1 font-serif antialiased text-4xl md:text-5xl border-b mb-2">Most Viewed</h3>
        </div>
      <div className="">
        <CoverImage
          title={title}
          src={coverImage}
          slug={slug}
          height={820}
          width={1579}
          
          
        />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 mt-2 lg:gap-x-8 mb-20 md:mb-6">
        <div className="w-full text-center">
          <h3 className="mb-4 text-4xl mx-2  lg:text-6xl leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline font-serif">{title}</a>
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div className="mx-2 pb-2">
          <p className="text-lg leading-relaxed mb-4 lg:text-xl mx-2 font-serif">{excerpt}</p>
          <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
    </div>
    </section>
  )
}
