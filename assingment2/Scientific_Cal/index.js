let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'CE':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'DEL':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});

function sin(){
    display.innerText=Math.sin(display.innerText);
    }

function cos(){
    display.innerText=Math.cos(display.innerText);
    }

function tan(){
    display.innerText=Math.tan(display.innerText);
    }

function sqrt2(){
    display.innerText = Math.pow(display.innerText, 1/2);
    }

function sqrt3(){
    display.innerText = Math.pow(display.innerText, 1/3);
    }

function sqr2(){
    display.innerText = Math.pow(display.innerText, 2);
    }

function sqr3(){
    display.innerText = Math.pow(display.innerText, 3);
    }

function log(){
    display.innerText = Math.log(display.innerText)
}

function pi()
    {
        display.innerText= 3.14159265359;
    }

function e()
    {
        display.innerText=2.71828182846;
    }

function fact()
    {
        var i, num, f;
        f=1
        num=display.innerText;
        for(i=1; i<=num; i++)
        {
            f=f*i;
        }

        i=i-1;

        display.innerText=f;
    }


