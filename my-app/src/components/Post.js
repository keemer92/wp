export default function Post ({ title, author, content, following}) {
    if (following)
    return (
        <div>
        <h1>{title}</h1>
          <h3>By: {author}</h3>
         <button>Unfollow</button>
        <p>{content}</p>
    </div>
    );
}