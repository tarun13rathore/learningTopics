import React, { useState } from "react";

const Folder = ({ data }) => {
  const [expend, setExpend] = useState(false);
  if (data?.isFolder) {
    return (
      <>
        <span onClick={() => setExpend(!expend)}>{data.name}</span>
        <div
          style={{ display: expend ? "block" : "none", paddingLeft: "15px" }}
        >
          {data?.item?.map((i) => {
            return (
              <div
                style={{
                  display: expend ? "block" : "none",
                  paddingLeft: "15px",
                }}
              >
                <Folder data={i} />
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <span>{data.name}</span>
      </>
    );
  }
};

export default Folder;
