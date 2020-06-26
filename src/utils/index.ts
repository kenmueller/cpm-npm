import { homedir } from 'os'
import { join } from 'path'
import { createHash } from 'crypto'

export const getOptionsPath = () =>
	join(homedir(), '.cpm')

export const hashString = (data: string) =>
	createHash('md5').update(data).digest('hex')
