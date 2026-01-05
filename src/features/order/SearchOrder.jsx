import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [orderQuery, setOrderQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!orderQuery) return;
    navigate(`/order/${orderQuery}`);
    setOrderQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search the order #"
        onChange={(e) => setOrderQuery(e.target.value)}
        value={orderQuery}
      />
    </form>
  );
}

export default SearchOrder;
