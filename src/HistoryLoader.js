export default async function fetchOrderHistory() {
    let orderHistory = {};
    fetch('http://localhost:8080/orders', {
        method: "GET",
    }).then((result) => result.json())
      .then((data) => Object.assign(orderHistory, data));

      await new Promise((resolve) => setTimeout(resolve, 100));
      return orderHistory;
  }
