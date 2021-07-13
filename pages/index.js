import Container from '../components/container'
import MoreStories from '../components/more-stories'
import HeroPost from '../components/hero-post'
import Intro from '../components/intro'
import Layout from '../components/layout'
import Mid from '../components/mid'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'



export default function Index({ allPosts }) {
  const heroPost = allPosts[9]
  const morePosts = allPosts.slice(0)
  return (
    <>
      <Layout>
        <Head>
          <title>Crested Gecko Info: Morphs, Care, Breeding, Diet - ReptiKeep</title>
          <meta
        name="description"
        content={`Crested Gecko Care guides, Crested Gecko Morph Examples and Explanations, Crested Gecko Diet and nutrition as pets compared to the wild, and Housing information.`}
      />
        </Head>
        <Container>
          
       
        <Intro />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          )}
          

                    <Mid />
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
