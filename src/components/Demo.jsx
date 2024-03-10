import React,{useState} from 'react'
import Header from './Header';
import './Demo.css'

const photos = [
    { id: 1, name: 'Photo 1', url: '../../p1.webp' },
    { id: 2, name: 'Photo 2', url: '../../p2.webp' },
    
    // Add more photos as needed
  ];
  
const Demo = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };

    const [selectedPhotoUrl, setSelectedPhotoUrl] = useState('');
  const [selectedPhotoName, setSelectedPhotoName] = useState('');

  const handlePhotoChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    setSelectedPhotoUrl(event.target.value);
    setSelectedPhotoName(event.target[selectedIndex].text);
  };
  return (
    <>
    <Header/>
      <div className="container d-flex" style={{height: '92vh'}}>
        <div className="row  my-3 justify-content-center" style={{alignItems:'center',width:'100%'}}>
            <div className="col-md-4">
                <div className="container ">
      <div>
        {selectedFile && (
            <img
            src={URL.createObjectURL(selectedFile)}
            alt="Uploaded"
            style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
            )}
      </div>
                </div>
                <div>Upload Your Photo </div>
                
            <input type="file" className='my-2' onChange={handleFileChange} />
            </div>
            <div className="col-md-4">
                <div className="container ">
      {selectedPhotoName && (
        <div>
          <img src={selectedPhotoUrl} alt="Selected" style={{ maxWidth: '100%', maxHeight: '200px' }} />
        </div>
      )}
                </div>
      <p>Selected File Name: {selectedPhotoName}</p>
                <select value={selectedPhotoUrl} onChange={handlePhotoChange}>
        <option value="">Select a photo</option>
        {photos.map(photo => (
          <option key={photo.id} value={photo.url}>{photo.name}</option>
        ))}
      </select>
            </div>
            <div className="col-md-4">
                <div className="container ">Output Image</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Demo
