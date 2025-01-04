const handleSearch = () => {
    if (!searchTerm.trim()) {
      setHighlightedText(formatText(text));
      return;
    }
  
    // Normalize the search term and text for matching
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
  