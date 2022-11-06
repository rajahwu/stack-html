const callStack = document.getElementById('call_stack');
const callBtn = document.getElementById('call_btn');

const calledFunction = document.createElement('div');
calledFunction.className = 'function';

callBtn.addEventListener('click', callFunction)


function callFunction() {
    callStack.appendChild(calledFunction);
}