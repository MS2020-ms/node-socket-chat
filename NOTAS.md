# Inicio
>nodemon server/server
navegador: 
http://localhost:3000/
http://localhost:3000/chat.html
http://localhost:3000/chat.html?nombre=Fernando
http://localhost:3000/chat.html?nombre=Melissa
http://localhost:3000/chat.html?nombre=Juan
# Clases para controlar los usuarios del chat
- crear server/clases/usuarios.js
# Frontend conectar un usuario
- ir public/index.html
- crear public/chat.html
- renombrar public/js/socket-chat.js
- ir sockets/socket.js
# Desconectar usuarios
- ir sockets/socket.js
- ir public/js/socket-chat.js
# Enviando un mensaje a todo el grupo
- crear server/utilidades/utilidades.js
- ir sockets/socket.js
- ir public/js/socket-chat.js
- en navegado-consola: socket.emit('crearMensaje', {mensaje:'Hola a todos!'});
  lo reciben todos los usuarios conectados en otros navegadores en paralelo
# Enviar un mensaje a un usuario en especifico = privados
- necesito el id de la persona que quiero enviar mensaje
- ir public/js/socket-chat.js
- ir sockets/socket.js
- en navegador-consola: socket.emit('mensajePrivado', {mensaje:'Hola a Melissa!', para:'fCZl79ZYykR-5EUrAAAD'});
# Salas de chat
- ir index.html
- ir public/js/socket-chat.js
- ir sockets/socket.js
- ir server/classes/usuarios.js
# Mensajes y notificaciones a las salas de chat
- ir sockets/socket.js
