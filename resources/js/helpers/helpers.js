import { formatDistanceToNow } from 'date-fns'

export const cacheActionTypeClass = (type) => {
  if (type === 'hit') return 'success'
  if (type === 'set') return 'info'
  if (type === 'forget') return 'warning'
  if (type === 'missed') return 'danger'
}

export const composerTypeClass = (type) => {
  if (type === 'composer') return 'info'
  if (type === 'creator') return 'success'
}

export const gateResultClass = (result) => {
  if (result === 'allowed') return 'success'
  if (result === 'denied') return 'danger'
}

export const jobStatusClass = (status) => {
  if (status === 'pending') return 'secondary'
  if (status === 'processed') return 'success'
  if (status === 'failed') return 'danger'
}

export const logLevelClass = (level) => {
  if (level === 'debug') return 'success'
  if (level === 'info') return 'info'
  if (level === 'notice') return 'secondary'
  if (level === 'warning') return 'warning'
  if (level === 'error') return 'danger'
  if (level === 'critical') return 'danger'
  if (level === 'alert') return 'danger'
  if (level === 'emergency') return 'danger'
}

export const modelActionClass = (action) => {
  if (action === 'created') return 'secondary'
  if (action === 'updated') return 'info'
  if (action === 'retrieved') return 'warning'
  if (action === 'deleted' || action === 'forceDeleted') return 'danger'
}

export const requestStatusClass = (status) => {
  if (status < 300) return 'secondary'
  if (status < 400) return 'info'
  if (status < 500) return 'warning'
  if (status >= 500) return 'danger'
}

export const requestMethodClass = (method) => {
  if (method === 'GET') return 'secondary'
  if (method === 'OPTIONS') return 'secondary'
  if (method === 'POST') return 'info'
  if (method === 'PATCH') return 'info'
  if (method === 'PUT') return 'info'
  if (method === 'DELETE') return 'danger'
}

export const timeAgo = (date) => {
  return formatDistanceToNow(new Date(date), { addSuffix: false, includeSeconds: true })
}

export const localTime = (date) => {
  return new Date(date).toLocaleString()
}
