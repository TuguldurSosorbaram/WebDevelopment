
function delegate(parent, child, when, what){
    function eventHandlerFunction(event){
        let eventTarget  = event.target
        let eventHandler = this
        let closestChild = eventTarget.closest(child)

        if(eventHandler.contains(closestChild)){
            what(event, closestChild)
        }
    }

    parent.addEventListener(when, eventHandlerFunction)
}
//Map initiator functions
function easyMap1(){
    let tble = document.createElement('table')
    for(let rowIndex = 0; rowIndex < 7; rowIndex++){
        const newTR = document.createElement('tr')
        for(let colIndex = 0; colIndex < 7; colIndex++){
            const newTD = document.createElement('td')
            newTD.dataset.row = rowIndex
            newTD.dataset.col = colIndex
            newTD.dataset.lightLevel = 0
            if(rowIndex==0 && colIndex==3){newTD.dataset.lightLevel = -1; newTD.dataset.count = 1}
            if(rowIndex==1 && colIndex==1){newTD.dataset.lightLevel = -1; newTD.dataset.count = 0}
            if(rowIndex==1 && colIndex==5){newTD.dataset.lightLevel = -1; newTD.dataset.count = 2}
            if(rowIndex==3 && colIndex==0){newTD.dataset.lightLevel = -1}
            if(rowIndex==3 && colIndex==3){newTD.dataset.lightLevel = -1}
            if(rowIndex==3 && colIndex==6){newTD.dataset.lightLevel = -1}
            if(rowIndex==5 && colIndex==1){newTD.dataset.lightLevel = -1}
            if(rowIndex==5 && colIndex==5){newTD.dataset.lightLevel = -1; newTD.dataset.count = 2}
            if(rowIndex==6 && colIndex==3){newTD.dataset.lightLevel = -1; newTD.dataset.count = 3}
            //Initiating black tiles
            if(newTD.dataset.lightLevel>=0){newTD.classList.add('empty')}else{newTD.classList.add('blackTile')}
            if(newTD.dataset.count >= 0){newTD.innerText = newTD.dataset.count}
            newTR.appendChild(newTD)
        }
        tble.appendChild(newTR)
    }
    return tble
}
function advancedMap1(){
    let tble = document.createElement('table')
    for(let rowIndex = 0; rowIndex < 7; rowIndex++){
        const newTR = document.createElement('tr')
        for(let colIndex = 0; colIndex < 7; colIndex++){
            const newTD = document.createElement('td')
            newTD.dataset.row = rowIndex
            newTD.dataset.col = colIndex
            newTD.dataset.lightLevel = 0
            if(rowIndex==0 && colIndex==2){newTD.dataset.lightLevel = -1; newTD.dataset.count = 0}
            if(rowIndex==0 && colIndex==4){newTD.dataset.lightLevel = -1}
            if(rowIndex==2 && colIndex==0){newTD.dataset.lightLevel = -1}
            if(rowIndex==2 && colIndex==0){newTD.dataset.lightLevel = -1}
            if(rowIndex==2 && colIndex==2){newTD.dataset.lightLevel = -1}
            if(rowIndex==2 && colIndex==4){newTD.dataset.lightLevel = -1; newTD.dataset.count = 3}
            if(rowIndex==2 && colIndex==6){newTD.dataset.lightLevel = -1}
            if(rowIndex==3 && colIndex==3){newTD.dataset.lightLevel = -1; newTD.dataset.count = 1}
            if(rowIndex==4 && colIndex==0){newTD.dataset.lightLevel = -1; newTD.dataset.count = 2}
            if(rowIndex==4 && colIndex==2){newTD.dataset.lightLevel = -1}
            if(rowIndex==4 && colIndex==4){newTD.dataset.lightLevel = -1}
            if(rowIndex==4 && colIndex==6){newTD.dataset.lightLevel = -1}
            if(rowIndex==6 && colIndex==2){newTD.dataset.lightLevel = -1}
            if(rowIndex==6 && colIndex==4){newTD.dataset.lightLevel = -1; newTD.dataset.count = 2}
            //Initiating black tiles
            if(newTD.dataset.lightLevel>=0){newTD.classList.add('empty')}else{newTD.classList.add('blackTile')}
            if(newTD.dataset.count >= 0){newTD.innerText = newTD.dataset.count}
            newTR.appendChild(newTD)
        }
        tble.appendChild(newTR)
    }
    return tble
}
function extremeMap1(){
    let tble = document.createElement('table')
    for(let rowIndex = 0; rowIndex < 10; rowIndex++){
        const newTR = document.createElement('tr')
        for(let colIndex = 0; colIndex < 10; colIndex++){
            const newTD = document.createElement('td')
            newTD.dataset.row = rowIndex
            newTD.dataset.col = colIndex
            newTD.dataset.lightLevel = 0
            if(rowIndex==0 && colIndex==1){newTD.dataset.lightLevel = -1}
            if(rowIndex==1 && colIndex==5){newTD.dataset.lightLevel = -1; newTD.dataset.count = 3}
            if(rowIndex==1 && colIndex==7){newTD.dataset.lightLevel = -1; newTD.dataset.count = 2}
            if(rowIndex==1 && colIndex==9){newTD.dataset.lightLevel = -1}
            if(rowIndex==2 && colIndex==1){newTD.dataset.lightLevel = -1; newTD.dataset.count = 0}
            if(rowIndex==2 && colIndex==2){newTD.dataset.lightLevel = -1}
            if(rowIndex==2 && colIndex==7){newTD.dataset.lightLevel = -1}
            if(rowIndex==3 && colIndex==4){newTD.dataset.lightLevel = -1}
            if(rowIndex==4 && colIndex==1){newTD.dataset.lightLevel = -1; newTD.dataset.count = 1}
            if(rowIndex==4 && colIndex==4){newTD.dataset.lightLevel = -1}
            if(rowIndex==4 && colIndex==5){newTD.dataset.lightLevel = -1; newTD.dataset.count = 1}
            if(rowIndex==4 && colIndex==6){newTD.dataset.lightLevel = -1}
            if(rowIndex==5 && colIndex==3){newTD.dataset.lightLevel = -1}
            if(rowIndex==5 && colIndex==4){newTD.dataset.lightLevel = -1}
            if(rowIndex==5 && colIndex==5){newTD.dataset.lightLevel = -1}
            if(rowIndex==5 && colIndex==8){newTD.dataset.lightLevel = -1; newTD.dataset.count = 3}
            if(rowIndex==6 && colIndex==5){newTD.dataset.lightLevel = -1}
            if(rowIndex==7 && colIndex==2){newTD.dataset.lightLevel = -1; newTD.dataset.count = 1}
            if(rowIndex==7 && colIndex==7){newTD.dataset.lightLevel = -1; newTD.dataset.count = 0}
            if(rowIndex==7 && colIndex==8){newTD.dataset.lightLevel = -1}
            if(rowIndex==8 && colIndex==0){newTD.dataset.lightLevel = -1; newTD.dataset.count = 3}
            if(rowIndex==8 && colIndex==2){newTD.dataset.lightLevel = -1}
            if(rowIndex==8 && colIndex==4){newTD.dataset.lightLevel = -1; newTD.dataset.count = 0}
            if(rowIndex==9 && colIndex==9){newTD.dataset.lightLevel = -1; newTD.dataset.count = 0}
            //Initiating black tiles
            if(newTD.dataset.lightLevel>=0){newTD.classList.add('empty')}else{newTD.classList.add('blackTile')}
            if(newTD.dataset.count >= 0){newTD.innerText = newTD.dataset.count}
            newTR.appendChild(newTD)
        }
        tble.appendChild(newTR)
    }
    return tble
}
//Game engine
function lightToggle(event, element){
    console.log('before: type-[',element.classList.value,'] light level-',element.dataset.lightLevel)
    if(table.dataset.errorIndicator==1){
        unCheckAll()
        table.dataset.errorIndicator = 0
    }
    if(element.dataset.lightLevel>=0){
        if(element.classList.contains('lightBulbed')){
            table.dataset.clickCount++
            table.dataset.bulbCount--
            element.classList.remove('lightBulbed')
            element.dataset.lightLevel--
            element.innerText = ''
            if(element.dataset.lightLevel==0){element.classList.remove('lighted');element.classList.add('empty')}
            ligthOff(element.dataset.row,element.dataset.col,table)
        }else{
            table.dataset.clickCount++
            table.dataset.bulbCount++
            element.classList.remove('empty')
            element.classList.add('lightBulbed')
            element.dataset.lightLevel++
            element.innerText = '💡'
            lightOn(element.dataset.row,element.dataset.col,table)
        }
    }
    console.log('after: type-[',element.classList.value,'] light level-',element.dataset.lightLevel)
}
//funtions
function lightOn(rnum,cnum,tble){
    let size = tble.rows.length
    let cn = cnum
    let rn = rnum
    rn = rn - 1
    while(rn>=0){//going up
        if(table.rows[rn].cells[cn].dataset.lightLevel>=0){
            table.rows[rn].cells[cn].classList.remove('empty')
            table.rows[rn].cells[cn].classList.add('lighted')
            table.rows[rn].cells[cn].dataset.lightLevel++
        }else{
            rn = 0
        }
        rn--
    }
    rn = rnum
    rn++
    while(rn<size){//going down
        if(table.rows[rn].cells[cn].dataset.lightLevel>=0){
            table.rows[rn].cells[cn].classList.remove('empty')
            table.rows[rn].cells[cn].classList.add('lighted')
            table.rows[rn].cells[cn].dataset.lightLevel++
        }else{
            rn = size
        }
        rn++
    }
    rn = rnum
    cn++
    while(cn<size){//going right
        if(table.rows[rn].cells[cn].dataset.lightLevel>=0){
            table.rows[rn].cells[cn].classList.remove('empty')
            table.rows[rn].cells[cn].classList.add('lighted')
            table.rows[rn].cells[cn].dataset.lightLevel++
        }else{
            cn = size
        }
        cn++
    }
    cn = cnum
    cn--
    while(cn>=0){//going left
        if(table.rows[rn].cells[cn].dataset.lightLevel>=0){
            table.rows[rn].cells[cn].classList.remove('empty')
            table.rows[rn].cells[cn].classList.add('lighted')
            table.rows[rn].cells[cn].dataset.lightLevel++
        }else{
            cn = 0
        }
        cn--
    }
}
function ligthOff(rnum,cnum,tble){
    let size = tble.rows.length
    let cn = cnum
    let rn = rnum
    rn = rn - 1
    while(rn>=0){//going up
        if(table.rows[rn].cells[cn].dataset.lightLevel>0){
            table.rows[rn].cells[cn].dataset.lightLevel--
            if(table.rows[rn].cells[cn].dataset.lightLevel==0){
                table.rows[rn].cells[cn].classList.remove('lighted')
                table.rows[rn].cells[cn].classList.add('empty')
            }
            if(table.rows[rn].cells[cn].classList.contains('lightBulbed') && table.rows[rn].cells[cn].dataset.lightLevel==1){
                table.rows[rn].cells[cn].classList.remove('lighted')
            }
        }else{
            rn = 0
        }
        rn--
    }
    rn = rnum
    rn++
    while(rn<size){//going down
        if(table.rows[rn].cells[cn].dataset.lightLevel>0){
            table.rows[rn].cells[cn].dataset.lightLevel--
            if(table.rows[rn].cells[cn].dataset.lightLevel==0){
                table.rows[rn].cells[cn].classList.remove('lighted')
                table.rows[rn].cells[cn].classList.add('empty')
            }
            if(table.rows[rn].cells[cn].classList.contains('lightBulbed') && table.rows[rn].cells[cn].dataset.lightLevel==1){
                table.rows[rn].cells[cn].classList.remove('lighted')
            }
        }else{
            rn = size
        }
        rn++
    }
    rn = rnum
    cn++
    while(cn<size){//going right
        if(table.rows[rn].cells[cn].dataset.lightLevel>0){
            table.rows[rn].cells[cn].dataset.lightLevel--
            if(table.rows[rn].cells[cn].dataset.lightLevel==0){
                table.rows[rn].cells[cn].classList.remove('lighted')
                table.rows[rn].cells[cn].classList.add('empty')
            }
            if(table.rows[rn].cells[cn].classList.contains('lightBulbed') && table.rows[rn].cells[cn].dataset.lightLevel==1){
                table.rows[rn].cells[cn].classList.remove('lighted')
            }
        }else{
            cn = size
        }
        cn++
    }
    cn = cnum
    cn--
    while(cn>=0){//going left
        if(table.rows[rn].cells[cn].dataset.lightLevel>0){
            table.rows[rn].cells[cn].dataset.lightLevel--
            if(table.rows[rn].cells[cn].dataset.lightLevel==0){
                table.rows[rn].cells[cn].classList.remove('lighted')
                table.rows[rn].cells[cn].classList.add('empty')
            }
            if(table.rows[rn].cells[cn].classList.contains('lightBulbed') && table.rows[rn].cells[cn].dataset.lightLevel==1){
                table.rows[rn].cells[cn].classList.remove('lighted')
            }
        }else{
            cn = 0
        }
        cn--
    }
}
function checkBlackTile(rnum,cnum,tble){
    let size = tble.rows.length
    let lightBulbCount = 0
    if(rnum<size-1 && tble.rows[rnum+1].cells[cnum].classList.contains('lightBulbed')){lightBulbCount++}
    if(rnum>0 && tble.rows[rnum-1].cells[cnum].classList.contains('lightBulbed')){lightBulbCount++}
    if(cnum>0 && tble.rows[rnum].cells[cnum-1].classList.contains('lightBulbed')){lightBulbCount++}
    if(cnum<size-1 && tble.rows[rnum].cells[cnum+1].classList.contains('lightBulbed')){lightBulbCount++}
    return tble.rows[rnum].cells[cnum].dataset.count == lightBulbCount
}
function checkAll(e){
    if(table.dataset.errorIndicator != 1){
        table.dataset.errorCount = 0
        let size = table.rows.length
        for(let rowIndex = 0; rowIndex < size; rowIndex++){
            for(let colIndex = 0; colIndex < size; colIndex++){
                table.rows[rowIndex].cells[colIndex].dataset.errorType = '0'
                if(table.rows[rowIndex].cells[colIndex].classList.contains('empty')){
                    table.rows[rowIndex].cells[colIndex].classList.remove('empty')
                    table.rows[rowIndex].cells[colIndex].classList.add('error-1')
                    table.rows[rowIndex].cells[colIndex].dataset.errorType = '1'
                    table.dataset.errorCount++
                }
                if(table.rows[rowIndex].cells[colIndex].classList.contains('lighted')&&
                    table.rows[rowIndex].cells[colIndex].classList.contains('lightBulbed')){
                        table.rows[rowIndex].cells[colIndex].classList.remove('lighted')
                        table.rows[rowIndex].cells[colIndex].classList.remove('lightBulbed')
                        table.rows[rowIndex].cells[colIndex].classList.add('error-1')
                        table.rows[rowIndex].cells[colIndex].dataset.errorType = '2'
                        table.dataset.errorCount++
                }
                if(table.rows[rowIndex].cells[colIndex].dataset.count>=0){
                    if(!checkBlackTile(rowIndex,colIndex,table)){
                        table.rows[rowIndex].cells[colIndex].classList.remove('blackTile')
                        table.rows[rowIndex].cells[colIndex].classList.add('error-2')
                        table.rows[rowIndex].cells[colIndex].dataset.errorType = '3'
                        table.dataset.errorCount++
                    }
                }
            }
        }
    table.dataset.errorIndicator = 1
    }else{unCheckAll();table.dataset.errorIndicator = 0}
    
    if(table.dataset.errorCount==0){
        game.removeChild(toMapsButton)
        game.removeChild(table)
        game.removeChild(checkButton)
        game.removeChild(restartButton)
        game.removeChild(saveButton)
        game.appendChild(chooseMap)
        game.appendChild(easyMap1Pic)
        game.appendChild(advancedMap1Pic)
        game.appendChild(extremeMap1Pic)
        if(game.dataset.saveCount==1){
            game.appendChild(savedMapPic)
        }
        let score = document.createElement('li')
        score.innerText = userNameInit.innerText +' '+ table.rows.length +'x'+ table.rows.length
            +' Click count: '+table.dataset.clickCount + ' Light Bulb count: ' +table.dataset.bulbCount
        scores.appendChild(score)
    }
}
function unCheckAll(){
    let size = table.rows.length
    for(let rowIndex = 0; rowIndex < size; rowIndex++){
        for(let colIndex = 0; colIndex < size; colIndex++){
            switch (table.rows[rowIndex].cells[colIndex].dataset.errorType) {
                case '1':
                    table.rows[rowIndex].cells[colIndex].classList.remove('error-1')
                    table.rows[rowIndex].cells[colIndex].classList.add('empty')
                    table.rows[rowIndex].cells[colIndex].dataset.errorType = '0'
                  break
                case '2':
                    table.rows[rowIndex].cells[colIndex].classList.remove('error-1')
                    table.rows[rowIndex].cells[colIndex].classList.add('lighted')
                    table.rows[rowIndex].cells[colIndex].classList.add('lightBulbed')
                    table.rows[rowIndex].cells[colIndex].dataset.errorType = '0'
                  break
                case '3':
                    table.rows[rowIndex].cells[colIndex].classList.remove('error-2')
                    table.rows[rowIndex].cells[colIndex].classList.add('blackTile')
                    table.rows[rowIndex].cells[colIndex].dataset.errorType = '0'
                  break
                default:
                    //do nothing
                  break;
              }
            }
        }
}
function editName(e){
    userNameInit.innerText = nameInput.value
    nameInput.value = ''
    userName.appendChild(userNameInit)
}
function restart(){
    size = table.rows.length
    if(table.dataset.errorIndicator==1){
        unCheckAll()
        table.dataset.errorIndicator = 0
    }
    for(let rowIndex = 0; rowIndex < size; rowIndex++){
        for(let colIndex = 0; colIndex < size; colIndex++){
            if(table.rows[rowIndex].cells[colIndex].dataset.lightLevel>0){
                table.rows[rowIndex].cells[colIndex].dataset.lightLevel = 0
                table.rows[rowIndex].cells[colIndex].classList.remove('lighted')
                table.rows[rowIndex].cells[colIndex].classList.remove('lightBulbed')
                table.rows[rowIndex].cells[colIndex].innerText = ''
                table.rows[rowIndex].cells[colIndex].classList.add('empty')
                table.dataset.bulbCount = 0
                table.dataset.clickCount = 0
            }
        }
    }
}
function save(){
    game.dataset.saveCount = 1
    size = table.rows.length
    if(table.dataset.errorIndicator==1){
        unCheckAll()
        table.dataset.errorIndicator = 0
    }
    saved = document.createElement('table')
    saved.dataset.bulbCount = table.dataset.bulbCount
    saved.dataset.clickCount = table.dataset.clickCount
    for(let rowIndex = 0; rowIndex < size; rowIndex++){
        tempTR = document.createElement('tr')
        for(let colIndex = 0; colIndex < size; colIndex++){
            const tempTD = document.createElement('td')
            tempTD.dataset.row = rowIndex
            tempTD.dataset.col = colIndex
            tempTD.dataset.lightLevel = table.rows[rowIndex].cells[colIndex].dataset.lightLevel
            table.rows[rowIndex].cells[colIndex].classList.forEach(elem => {
                tempTD.classList.add(elem)
            });
            if(table.rows[rowIndex].cells[colIndex].dataset.count >= 0){
                tempTD.innerText = table.rows[rowIndex].cells[colIndex].dataset.count
            }
            tempTD.innerText = table.rows[rowIndex].cells[colIndex].innerText
            tempTR.appendChild(tempTD)

        }
        saved.appendChild(tempTR)
    }
}
function toMaps(){
        game.removeChild(toMapsButton)
        game.removeChild(table)
        game.removeChild(checkButton)
        game.removeChild(restartButton)
        game.removeChild(saveButton)
        game.appendChild(chooseMap)
        game.appendChild(easyMap1Pic)
        game.appendChild(advancedMap1Pic)
        game.appendChild(extremeMap1Pic)
        if(game.dataset.saveCount==1){
            game.appendChild(savedMapPic)
        }
}
 let table  
 let saved 
let chooseMap = document.createElement('h1')
chooseMap.innerText = 'Please choose your map'
let game = document.querySelector('#game')
game.dataset.saveCount = 0
let historyDiv = document.querySelector('#history')
let description = document.querySelector('#description')
let userName = document.createElement('div')
let userNameInit = document.createElement('h2')
userNameInit.innerText = 'Guest'
userName.appendChild(userNameInit)
let nameInput = document.querySelector('#nameInput')
let nameInputButton = document.querySelector('#nameInputButton')

function gameStartEasyMap(e){
    game.removeChild(chooseMap)
    game.removeChild(easyMap1Pic)
    game.removeChild(advancedMap1Pic)
    game.removeChild(extremeMap1Pic)
    if(game.dataset.saveCount==1){
        game.removeChild(savedMapPic)
    }
        table = easyMap1()
        table.dataset.bulbCount = 0
        table.dataset.clickCount = 0
        delegate(table, 'td', 'click', lightToggle)
    game.appendChild(toMapsButton)
    game.appendChild(table)
    game.appendChild(checkButton)
    game.appendChild(restartButton)
    game.appendChild(saveButton)
}
function gameStartAdvancedMap(e){
    game.removeChild(chooseMap)
    game.removeChild(easyMap1Pic)
    game.removeChild(advancedMap1Pic)
    game.removeChild(extremeMap1Pic)
    if(game.dataset.saveCount==1){
        game.removeChild(savedMapPic)
    }
        table = advancedMap1()
        table.dataset.bulbCount = 0
        table.dataset.clickCount = 0
        delegate(table, 'td', 'click', lightToggle)
    game.appendChild(toMapsButton)
    game.appendChild(table)
    game.appendChild(checkButton)
    game.appendChild(restartButton)
    game.appendChild(saveButton)
}
function gameStartExtremeMap(e){
    game.removeChild(chooseMap)
    game.removeChild(easyMap1Pic)
    game.removeChild(advancedMap1Pic)
    game.removeChild(extremeMap1Pic)
    if(game.dataset.saveCount==1){
        game.removeChild(savedMapPic)
    }
        table = extremeMap1()
        table.dataset.bulbCount = 0
        table.dataset.clickCount = 0
        delegate(table, 'td', 'click', lightToggle)
    game.appendChild(toMapsButton)
    game.appendChild(table)
    game.appendChild(checkButton)
    game.appendChild(restartButton)
    game.appendChild(saveButton)
}
function gameStartSavedMap(e){
    game.removeChild(chooseMap)
    game.removeChild(easyMap1Pic)
    game.removeChild(advancedMap1Pic)
    game.removeChild(extremeMap1Pic)
    if(game.dataset.saveCount==1){
        game.removeChild(savedMapPic)
    }
        table = saved
        table.dataset.bulbCount = 0
        table.dataset.clickCount = 0
        delegate(table, 'td', 'click', lightToggle)
    game.appendChild(toMapsButton)
    game.appendChild(table)
    game.appendChild(checkButton)
    game.appendChild(restartButton)
    game.appendChild(saveButton)
}

const easyMap1Pic = document.createElement('img')
easyMap1Pic.src = "images/easyMap.jpg"
easyMap1Pic.className = 'map'
easyMap1Pic.addEventListener('click',gameStartEasyMap)

const advancedMap1Pic = document.createElement('img')
advancedMap1Pic.src = "images/advancedMap.jpg"
advancedMap1Pic.className = 'map'
advancedMap1Pic.addEventListener('click',gameStartAdvancedMap)

const extremeMap1Pic = document.createElement('img')
extremeMap1Pic.src = "images/extremeMap.jpg"
extremeMap1Pic.className = 'map'
extremeMap1Pic.addEventListener('click',gameStartExtremeMap)

const savedMapPic = document.createElement('img')
savedMapPic.src = "images/saved.jpg"
savedMapPic.className = 'map'
savedMapPic.addEventListener('click',gameStartSavedMap)

game.appendChild(chooseMap)
game.appendChild(easyMap1Pic)
game.appendChild(advancedMap1Pic)
game.appendChild(extremeMap1Pic)



const checkButton = document.createElement('button')
checkButton.className = 'checkButton'
checkButton.innerText = 'Check'

const restartButton = document.createElement('button')
restartButton.className = 'restartButton'
restartButton.innerText = 'Restart'

const saveButton = document.createElement('button')
saveButton.className = 'saveButton'
saveButton.innerText = 'Save'

const toMapsButton = document.createElement('button')
toMapsButton.className = 'toMapsButton'
toMapsButton.innerText = 'Back to Menu'


checkButton.addEventListener('click',checkAll)
nameInputButton.addEventListener('click',editName)
restartButton.addEventListener('click',restart)
saveButton.addEventListener('click',save)
toMapsButton.addEventListener('click',toMaps)


historyDiv.appendChild(userName)
let scores = document.createElement('ul')
historyDiv.appendChild(scores)

