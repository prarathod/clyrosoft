
const handleSearch = () => {
    if (!searchTerm.trim()) {
      setSearchTerm('');
      if (textContainerRef.current) {
        textContainerRef.current.innerHTML = formatText(rawText);
      }
      return;
    }

    const normalizedSearchTerm = searchTerm.replace(/\s+/g, ' ').trim();
    const escapedSearchTerm = normalizedSearchTerm.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedSearchTerm})`, 'gi');

    const formattedText = formatText(rawText); // Ensure formatting is applied
    const highlightedText = formattedText.replace(regex, (match) => `<span class="highlight">${match}</span>`);

    if (textContainerRef.current) {
      textContainerRef.current.innerHTML = highlightedText;

      // Scroll to the first match
      const firstMatch = textContainerRef.current.querySelector('.highlight');
      if (firstMatch && textContainerRef.current) {
        const container = textContainerRef.current;
        const containerHeight = container.clientHeight;
        const elementTop = (firstMatch as HTMLElement).offsetTop - container.offsetTop;
        container.scrollTop = elementTop - containerHeight / 2;
      }
    }
  };