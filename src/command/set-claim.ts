import { admin } from '../admin'

export const setClaim = async (options) => {
  const user = await admin.auth().getUserByEmail(options.email)

  console.log('options', options)
  console.log('user', user)
  console.log('options.claimValue', options.claimValue)

  const val = /^\{/.test(options.claimValue) ? JSON.parse(options.claimValue) : options.claimValue
  console.log('val', val)

  await admin.auth().setCustomUserClaims(user.uid, { ...user.customClaims, [options.claimName]: val })

  const userAfterUpdate = await admin.auth().getUserByEmail(options.email)
  console.log('after claims', userAfterUpdate.customClaims)

  console.log('done!')
}
