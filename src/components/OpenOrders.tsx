import React, { useContext } from "react";
import styles from "../styles/FloorPlan.module.css";
import { menuContext } from "./MenuContext";
import SingleDrinksOrder from "./SingleDrinksOrder";
import SingleOpenOrder from "./SingleOpenOrder";

export default function OpenOrders() {
  const { openOrders } = useContext(menuContext);

  return (
    <div className={styles["open-orders-container"]}>
      <div className={styles["food-heading"]}>Food orders</div>

      <div className={styles["food-orders-wrapper"]}>
        <div className={styles["food-orders"]}>
          {openOrders &&
            openOrders.map((order) => {
              let orderContainsDrinks: boolean = false;
              order.orderItemDetails.forEach((item) => {
                if (item.station !== "bar") orderContainsDrinks = true;
              });
              if (orderContainsDrinks !== false) {
                return <SingleOpenOrder key={order.orderId} order={order} />;
              } else return null;
            })}
        </div>
      </div>

      <div className={styles["bar-heading"]}>Bar orders</div>
      <div className={styles["drinks-orders-wrapper"]}>
        <div className={styles["drinks-orders"]}>
          {openOrders &&
            openOrders.map((order) => {
              let orderContainsDrinks: boolean = false;
              order.orderItemDetails.forEach((item) => {
                if (item.station === "bar") orderContainsDrinks = true;
              });
              if (orderContainsDrinks !== false) {
                return <SingleDrinksOrder key={order.orderId} order={order} />;
              } else return null;
            })}
        </div>
      </div>
    </div>
  );
}
