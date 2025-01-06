import React, { Component, createRef } from "react";

class DocumentViewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
      highlightedText: "",
    };
    this.firstMatchRef = createRef(); // Ref to scroll to the first match
    this.originalText = `
This is the start of the document.

Some introduction content here.

--> {1} <--

Content for Page 1.

Some additional notes.

--> {2} <--

Content for Page 2.

The document ends here.
    `;
  }

  // Function to handle search and highlight matches
  handleSearch = () => {
    const { searchTerm } = this.state;

    if (!searchTerm.trim()) {
      this.setState({ highlightedText: this.originalText }); // Reset to original if search term is empty
      return;
    }

    // Search pattern: --> {Number} <--
    const regex = new RegExp(`-->\\s*\\{${searchTerm}\\}\\s*<--`, "g"); // Match the search term surrounded by --> { } <--

    // Highlight the matched number in the document
    const highlighted = this.originalText.replace(
      regex,
      (match) => `<span class="highlight">${match}</span>`
    );

    this.setState({ highlightedText: highlighted }, this.scrollToFirstMatch);
  };

  // Scroll to the first match
  scrollToFirstMatch = () => {
    if (this.firstMatchRef.current) {
      this.firstMatchRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  // Update search term in state
  handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    const { searchTerm, highlightedText } = this.state;

    return (
      <div>
        <h1>Document Viewer</h1>
        <div>
          <input
            type="number"
            placeholder="Search Page Number..."
            value={searchTerm}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleSearch}>Search</button>
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: highlightedText || this.originalText }}
          className="document-container"
          ref={this.firstMatchRef}
        />
      </div>
    );
  }
}

export default DocumentViewer;



.highlight {
  background-color: yellow;
  font-weight: bold;
}
.document-container {
  white-space: pre-wrap; /* Preserve text formatting */
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: auto;
  max-height: 400px; /* Add a scrollable area */
}
