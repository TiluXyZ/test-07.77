const VerificationO = (e) => {
    const id = e.path[0].id
    let src = e.path[0].src
    let opt_u;

    if(id === 'first' || id === 'img-f'){
        console.log('Piedra')
        opt_u = 1
        if (src == undefined){
            src = e.path[0].firstElementChild.src
            console.log(src)
        } else {
            console.log(src)
        }
    } else if (id === 'second' || id === 'img-s'){
        console.log('Papel')
        opt_u = 2
        if (src == undefined){
            src = e.path[0].firstElementChild.src
            console.log(src)
        } else {
            console.log(src)
        }
    } else {
        console.log('Tijera')
        opt_u = 3
        if (src == undefined){
            src = e.path[0].firstElementChild.src
            console.log(src)
        } else {
            console.log(src)
        }
    }
    console.log(opt_u)
}

export default VerificationO