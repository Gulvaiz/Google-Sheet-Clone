let container = document.getElementById("spreadsheet-container")

let columnHeader = document.createElement("div")
columnHeader.className = "row header-row";
for(let i=0; i<=100; i++){
     let cell = document.createElement('div')
     cell.innerText = i
     cell.className = "cell"
     cell.classList.add("header-cell")
     columnHeader.append(cell)
    }
    container.append(columnHeader)


for(let row=1; row<=26; row++){
       let newRow = document.createElement("div")
       newRow.id = "row"+row
       newRow.className = "row"
       
       let rowHeader = document.createElement("div")
       rowHeader.className = "cell"
       rowHeader.classList.add("header-cell")
       rowHeader.innerText = String.fromCharCode(64+row)

       newRow.append(rowHeader)
       for(let col=1; col<=100; col++){
           let newCol = document.createElement("div")
           newCol.innerText = ``
           newCol.className = "cell"
           newCol.setAttribute("contenteditable", "true")
           newCol.addEventListener('click', handleClickEvent)
           
           newRow.append(newCol)
           
       }
       container.append(newRow)
}

let selectedCells = new Set() // unique value in array

function handleClickEvent(event){
       let targetCell = event.target

       if(!event.ctrlKey && !event.metaKey){
        selectedCells.forEach(cell => {
            cell.classList.remove('selected-cell')
        })
            selectedCells.clear()
       }
       else if(selectedCells.has(targetCell)){
           targetCell.classList.remove("selected-cell")
           selectedCells.delete(targetCell)
       }
       else{
            targetCell.classList.add("selected-cell")
            selectedCells.add(targetCell)
       }
}

function makeBold(event){
     selectedCells.forEach(cell => {
          cell.style.fontWeight = cell.style.fontWeight === "bold" ? "normal" : "bold"
     })   
}

function makeItalic(event){
      selectedCells.forEach(cell => {
           cell.style.fontStyle = cell.style.fontStyle === "italic" ? "normal" : "italic"
      })
}

function makeUnderlined(event){
      selectedCells.forEach(cell => {
             cell.style.textDecoration = cell.style.textDecoration === "underline" ? "none" : "underline"
      })
}

function alignCenter(event){
       selectedCells.forEach(cell => {
             cell.style.textAlign = cell.style.textAlign === "center" ? "normal" : "center"
       })
}

function alignLeft(event){
     selectedCells.forEach(cell => {
            cell.style.textAlign = cell.style.textAlign === "left" ? "normal" : "left"
     })
}

function alignRight(event){
    selectedCells.forEach(cell => {
   cell.style.textAlign = cell.style.textAlign === "right" ? "normal" : "right"
})
}

let inputColor = document.getElementById("text-color")

inputColor.addEventListener("change", () => {
      selectedCells.forEach(cell => {
            cell.style.color = inputColor.value
      })
})

let inputBg = document.getElementById("background-color")

inputBg.addEventListener('change', () => {
      selectedCells.forEach(cell => {
          cell.style.backgroundColor = inputBg.value
      })
})

let fontFamily = document.getElementById("font-family")

fontFamily.addEventListener("change" , () => {
      selectedCells.forEach(cell => {
              cell.style.fontFamily = fontFamily.value
      })
})

let fontsSize = document.getElementById("font-size")

fontsSize.addEventListener("change", () => {
      selectedCells.forEach(cell =>{
             cell.style.fontSize = fontsSize.value
      })
})

function copyToClip(event){
      selectedCells.forEach(cell => {
            navigator.clipboard.writeText(cell.innerText).then (() => {(alert(`copied : ${cell.innerText}`))}).catch(err => {
                  alert("error to copy", err)
            })
      })
} 
