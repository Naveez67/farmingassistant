import React from "react";
import Userinfo from "./userdata";
const Showcomments = ({ comments }) => {
  const len = comments.length - 1;
  const [show, setshow] = React.useState(false);
  return (
    <div>
      {show ? (
        <>
          {comments.length > 1 ? (
            <>
              {comments.map((comment, index) => (
                <Userinfo
                  key={index}
                  name={comment.username}
                  text={comment.text}
                  time={comment.comdate}
                />
              ))}
              <h5  style={{color:"blueviolet",cursor:"pointer"}} onClick={() => setshow(false)}>Show less</h5>
            </>
          ) : (
            "No comments"
          )}
        </>
      ) : (
        <>
          <div>
            {console.log("comments+111",comments[len])}
            <Userinfo
              name={comments[len].username}
              time={comments[len].comdate}
              text={comments[len].text}
            />
          </div>
          {len >= 1 ? (
            <h5 style={{color:"blueviolet",cursor:"pointer"}}
              onClick={() => {
                setshow(true);
              }}
            >
              Show all comments
            </h5>
          ) : (
            <></>
          )}
        </>
      )}
    </div>
  );
};

export default Showcomments;
