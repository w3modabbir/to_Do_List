let inputText = document.querySelector(".input_text")
let btn = document.querySelector(".btn_list")
let content = document.querySelector('.contentt ul')

btn.addEventListener('click', (e)=>{
    if(inputText.value != ""){
        e.preventDefault();
        //creat li
        let li = document.createElement('li')
        li.innerHTML = inputText.value;
        content.appendChild(li);

        // creat span
        let span = document.createElement('span');
        span.innerHTML = 'x';
        li.appendChild(span);
    }
    
    let close = document.querySelectorAll('span');
    for(let i=0; i<close.length; i++){
        close[i].addEventListener('click', ()=>{
            close[i].parentElement.style.opacity = "0";
            setTimeout(()=>{
                close[i].parentElement.style.display = "none";
            }, 500)
        })
        inputText.value = ""
    }
})