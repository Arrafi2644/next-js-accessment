import Image from "next/image";
import Link from "next/link";

export default async function Home() {

  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const posts = await res.json();
  // console.log(data);

  return (
  <div className="py-8">
    <h2 className="text-2xl font-bold">Total Post: {posts.length}</h2>
     <ul>
       {
        posts.map((post, index) => <li key={post.id} className="p-2 border my-2" > {index + 1}. {post.title} <br/> <Link href={`/blog/${post.id}`} className="text-xs py-1 px-2 border rounded-md bg-green-400">Show Details</Link></li>)
       }
     </ul>
  </div>
  );
}
