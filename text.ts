function replaceNumberPlaceholdersWithPageHeader(text) {
  if (!text) return text; // Return original text if it's empty or undefined.

  // Regular expression to find `{Number}` patterns.
  const regex = /\{Number\}/g;

  // Replace matches with the styled page header.
  const replacedText = text.replace(
    regex,
    `<div style="background-color: #e5e7eb; text-align: center; padding: 10px; font-weight: bold; font-size: 1.5rem;">
      Page Header
    </div>`
  );

  return replacedText;
}

// Example usage:
const inputText = `
Page 1
CATALYST SUPPLYING CONTRACT
FOR Tatoray#4 Process Unit

{Number}

CONTRACT NO: ZPCJ-LY-92
----------------------------------------------

Page 2
SAFETY GUIDELINES FOR OPERATION

{Number}
`;

const result = replaceNumberPlaceholdersWithPageHeader(inputText);
console.log(result);
