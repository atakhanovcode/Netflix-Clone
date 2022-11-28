let accordion_list = document.getElementsByClassName('accordion')
for(let i=0;i<accordion_list.length;i++){   
    accordion_list[i].addEventListener('click',function(){
        var panel = this.nextElementSibling;
        if(panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }    
    })
}