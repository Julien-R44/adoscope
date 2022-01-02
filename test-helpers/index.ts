import Entry from 'App/Models/Entry'

export const getLastEntry = () => Entry.query().orderBy('sequence_id', 'desc').first()
