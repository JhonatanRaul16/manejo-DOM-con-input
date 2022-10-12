const view = document.querySelector(".view"),
add = document.querySelector(".add"),
add_desc = document.querySelector(".add_desc"),
header = document.querySelector(".header"),
main = document.querySelector(".main"),
container = document.querySelector(".container"),
columna = document.querySelector(".columna"),
footer = document.querySelector(".footer"),
form = document.querySelector(".form"),
CloseIcon = document.querySelector(".fa-xmark"),
DescTag = document.querySelector(".desc"),
Save = document.querySelector(".btn_save"),
luna = document.querySelector(".fa-moon");


/* Mostrar el formulario */
add_desc.addEventListener('click', () =>{
    form.classList.add("show");
} );

//previsualización
const file = document.querySelector("#file"),
Prev = document.querySelector("#Previsualizacion");
/* Previsualizar imagen */

file.addEventListener("change",() =>{
    const archivos = file.files;
    if(!archivos || !archivos.length){
        Prev.src="";
        return;
    }
    const primer = archivos[0];
    const objectURL = URL.createObjectURL(primer);
    Prev.src = objectURL;
    Prev.classList.add("show");
});

/* Guardar form */


Save.addEventListener('click',(e) => {
    e.preventDefault;
    let desc = DescTag.value,
    img = Prev.src;
    console.log(desc);
    let add = `<div class="columna">
                <img  src="${img}" alt="">
                <p>${desc}</p> 
                </div>`;
    container.insertAdjacentHTML("beforeend",add);
    CloseIcon.click();
});


/* Mostrar imagenes */
view.addEventListener('click',() =>{
    main.classList.add("show")
});

/* Botom agregar */
add.addEventListener('click',() => {
    let add = `<div class="columna">
                <img   src="${Prev.src}" alt=""> 
                </div>`;
    container.insertAdjacentHTML("beforeend",add);
});

/* Cerrar el icono */
CloseIcon.addEventListener('click',() => {
    form.classList.remove("show");
    DescTag.value="";
    
    Prev.classList.remove("show");
});



/* Modo nocturno */
luna.addEventListener('click',() =>{
    footer.classList.add("show");
    header.classList.add("show");
});


/* Eliminar imagenes */



/* ImgElim.addEventListener('dblclick',() => {
    columna.classList.add("delete");
});
 */



