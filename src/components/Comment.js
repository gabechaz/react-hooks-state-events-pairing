import React, { useState } from "react";
import video from "../data/video.js";
const { comments } = video





    
    function Comment () {
        function handleClick(event){
            setHideComments(!hideComments)
            console.log(setHideComments)

        }
        const [hideComments, setHideComments] = useState(true)
        const commentsArr = comments.map((comment) => {
  
    
    return (
       <div>
           <h3>{comment.user}</h3>
          <p> {comment.comment} </p>
       </div>
    )
})

function renderComments (hideComments) {
    if (hideComments)  {
    return (
        <div style={{ textAlign: "center" }}>  
       
       <h1>{commentsArr.length} Comments</h1>
      <div>{commentsArr}</div>
      </div>
    )}

    
}

return (
    <button onClick={handleClick}> {hideComments ? "Hide Comments" :"Show Comments"}</button>
    // renderComments({hideComments})
  
   
    
)
}

 


export default Comment