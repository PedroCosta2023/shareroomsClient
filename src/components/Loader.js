import React, { useState } from "react";
import SyncLoader from "react-spinners/ClipLoader";

function Loader() {
  const [loading, setLoading] = useState(true);
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div className="sweet-loading text-center">
      <SyncLoader
        color="#000"
        loading={loading}
        css=""
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Loader;
