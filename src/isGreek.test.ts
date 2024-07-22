import { isGreek } from './isGreek';

describe('isGreek', () => {
  it('should return true for Greek text', () => {
    expect(isGreek('καλημέρα')).toBe(true);
    expect(isGreek('τα μυαλα που κουβαλας')).toBe(true);
  });

  it('should return false for non-Greek text', () => {
    expect(isGreek('hello')).toBe(false);
  });

  it('should return false for mixed text', () => {
    expect(isGreek('καλημέρα hello')).toBe(false);
  });
});
