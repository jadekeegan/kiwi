import { useState, React, useRef } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios'

import "./dashboard.component.css"
import chart from "./sample-chart.png";

import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

let tableData = []
let chartData = [0,0,0,0,0,0,0,0,0,0,0,0]

const Dashboard = () => {
	const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);
  const ref = useRef();

  const columns = [
    {
        name: 'Date',
        selector: row => row.date,
    },
    {
        name: 'Purchase',
        selector: row => row.merchantName,
    },
    {
      name: 'Amount',
      selector: row => row.totalAmount,
  },
];

const options = {
  title: {
    text: "yearly expense summary",
    fontColor: "#1a312b",
    fontFamily: "Raleway",
    fontWeight: "bold"
  },
  data: [{				
            type: "column",
            axisX:{
              labelFontFamily: "Raleway",
              interval: 1,
              intervalType: "month"
            },
            dataPoints: [
                { x: new Date(2022, 0),  y: chartData[0]  },
                { x: new Date(2022, 1), y: chartData[1]  },
                { x: new Date(2022, 2), y: chartData[2]  },
                { x: new Date(2022, 3),  y: chartData[3]  },
                { x: new Date(2022, 4),  y: chartData[4]  },
                { x: new Date(2022, 5),  y: chartData[5]  },
                { x: new Date(2022, 6),  y: chartData[6]  },
                { x: new Date(2022, 7),  y: chartData[7]  },
                { x: new Date(2022, 8),  y: chartData[8]  },
                { x: new Date(2022, 9),  y: chartData[9]  },
                { x: new Date(2022, 10),  y: chartData[10]  },
                { x: new Date(2022, 11),  y: chartData[11]  },
            ]
   }],
   backgroundColor: "#F5F3F0"
}

	const handleUpload = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
	}

	const handleSubmit = async () => {
    if (!selectedFile) { return; }
		const data = new FormData();

		data.append('file', selectedFile);

		let url = "https://api.taggun.io/api/receipt/v1/verbose/file";

    try {
      const res = await axios.post(url, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'apikey': "2bc787c0aa6c11edae52ab17ace764b5"
        } 
      })
      let date = new Date(Date.parse(res.data.date.data))
      chartData[date.getMonth()] += res.data.totalAmount.data
      tableData.push({
        date: date.toLocaleDateString() ?? "N/A",
        merchantName: res.data.merchantName.data,
        totalAmount: res.data.totalAmount.data
      })
      ref.current.value = ""
      setIsSelected(false);
    } catch (e) {
    }
	};

	return (
		<div className="dashboard-container">
			<h1>dashboard</h1>
			<section id="file-upload-section">
        <div>
          <h2>file upload</h2>
          <div class="file-upload">
            <input type="file" name="file" ref={ref} onChange={handleUpload} />
            {isSelected ? (
              <div>
                <p>Filename: {selectedFile.name}</p>
                <p>Filetype: {selectedFile.type}</p>
                <p>Size in bytes: {selectedFile.size}</p>
                <p>
                  lastModifiedDate:{' '}
                  {selectedFile.lastModifiedDate.toLocaleDateString()}
                </p>
              </div>
            ) : (
              <p>Select a file to show details</p>
            )}
          </div>
            <div>
              <button class="submit-button" onClick={handleSubmit}>Submit</button>
            </div>
        </div>
      </section>
			

      <section id="expenses-section">
      <h2>expenses</h2>
      <DataTable className="data-table"
            columns={columns}
            data={tableData}
        />
      </section>

      <section id="analytics-section">
        <h2>analytics</h2>
        <CanvasJSChart options = {options}/>
      </section>
      <img src={chart}/>
    </div>
	)
}

export default Dashboard