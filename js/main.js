(async () => {
  class Car {
    constructor(size) {
      this.tableSize = size + 1 || 20;
      this.carsJson = [];
      this.carLabels = [];
      this.carPrices = [];
      this.tableBody = document.querySelector('#cars-table tbody');
    }
  
    async getData() {
      const response = await fetch('https://myfakeapi.com/api/cars/');
      this.carsJson = await response.json();
    }

    createElement(elem) {
      return document.createElement(elem);
    }

    setCarLabels({ car, car_model }) {
      return this.carLabels.push(`${car} - ${car_model}`);
    }

    setCarPrices({ price }) {
      return this.carPrices.push(Number(price.substring(1)));
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
      const { tableSize, carsJson, createElement, tableBody, row } = this;

      for (let i = 1; i < tableSize; i++) {
        const el = createElement('tr');
        el.innerHTML = row(carsJson.cars[i], i);
        tableBody.appendChild(el);
        this.setCarLabels(carsJson.cars[i]);
        this.setCarPrices(carsJson.cars[i]);
      }
    }
  
    async init() {
      await this.getData();
      this.buildTable();
    }
  }
  class ForChart {
    constructor({
      ctx,
      type,
      lineTension,
      backgroundColor,
      borderWidth, 
      borderColor, 
      pointBackgroundColor,
    }) {
      this.type = type;
      this.lineTension = lineTension;
      this.backgroundColor = backgroundColor;
      this.borderWidth = borderWidth;
      this.pointBackgroundColor = pointBackgroundColor;
      this.borderColor = borderColor;
      this.ctx = document.getElementById(ctx);
    }

    makechart() {
      const {
        type,
        lineTension,
        backgroundColor,
        borderWidth,
        borderColor,
        pointBackgroundColor,
        ctx
      } = this;
      new Chart(ctx, {
        type,
        data: {
          labels: car.carLabels,
          datasets: [
            {
              data: car.carPrices,
              lineTension,
              backgroundColor,
              borderColor,
              borderWidth,
              pointBackgroundColor,
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
    }
  }
  const car = new Car(40);
  await car.init();

  const cart = new ForChart(
    {
      ctx: 'myChart',
      type: 'line',
      lineTension: 0,
      backgroundColor: 'transparent',
      borderWidth: 4,
      borderColor: '#007bff',
      pointBackgroundColor: '#007bff'
    }
  );
  cart.makechart();
})();
