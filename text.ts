const handleSearch = () => {
    const searchText =
      "conditions set out in the MainAgreement and below, the Parties agree as follows:1. Amendment. Parties hereby agree that Amendment No.3 and Amendment No.4 shall be effective from 01January 2024 until 30 June 2024.2. Order of Precedence.";
  
    const text = `NOW THEREFORE, in consideration of the mutual promises, convenants and conditions set out in the Main
  Agreement and below, the Parties agree as follows:
  
  1. Amendment. Parties hereby agree that Amendment No.3 and Amendment No.4 shall be effective from 01
  January 2024 until 30 June 2024.
  
  2. Order of Precedence. Except as expressly varied or amended by the provision herein, all terms and
  conditions of the Main Agreement remain in full force and effect.`;
  
    // Normalize both searchText and text to remove line breaks and extra spaces
    const normalizedSearchText = searchText.replace(/\s+/g, ' ').trim();
    const normalizedText = text.replace(/\s+/g, ' ');
  
    // Escape special regex characters in the normalized search term
    const escapedSearchText = normalizedSearchText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  
    // Create a regex for the normalized search term
    const regex = new RegExp(`(${escapedSearchText})`, 'gi');
  
    // Replace matches in the original text for highlighting while maintaining original formatting
    const formattedText = formatText(text);
    const highlighted = formattedText.replace(regex, `<span class="highlight">$1</span>`);
  
    setHighlightedText(highlighted);
  
    // Scroll to the first occurrence
    if (textContainerRef.current) {
      const container = textContainerRef.current;
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = highlighted;
      document.body.appendChild(tempDiv);
  
      const highlightElement = tempDiv.querySelector('.highlight');
      if (highlightElement) {
        const elementTop = highlightElement.getBoundingClientRect().top;
        const containerTop = container.getBoundingClientRect().top;
        const scrollTop = container.scrollTop;
  
        container.scrollTop = scrollTop + (elementTop - containerTop) - container.clientHeight / 2;
      }
  
      document.body.removeChild(tempDiv);
    }
  };
  