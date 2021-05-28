import fbadmin from 'firebase-admin'
import { adminConfig } from './config'

fbadmin.initializeApp({
  credential: fbadmin.credential.cert({
    projectId: adminConfig.project_id,
    clientEmail: adminConfig.client_email,
    privateKey: adminConfig.private_key.replace(/\\n/g, '\n'),
  }),
  databaseURL: '',
})

export const admin = fbadmin
