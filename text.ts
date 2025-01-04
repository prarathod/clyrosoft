const handleSearch = () => {
    if (!searchTerm.trim()) {
      setHighlightedText(formatText(text));
      return;
    }

    const normalizedSearchTerm = searchTerm.replace(/\s+/g, ' ').trim();
    const escapedSearchTerm = normalizedSearchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedSearchTerm})`, 'gi');

    let highlighted = '';
    let lastIndex = 0;
    let firstMatchIndex = null;

    // Highlight text and find the first match position
    text.replace(regex, (match, group, index) => {
      if (firstMatchIndex === null) firstMatchIndex = index;

      highlighted += text.slice(lastIndex, index);
      highlighted += `<span class="highlight">${match}</span>`;
      lastIndex = index + match.length;

      return match;
    });

    highlighted += text.slice(lastIndex);

    // Focus the first match in the container
    if (firstMatchIndex !== null && textContainerRef.current) {
      const container = textContainerRef.current;

      // Create a temporary element to measure height
      const tempDiv = document.createElement('div');
      tempDiv.style.visibility = 'hidden';
      tempDiv.style.position = 'absolute';
      tempDiv.style.whiteSpace = 'pre-wrap';
      tempDiv.style.lineHeight = '1.5';
      tempDiv.innerText = text.slice(0, firstMatchIndex);

      document.body.appendChild(tempDiv);
      const matchOffset = tempDiv.offsetHeight;
      document.body.removeChild(tempDiv);

      // Scroll to the match and center it
      container.scrollTop = matchOffset - container.clientHeight / 2;
    }

    setHighlightedText(highlighted || formatText(text));
  };
