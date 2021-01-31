const tokenize = (input) => {
  if (typeof input === 'string' || input instanceof String) {
    return input
      .split(/\b/) // split at word break
      .map(s => s.replace(/\s/g, '')) // remove whitespace
      .filter(s => s.length > 0); // remove empty strings
  }
  return [];
}

const generateContent = (tokens) => {
  return tokens.join('\n');
}

module.exports.transform = (body) => {
  const tokens = tokenize(body);
  return generateContent(tokens);
}