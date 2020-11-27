import { capitalizeFirstLetter } from './capitalize-first-letter';

describe('capitalizeFirstLetter', () => {
  it('should return empty string if got empty string', () => {
    const string = '';

    const capitalizedString = capitalizeFirstLetter(string);

    expect(capitalizedString).toBe(string);
  });

  it('should return "A" if got "a"', () => {
    const string = 'a';
    const expectedString = 'A';

    const capitalizedString = capitalizeFirstLetter(string);

    expect(capitalizedString).toBe(expectedString);
  });

  it('should return "Abc" if got "abc"', () => {
    const string = 'abc';
    const expectedString = 'Abc';

    const capitalizedString = capitalizeFirstLetter(string);

    expect(capitalizedString).toBe(expectedString);
  });

  it('should return "ABC" if got "aBC"', () => {
    const string = 'aBC';
    const expectedString = 'ABC';

    const capitalizedString = capitalizeFirstLetter(string);

    expect(capitalizedString).toBe(expectedString);
  });

  it('should return "ABC" if got "ABC"', () => {
    const string = 'ABC';
    const expectedString = 'ABC';

    const capitalizedString = capitalizeFirstLetter(string);

    expect(capitalizedString).toBe(expectedString);
  });
});
