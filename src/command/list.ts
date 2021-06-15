import { admin } from '../admin'

export const list = async (options) => {
  const { users } = await admin.auth().listUsers(1000)

  console.log(
    users.map((u) => ({
      email: u.email,
      customClaims: u.customClaims,
    })),
  )
}
