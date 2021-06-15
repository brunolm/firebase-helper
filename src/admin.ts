import fbadmin from 'firebase-admin'
import { adminConfig } from './config'

const cfg = {
  projectId: adminConfig.project_id,
  clientEmail: adminConfig.client_email,
  privateKey: adminConfig.private_key.replace(/\\n/g, '\n'),
}

fbadmin.initializeApp({
  credential: fbadmin.credential.cert(cfg),
  databaseURL: '',
})

export const admin = fbadmin
