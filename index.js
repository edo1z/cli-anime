#!/usr/bin/env node
const argv = require('yargs').argv
const chalk = require('chalk')
const ora = require('ora')
const cliSpinners = require('cli-spinners')
const ansiAlign = require('ansi-align')
const chalkAnimation = require('chalk-animation')
const getStdin = require('get-stdin')
const ui = require('cliui')()

const log = console.log
const success = chalk.green
const error = chalk.red

let hr = '-----------------------------'
log(ansiAlign.center(hr+'\nI am packages for cli\n2018\n'+hr))

log(chalk.green('Hello world!'))
log(chalk.cyan('ab', 'cd', 'ef'))
log(chalk.red('Hello', chalk.black.underline.bgBlue('world') + '!'))

ui.div('Options:')
ui.div(
	{
		text: '-f, --file',
		width: 20,
		padding: [0, 4, 0, 4]
	},
	{
		text: 'the file to load.'+success('(if this description is lon it wraps)'),
		width: 20
	},
	{
		text: error('[required]'),
		padding: [0, 4, 0, 4]
	}
)
log(ui.toString())

if (argv.ships > 3 && argv.distance < 10) {
	log(success('ok !?'))
} else {
	log(error('NONONO!!'))
}

getStdin().then(str => {
	log(success(str))
	const rainbow = chalkAnimation.rainbow('This is Rainbow Strings')
	const spinner = ora('Hoge!!!')
	spinner.start()
	spinner.color = 'yellow'
	setTimeout(() => {
		spinner.color = 'cyan'
		spinner.text = 'Loading rainbows'
		spinner.spinner = cliSpinners.earth

		setTimeout(() => {
			spinner.color = 'green'
			spinner.text = 'Ok google'
			spinner.spinner = cliSpinners.point
			setTimeout(() => {
				spinner.info('hoge')
				spinner.fail('Fail...')
				spinner.succeed('success!!!')

				console.log('stop rainbow')
			}, 2000)
		}, 3000)
	}, 2000)
})

