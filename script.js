const display = document.getElementById('textbox');
    function append_to_display(input){
        display.value += input;
    }
    function cleardisplay(){
        display.value = '';
    }
    function calculate(){
        try{
            display.value=eval(display.value);
        }
        catch(error){
            display.value='Error';
        }
    }
