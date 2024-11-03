'use server'

import axios from 'axios'

export async function getNFTs(address) {
  const requestOptions = {
    method: 'GET',
    url: `https://api.opensea.io/api/v2/chain/base/account/${address}/nfts?collection=santababu`,
    headers: { accept: 'application/json', 'x-api-key': process.env.OPENSEA_API_KEY }
  }

  try {
    const res = await axios.request(requestOptions)
    return res.data
  } catch (err) {
    console.error(err)
    throw err
  }
}
