import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "./explore.css";

function Explore(props) {
  const posts =
    props.feedData &&
    props.feedData.map((post) => {
      return (
        <div className="postCard">
          <Card>
            <Card.Img className="postImg" variant="top" src={post.img} />
            <Card.Body>
              {/* <Card.Link onClick={() => likedPost(post._id)} key={post._id}>
                  <i class="far fa-heart"></i>
                </Card.Link> */}
              {/* <Card.Text>{post.likes[0].likes > 0 ? post.likes[0].likes + " likes": " "} </Card.Text> */}
              <Card.Title>{post.username}</Card.Title>
              <Card.Text>
                <i class="fas fa-map-marker-alt"></i> {post.location} <br />
                Price: {post.price} <br />
                {post.caption}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    });
  return (
    <div className="Explore">
      <h1 style={{ textAlign: "center" }}>Discover your next destination</h1>
      {posts}
    </div>
  );
}

export default Explore;
