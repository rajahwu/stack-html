const callStack = document.getElementById('call_stack');
const callBtn = document.getElementById('call_btn');
callBtn.addEventListener('click', callFunction);
const executeBtn = document.getElementById('execute_btn');
executeBtn.addEventListener('click', executeFunction);




function callFunction() {
    const calledFunction = document.createElement('div');
    callStack.appendChild(calledFunction);
    calledFunction.className = 'function';
}

function executeFunction(){
    callStack.removeChild(callStack.firstChild)
}