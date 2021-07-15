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
          <title>Crested Gecko Article Collection - ReptiKeep</title>
          <meta
        name="description"
        content={`A collection of Crested Gecko fact based posts, on everything from feeding to breeding Crested Geckos.`}
      />
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
  