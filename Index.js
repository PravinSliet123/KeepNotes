const addNotes = document.querySelector("#add")

const updateData = ()=>{
    const textAreaData = document.querySelectorAll("textarea")
    const notes = []
    textAreaData.forEach((note)=>{
        return notes.push(note.value)
    })
    console.log(notes);
   localStorage.setItem("notes", JSON.stringify(notes))
}



const addNewnotes = (text = '') => {
    const note = document.createElement("div")
    note.classList.add('note')

    const addDives = `<div class="operation">
    <button class="edit"><i class=" fa fa-solid fa-pen-to-square"></i> </button>
    <button class = "delete"><i class=" fa fa-solid fa-trash"></i></button>
</div>
<div class="main ${text?"":"hidden"}"></div>
<textarea class="${ text ? "hidden":""}"></textarea>`
    note.insertAdjacentHTML("afterbegin",addDives)

    const editbutton = note.querySelector(".edit")
    const delButton = note.querySelector(".delete")
    const maindiv = note.querySelector(".main")
    const textarea = note.querySelector("textarea")

    delButton.addEventListener("click",()=>{note.remove()
   
        updateData() }
    )

    textarea.value = text;
    maindiv.innerHTML = text;

    editbutton.addEventListener("click", ( event)=>{
        maindiv.classList.toggle("hidden")  
        textarea.classList.toggle("hidden")
    })

    textarea.addEventListener("change", (event)=>{
        const value = event.target.value
        maindiv.innerHTML = value
        updateData()
    })
    document.body.appendChild(note)


}
const notes = JSON.parse(localStorage.getItem("notes"))
if(notes)
{
    notes.forEach((note)=>{
        addNewnotes(note)
    })
}


addNotes.addEventListener("click", ()=>addNewnotes())

