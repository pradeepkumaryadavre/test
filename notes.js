const fs = require('fs')
const chalk = require('chalk')

const getNotes = ()=> 'Your Notes'

const addNote =(title,body)=>{
    const notes = loadNotes()

    
    const duplicateNote = notes.find((note)=>note.title === title)

        if(!duplicateNote){
            notes.push({
                title:title,
                body: body
            })
        
            saveNotes(notes)
            console.log('New note added')
        }else {
            console.log('Note title Taken')
        }

    
   
}

const removeNote =(title)=>{

    const notes = loadNotes()
    
    const remainingNotes = notes.filter((note)=>note.title !== title)

    saveNotes(remainingNotes)
    if(notes.length === remainingNotes.length)
    {
        console.log(chalk.red('Note not removed'))
    }
    else
    {
        console.log(chalk.green('Note removed'))
    }

    
}

const listNote = ()=>{
    const notes = loadNotes()
    console.log(chalk.underline.red.inverse('Notes are as below'))
    notes.forEach(element => {
        console.log(element.title)
    });
}

const readNote = (title)=>{
    const notes = loadNotes()
    const dataNote = notes.find((note)=>note.title === title)
    if(dataNote)
    {
        console.log(chalk.green.underline.inverse(dataNote.title), dataNote.body)
    }
    else
    {
        console.log(chalk.red('Not Found'))
    }
}

const saveNotes =(notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes =()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    
    }catch(e){
        return []
    }
    
}
module.exports = {
   getNotes: getNotes,
   addNote: addNote,
   removeNote: removeNote,
   listNote: listNote,
   readNote: readNote

}