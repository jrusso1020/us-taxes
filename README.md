# us-taxes

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> This package is meant to help calculate US taxes based on a progressive income tax brackets!

## Install

```bash
npm install us-taxes
```

## Usage

```ts
import { calculateTaxAmount, calculateFederalIncomeTax, FilingStatus } from 'us-taxes';

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


const taxAmount = calculateTaxAmount(500, brackets);
//=> 'taxAmount is the amount of taxes owed based on the income amount passed in'

const federalTaxAmount = calculateFederalIncomeTax({amount: 500});
const federalTaxAmountCustom = calculateFederalIncomeTax({amount: 500, filingStatus: FilingStatus.Single, year: 2022});
//=> 'federalTaxAmount is the amount of taxes owed to the federal government, defaults to a single filing status and current year'
//=> 'federalTaxAmountCustom is the amount of taxes owed to the federal government but setting values for filingStatus and year'
```

## API

### calculateTaxAmount(amount, brackets)

#### amount

Type: `number`

The amount of taxable income to use when calculating taxes due.

#### brackets

Type: `object`

The tax brackets to use when calculating the amount of taxes owed for the taxable income passed in

##### maxAmount

Type: `number`

The maxAmount for the tax bracket

##### rate

Type: `number`

The tax rate for this tax bracket

### calculateFederalIncomeTax({amount: number, filingStatus?: FilingStatus, year?: number})

#### amount

Type: `number`

The amount of taxable income to use when calculating taxes due.

#### filingStatus

Type: `FilingStatus`
default: FilingStatus.Single

The filingStatus to use when calculating taxes for the incoming, defaults to S

#### year

Type: `number`
default: current year

The year to use when determing the tax brackets

[build-img]:https://github.com/jrusso1020/us-taxes/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/jrusso1020/us-taxes/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/us-taxes
[downloads-url]:https://www.npmtrends.com/us-taxes
[npm-img]:https://img.shields.io/npm/v/us-taxes
[npm-url]:https://www.npmjs.com/package/us-taxes
[issues-img]:https://img.shields.io/github/issues/jrusso1020/us-taxes
[issues-url]:https://github.com/jrusso1020/us-taxes/issues
[codecov-img]:https://codecov.io/gh/jrusso1020/us-taxes/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/jrusso1020/us-taxes
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
