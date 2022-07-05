import { PositionSide } from 'binance'

export interface Command {
  symbol: string
  side: PositionSide
  leverage: number
  amountUSD: number
  setTp: boolean
  setSl: boolean
  onlyOneOrder: boolean
}
