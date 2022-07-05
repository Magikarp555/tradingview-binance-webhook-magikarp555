import { Command } from '../models/command'
import { PositionSide } from 'binance'

export function parseRawCommand(rawCommand: string): Command {
  const [symbol, side, amountUSD, setTp, setSl, leverage, onlyOneOrder] = rawCommand.split('_')

  if (
    [symbol, side, amountUSD, setTp, setSl, leverage].some((value) => value == undefined)
  ) {
    throw new Error('Command is invalid')
  }

  return {
    symbol,
    side: side.toUpperCase() as PositionSide,
    amountUSD: Number(amountUSD),
    setTp: setTp === 'true',
    setSl: setSl === 'true',
    leverage: Number(leverage),
    onlyOneOrder: onlyOneOrder === 'true'
  }
}
