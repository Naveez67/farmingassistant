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
                  id={comment.postedBy}
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
            <Userinfo
              id={comments[len].postedBy}
              time={comments[len].comdate}
            />
            <p style={{ textAlign: "left", marginTop: "-1.8rem" }}>
              {comments[len].text}
            </p>
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
