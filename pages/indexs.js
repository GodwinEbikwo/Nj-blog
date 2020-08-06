import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import PostCard from "../components/postCard";
import Link from "next/link";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p id={utilStyles.headingMd__p}>
          My name is Godwin Ebikwo, I was born and raised in a country called
          Nigeria. Although I studied computer science and software
          entrepreneurship at the University of Buckingham, I cannot FIX your
          printer, but I can design and develop your website though.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        {allPostsData.map(({ id, title, date }) => (
          <Link href="/posts/[id]" as={`/posts/${id}`}>
            <a>
              <PostCard key={id} heading={title} date={date} />
            </a>
          </Link>
        ))}
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
