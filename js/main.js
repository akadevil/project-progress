(async () => {
  let carLabels = [];
  let carPrices = [];

  const response = await fetch("https://myfakeapi.com/api/cars/");
  const json = await response.json();

  const tableBody = document.querySelector("#cars-table tbody");

  for (let i = 0; i < 20; i++) {
    carLabels.push(`${json.cars[i].car} - ${json.cars[i].car_model}`);
    carPrices.push(Number(json.cars[i].price.substring(1)));

    const el = document.createElement("tr");
    el.innerHTML = `
        <td>${i}</td>
        <td>${json.cars[i].car}</td>
        <td>${json.cars[i].car_model}</td>
        <td>${json.cars[i].car_model_year}</td>
        <td>${json.cars[i].price}</td>
      `;

    tableBody.appendChild(el);
  }

  const ctx = document.getElementById("myChart");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: carLabels,
      datasets: [
        {
          data: carPrices,
          lineTension: 0,
          backgroundColor: "transparent",
          borderColor: "#007bff",
          borderWidth: 4,
          pointBackgroundColor: "#007bff",
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });
})();
