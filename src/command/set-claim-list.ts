import { admin } from '../admin'

export const setClaimList = async (options) => {
  const reg = new RegExp(options.email)

  const { users } = await admin.auth().listUsers(1000)

  console.log('options', options)

  for (const user of users) {
    if (!reg.test(user.email)) {
      continue
    }

    console.log('user', user.uid, user.email, user.customClaims)

    await admin
      .auth()
      .setCustomUserClaims(user.uid, { ...(user.customClaims || {}), [options.claimName]: options.claimValue })

    const userAfterUpdate = await admin.auth().getUserByEmail(user.email)
    console.log('after claims', userAfterUpdate.email, userAfterUpdate.customClaims)
  }

  console.log('done!')
}
