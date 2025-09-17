export default function Post({ post}) {
console.log(post)

const {body,} = post


  return (
    <div className="card">
      <h2>{post.title}</h2>
          <p>{post.body}</p>
    </div>
  );
}