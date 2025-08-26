
export type Note = {
    title:string
    markdown:string
    tags:string[]
    id:string
}
export type NoteData = Omit<Note,'id'> 
