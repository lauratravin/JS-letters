const wrapper = document.getElementById('word')
let count = 0
const rows = 5

let counter = document.getElementById("counter")
let p_counter = document.createElement("p")
counter.appendChild(p_counter)


let myModal= document.getElementById("myModal")
myModal.classList.add("hide") 


const columnsList = [ {letter: "c", col: 5},
                      {letter: "a", col: 5},
                      {letter: "u", col: 5},
                      {letter: "s", col: 5},
                      {letter: "e", col: 5},
                      {letter: "o", col: 5},
                      {letter: "b", col: 5},
                      {letter: "d", col: 5},  
                      {letter: "f", col: 5},
                      {letter: "g", col: 5},
                      {letter: "h", col: 5},  
                      {letter: "j", col: 5},
                      {letter: "k", col: 5},
                      {letter: "l", col: 5},
                      {letter: "p", col: 5},
                      {letter: "q", col: 5},
                      {letter: "t", col: 5},  
                      {letter: "y", col: 5},
                      {letter: "v", col: 5},
                      {letter: "x", col: 5},  
                      {letter: "z", col: 5},
                      {letter: "1", col: 5},
                      {letter: "2", col: 5},
                      {letter: "3", col: 5},
                      {letter: "4", col: 5},
                      {letter: "5", col: 5}, 
                      {letter: "6", col: 5},
                      {letter: "7", col: 5},
                      {letter: "8", col: 5},
                      {letter: "9", col: 5},
                      {letter: "0", col: 5},
                      {letter: "i", col: 3},
                      {letter: "n", col: 6},
                      {letter: "r", col: 6},
                      {letter: "m", col: 7},
                      {letter: "w", col: 7},
                    ]

const lettersPatrons= {
    
     u:  [
         [1,3],
         [1,3],
         [1,3],
         [1,3],
         [2]
         ] ,
     a:  [
         [2],
         [1,3],
         [1,3],
         [1,2,3],
         [1,3]
         ],
     c:  [
         [2,3],
         [1],
         [1],
         [1],
         [2,3]
         ],
    e:  [
         [2,3],
         [1],
         [1,2],
         [1],
         [2,3]
         ],
    g:  [
         [2,3],
         [1],
         [1,3],
         [1],
         [1,2,3]
         ],
     b:  [
         [1,2],
         [1,3],
         [1,2],
         [1,3],
         [1,2]
         ],
     d:  [
         [1,2],
         [1,3],
         [1,3],
         [1,3],
         [1,2]
         ],
     f:  [
         [1,2,3],
         [1],
         [1,2],
         [1],
         [1]
         ],
     p:  [
         [1,2],
         [1,3],
         [1,2],
         [1],
         [1]
         ],
     o:  [
         [2],
         [1,3],
         [1,3],
         [1,3],
         [2]
         ],
     h:  [
         [1,3],
         [1,3],
         [1,2,3],
         [1,3],
         [1,3]
         ],
     k:  [
         [1,3],
         [1],
         [1,2],
         [1,3],
         [1,3]
         ],
     j:  [
         [1,2,3],
         [2],
         [2],
         [2],
         [1,2]
         ],
     l:  [
         [1],
         [1],
         [1],
         [1],
         [1,2,3]
         ],
     q:  [
         [2],
         [1,3],
         [1,3],
         [1,2,3],
         [3]
         ],
     n:  [
         [1,4],
         [1,2,4],
         [3,4],
         [1,4],
         [1,4]
         ],
     r:  [
         [1,2],
         [1,3],
         [2],
         [1,3],
         [1,4]
         ],
     t:  [
         [1,2,3],
         [2],
         [2],
         [2],
         [2]
         ],
     y:  [
         [1,3],
         [1,3],
         [2],
         [2],
         [2]
         ],
     v:  [
         [1,3],
         [1,3],
         [1,3],
         [],
         [2]
         ],
     w:  [
         [1,3,5],
         [1,3,5],
         [1,3,5],
         [],
         [2,4]
         ],
     x:  [
         [1,3],
         [1,3],
         [2],
         [1,3],
         [1,3]
         ],
     z:  [
         [1,2,3],
         [3],
         [2],
         [1],
         [1,2,3]
         ],
     m:  [
         [1,5],
         [1,2,4,5],
         [1,3,,5],
         [1,5],
         [1,5]
         ],
     i:  [
         [1],
         [1],
         [1],
         [1],
         [1]
         ],
    s:   [
         [2,3],
         [1],
         [2],
         [3],
         [1,2]
         ],
    1:   [
         [1,2],
         [2],
         [2],
         [2],
         [1,2,3]
         ],
    2:   [
         [1,2],
         [3],
         [2],
         [1],
         [1,2,3]
         ],
    3:   [
         [1,2,3],
         [3],
         [2],
         [3],
         [1,2,3]
         ],    
    4:   [
         [1,3],
         [1,3],
         [2,3],
         [3],
         [3]
         ],
  	5:   [
         [2,3],
         [1],
         [2,3],
         [3],
         [1,2,3]
         ], 
    6:   [
         [2,3,],
         [1],
         [1,2],
         [1,3],
         [2]
         ],
    7:   [
         [1,2],
         [],
         [3],
         [2],
         [1]
         ],
    8:   [
         [2],
         [1,3],
         [2],
         [1,3],
         [2]
         ],
    9:   [
         [2],
         [1,3],
         [2,3],
         [3],
         [1,2]
         ],  
    0:   [
         [2],
         [1,3],
         [1,3],
         [1,3],
         [2]
         ]                                  
}

let theWord = []

function displayModal(e) {
      myModal.classList.remove("hide") 
      myModal.classList.add("show")
      let modalImage= document.getElementById("modalImage")
      let close= document.getElementById("close")
      close.classList.remove("hide") 
      close.classList.add("show") 
      close.addEventListener("click", function(){
          myModal.classList.add("hide")
      })
      modalImage.src =  e.target.src
    // console.log(e.target.src)
}

function buildUI(){
    
    if (theWord.length > 0){
       // console.log("UI word 0", theWord[0])
       
        theWord.map( rows => {
              let gridItemCount = rows[0].length * 5
              
              let container = document.createElement("div")               
              container.classList.add("grid-container")
            
              switch (rows[0].length){
                 
                  case 6:
                      container.classList.add("sixAuto")   
                      break;
                  case 3:
                       container.classList.add("threeAuto")   
                       break;
                  case 7:
                       container.classList.add("sevenAuto")   
                       break;
                  default:
                       container.classList.add("fiveAuto")      
                      
              }
                  
            //  console.log('rows content', rows)
              rows.map( row => {
                            
//                              console.log('row content', row)
                            for (let r = 0; r < rows[0].length; r++){
                                let gridItem = document.createElement("div") 
                               // gridItem.setAttribute(‘id’, );
                                gridItem.classList.add("grid-item")
                                
                                if (row[r] == '')
                                    gridItem.innerHTML = " "
                                else 
                                    if (row[r] == "X"){
                                      count += 1     
                                     
                                //       gridItem.classList.add("black")

                                 //  gridItem.innerHTML = row[r]
                                 //  gridItem.innerHTML = "X"  
                                      
                                      let image =  document.createElement('img')
                                      image.src = './img/'+count+".jpg"
                                      image.classList.add("imageStyle")
                                      gridItem.appendChild(image)
                                      
                                      // image.addEventListener("click", function(){
                                      //   console.log("test")
                                      // }) 
                                      image.addEventListener("click", e => displayModal(e))
                                                                        
                                    }
                                container.appendChild(gridItem)
                             }
              })
       //     console.log(wrapper)
            wrapper.appendChild(container)   
             
        }) 
           
    }
    
    
    p_counter.innerHTML= "You need "+ count + " images for this word" 
    
   // console.log("COUNT", count )
}


function writeLetter(letter,matrix){
//    console.log("letter",letter)
//    console.log ("colorxletter", lettersPatrons[letter][0])
    
    for (let row=0; row<5; row++){
              lettersPatrons[letter][row].map( value => matrix[row][value] = 'X')
    }
       
    
//    console.log("new matrix",matrix) 
    theWord.push(matrix)
 //   console.log("theWord ",theWord )
    
}

function buildArrays (letter){
    
    const uiColumn = columnsList.find( obj => obj.letter == letter ?  obj : null  ).col
 
    let matrix = []
   //  console.log("uiColumn",uiColumn)

    if (uiColumn){
        
        for (let row = 0; row < 5; row++){
           let newArray= []    
           for (let column=0; column< uiColumn; column++){ newArray.push(' ')}
           matrix.push(newArray)           
        }                      
//     console.log("matrix format",matrix)
     writeLetter(letter,matrix)        
    } else alert("letter not found")
}


function makeWord(wordArray){
  //   let UI
    if (wordArray.length > 0){
      
     wordArray.map( w => buildArrays(w) )
     buildUI()
        
    } else {
        aler("enter a word")
    }
}


function process(){
  //  console.log("wrapper",wrapper)
   if (wrapper.firstChild) {
    wrapper.innerHTML= ""
   }
    theWord=[]
    count = 0
    p_counter.innerHTML= ''

    const wordToBuild = document.getElementById("wordToBuild").value.toLowerCase()
    let wordArray = wordToBuild.split('')  
      
 // console.log(wordArray)
    makeWord(wordArray)    
    
}


