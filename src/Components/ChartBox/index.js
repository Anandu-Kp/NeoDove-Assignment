import "./styles.css"
import React from 'react'

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js"
import { Doughnut } from "react-chartjs-2";

import InfoIcon from '@mui/icons-material/Info';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

function ChartBox() {

    const data = {
        labels: ["Walk In Lead", "Custom Integration"],
        datasets: [{
            label: 'Lead-Summary',
            data: [2, 1],
            backgroundColor: [
                'rgb(91, 13, 180)',
                'rgb(176, 124, 244)',

            ],
            borderColor: [
                'rgb(91, 13, 180)',
                'rgb(176, 124, 244)',

            ],
            hoverOffset: 4
        }]
    }
    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
    }

    const textData = {
        id: 'textCenter',
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data } = chart;
            ctx.save();
            ctx.font = "bolder 16px sans-serif";
            ctx.fillStyle = "black";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(`Total`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y - 20);
            ctx.font = "bolder 30px sans-serif";
            ctx.fillText(data.datasets[0].data[0] + data.datasets[0].data[1], chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y + 10);


            ctx.restore();
        }
    }

    return (
        <div className="Lead-source-container" >
            <div className="load-top">
                <span>Lead Source Summary</span>
                <InfoIcon />

            </div>
            <div className="chart">
                <Doughnut
                    data={data}
                    options={options}
                    plugins={[textData]}
                >
                </Doughnut>

                <div className="legends">
                    <div >
                        <div>
                            <div className="dot" style={{ backgroundColor: "rgb(91, 13, 180)" }}></div>
                            <span className="title">Walk In Lead</span>
                        </div>
                        <span className="value">2</span>
                    </div>
                    <div >
                        <div><div className="dot" style={{ backgroundColor: "rgb(176, 124, 244)" }}></div>
                            <span className="title">Custom Integration</span></div>
                        <span className="value">1</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartBox