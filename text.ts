import React, { useState, useRef, useEffect } from 'react';
import './App.css'; // Add custom styles for highlighted text if needed

const HighlightSearch = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [highlightedText, setHighlightedText] = useState('');
  const textContainerRef = useRef(null);

  const text = `Here's\na     React component that renders a \n\n text section with paragraphs, spaces, and enters.`;

  const handleSearch = () => {
    if (!searchTerm.trim()) {
      setHighlightedText(text);
      return;
    }

    // Remove line breaks and extra spaces from both text and search term for matching
    const normalizedText = text.replace(/\s+/g, ' ');
    const normalizedSearchTerm = searchTerm.replace(/\s+/g, ' ');

    // Escape special regex characters in the normalized search term
    const escapedSearchTerm = normalizedSearchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    // Create a regex for the normalized search term
    const regex = new RegExp(`(${escapedSearchTerm})`, 'gi');

    // Replace matches in the original text for highlighting while maintaining original structure
    let highlighted = text;
    const matchPositions = [...normalizedText.matchAll(regex)].map(match => {
      const start = match.index;
      const end = start + match[0].length;
      return { start, end };
    });

    if (matchPositions.length > 0) {
      highlighted = '';
      let cursor = 0;
      for (const { start, end } of matchPositions) {
        highlighted += text.slice(cursor, start);
        highlighted += '<span class="highlight">' + text.slice(start, end) + '</span>';
        cursor = end;
      }
      highlighted += text.slice(cursor);

      // Scroll to the first match and center it in the view
      if (textContainerRef.current) {
        const firstMatchIndex = matchPositions[0].start;
        const precedingText = text.slice(0, firstMatchIndex);
        const tempDiv = document.createElement('div');
        tempDiv.style.visibility = 'hidden';
        tempDiv.style.position = 'absolute';
        tempDiv.style.whiteSpace = 'pre-wrap';
        tempDiv.style.lineHeight = '1.5';
        tempDiv.innerText = precedingText;
        document.body.appendChild(tempDiv);
        const offsetHeight = tempDiv.offsetHeight;
        document.body.removeChild(tempDiv);

        const container = textContainerRef.current;
        container.scrollTop = offsetHeight - container.clientHeight / 2;
      }
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
        dangerouslySetInnerHTML={{ __html: highlightedText || text }}
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
