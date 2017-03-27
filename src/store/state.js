import { defaultNoteState } from './defauts'
import { clone } from 'lodash'

export default {
  note: clone(defaultNoteState),
  notes: JSON.parse(localStorage.getItem('notes')) || [],
  saveTimeout: null
}
