// {
//     id: 'ajsARC-kk454mhkKL',
//     nombre: 'Fernando',
//     sala: 'Video-Juegos'
// }

class Usuarios {

    constructor() {
        this.personas = [];
    }

    agregarPersona(id, nombre, sala) {

        let persona = { id: id, nombre: nombre, sala: sala };

        this.personas.push(persona);

        return this.personas;
    }

    getPersona(id) {
        //filter retorna un Array, por eso quiero [0]
        let persona = this.personas.filter(persona => {
            return persona.id === id
        })[0];

        return persona;
    }

    getPersonas() {
        return this.personas;
    }

    getPersonasPorSala(sala) {
        let personasEnSala = this.personas.filter(persona => {
            return persona.sala === sala
        });

        return personasEnSala;
    }

    borrarPersona(id) {
        let personaBorrada = this.getPersona(id);

        //borrar
        this.personas = this.personas.filter(persona => {
            return persona.id != id
        });

        return personaBorrada;
    }

}

module.exports = {
    Usuarios
}