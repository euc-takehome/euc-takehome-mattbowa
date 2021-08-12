import { Patient } from '../interface'
import { sqliteDB } from '../db/database'

export const getPatientData = async (id: number): Promise<Patient> => {
  const sql = `SELECT questionnaire_answer.answer, questionnaire_question.short_code AS shortCode
               FROM questionnaire_answer
               INNER JOIN questionnaire_question ON questionnaire_question.id = questionnaire_answer.question_id
               WHERE questionnaire_id = ${id}`
  const db = await sqliteDB()
  const query = await db.all(sql)
  const patientData = Object.fromEntries(query.map(x => [x.shortCode, x.answer]))

  await db.close()
  return patientData
}
