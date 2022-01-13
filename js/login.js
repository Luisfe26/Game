const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const button = document.querySelectorAll('#formulario button');
const users = {
     user : 'admin',
     password : '12345678'
}

const expresiones = {
	user: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	password: /^\d{6,16}$/
}

const campos = {
    user: false,
	password: false
}

function validarFormulario(e){
   switch (e.target.name){
       case "user":
        validarcampo(expresiones.user, e.target, "user")
       break;
       case "password":
        validarcampo(expresiones.password, e.target, "password")
       break;
   }
   
}

function validarcampo (expresion, input, campo){ 
     if(expresion.test(input.value)){
         document.getElementById(campo).classList.remove("error")
         document.querySelector(`#grupo_${campo} .msj`).classList.remove("valida")
         document.getElementById(campo).classList.add("correcto")
         campos[campo] = true;
     } else{
         document.getElementById(campo).classList.remove("correcto")
         document.getElementById(campo).classList.add("error")
         document.querySelector(`#grupo_${campo} .msj`).classList.add("valida")
         campos[campo] = false;
     } 
}

inputs.forEach((input) => {
 	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

button.forEach((boton) => {
	boton.addEventListener('click', validarFormulario);
});

formulario.addEventListener('submit',  (e) => {
	e.preventDefault();
    if(campos.user && campos.password){
        formulario.reset();
        document.getElementById('mensaje-error').classList.add('mensaje-error-activo');
        document.getElementById('mensaje-info').classList.remove('mensaje-info-activo');
        document.getElementById('user').classList.add("error")
        document.getElementById('password').classList.add("error")
        campos.user = false;
        campos.password = false;
        setTimeout(() => {
            document.getElementById('mensaje-error').classList.remove('mensaje-error-activo');
            document.getElementById('user').classList.remove("error")
            document.getElementById('password').classList.remove("error")
            document.getElementById('user').classList.remove("correcto")
            document.getElementById('password').classList.remove("correcto")
            }, 1500);
	}

});

function logins (){
    const userInputs = document.getElementById('user').value;
    const passwordInputs = document.getElementById('password').value;
        if(users.password === passwordInputs && users.user === userInputs){
            document.getElementById('login').classList.add('login')
            document.getElementById('index').classList.add('fondo-game')
            document.getElementById('index').classList.remove('fondo')
            document.getElementById('game').classList.add('gameLogin')
    
        } else{
    
            document.getElementById('mensaje-info').classList.add('mensaje-info-activo');
    
            setTimeout(() => {
                document.getElementById('mensaje-info').classList.remove('mensaje-info-activo');
                }, 1500);
        }
    }
