import { useState, React } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios'

import "./dashboard.component.css"

import CanvasJSReact from '../assets/canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

let tableData = []
let chartData = [0,0,0,0,0,0,0,0,0,0,0,0]

const Dashboard = () => {
	const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

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
    text: "Yearly Expense Summary"
  },
  data: [{				
            type: "column",
            dataPoints: [
                { label: "January",  y: chartData[0]  },
                { label: "February", y: chartData[1]  },
                { label: "March", y: chartData[2]  },
                { label: "April",  y: chartData[3]  },
                { label: "May",  y: chartData[4]  },
                { label: "June",  y: chartData[5]  },
                { label: "July",  y: chartData[6]  },
                { label: "August",  y: chartData[7]  },
                { label: "September",  y: chartData[8]  },
                { label: "October",  y: chartData[9]  },
                { label: "November",  y: chartData[10]  },
                { label: "December",  y: chartData[11]  },
            ]
   }]
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
      console.log(res.data)
      let date = new Date(Date.parse(res.data.date.data))
      chartData[date.getMonth] += res.data.totalAmount.data
      tableData.push({
        date: date.toLocaleDateString() ?? "N/A",
        merchantName: res.data.merchantName.data,
        totalAmount: res.data.totalAmount.data
      })
      console.log(tableData)
      setIsSelected(false);
    } catch (e) {
      console.error(e);
    }
	};

	return (
		<div className="dashboard-container">
			<h1>Dashboard</h1>
			<section id="file-upload-section">
        <div>
          <h2>File Upload</h2>
          <div class="file-upload">
            <input type="file" name="file" onChange={handleUpload} />
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
      <h2>Expenses</h2>
      <DataTable className="data-table"
            columns={columns}
            data={tableData}
        />
      </section>
      <CanvasJSChart options = {options}
        />
    </div>
	)
}

export default Dashboard