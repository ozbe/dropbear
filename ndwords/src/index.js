function tokenize(input) {
  if (typeof input === 'string' || input instanceof String) {
    return input
      .split(/\b/)
      .map(s => s.replace(/\s/g, ''))
      .filter(s => s.length > 0);
  }
  return [];
}
module.exports.tokenize = tokenize;

function generateContent(words) {
  return words.join('\n');
}
module.exports.generateContent = generateContent;