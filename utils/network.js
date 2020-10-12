export default {
  mainnet: {
    pubkey: 0x3F,
    pubkeyhash: 0x3F,
    scripthash: 0x1A,
    witness_v0_keyhash: 'sber',
    witness_v0_scripthash: 'sber'
  },
  testnet: {
    pubkey: 0x78,
    pubkeyhash: 0x78,
    scripthash: 0x6e,
    witness_v0_keyhash: 'tq',
    witness_v0_scripthash: 'tq'
  }
}[process.env.network || 'mainnet']
