function showMenu(e){
    var ele=document.getElementById("menu");
    var compStyles = window.getComputedStyle(ele);
if(e.classList.contains("change"))
{
    e.classList.remove("change");

}
else{
    e.classList.add("change");
    ele.style.display="none";//by defaut ele.display.style was blank, so added this 

}
    
    //  console.log("click", ele, ele.style.display);//compStyles.getPropertyValue("display"));
    if(ele.style.display==="none")
        {ele.style.display="flex";
        }
    else
    {ele.style.display="none";} 
}

