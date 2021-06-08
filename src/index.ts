import commander from 'commander'
import { admin } from './admin'

const start = async () => {
  console.log('start')

  commander
    .requiredOption('-e, --email <email>', 'Email to perform operations on')
    .requiredOption('-c, --claim-name <claimName>', 'Claim to add to user')
    .requiredOption('-v, --claim-value <claimValue>', 'Claim to add to user')

  commander.parse()

  const options = commander.opts()

  const user = await admin.auth().getUserByEmail(options.email)

  console.log('options', options)
  console.log('user', user)

  await admin.auth().setCustomUserClaims(user.uid, { ...user.customClaims, [options.claimName]: options.claimValue })

  const userAfterUpdate = await admin.auth().getUserByEmail(options.email)
  console.log('after claims', userAfterUpdate.customClaims)

  console.log('done!')
}

start()
