import * as chalk from 'chalk'

import axios from '../utils/axios'
import { setAuth } from '../utils/auth'

export default async (email: string, password: string) => {
	try {
		const { data } = await axios.post('/auth', { email, password })
		
		await setAuth(data.uid, email, data.password)
		
		console.log(chalk.green.bold('Successfully logged in'))
	} catch (error) {
		console.log(error)
	}
}
