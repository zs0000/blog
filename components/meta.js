import Head from 'next/head'
import { HOME_OG_IMAGE_URL } from '../lib/constants'

export default function Meta() {
  return (
    <Head>
      <link
        rel="icon"
        sizes="32x32"
        href="/favicon/ico32.ico"
      />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        name="description"
        content={`Crested Gecko Care guides, every Morph, Crested Gecko Diet and nutrition as pets compared to the wild, and Housing information.`}
      />
      <meta property="og:image" content={HOME_OG_IMAGE_URL} />
    </Head>
  )
}
