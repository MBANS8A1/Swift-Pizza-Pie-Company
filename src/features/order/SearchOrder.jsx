import { useState } from "react";

function SearchOrder() {
  const [orderQuery, setOrderQuery] = useState("");
  return (
    <form>
      <input
        placeholder="Search the order #"
        onChange={(e) => setOrderQuery(e.target.value)}
        value={orderQuery}
      />
    </form>
  );
}

export default SearchOrder;
