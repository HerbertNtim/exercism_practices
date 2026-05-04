function wrapWithTag(text, tag) {
  return `<${tag}>${text}</${tag}>`;
}

function applyMarkdownFormatting(markdown, delimiter, tag) {
  const pattern = new RegExp(`${delimiter}(.+?)${delimiter}`, 'g');
  return markdown.replace(pattern, `<${tag}>$1</${tag}>`);
}

function parseBold(markdown) {
  return applyMarkdownFormatting(markdown, '__', 'strong');
}

function parseItalic(markdown) {
  return applyMarkdownFormatting(markdown, '_', 'em');
}

function parseInlineText(markdown, isListItem) {
  const formattedText = parseItalic(parseBold(markdown));
  return isListItem ? formattedText : wrapWithTag(formattedText, 'p');
}

function parseHeader(markdown, isList) {
  const match = markdown.match(/^(#{1,6})\s(.+)/);
  if (!match) return [null, isList];

  const headerTag = `h${match[1].length}`;
  const headerHtml = wrapWithTag(match[2], headerTag);
  return isList ? [`</ul>${headerHtml}`, false] : [headerHtml, false];
}

function parseListItem(markdown, isList) {
  if (!markdown.startsWith('* ')) return [null, isList];
  const itemContent = wrapWithTag(parseInlineText(markdown.substring(2), true), 'li');
  return isList ? [itemContent, true] : [`<ul>${itemContent}`, true];
}

function parseParagraph(markdown, isList) {
  return isList ? [`</ul>${parseInlineText(markdown, false)}`, false] : [parseInlineText(markdown, false), false];
}

function parseLine(markdown, isList) {
  for (const parser of [parseHeader, parseListItem, parseParagraph]) {
    const [result, updatedListState] = parser(markdown, isList);
    if (result !== null) return [result, updatedListState];
  }
  throw new Error('Invalid markdown');
}

export function parse(markdown) {
  const lines = markdown.split('\n');
  let result = '';
  let isList = false;

  for (const line of lines) {
    const [parsedLine, newListState] = parseLine(line, isList);
    result += parsedLine;
    isList = newListState;
  }

  // Ensure closing </ul> if the last processed element was a list
  if (isList) {
    result += '</ul>';
  }

  return result;
}
