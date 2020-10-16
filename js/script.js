//navigation
var sidebar = document.querySelector('.sidebar');
var navBarToggle = document.querySelector('.navbar-js');

navBarToggle.addEventListener('click', function(event){
  sidebar.classList.toggle('.active');
});

//cannvas - myChart
var ctx = document.getElementById('myChart').getContext('2d');

/* eslint-disable */
Chart.Legend.prototype.afterFit = function () {
  this.height = this.height + 50;
}

var chart = new Chart(ctx, {// eslint-disable-line

  // 1
  type: 'bar',
  data: {
    // 2
    labels: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'],
    // 3
    datasets: [{
        // 4
        label: 'Signups',
        // 5
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        fontSize: '14px',
        // 6
        data: [52, 51, 41, 94, 26, 6, 72, 9, 21, 88],
      },
      {
        label: 'FTD',
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        fontSize: '14px',
        data: [6, 72, 1, 0, 47, 11, 50, 44, 63, 76],
      },
      {
        label: 'Earned',
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        fontSize: '14px',
        data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
        // 7
        hidden: true,
      }
    ]
  },
  options: {
    legend: {
      display: false,
    },
    layout: {
      padding: {
        left: 10,
        top: 0,
        bottom: 0,
        right: 10,
      }
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false
        }
      }]
    }
  },
});