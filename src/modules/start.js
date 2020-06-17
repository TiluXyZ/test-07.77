import verificationO from "./verifications";

const start = (e) => {
    const option = document.querySelectorAll('.option-g')

    option.forEach( opt => {
        opt.addEventListener('click', (e) => {
            verificationO(e)
        })
    })
}

export default start