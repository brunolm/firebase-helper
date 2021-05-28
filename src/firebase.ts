import fb from 'firebase'
import { firebaseConfig } from './config'

fb.initializeApp(firebaseConfig)

export const firebase = fb
