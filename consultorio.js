function Consultorio(nombre, pacientes){
    var _nombre = nombre;
    var _pacientes = pacientes || []; //esto convierte pacientes en un atributo opcional

    Object.defineProperty(this,"_getNombre",{
        get: function(){return _nombre}
    })

    Object.defineProperty(this,"_setNombre",{
        set: function(nombre){_nombre = nombre}
    })

    Object.defineProperty(this,"_getPacientes",{ 
        get: function(){return _pacientes}
    })
    Object.defineProperty(this,"_setPacientes",{
        set: function(pacientes){_pacientes = pacientes}
    })
}
//agregamos los métodos correspondientes al prototipo Consultorio
Consultorio.prototype.getNombre = function(){
    return this._getNombre //importante saber a qué están apuntando estos return, están apuntando a la propiedad respectiva getter o setter
}
Consultorio.prototype.setNombre = function(nombre){
    this._setNombre = nombre
}
Consultorio.prototype.getPacientes = function(){
    return this._getPacientes
}
Consultorio.prototype.setPacientes = function(pacientes){
    this._setPacientes = pacientes //arreglo
}


function Paciente(nombre, rut, edad, diagnostico){
    //variables locales, así no podremos acceder a ellas desde la consola aunque sepamos el nombre
    var _nombre = nombre;
    var _rut = rut;
    var _edad = edad;
    var _diagnostico = diagnostico;

    Object.defineProperty(this,"_getNombre",{
        get: function(){return _nombre}
    })
    Object.defineProperty(this,"_setNombre",{
        set: function(nombre){_nombre = nombre}
    })
    Object.defineProperty(this,"_getEdad",{
        get: function(){return _edad}
    })
    Object.defineProperty(this,"_setEdad",{
        set: function(edad){_edad = edad}
    })
    Object.defineProperty(this,"_getRut",{
        get: function(){return _rut}
    })
    Object.defineProperty(this,"_setRut",{
        set: function(rut){_rut = rut}
    })
    Object.defineProperty(this,"_getDiagnostico",{
        get: function(){return _diagnostico}
    })
    Object.defineProperty(this,"_setDiagnostico",{
        set: function(diagnostico){_diagnostico = diagnostico}
    })
}

//creacion de metodos asociados a los getter y setter
Paciente.prototype.getNombre = function(){
    return this._getNombre //el getter
}
Paciente.prototype.setNombre = function(nombre){
    this._setNombre = nombre
}

Paciente.prototype.getEdad = function(){
    return this._getEdad
}
Paciente.prototype.setEdad = function(edad){
    this._setEdad = edad
}

Paciente.prototype.getRut = function(){
    return this._getRut
}
Paciente.prototype.setRut = function(rut){
    this._setRut = rut
}

Paciente.prototype.getDiagnostico = function(){
    return this._getDiagnostico
}
Paciente.prototype.setDiagnostico = function(diagnostico){
    this._setDiagnostico = diagnostico
}

//Función que muestra todos los pacientes registrados
Consultorio.prototype.mostrarPacientes = function(){
    this.getPacientes().forEach(e => {
        var datosPaciente = `${e.getNombre()} - ${e.getEdad()} - ${e.getRut()} - ${e.getDiagnostico()}`
        console.log(datosPaciente)
    })
}
//creamos una función que busque entre los pacientes de consultorio, agregándola al prototipo de Consultorio
Consultorio.prototype.encontrarPaciente = function(nombreBuscado){
    var resultado = this.getPacientes().find(p => (p.getNombre() == nombreBuscado)) //resultado es un Paciente
    mensajeResultado = (resultado)
    ? `*Paciente encontrado* \n Nombre: ${resultado.getNombre()} - Edad: ${resultado.getEdad()} - Rut: ${resultado.getRut()} - Diagnóstico: ${resultado.getDiagnostico()}`
    : `Paciente no encontrado...`;
    console.log(mensajeResultado)
}




// set de prueba
const p1 = new Paciente("Brian", 123456789, 26, "Siempre tengo hambre");
const p2 = new Paciente("John", 2121213454, 32, "Sueño crónico");
const p3 = new Paciente("cris", 555555555, 32, "Javascrisis");
const p4 = new Paciente("Goku", 1555555, 16, "duermo poco");
const p5 = new Paciente("Naruto", 250000, 16, "personalidades multiples");

const pacientes = [p1,p2,p3,p4,p5]
const consultorio = new Consultorio("Consultoria Namek", pacientes)
