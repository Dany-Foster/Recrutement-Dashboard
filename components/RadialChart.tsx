import { useState } from 'react';
import Chart from 'react-apexcharts'

const CandidatChart = () => {
    const [state, setState] = useState({
            options: {
                chart: {
                    id: 'candidat-chart',
                },
                title: {
                    text: 'Candidatures par statut',
                    style: {
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#000'
                    },
                    left: 'left',
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: '12px',
                                fontWeight: 'bold',
                            },
                            value: {
                                fontSize: '18px',
                                fontWeight: 'bold',
                            },
                            total: {
                                show: true,
                                label: 'Candidats',
                                formatter: function (w: object) {
                                   return 249; // Total number of candidates 
                                }  
                            }
                        }
                    }
                },
                labels: ['En cours', 'Accepté', 'Rejeté', 'Entretien'],
                colors: ['#F2C94C', '#77D270', '#D4526E', '#2F80ED'],
            },
            series: [50, 60, 10, 25],
        });
  return (
    <Chart options={state.options} series={state.series} type="radialBar" height={300} />
  );
}


export default CandidatChart;