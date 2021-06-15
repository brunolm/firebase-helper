import { admin } from '../admin'

export const setClaim = async (options) => {
  const user = await admin.auth().getUserByEmail(options.email)

  console.log('options', options)
  console.log('user', user)

  await admin.auth().setCustomUserClaims(user.uid, { ...user.customClaims, [options.claimName]: options.claimValue })

  const userAfterUpdate = await admin.auth().getUserByEmail(options.email)
  console.log('after claims', userAfterUpdate.customClaims)

  console.log('done!')
}
