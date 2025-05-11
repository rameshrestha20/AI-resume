import React, { useState } from "react";
import "../style/UploadResume.css";

function UploadResume() {
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div className="resume-container"> 
    <div className="resume-box"> 
    <div className="upload-resume-container">
      <h1>Upload Your Resume</h1>
      <p>Please upload your resume in PDF or DOC format.</p>
      
      <div className="upload-box">
        <span className="upload-icon">📄</span>
        <p>Drag & Drop your file here or</p>
        <label htmlFor="file-upload" className="upload-button">
          Browse Files
        </label>
        <input
          id="file-upload"
          type="file"
          accept=".pdf,.doc,.docx"
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>

      {fileName && <p className="file-name">Selected File: {fileName}</p>}

      <button className="upload-submit-button">Upload Resume</button>
    </div>
    </div>
    </div>
  );
}

export default UploadResume;
