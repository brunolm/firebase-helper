import { admin } from '../admin'

export const list = async (options) => {
  const { users } = await admin.auth().listUsers(1000)

  console.log(
    users
      .map((u) =>
        JSON.stringify(
          {
            email: u.email,
            customClaims: u.customClaims,
          },
          null,
          2,
        ),
      )
      .join('\n'),
  )
}
