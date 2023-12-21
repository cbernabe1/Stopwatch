var x=y=z = 0
//x = millisecond, y = second, z= minutes count
var myInterval
var state = false
var start, clear
function startTime(){
    x = y = z = 0
    state = false
    myInterval = setInterval(myTimer, 10)
    start = document.getElementById('buttonStart')
    start.disabled = true
    clear = document.getElementById('buttonClear')
    clear.disabled = false
}

function myTimer(){
    x++
    if(x===100){
        x = 0
        y++

        if(y === 60){
            y = 0
            z++
            if(z===60){
                x = y = z = 0
            }
        }
    }
    document.getElementById('result').innerHTML = `<h3>${String(z).padStart(2, '0')}:${String(y).padStart(2, '0')}:${String(x).padStart(2, '0')}</h3>`;

}

function pauseOrResumeTime(){
state = !state
if(state === true){
    clearInterval(myInterval)
}else{
    myInterval = setInterval(myTimer,10)
}
}

function clearTime(){
    clearInterval(myInterval)
    x = y = z = 0
    state = false
    document.getElementById('result').innerHTML = `<h3>${String(z).padStart(2, '0')}:${String(y).padStart(2, '0')}:${String(x).padStart(2, '0')}</h3>`;
    start = document.getElementById('buttonStart')
    start.disabled = false
    clear = document.getElementById('buttonClear')
    clear.disabled = true
}