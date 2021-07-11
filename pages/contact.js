import Head from "next/head";
import Link from "next/link";
import Container from "../components/container";
import Layout from "../components/layout";

export default function Contact() {
    return(
        <Layout>
            <Head>
            <title>Contact Page - ReptiKeep</title>
            </Head>
            <Container>
            <div className="w-auto flex flex-col justify-center items-center">
                <div className="grid grid-cols-3">
                <div>
                    <Link  href="https://www.facebook.com/">
                        <a target="_blank"> Hi lol</a>
                    </Link>
                </div>
                <div>
                    <Link  href="https://www.facebook.com/">
                        <a target="_blank"> Hi lol</a>
                    </Link>
                </div>
                <div></div>
                </div>
            </div>
            </Container>
        </Layout>
    );
}