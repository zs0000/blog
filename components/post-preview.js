import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-3">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={240}
          width={320}
        />
      </div>
      <h3 className="text-3xl mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline leading-tight tracking-tight font-serif">{title}</a>
        </Link>
      </h3>
      <div className="text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-lg leading-relaxed tracking-tight font-serif text-gray-900 mb-4">{excerpt}</p>

      <Avatar name={author.name} picture={author.picture} />
 
    </div>
  )
}
