import { readFile, writeFile } from 'fs/promises'

import { getOptionsPath } from '.'

export const getAuth = async () => {
	try {
		const options = await readFile(getOptionsPath())
		
		return JSON.parse(options.toString()).auth as {
			uid: string
			email: string
			password: string
		}
	} catch {
		return null
	}
}

export const setAuth = (uid: string, email: string, password: string) =>
	writeFile(getOptionsPath(), JSON.stringify({
		auth: { uid, email, password }
	}))
