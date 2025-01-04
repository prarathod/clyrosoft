import React, { useState, useRef, useEffect } from 'react';
import './App.css'; // Add custom styles for highlighted text if needed

const HighlightSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  const textContainerRef = useRef(null);

  const text = `--{1}--Here's\na     React component that renders a \n\n text section with paragraphs, spaces, and enters. --{2}-- This amendment No. 5(“Amendment No 5”) is effective as of 01 jan`;

  const formatText = (rawText) => {
    // Replace page headers
    const formattedText = rawText.replace(/--\{(\d+)\}--/g, (match, pageNo) => {
      return `<div class='page-header'>Page ${pageNo}</div>`;
    });

    // Replace smart quotes with normal quotes
    return formattedText.replace(/[“”]/g, '"');
  };

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setHighlightedText(formatText(text));
      return;
    }

    // Normalize the text and search term for matching
    const normalizedSearchTerm = searchTerm.replace(/\s+/g, ' ').trim();
    const normalizedText = text.replace(/\s+/g, ' ');

    // Escape special regex characters
    const escapedSearchTerm = normalizedSearchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Regex to find matches in normalized text
    const regex = new RegExp(`(${escapedSearchTerm})`, 'gi');
    const matches = [...normalizedText.matchAll(regex)];

    if (matches.length === 0) {
      setHighlightedText(formatText(text));
      return;
    }

    // Highlight matches in the raw text
    let highlighted = '';
    let lastIndex = 0;
    let matchOffset = 0;

    matches.forEach((match) => {
      const start = text.slice(matchOffset).search(new RegExp(escapedSearchTerm, 'i')) + matchOffset;
      const end = start + match[0].length;

      highlighted += text.slice(lastIndex, start);
      highlighted += `<span class="highlight">${text.slice(start, end)}</span>`;
      lastIndex = end;
      matchOffset = end;
    });

    highlighted += text.slice(lastIndex);

    // Focus on the first match
    if (textContainerRef.current) {
      const tempDiv = document.createElement('div');
      tempDiv.style.visibility = 'hidden';
      tempDiv.style.position = 'absolute';
      tempDiv.style.whiteSpace = 'pre-wrap';
      tempDiv.style.lineHeight = '1.5';
      tempDiv.innerText = text.slice(0, matches[0].index);
      document.body.appendChild(tempDiv);
      const offsetHeight = tempDiv.offsetHeight;
      document.body.removeChild(tempDiv);

      const container = textContainerRef.current;
      container.scrollTop = offsetHeight - container.clientHeight / 2;
    }

    setHighlightedText(highlighted);
  };

  return (
    <div>
      <h1>Search and Highlight Text</h1>
      <div style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Enter text to search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '0.5rem', marginRight: '0.5rem' }}
        />
        <button onClick={handleSearch} style={{ padding: '0.5rem' }}>
          Search
        </button>
      </div>
      <div
        ref={textContainerRef}
        className="text-container"
        style={{
          whiteSpace: 'pre-wrap',
          lineHeight: '1.5',
          background: '#f9f9f9',
          padding: '1rem',
          borderRadius: '5px',
          maxHeight: '300px',
          overflowY: 'auto',
        }}
        dangerouslySetInnerHTML={{ __html: highlightedText || formatText(text) }}
      ></div>
    </div>
  );
};

export default HighlightSearch;

// CSS (App.css)
// .highlight {
//   background-color: yellow;
//   color: black;
//   font-weight: bold;
// }
// .page-header {
//   background-color: #f0f0f0;
//   text-align: center;
//   padding: 0.5rem;
//   margin: 1rem 0;
//   font-weight: bold;
//   border-radius: 5px;
// }
