import { useState, React } from 'react';
import axios from 'axios'

const Dashboard = () => {
	const [selectedFile, setSelectedFile] = useState();
	const [isSelected, setIsSelected] = useState(false);

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
      console.log(res)
    } catch (e) {
      console.error(e);
    }
	};

	return (
		<div>
			<h1>Dashboard</h1>
			<div>
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
				<div>
					<button onClick={handleSubmit}>Submit</button>
				</div>
			</div>
		</div>
	)
}

export default Dashboard