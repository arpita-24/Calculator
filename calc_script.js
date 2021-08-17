let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
let screenVal='';
for(item of buttons)
{
    item.addEventListener('click',(e)=>{
        bText = e.target.innerText ;
        // console.log(`BUTTON TEXT IS ${bText}`);

        if(bText=='x')
        {
            bText='*';
            screenVal += bText;
            screen.value = screenVal ;
        }
        else if(bText == "C")
        {
            screenVal= " ";
            screen.value = screenVal ;
        }
        else if(bText=='=')
        {
            screen.value=eval(screenVal);
        }
        else
        {
            screenVal += bText;
            screen.value = screenVal ;
        }
    })
}