import { federalTaxBrackets } from './brackets/federal/federalTaxBrackets';
import { FilingStatus, TaxBracket } from './types';

export class TaxBracketNotFoundError extends Error {
  constructor(year: number, filingStatus: FilingStatus) {
    super(
      `Tax Bracket not found for year: ${year} and filingStatus: ${filingStatus}`
    );

    // Set the prototype explicitly.
    Object.setPrototypeOf(this, TaxBracketNotFoundError.prototype);
  }
}

// This simple function is reponsible for calculating the of taxes owed based on the passed in amount and tax brackets
// Params:  amount[required]: the amount of money to use for calculating taxes owed (i.e. income amount)
//          brackets[required]: the tax brackets to use for calculating taxes
export const calculateTaxAmount = (amount: number, brackets: TaxBracket[]) => {
  let taxAmount = 0;

  for (let index = 1; index < brackets.length; index++) {
    if (amount > brackets[index].maxAmount) {
      taxAmount +=
        (brackets[index].maxAmount - brackets[index - 1].maxAmount) *
        brackets[index].rate;
    } else {
      taxAmount +=
        (amount - brackets[index - 1].maxAmount) * brackets[index].rate;
      return taxAmount;
    }
  }

  return taxAmount;
};

export const calculateFederalIncomeTax = ({
  amount,
  filingStatus = FilingStatus.Single,
  year = new Date().getFullYear(),
}: {
  amount: number;
  filingStatus?: FilingStatus;
  year?: number;
}): number => {
  if (
    !(year in federalTaxBrackets) ||
    !(filingStatus in federalTaxBrackets[year])
  ) {
    throw new TaxBracketNotFoundError(year, filingStatus);
  }

  return calculateTaxAmount(amount, federalTaxBrackets[year][filingStatus]!);
};
