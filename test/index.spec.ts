import { calculateTaxAmount } from '../src';

describe('index', () => {
  describe('test calculateTaxAmount across brackets', () => {
    const brackets = [
      { maxAmount: 0, rate: 0 },
      { maxAmount: 10275, rate: 0.1 },
      { maxAmount: 41775, rate: 0.12 },
      { maxAmount: 89075, rate: 0.22 },
      { maxAmount: 170050, rate: 0.24 },
      { maxAmount: 215950, rate: 0.32 },
      { maxAmount: 539900, rate: 0.35 },
      { maxAmount: Infinity, rate: 0.37 },
    ];

    it('first bracket', () => {
      expect(calculateTaxAmount(500, brackets)).toBe(500 * 0.1);
    });

    it('second bracket', () => {
      expect(calculateTaxAmount(20000, brackets)).toBe(
        (20000 - 10275) * 0.12 + 1027.5
      );
    });

    it('third bracket', () => {
      expect(calculateTaxAmount(50000, brackets)).toBe(
        (50000 - 41775) * 0.22 + 4807.5
      );
    });

    it('fourth bracket', () => {
      expect(calculateTaxAmount(100000, brackets)).toBe(
        (100000 - 89075) * 0.24 + 15213.5
      );
    });

    it('fifth bracket', () => {
      expect(calculateTaxAmount(200000, brackets)).toBe(
        (200000 - 170050) * 0.32 + 34647.5
      );
    });

    it('sixth bracket', () => {
      expect(calculateTaxAmount(500000, brackets)).toBe(
        (500000 - 215950) * 0.35 + 49335.5
      );
    });

    it('seventh bracket', () => {
      expect(calculateTaxAmount(750000, brackets)).toBe(
        (750000 - 539900) * 0.37 + 162718
      );
      expect(calculateTaxAmount(7500000, brackets)).toBe(
        (7500000 - 539900) * 0.37 + 162718
      );
    });
  });
});
