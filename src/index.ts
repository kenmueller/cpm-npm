#!/usr/bin/env node

import * as yargs from 'yargs'

import install from './commands/install'
import uninstall from './commands/uninstall'
import update from './commands/update'
import publish from './commands/publish'
import auth from './commands/auth'

yargs
	.scriptName('cpm')
	.usage('$0 <cmd> [args]')
	.command(
		'i [package]',
		'Install a package',
		yargs => {
			yargs.positional('package', {
				type: 'string',
				desc: 'the package name'
			})
		},
		argv => install(argv.package as string)
	)
	.command(
		'rm [package]',
		'Uninstall a package',
		yargs => {
			yargs.positional('package', {
				type: 'string',
				desc: 'The package name'
			})
		},
		argv => uninstall(argv.package as string)
	)
	.command(
		'update',
		'Update all packages',
		() => {},
		update
	)
	.command(
		'publish',
		'Publish this package',
		() => {},
		publish
	)
	.command(
		'auth [email] [password]',
		'Authenticate yourself (required to publish a package)',
		yargs => {
			yargs.positional('email', {
				type: 'string',
				desc: 'Your email'
			})
			yargs.positional('password', {
				type: 'string',
				desc: 'Your password'
			})
		},
		argv => auth(argv.email as string, argv.password as string)
	)
	.help()
	.argv
