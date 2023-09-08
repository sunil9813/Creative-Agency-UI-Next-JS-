import React from "react";
import styles from "./Styles.module.css"

const CoinItem = (props) => {
  return (
    <div className={styles.coin_row}>
      <p>{props.coins.market_cap_rank}</p>
      <div className={styles.imgSymbol}>
        {/* <img src={props.coins.image} alt="" /> */}
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <p>${props.coins.current_price.toLocaleString()}</p>
      <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
      <p className={styles.hide_mobile}>${props.coins.total_volume.toLocaleString()}</p>
      <p className={styles.hide_mobile}>${props.coins.market_cap.toLocaleString()}</p>
    </div>
  );
};

export default CoinItem;
