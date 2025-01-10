import React, { useState } from 'react';
import axios from 'axios';
import './Translate.css';

const Translate = () => {
  const [file, setFile] = useState(null);
  const [language, setLanguage] = useState('');
  const [question, setQuestion] = useState('');
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleTranslate = async () => {
    if (!file || !language) {
      alert('Please select a file and a language.');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('query', question?question:'Summarise the document');
    formData.append('translation_language', language);

    try {
      const response = await axios.post('http://localhost:8000/process_pdf/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResult(response.data.translated_answer || 'No translation available.');
      setError('');
    } catch (error) {
      console.error('Error translating document:', error);
      setError('Error translating document. Please try again.');
    }
  };

  const handleSummarize = async () => {
    if (!file) {
      alert('Please select a file.');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('query', question || 'Summarize the document');

    try {
      const response = await axios.post('http://localhost:8000/process_pdf/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResult(response.data.answer || 'No summary available.');
      setError('');
    } catch (error) {
      console.error('Error summarizing document:', error);
      setError('Error summarizing document. Please try again.');
    }
  };

  const handleSimplify = async () => {
    if (!file) {
      alert('Please select a file.');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('query', 'Simplify the language of the document');

    try {
      const response = await axios.post('http://localhost:8000/process_pdf/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResult(response.data.answer || 'No simplified version available.');
      setError('');
    } catch (error) {
      console.error('Error simplifying document:', error);
      setError('Error simplifying document. Please try again.');
    }
  };

  const handleGetAnswer = async () => {
    if (!file || !question) {
      alert('Please select a file and enter a question.');
      return;
    }
    const formData = new FormData();
    formData.append('file', file);
    formData.append('query', question);

    try {
      const response = await axios.post('http://localhost:8000/process_pdf/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setResult(response.data.answer || 'No answer available.');
      setError('');
    } catch (error) {
      console.error('Error getting answer:', error);
      setError('Error getting answer. Please try again.');
    }
  };

  return (
    <div className="translate-container">
      <div className="translate-buttons">
        <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
        <button onClick={handleTranslate}>Translate</button>
        <select value={language} onChange={(e) => setLanguage(e.target.value)}>
          <option value="">Select Language</option>
          <option value="as">Assamese</option>
          <option value="bn">Bengali</option>
          <option value="gu">Gujarati</option>
          <option value="hi">Hindi</option>
          <option value="kn">Kannada</option>
          <option value="ml">Malayalam</option>
          <option value="mr">Marathi</option>
          <option value="ne">Nepali</option>
          <option value="or">Odia</option>
          <option value="pa">Punjabi</option>
          <option value="ta">Tamil</option>
          <option value="te">Telugu</option>
          <option value="ur">Urdu</option>
        </select>
        <input 
          type="text" 
          placeholder="Enter your question here" 
          value={question} 
          onChange={(e) => setQuestion(e.target.value)} 
        />
        <button onClick={handleSummarize}>Summarize</button>
        <button onClick={handleSimplify}>Simplify Language</button>
        <button onClick={handleGetAnswer}>Get Answer</button>
      </div>
      <div className="document-display">
        <p>{result || 'Document content will be displayed here.'}</p>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default Translate;
