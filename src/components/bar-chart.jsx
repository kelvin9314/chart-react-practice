

import { Bar } from 'react-chartjs-2';


const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Store 1',
    data: [100, 200, 300, 400 , 500, 600],
    backgroundColor: 'green'
  }]
}

const options = {
  plugins: {
    title: {
        display: true,
        text: 'Vertical Bar Chart'
    }
  },
  // scales: {
  //   xAxes: [
  //     {
  //       scaleLabel: {
  //         labelString: 'Months',
  //         display: true,
  //         fontColor: 'blue',
  //       },
  //     }
  //   ],
  //   yAxes: [
  //     {
  //       scaleLabel: {
  //         labelString: 'Revenue',
  //         display: true,
  //         fontColor: 'blue',
  //       },
  //       ticks: {
  //         beginAtZero: true
  //       }
  //     }
  //   ]
  // }
}


const BarChart = () => {

  return (
    <>
      <Bar data={data} options={options}/>
    </>
  )
}

export default BarChart