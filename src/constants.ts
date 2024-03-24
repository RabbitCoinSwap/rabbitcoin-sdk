import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | number | string

export enum ChainId {
  MAINNET = 56,
  TESTNET = 97,
  POLYGON = 137,
  MUMBAI = 80001
}

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const FACTORY_ADDRESS = '0x47f2604A1b19Ea4BA3f613ee7C65584EcC39319e'

export const FACTORY_ADDRESS_MAP = {
  [ChainId.MAINNET]: FACTORY_ADDRESS,
  [ChainId.TESTNET]: '0xb6c7eFb103b91F062EC23E151FD9cC98053A6fEd',
  [137]: '0x47f2604A1b19Ea4BA3f613ee7C65584EcC39319e',
  [80001]: '0xb6c7eFb103b91F062EC23E151FD9cC98053A6fEd'
}

export const INIT_CODE_HASH = '0x3c7ecf548e17195d4445b6b7abf23da15b196647f91d0c4eaa4b1a986ec73560'

export const INIT_CODE_HASH_MAP = {
  [ChainId.MAINNET]: INIT_CODE_HASH,
  [ChainId.TESTNET]: '0x3c7ecf548e17195d4445b6b7abf23da15b196647f91d0c4eaa4b1a986ec73560',
  [137]: '0x3c7ecf548e17195d4445b6b7abf23da15b196647f91d0c4eaa4b1a986ec73560',
  [80001]: '0x3c7ecf548e17195d4445b6b7abf23da15b196647f91d0c4eaa4b1a986ec73560'
}

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const TWO = JSBI.BigInt(2)
export const THREE = JSBI.BigInt(3)
export const FIVE = JSBI.BigInt(5)
export const TEN = JSBI.BigInt(10)
export const _100 = JSBI.BigInt(100)
export const FEES_NUMERATOR = JSBI.BigInt(9975)
export const FEES_DENOMINATOR = JSBI.BigInt(10000)

export enum SolidityType {
  uint8 = 'uint8',
  uint256 = 'uint256'
}

export const SOLIDITY_TYPE_MAXIMA = {
  [SolidityType.uint8]: JSBI.BigInt('0xff'),
  [SolidityType.uint256]: JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')
}
