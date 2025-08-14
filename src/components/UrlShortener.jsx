import React, { useState, useEffect } from 'react';
import { shortenUrl } from '../utils/bitlyApi';

const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [urls, setUrls] = useState([]);
  const [copiedIndex, setCopiedIndex] = useState(null);

  useEffect(() => {
    const storedUrls = JSON.parse(localStorage.getItem('shortenedUrls')) || [];
    setUrls(storedUrls);
  }, []);

  const handleShorten = async () => {
    if (!url.trim()) return;

    try {
      const shortUrl = await shortenUrl(url);
      const newEntry = { original: url, short: shortUrl };

      const updatedUrls = [newEntry, ...urls];
      setUrls(updatedUrls);
      localStorage.setItem('shortenedUrls', JSON.stringify(updatedUrls));
      setUrl('');
    } catch (error) {
      alert('Error shortening the URL');
      console.error(error);
    }
  };

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text)
      .then(() => { setCopiedIndex(index); })
      .catch(() => alert('Failed to copy.'));
  };

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>URL Shortener</h1>
      <div className="Shorten">
        <input type="text" size="90" placeholder="Enter URL" value={url} onChange={(e) => setUrl(e.target.value)}/>
        <button className= "Short-btn" onClick={handleShorten}>
          Shorten URL
        </button>
      </div>

      <h2>Shortened URLs</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {urls.map((item, index) => (
          <li key={index} style={{ marginBottom: '1rem' }}>
            <div><strong>Original:</strong> {item.original}</div>
            <div>
              <strong>Shortened:</strong>{' '}
              <a href={item.short} target="_blank" rel="noopener noreferrer"> {item.short} </a>
              <button className='Copy' onClick={() => handleCopy(item.short, index)}
                style={{backgroundColor: copiedIndex === index ? 'hsl(180, 66%, 49%)' : 'hsl(180, 66%, 49%)' }}>
                {copiedIndex === index ? 'Copied' : 'Copy'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UrlShortener;

