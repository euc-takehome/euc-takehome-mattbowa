import * as sqlite3 from 'sqlite3'
import { open } from 'sqlite'

export async function sqliteDB () {
  return open({ filename: './questionnaire.db', driver: sqlite3.Database })
}
