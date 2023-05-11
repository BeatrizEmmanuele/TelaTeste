const crm = document.getElementById('crm')

const senha = document.getElementById('senha')

function validarLogin(event){

    event.preventDefault()

    if(crm.value==='' || senha.value===''){

        alert('Preencha TODOS os campos!!!')
        return
    }
    else{
        console.log(crm.value),
        console.log(senha.value)
    }
}