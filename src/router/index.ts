import express, { Request, Response } from 'express'
import * as PatientService from '../common/patientData'
import { Patient } from '../interface'

export const router = express.Router()

router.get('/:id', async (req: Request, res: Response) => {
  const id: number = parseInt(req.params.id, 10)
  try {
    const patientData: Patient = await PatientService.getPatientData(id)
    if (patientData) {
      return res.status(200).send(patientData)
    }
    res.status(404).send('patient data not found')
  } catch (e) {
    res.status(500).send(e.message)
  }
})
