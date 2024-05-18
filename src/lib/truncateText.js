export default function truncateText(text, maxLength) {
  text = text.toString();

  if (text.length <= maxLength) {
    return text;
  } else {
    let truncatedText = text.substring(0, maxLength);

    truncatedText = truncatedText.substring(
      0,
      Math.min(truncatedText.length, truncatedText.lastIndexOf(''))
    );
    return truncatedText + '...';
  }
}
