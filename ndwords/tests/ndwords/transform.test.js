const { transform } = require('../../src/ndwords/transform');

describe('transform', () => {
  test('problem provided input', () => {
    const input = ' Hello everyone, today is a beautiful day! ';
    // Altered `everyone` and `day` from the problem statement to match casing of input. See TODO.md
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

    const result = transform(input);

    expect(result).toEqual(expected);
  });

  test('empty input returns empty', () => {
    const input = '';
    const expected = '';

    const result = transform(input);

    expect(result).toEqual(expected);
  });

  test('null input returns empty', () => {
    const input = null;
    const expected = '';

    const result = transform(input);

    expect(result).toEqual(expected);
  });

  test('object input returns empty', () => {
    const input = {};
    const expected = '';

    const result = transform(input);

    expect(result).toEqual(expected);
  });
});