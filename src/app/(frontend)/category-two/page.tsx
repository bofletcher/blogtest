import Link from "next/link";

export default async function Page() {
  return (
    <main className="container mx-auto grid grid-cols-1 gap-6 p-12">
      <h1 className="text-4xl font-bold">Category 2</h1>
      <ul className="grid grid-cols-1 divide-y divide-blue-100">
        {/* {posts.map((post) => (
          <li key={post._id}>
            <Link
              className="block p-4 hover:text-blue-500"
              href={`/posts/${post?.slug?.current}`}
            >
              {post?.title}
            </Link>
          </li>
        ))} */}
      </ul>
      <hr />
      <Link href="/">&larr; Return home</Link>
    </main>
  );
}