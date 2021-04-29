const { io } = require('../server');
const { Usaurios, Usuarios } = require('../clases/usuarios');
const { crearMensaje } = require('../utilidades/utilidades');

const usuarios = new Usuarios();


io.on('connection', (client) => {

    //Cuando usuario conecta o reconecta
    client.on('entrarChat', (data, callback) => {

        // console.log(data);

        if (!data.nombre || !data.sala) {
            return callback({
                error: true,
                mensaje: 'El nombre y sala son necesarios'
            });
        }

        //conectar usuario a una sala
        client.join(data.sala);

        usuarios.agregarPersona(client.id, data.nombre, data.sala);

        //broadcast para informar a todos los usuarios de una misma sala de chat. Con emit, emite el evento 'listaPersonas'
        //listaPersonas definido en socket-chat.js
        client.broadcast.to(data.para).emit('listaPersonas', usuarios.getPersonasPorSala(data.sala));

        callback(usuarios.getPersonasPorSala(data.sala));
    });

    //Cuando usuario llama al metodo de crearMensaje
    client.on('crearMensaje', (data) => {

        let persona = usuarios.getPersona(client.id);

        let mensaje = crearMensaje(persona.nombre, data.mensaje);
        // Enviar información o Escuchar informacion: EMIT
        // A todo el mundo: .broadcast
        // A solo los usuarios de una sala de chat: .broadcast.to(data.para) o (persona.para)
        client.broadcast.to(persona.para).emit('crearMensaje', mensaje);
    });

    //Cuando usuario desconecta
    client.on('disconnect', () => {

        let personaBorrada = usuarios.borrarPersona(client.id);

        //broadcast para informar a todos los usuarios. to(personaBorrada.para): para informar a los de la misma sala de chat. Con emit, emite el evento 'crearMensaje'
        //crearMensaje definido en socket-chat.js
        client.broadcast.to(personaBorrada.sala).emit('crearMensaje', crearMensaje('Administrador', `${personaBorrada.nombre} salio del chat`));

        client.broadcast.to(personaBorrada.sala).emit('listaPersonas', usuarios.getPersonasPorSala(personaBorrada.sala));
    });

    // Mensajes privados 
    // (el servidor escucha el mensaje)
    client.on('mensajePrivado', data => {

        let persona = usuarios.getPersona(client.id);

        //mensaje privado a todos los usuarios
        // client.broadcast.emit('mensajePrivado', crearMensaje(persona.nombre, data.mensaje));

        //mensaje privado a un usuario
        //en navegador-consola: socket.emit('mensajePrivado', {mensaje:'Hola a Melissa!', para:'fCZl79ZYykR-5EUrAAAD'});
        client.broadcast.to(data.para).emit('mensajePrivado', crearMensaje(persona.nombre, data.mensaje));

    });

});