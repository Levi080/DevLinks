function toggleMode() {
    const html = document.documentElement

    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
    // }else{
    //     html.classList.add('light')
    // }

/* O método toggle realiza a mesma lógica do código comentado acima, se houver uma classe com o nome informado no parêntese ele retira, se não tiver, ele adiciona.*/
    html.classList.toggle('light')

    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')){
        img.setAttribute("src", "./assets/avatar-levi-praia.png")
    }else{
        img.setAttribute("src", "./assets/avatar-levi-office.png")
    }
}