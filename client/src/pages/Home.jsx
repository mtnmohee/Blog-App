import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const posts = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quidem accusamus velit, commodi quis facilis distinctio voluptas debitis consequuntur nihil ratione quia, temporibus ut iusto voluptatum at mollitia ipsum tempora",
      img: "https://images.pexels.com/photos/13947143/pexels-photo-13947143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quidem accusamus velit, commodi quis facilis distinctio voluptas debitis consequuntur nihil ratione quia, temporibus ut iusto voluptatum at mollitia ipsum tempora",
      img: "https://images.pexels.com/photos/15049798/pexels-photo-15049798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quidem accusamus velit, commodi quis facilis distinctio voluptas debitis consequuntur nihil ratione quia, temporibus ut iusto voluptatum at mollitia ipsum tempora",
      img: "https://images.pexels.com/photos/3754244/pexels-photo-3754244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      id: 4,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quidem accusamus velit, commodi quis facilis distinctio voluptas debitis consequuntur nihil ratione quia, temporibus ut iusto voluptatum at mollitia ipsum tempora",
      img: "https://images.pexels.com/photos/15293662/pexels-photo-15293662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={post.id}>
            <div className="img">
              <img src={post.img} alt="" />
            </div>
            <div className="content">
              <Link className="link" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
