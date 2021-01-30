const { generateContent, tokenize } = require('../src/index');

describe('tokenize', () => {
  test('problem provided input', () => {
    const input = ' Hello everyone, today is a beautiful day! ';
    // Altered `everyone` and `day` to match casing of input. See TODO.md
    const expected = [
      'Hello',
      'everyone',
      ',',
      'today',
      'is',
      'a',
      'beautiful',
      'day',
      '!',
    ];

    const result = tokenize(input);

    expect(result).toEqual(expected);
  });

  test('empty input returns empty', () => {
    const input = '';
    const expected = [];

    const result = tokenize(input);

    expect(result).toEqual(expected);
  });

  test('null input returns empty', () => {
    const input = null;
    const expected = [];

    const result = tokenize(input);

    expect(result).toEqual(expected);
  });

  test('object input returns empty', () => {
    const input = {};
    const expected = [];

    const result = tokenize(input);

    expect(result).toEqual(expected);
  });
});

describe('generateContent', () => {
  test('', () => {
    const input = [
      'Hello',
      'everyone',
      ',',
      'today',
      'is',
      'a',
      'beautiful',
      'day',
      '!',
    ];
    const expected = `
Hello
everyone
,
today
is
a
beautiful
day
!
    `.trim();

    result = generateContent(input);

    expect(result).toEqual(expected);
  });
}) 