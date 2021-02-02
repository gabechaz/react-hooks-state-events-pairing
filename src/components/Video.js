import React, { useState } from "react";
import { unstable_renderSubtreeIntoContainer } from "react-dom";
import video from "../data/video.js";
console.log(video)
function Video () {

    const [upVotes, addUpVote] = useState(video.upvotes)
    const [downVotes, addDownVote] = useState(video.downvotes)
    function handleDownVote () {
        addDownVote(downVotes + 1)
    }
    function handleUpvote () {
        
        addUpVote(upVotes + 1);

    }

    console.log(upVotes, 'upvotes')
return (
    <div className="App">
    <iframe
      width="919"
      height="525"
      src= {video.embedUrl}
      frameBorder="0"
      allowFullScreen
      title="Thinking in React"

    />
    <div style={{ textAlign: "center" }}>
    <h3>{video.title}</h3>
    <p>{video.views} | {video.createdAt}</p>
    <button onClick={handleUpvote} className = "upvote"> {upVotes} 👍</button>
    <button onClick={handleDownVote} className = "downvote"> {downVotes} 👎</button>
    {/* <p>{video.createdAt}</p> */}
    </div>
  </div>
)
}

export default Video

// {id: 1, title: "React Today and Tomorrow and 90% Cleaner React With Hooks", 
// embedUrl: "https://www.youtube.com/embed/dpw9EHDh2bM", views: 730707, createdAt: "Oct 26, 2018", …}