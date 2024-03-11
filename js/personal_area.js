const ordersContainer = document.querySelector(".footer-container .container.text-center .row");

const orders = []

const getOrders = async () => {
    await fetch("http://exam-2023-1-api.std-900.ist.mospolytech.ru/api/orders?api_key=30068957-8799-402b-bbcd-03a6a76f8f0a")
      .then((response) => response.json())
      .then((orders) => {
        ordersList.push(...orders);
        showOrders();
      })
      .catch((error) => console.error(error));
  };
  
  const showOrders = () => {
    console.log(orders);
    const ordersContainer = document.querySelector(".footer-container .container.text-center .row");
    ordersContainer.innerHTML = "";
    orders.forEach(function (order, index) {
        const row = document.createElement("div");
        row.classList.add("row");
        const colNumber = document.createElement("div");
        colNumber.classList.add("col-1");
        colNumber.classList.add("border");
        colNumber.classList.add("border-dark");
        colNumber.textContent = index + 1;
        const colRouteName = document.createElement("div");
        colRouteName.classList.add("col-5");
        colRouteName.classList.add("border");
        colRouteName.classList.add("border-dark");
        colRouteName.textContent = "Название маршрута";
        const colDate = document.createElement("div");
        colDate.classList.add("col-2");
        colDate.classList.add("border");
        colDate.classList.add("border-dark");
        colDate.textContent = order.date;
        const colPrice = document.createElement("div");
        colPrice.classList.add("col-2");
        colPrice.classList.add("border");
        colPrice.classList.add("border-dark");
        colPrice.textContent = order.price;
        const colEmpty = document.createElement("div");
        colEmpty.classList.add("col-2");
        colEmpty.classList.add("border");
        colEmpty.classList.add("border-dark");

        row.appendChild(colNumber);
        row.appendChild(colRouteName);
        row.appendChild(colDate);
        row.appendChild(colPrice);
        row.appendChild(colEmpty);

        ordersContainer.appendChild(row);
    });
}