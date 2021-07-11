import Container from '../components/container'
import AllStories from '../components/all-stories'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function ArticleCollection({ allPosts }){
    const morePosts = allPosts.slice(0)
    return(
        <Layout>
        <Head>
          <title>Crested Gecko Morphs, Diet, and Care</title>
        </Head>
        <Container>
        {morePosts.length > 0 && <AllStories posts={morePosts} />}
        </Container>
        </Layout>
    );
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
  