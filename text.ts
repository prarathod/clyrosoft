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
    let firstMatchPosition: number | null = null;

    text.replace(regex, (match, _, index) => {
      if (firstMatchPosition === null) {
        firstMatchPosition = index;
      }

      highlighted += text.slice(lastIndex, index);
      highlighted += `<span class="highlight">${match}</span>`;
      lastIndex = index + match.length;

      return match;
    });

    highlighted += text.slice(lastIndex);

    setHighlightedText(highlighted || formatText(text));

    if (firstMatchPosition !== null && textContainerRef.current) {
      // Use DOM to scroll to the highlighted match
      setTimeout(() => {
        const container = textContainerRef.current as HTMLDivElement;
        const highlightedElements = container.querySelectorAll('.highlight');
        if (highlightedElements.length > 0) {
          const firstMatchElement = highlightedElements[0] as HTMLElement;
          const containerHeight = container.clientHeight;
          const elementTop = firstMatchElement.offsetTop - container.offsetTop;

          // Scroll the container
          container.scrollTop = elementTop - containerHeight / 2;
        }
      }, 0);
    }
  };