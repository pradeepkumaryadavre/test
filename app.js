const chalk = require('chalk')
const yargs = require('yargs')
const validator = require('validator')
const { red } = require('chalk')
const { string } = require('yargs')
const { argv } = require('process')
const notes = require('./notes.js')


//Customize yargs version
yargs.version('1.1.0')

// add, remove, read, list

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Reema kagdi',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title: {
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

//Create a Read Command
yargs.command({
    command:'read',
    describe:'Reads a note',
    builder: {
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }

    },
    handler (argv) {
        notes.readNote(argv.title)
    }
})

//Create a List Command
yargs.command({
    command:'list',
    describe: 'List a note',
    handler(){
        notes.listNote()
    }
})

yargs.parse();

//console.log(yargs.argv)

