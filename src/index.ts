import commander from 'commander'
import { create, list, setClaim, setClaimList } from './command'

const start = async () => {
  commander
    .command('setClaim', { isDefault: true })
    .requiredOption('-e, --email <email>', 'Email to perform operations on')
    .requiredOption('-c, --claim-name <claimName>', 'Claim to add to user')
    .requiredOption('-v, --claim-value <claimValue>', 'Claim to add to user')
    .action(setClaim)

  commander.command('list').action(list)

  commander
    .command('setClaimList')
    .requiredOption('-e, --email <email>', 'Email regex to filter and apply ops')
    .requiredOption('-c, --claim-name <claimName>', 'Claim to add to user')
    .requiredOption('-v, --claim-value <claimValue>', 'Claim to add to user')
    .action(setClaimList)

  commander
    .command('create')
    .requiredOption('-e, --email <email>', 'Email to create')
    .requiredOption('-n, --display-name <displayName>', 'User display name')
    .requiredOption('-p, --password <password>', 'User password')
    .action(create)

  await commander.parseAsync()
}

start()
