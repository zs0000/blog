import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div className="max-w-2xl lg:mx-auto md:mx-auto font-serif mx-4">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
