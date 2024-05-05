import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Blog</h1>
      <Link href="/dashboard">To Dashboard</Link>
    </>
  );
}
