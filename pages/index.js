import Head from "next/head";
import Link from "next/link";
import styles from "../styles/entry.module.css";
import Card, { Hero, PCard, NewCard, Phone } from "../components/Card";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import PostCard from "../components/postCard";

export default function Entry({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Personal Portfolio</title>
      </Head>
      <main className={styles.app}>
        <div className={styles.container}>
          <nav className={styles.nav}>
            <div className={styles.logo_wrap}>
              <Link href="/">
                <a id="nav_h">
                  SEGUN <span>- EDITION 2020</span>
                </a>
              </Link>

              <Link href="/">
                <a id="nav_a">ABOUT</a>
              </Link>
            </div>
          </nav>
        </div>

        <header className={styles.header}>
          <h1>
            <span className={styles.h1}>Segun Sowunmi is a designer</span>
            <span id={styles.italics} className={styles.h1}>
              specialized in Identity, Interior{" "}
            </span>
            <span className={styles.h1}>
              and product currently based in Abuja.
            </span>
          </h1>
        </header>

        <section>
          <Hero href1="/posts/page-one" href2="/posts/page-two" />
        </section>

        <section>
          <Card href1="/posts/page-one" href2="" href3="" href4="" />
        </section>

        {/* <section className={styles.sectionContainer}>
          {allPostsData.map(({ id, title, date }) => (
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>
                <NewCard key={id} title={title} date={date} />
              </a>
            </Link>
          ))}
        </section> */}
      </main>

      <footer className={styles.footer}>
        <div id={styles.copyright}>
          <span>SJS</span>
          <span className={styles.f_bold}>&copy; 2020</span>
        </div>
        <div id={styles.social_icons}>Segun</div>
        <div id={styles.f_contact}>
          <span className={styles.f_bold}>Contact</span>
          <span id={styles.f__A}>
            <a href="#">SJS@hey.com</a>
          </span>
        </div>
      </footer>
    </>
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
