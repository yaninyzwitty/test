import {useState} from "react";

function Test() {
  const [loading, setLoading] = useState(false);
  const disabled = false;
  return (
    <button className={loading ? "button_disabled" : "button"}>Test</button>
  );
}

export default Test;
