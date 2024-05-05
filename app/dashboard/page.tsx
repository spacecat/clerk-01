import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Dashboard</h1>
      <Link href="/dashboard/blog">To Blog</Link>
    </>
  );
}
