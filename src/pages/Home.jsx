import React, { useState, useEffect } from "react";

function Home() {
  const [items, setItems] = useState([]);
  const [visible, setVisible] = useState(3);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="Home">
      <div className="container">
        {items.slice(0, visible).map((item) => (
          <div className="card">
            <div className="id">
              <span>{item.id}</span>
            </div>
            <p>{item.body}</p>
          </div>
        ))}
        <button onClick={showMoreItems}>View more</button>
      </div>
    </div>
  );
}

export default Home;
