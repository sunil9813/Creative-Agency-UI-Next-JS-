import axios from 'axios';
import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

const Coin = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState({});
  const url = `https://api.coingecko.com/api/v3/coins/${id}`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoin(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [url]);

  return (
    <div>
      {coin.id ? (
        <div>
          <h1>{coin.id}</h1>
          {/* Tampilkan informasi lainnya tentang koin di sini */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Coin;