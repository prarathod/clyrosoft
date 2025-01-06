// Get the parent element
const textView = document.querySelector('.text-view');

// Combine all the text inside the parent element
function getCombinedText(element) {
  return element.textContent;
}

// Calculate the offset relative to the combined text
function getRelativeOffsets() {
  const combinedText = getCombinedText(textView);
  const selection = window.getSelection();

  if (!selection.rangeCount) return null;

  const range = selection.getRangeAt(0);
  const preCaretRange = range.cloneRange();

  // Set the range to start from the start of the parent element
  preCaretRange.selectNodeContents(textView);
  preCaretRange.setEnd(range.startContainer, range.startOffset);

  const startOffset = preCaretRange.toString().length;

  const postCaretRange = range.cloneRange();
  postCaretRange.selectNodeContents(textView);
  postCaretRange.setEnd(range.endContainer, range.endOffset);

  const endOffset = postCaretRange.toString().length;

  return {
    combinedText,
    startOffset,
    endOffset,
  };
}

// Usage
document.addEventListener('mouseup', () => {
  const offsets = getRelativeOffsets();
  if (offsets) {
    console.log('Combined Text:', offsets.combinedText);
    console.log('Start Offset:', offsets.startOffset);
    console.log('End Offset:', offsets.endOffset);
  }
});
