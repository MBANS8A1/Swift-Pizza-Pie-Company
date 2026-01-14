import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [orderQuery, setOrderQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!orderQuery) return;
    navigate(`/order/${orderQuery}`);
    setOrderQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search the order #"
        onChange={(e) => setOrderQuery(e.target.value)}
        value={orderQuery}
        className="focus:ring-opacity-50 w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm transition-all duration-300 placeholder:text-stone-400 focus:w-72 focus:ring focus:ring-yellow-500 focus:outline-none sm:w-64"
      />
    </form>
  );
}

export default SearchOrder;
