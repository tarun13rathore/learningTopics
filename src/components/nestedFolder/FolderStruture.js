import React from "react";
import data from "./structure";
import Folder from "./Folder";

const FolderStruture = () => {
  return (
    <div>
      <Folder data={data} />
    </div>
  );
};

export default FolderStruture;
