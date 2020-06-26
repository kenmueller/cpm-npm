import { homedir } from 'os'
import { join } from 'path'

export const getOptionsPath = () =>
	join(homedir(), '.cpm')
