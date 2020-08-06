import Layout from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import Date from "../../components/date";
import Head from "next/Head";

export default function PageOne({}) {
  return (
    <Layout>
      <Head>
        <title>Shit</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>How to get way with murder</h1>
      </article>
    </Layout>
  );
}

const data =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptas, facilis, accusamus reiciendis ab sed illo deleniti quidem mollitia neque quo illum odit aperiam. Sapiente suscipit enim libero dignissimos fugit laudantium ad, exercitationem, nam sit corporis ullam asperiores recusandae in porro. Ipsum numquam totam laudantium officia cumque reiciendis dolore provident.";
