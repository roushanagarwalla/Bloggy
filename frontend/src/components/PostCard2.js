import { Link } from "react-router-dom";

function PostCard2(props) {
  return (
   <Link  to={`/article/${props.post.url}`}
   style={{ textDecoration: "none", color: "rgb(31,31,31)" }}>
    <div className="post-card2">
      <div style={{ display: "flex" }}>
        <img id="post-card2-img" src={`http://localhost:8000${props.post.img}`} />
        <div className="p-3">
          <h2 style={{ color: "rgb(31,31,31)"}}>
            {props.post.title}{" "}
          </h2>
          <div className="mt-3" style={{position:'relative'}}>
            <img src="https://ik.imagekit.io/5rvafdbx9c/portfolio/avatar_1UH88kKgM.png?ik-sdk-version=javascript-1.4.3&updatedAt=1660046769782" className="postcard-profile" />
            <div className="username-date">
              <span className="cart-user">Roushan Agarwalla</span>
           
              <p className="cart-date">
                {props.post.created_date}   
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </Link>
  );
}
export default PostCard2;
