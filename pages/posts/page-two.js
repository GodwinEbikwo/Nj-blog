import Link from "next/link";

export default function Pagetwo() {
  return (
    <>
      <h1>Page Two</h1>
      <h2>
        <Link href="/" scroll={false}>
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}
