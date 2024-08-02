function addtodisplay(value){
    var display=document.getElementById('display');
    display.textContent+=value;
}
function cleardisplay(){
    var display=document.getElementById('display');
    display.textContent='';
}
function calculateresult(){
    var display=document.getElementById('display');
    try{
        display.textContent=eval(display.textContent);
    }catch(e){
        display.textContent='error';
    }
}