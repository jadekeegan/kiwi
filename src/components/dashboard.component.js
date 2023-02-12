import { useState, React, useRef } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';
import DashboardNav from './dashboard-navbar.component';
import kiwitree from '../assets/kiwi-img.png'

import "./dashboard.component.css"
import piechart from "../assets/pie-chart.png";

import CanvasJSReact from '../assets/canvasjs.react';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

let tableData = []
let chartData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
let sustainabilityCounter = 0;
let sustainabilityTotal = 0;

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
      name: 'Merchant',
      selector: row => row.merchantName,
    },
    {
      name: 'Sustainability',
      selector: row => row.sustainability,
    },
    {
      name: 'Amount',
      selector: row => row.totalAmount,
    },
  ];
  const customStyles = {
    headRow: {
      style: {
        backgroundColor: 'rgb(212, 221, 206)', // override the row height
      },
    },
    rows: {
      style: {
        backgroundColor: 'rgb(212, 221, 206)', // override the row height
      },
    },
    noData: {
      style: {
        backgroundColor: 'rgb(212, 221, 206)'
      }
    }
  };

  const options = {
    title: {
      text: "yearly expense summary",
      fontColor: "#513A28",
      fontFamily: "Raleway",
      fontWeight: "bold",
      fontSize: "20",
    },
    data: [{
      type: "column",
      axisX: {
        labelFontFamily: "Raleway",
        interval: 1,
        intervalType: "month"
      },
      dataPoints: [
        { x: new Date(2022, 0), y: chartData[0] },
        { x: new Date(2022, 1), y: chartData[1] },
        { x: new Date(2022, 2), y: chartData[2] },
        { x: new Date(2022, 3), y: chartData[3] },
        { x: new Date(2022, 4), y: chartData[4] },
        { x: new Date(2022, 5), y: chartData[5] },
        { x: new Date(2022, 6), y: chartData[6] },
        { x: new Date(2022, 7), y: chartData[7] },
        { x: new Date(2022, 8), y: chartData[8] },
        { x: new Date(2022, 9), y: chartData[9] },
        { x: new Date(2022, 10), y: chartData[10] },
        { x: new Date(2022, 11), y: chartData[11] },
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
      const options2 = {
        method: 'GET',
        url: 'https://esgapiservice.com/api/authorization/search',
        params: {q: res.data.merchantName.data, token: '1b6110541c3091e53e1e285f2ab1b95c'},
      };
      
      const response = await axios.request(options2)
      console.log(response)
      let date = new Date(Date.parse(res.data.date.data))
      chartData[date.getMonth()] += res.data.totalAmount.data
      let sustainability = "Unavailable"
      if (response.data[0]) {
        sustainability = response.data[0].environment_level
        sustainabilityCounter +=1;
        sustainabilityTotal += response.data[0].environment_score

      }
      tableData.push({
        date: date.toLocaleDateString() ?? "N/A",
        merchantName: res.data.merchantName.data,
        sustainability: sustainability,
        totalAmount: res.data.totalAmount.data
      })
      ref.current.value = ""
      setIsSelected(false);
    } catch (e) {
    }
	};
  let overCounter = 0;
  let budget = 150;
  for (let i = 0; i < chartData.length; i++) {
    if (chartData[i] > budget) {
      overCounter++;
    }
  }
  
	return (
    <div>
    <DashboardNav />
		<div className="dashboard-container">
      
			<h1>dashboard</h1>
      <div className="topSection">
        <div className="overview">
        <img src={kiwitree} width="100" height="100"></img>
        <div className="text">
        <h3>Overall Rating: <span className="unbold">Good</span></h3>
        <h3>Budget: <span className="unbold">$150/month</span></h3>
        <h3>Sustainability Score: <span className="unbold">{sustainabilityTotal/sustainabilityCounter/10 || 0}%</span></h3>
        <h3>Budgeting Score: <span className="unbold">{overCounter/12}%</span></h3>
        </div>
        </div>
			<section id="file-upload-section">
        <div>
          <h2>receipt upload</h2>
          <div class="file-upload">
            <input type="file" name="file" ref={ref} onChange={handleUpload} />
          </div>
          <div>
            <button class="submit-button" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </section>
      </div>


      <section id="expenses-section">
      <h2>expenses</h2>
      <DataTable className="data-table"
            columns={columns}
            data={tableData}
            customStyles={customStyles}
        />
      </section>

      <section id="analytics-section">
        <h2>analytics</h2>
        <CanvasJSChart options={options} />
      </section>
      <h2>your monthly expenses</h2>
      <img src={piechart} width="500"/>
    </div>
    </div>
	)
}

export default Dashboard