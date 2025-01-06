function replaceNumberPlaceholderWithPageHeader(text) {
  if (!text) return text; // Return original text if empty or undefined.

  // Regular expression to match --> {Number} <-- and extract the number.
  const regex = /-->\s*{(\d+)}\s*<--/g;

  // Replace matches with the styled page header.
  const replacedText = text.replace(
    regex,
    (_, number) => `
      <div style="background-color: #e5e7eb; text-align: center; padding: 10px; font-weight: bold; font-size: 1.5rem;">
        Page No ${number}
      </div>`
  );

  return replacedText;
}

// Example usage:
const inputText = `
This is the start of the document.

--> {1} <--

Some content on Page 1.

--> {2} <--

More content on Page 2.

--> {3} <--

End of the document.
`;

const result = replaceNumberPlaceholderWithPageHeader(inputText);
console.log(result);


<div dangerouslySetInnerHTML={{ __html: result }} />
