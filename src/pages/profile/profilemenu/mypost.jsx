import React from "react";
import helpService from "../../../services/helpservice";
const Myposts = () => {
  const [mypost, setpost] = React.useState([]);
  const get = () => {
    helpService
      .getmyposts()
      .then((data) => {
         // console.log(data);
        setpost(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  React.useEffect(get, []);
  return (
    <div>
      <h1>My posts</h1>
      {mypost.length > 0 ? (
        <>
          <h4>Showing your posts</h4>
          {mypost.map((item, index) => {
            const { photo, title, body } = item; //destructuring
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  width: "50%",
                  marginRight: "auto",
                  marginLeft: "auto",
                }}
              >
                <div>
                  <img
                    src={photo}
                    alt={title}
                    style={{ width: "100%", height: 300 }}
                  />
                </div>
                <div>
                  <h1>{title}</h1>
                  <p>{body}</p>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <h4>You have not posted any post yet</h4>
        </>
      )}
    </div>
  );
};

export default Myposts;
