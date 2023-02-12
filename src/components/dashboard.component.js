import { useState, React } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios'

import "./dashboard.component.css"

let tableData = []

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
      tableData.push({
        date: res.data.date.data ?? "N/A",
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
			<section className="file-upload-section">
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
			

      <section className="expenses-section">
      <h2>Expenses</h2>
      <DataTable className="data-table"
            columns={columns}
            data={tableData}
        />
      </section>
    </div>
	)
}

export default Dashboard