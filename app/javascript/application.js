// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import * as bootstrap from "bootstrap"
import "chartkick"
import "Chart.bundle"

document.addEventListener('turbo:load', () => {
  const ctx = document.getElementById('reportChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Sales',
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1
      }]
    }
  });

  const trafficCtx = document.getElementById('trafficChart').getContext('2d');
  new Chart(trafficCtx, {
    type: 'pie',
    data: {
      labels: ['Search Engine', 'Direct', 'Social', 'Referral'],
      datasets: [{
        label: 'Website Traffic',
        data: [55, 25, 15, 5],
        backgroundColor: ['#36A2EB', '#FF6384', '#FFCE56', '#4BC0C0']
      }]
    }
  });
});
