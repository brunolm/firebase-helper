import commander from 'commander'
import { list, setClaim, setClaimList } from './command'

const start = async () => {
  commander
    .command('setClaim', { isDefault: true })
    .requiredOption('-e, --email <email>', 'Email to perform operations on')
    .requiredOption('-c, --claim-name <claimName>', 'Claim to add to user')
    .requiredOption('-v, --claim-value <claimValue>', 'Claim to add to user')
    .action(setClaim)

  commander.command('list').action(list)

  commander
    .command('setClaimList', { isDefault: true })
    .requiredOption('-e, --email <email>', 'Email regex to filter and apply ops')
    .requiredOption('-c, --claim-name <claimName>', 'Claim to add to user')
    .requiredOption('-v, --claim-value <claimValue>', 'Claim to add to user')
    .action(setClaimList)

  await commander.parseAsync()
}

start()
