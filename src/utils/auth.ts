import { readFile, writeFile } from 'fs/promises'

import { getOptionsPath, hashString } from '.'

export const getAuth = async () => {
	try {
		const options = await readFile(getOptionsPath())
		
		return JSON.parse(options.toString()).auth as {
			email: string
			password: string
		}
	} catch {
		return null
	}
}

export const setAuth = (email: string, password: string) =>
	writeFile(getOptionsPath(), JSON.stringify({
		auth: {
			email,
			password: hashString(password)
		}
	}))
