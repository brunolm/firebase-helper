import { admin } from '../admin'

export const create = async (options) => {
  const user = await admin.auth().createUser({
    displayName: options.displayName,
    email: options.email,
    password: options.password,
  })

  console.log(user)
}
