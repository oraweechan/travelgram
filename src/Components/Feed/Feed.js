import React, { useState, useEffect, useContext } from "react";
import { useHistory, Link, Navigate } from "react-router-dom";
import UserContext from "../../context/userContext";
import { Card } from "react-bootstrap";
import './Feed.css'
import { DataArrayRounded } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";

function Feed(props) {
  const { userData } = useContext(UserContext);
  const [feedData, setFeedData] = useState([]);
  const [redirect, setRedirect] = useState(false);


  const makeApiCall = () => {
    if (userData.user) {
    fetch(
      "https://travelgram-app-heroku.herokuapp.com/users/" +
        userData.user.username
    )
      .then((res) => res.json())
      .then((data) => {
        setFeedData(data.user.posts);
      });
    }
  };

  useEffect(() => {
    makeApiCall();
  }, []);

  // const [likeCount, setLikeCount] = useState({likes:0})

  // const likedPost = (id) => {
  //   fetch("https://travelgram-app-heroku.herokuapp.com/posts/" + id)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  //   console.log("clicked", id);
  // };

  const deletePost = (id) => {
    console.log('deleted')
    fetch("https://travelgram-app-heroku.herokuapp.com/users/" + userData.user.username + "/" + id, {
      method: "DELETE",
    })
    .then(data => makeApiCall())
  }


  const posts =
    feedData &&
    feedData.map((post) => {
      return (
        <div className="postCard">
          <Card>
            <Card.Img className="postImg" variant="top" src={post.img} />
            <Card.Body>
              {/* <Card.Link onClick={() => deletePost(post._id)} key={post._id}>
                <i class="far fa-heart"></i>
              </Card.Link> */}
              {/* <Card.Text>{post.likes[0].likes > 0 ? post.likes[0].likes + " likes": " "} </Card.Text> */}
              <Card.Title>{post.username}</Card.Title>
              <Card.Text>
                <i class="fas fa-map-marker-alt"></i> {post.location} <br />
                Price: {post.price} <br />
                <div className="flexRow">
                  {post.caption}
                  <Card.Link
                    onClick={() => deletePost(post._id)}
                    key={post._id}
                  >
                    <DeleteIcon color="primary" />
                  </Card.Link>
                </div>
                {/* {post.caption}
                <Card.Link onClick={() => deletePost(post._id)} key={post._id}>
                  <DeleteIcon color="primary" />
                </Card.Link> */}
              </Card.Text>
              {/* <Card.Link onClick={() => deletePost(post._id)} key={post._id}>
                <DeleteIcon color="primary"/>
              </Card.Link> */}
            </Card.Body>
          </Card>
        </div>
      );
    });

  return (
    <div>
    <div className='loginMessage'>
      {userData.user ? (
        <h1 style = {{textAlign:"center"}}>Welcome {userData.user.name}</h1>
      ) : (
        <>
          <div className="invitationToLogin">
            <h2>Error</h2>
            <div>Uh oh!  Looks like you are not logged in <i class="far fa-frown"></i>. <Link to="/">Login</Link> to view your feed, or check out our <Link to="/explore">Explore</Link> Page!</div>
          </div>
          
        </>
      )}
      {/* {feedData ? {posts} : "" } */}
    </div>
    <div className="Feed">{posts}</div>
    </div>
);
}


export default Feed;
