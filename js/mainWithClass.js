(async () => {
  class Car {
    constructor(size) {
      this.tableSize = size + 1 || 20;
      this.carsJson = [];
      this.carLabels = [];
      this.carPrices = [];
      this.tableBody = document.querySelector("#cars-table tbody");
    }
  
    async getData() {
      const response = await fetch("https://myfakeapi.com/api/cars/");
      this.carsJson = await response.json();
    }

    createElement(elem) {
      return document.createElement(elem);
    }

    setCarLabels({ car, car_model }) {
      this.carLabels.push(`${car} - ${car_model}`);
    }

    setCarPrices({ price }) {
      this.carPrices.push(Number(price.substring(1)));
    }

    row({
        car,
        car_model,
        car_model_year,
        price
      }, index) {
      return `
        <td>${index}</td>
        <td>${car}</td>
        <td>${car_model}</td>
        <td>${car_model_year}</td>
        <td>${price}</td>
      `;
    }

    buildTable() {
      const { tableSize, carsJson, createElement } = this;

      for (let i = 1; i < tableSize; i++) {
        const el = createElement('tr');
        el.innerHTML = this.row(carsJson.cars[i], i);
        this.tableBody.appendChild(el);
        this.setCarLabels(carsJson.cars[i]);
        this.setCarPrices(carsJson.cars[i]);
      }
    }
  
    async init() {
      await this.getData();
      this.buildTable();
    }
  }


  const car = new Car(30);
  await car.init();

  const ctx = document.getElementById("myChart");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: car.carLabels,
      datasets: [
        {
          data: car.carPrices,
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
