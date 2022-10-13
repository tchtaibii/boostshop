function showbar(){
    var m = document.getElementById("navmobile");
    if (m.style.display == "flex")
        m.style.display = "none";
    else
        m.style.display = "flex";
}
function ft_scroll(svg, sc){
    var img = document.getElementById(svg);
    var div = document.getElementById(sc);
    console.log(img);
    if (div.style.display == 'block')
        div.style.display = 'none';
    else
        div.style.display = 'block';
    
    if (img.getAttribute('d') == 'M18 12H6')
        img.setAttribute('d', 'M12 6v6m0 0v6m0-6h6m-6 0H6');
    else
        img.setAttribute('d', 'M18 12H6');
}