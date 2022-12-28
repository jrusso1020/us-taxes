export enum FilingStatus {
  Single = 'SINGLE',
  MarriedJointly = 'MARRIED_JOINTLY',
  MarriedSeparately = 'MARRIED_SEPARATELY',
  HeadOfHousehold = 'HEAD_OF_HOUSEHOLD',
}

export interface TaxBracket {
  maxAmount: number;
  rate: number;
}

export interface TaxBrackets {
  [year: number]: { [key in FilingStatus]?: TaxBracket[] };
}
