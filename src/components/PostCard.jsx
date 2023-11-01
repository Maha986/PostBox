export default function PostCard({post}) {
  return (
    <div className="max-w-[400px] shadow-[0_4px_5px_3px_rgba(119,53,136,0.459)] px-6 py-10 m-4 hover:shadow-[0_4px_4px_5px_rgba(129,72,144,0.561)] cursor-pointer ">
        <h2 className="font-bold">{post.title}</h2>
        <p className="text-justify mt-4">{post.body}</p>
    </div>
  )
}
