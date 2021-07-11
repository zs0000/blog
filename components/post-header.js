import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, date, author }) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:flex my-2 lg:flex lg:w-full lg:justify-center lg:items-center md:w-full md:justify-center md:items-center">
        <div className="lg:w-2/3 md:w-11/12 w-full py-1 shadow rounded py-1 px-1">
        <Avatar name={author.name} picture={author.picture} />
        </div>
      </div>
      <div className="mb-2 md:mb-2 sm:mx-0 w-auto flex justify-center items-center">
      <div className="lg:w-2/3 md:w-11/12 w-full shadow">
        <CoverImage title={title} src={coverImage} height={420} width={640} />
      </div>
      </div>
      <div className="max-w-2xl lg:mx-auto md:mx-auto mx-8 border rounded-lg px-2 pt-1 shadow antialiased ">
        <div className="block md:hidden lg:mb-0 md:mb-0 mb-1">
          <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-2 text-lg">
          Written on <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}
