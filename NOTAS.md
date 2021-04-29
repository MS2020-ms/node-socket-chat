# Inicio
>nodemon server/server
navegador: 
http://localhost:3000/
http://localhost:3000/chat.html
http://localhost:3000/chat.html?nombre=Fernando&sala=Juegos
http://localhost:3000/chat.html?nombre=Melissa&sala=Juegos
http://localhost:3000/chat.html?nombre=Juan&sala=Amigos
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
# Diseno de sala de chat
# Renderizar usuarios
- crear js/socket-chat-jquery.js
- ir chat.html e importar <script src="js/socket-chat-jquery.js"></script>
- ir public/js/socket-chat.js
# Obtener ID del usuario conectado
- crear js/socket-chat-jquery.js
# Enviar y renderizar mensajes
- ir chat.html -> <form id="formEnviar">
- crear js/socket-chat-jquery.js
- ir sockets/socket.js

