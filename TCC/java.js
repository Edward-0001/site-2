//Inicio Grafico Pizza
const cty = document.getElementById('grafPizza').getContext('2d');

const myCharty = new Chart(cty, {
    type: 'pie',
    data: {
        labels: [
          'Moçambique',
          'Malavi',
          'Libéria'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      },
    
});
//Fim Grafico Pizza

//Inicio Grafico Linha
const ctx = document.getElementById('grafLinha').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            '2013',
            '2014',
            '2015',
            '2016',
            '2017',
            '2018',
            '2019',
            '2020',
            '2021',
            
        ],
        datasets: [{
            label: 'Evolução da fome ao longo dos anos (em milhões)',
            data: [877, 805, 820, 821, 811, 827, 820, 962, 5 ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'      
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
//Fim grafico linha