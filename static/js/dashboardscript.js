// SIDEBAR TOGGLE

// document.getElementById("sufo").addEventListener("click", function(event) {
//   event.preventDefault(); // Prevent the default behavior of the anchor tag
  
//   // Perform form submission programmatically
//   document.getElementById("uploadForm").submit();
// });


let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// BAR CHART
const barChartOptions = {
  series: [
    {
      data: [10592, 35442, 53509, 19036, 14658, 10709],
      name: 'Products',
    },
  ],
  chart: {
    type: 'bar',
    background: 'transparent',
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '40%',
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    opacity: 1,
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  stroke: {
    colors: ['transparent'],
    show: true,
    width: 2,
  },
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
  xaxis: {
    categories: ['October', 'November', 'December', 'January', 'February', 'March'],
    title: {
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      show: true,
      color: '#55596e',
    },
    axisTicks: {
      show: true,
      color: '#55596e',
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: {
    title: {
      text: 'Count',
      style: {
        color: '#f5f7ff',
      },
    },
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      style: {
        colors: '#f5f7ff',
      },
    },
  },
};

const barChart = new ApexCharts(
  document.querySelector('#bar-chart'),
  barChartOptions
);
barChart.render();

// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Purchase Orders',
      data: ["Bills", "Car", "Clothes", "College works", "Communications", "Eating out", "Eggs", "Entertainment", "Food", "Friends", "Gifts", "Groceries", "Health", "House", "Petrol", "Sourav", "Sports", "Toiletry", "Transport"],
    },
    {
      name: 'Sales Orders',
      data: [920,38475, 600, 17246, 400, 96, 1150, 5155, 25330, 772, 581, 5006, 10755, 23604, 1869, 496, 1501, 1676,11047],
    },
  ],
  chart: {
    type: 'area',
    background: 'transparent',
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },
  colors: ['#00ab57', '#d50000'],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: 'vertical',
    },
    type: 'gradient',
  },
  grid: {
    borderColor: '#55596e',
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  legend: {
    labels: {
      colors: '#f5f7ff',
    },
    show: true,
    position: 'top',
  },
  markers: {
    size: 6,
    strokeColors: '#1b2635',
    strokeWidth: 3,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    axisBorder: {
      color: '#55596e',
      show: true,
    },
    axisTicks: {
      color: '#55596e',
      show: true,
    },
    labels: {
      offsetY: 5,
      style: {
        colors: '#f5f7ff',
      },
    },
  },
  yaxis: [
    {
      title: {
        text: 'Purchase Orders',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
    {
      opposite: true,
      title: {
        text: 'Sales Orders',
        style: {
          color: '#f5f7ff',
        },
      },
      labels: {
        style: {
          colors: ['#f5f7ff'],
        },
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
    theme: 'dark',
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

// Pie Chart
var options = {
  series: [920,38475, 600, 17246, 400, 96, 1150, 5155, 25330, 772, 581, 5006, 10755, 23604, 1869, 496, 1501, 1676,11047],
  chart: {
  width: 380,
  type: 'donut',
},
  labels: ["Bills", "Car", "Clothes", "College works", "Communications", "Eating out", "Eggs", "Entertainment", "Food", "Friends", "Gifts", "Groceries", "Health", "House", "Petrol", "Sourav", "Sports", "Toiletry", "Transport"],
dataLabels: {
  enabled: false
},
responsive: [{
  breakpoint: 480,
  options: {
    chart: {
      width: 200
    },
    legend: {
      show: false
    }
  }
}],
legend: {
  position: 'right',
  offsetY: 0,
  height: 230,
}
};

var piechart = new ApexCharts(document.querySelector("#pie-chart"), options);
piechart.render();


function appendData() {
var arr = chart.w.globals.series.slice()
arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
return arr;
}

function removeData() {
var arr = chart.w.globals.series.slice()
arr.pop()
return arr;
}

function randomize() {
return chart.w.globals.series.map(function() {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1
})
}

function reset() {
return options.series
}


// document.querySelector("#randomize").addEventListener("click", function() {
// chart.updateSeries(randomize())
// })

// document.querySelector("#add").addEventListener("click", function() {
// chart.updateSeries(appendData())
// })

// document.querySelector("#remove").addEventListener("click", function() {
// chart.updateSeries(removeData())
// })

// document.querySelector("#reset").addEventListener("click", function() {
// chart.updateSeries(reset())
// })

// line-graph
var loptions = {
  series: [{
    name: "Desktops",
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
}],
  chart: {
  height: 350,
  type: 'line',
  zoom: {
    enabled: false
  }
},
dataLabels: {
  enabled: false
},
stroke: {
  curve: 'straight'
},
title: {
  text: 'Product Trends by Month',
  align: 'left'
},
grid: {
  row: {
    colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    opacity: 0.5
  },
},
xaxis: {
  categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
}
};

var linechart = new ApexCharts(document.querySelector("#linechart"), loptions);
linechart.render();
