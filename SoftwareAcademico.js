// Software Académico
// Inicio de Sesión
let User = {};
let Pass = {};
let Option = 0;
let ListUsers = [];
let ListPass = [];
let EntradaValida = false;

let cursos = ["Administacion", "Software", "Diseño"];
let materiasAdministracion = ["Finanzas", "Recursos Humanos", "Gestión de Proyectos"]
let materiasSofware = ["HTML", "JavaScript", "Base de Datos"]
let materiasDiseño = ["Diseño Visual", "Diseño Interactivo", "Prototipo"]



console.log("Bienvenido al Software Académico");

let ingresoSatisfactorio = false;

do {
    let Ingreso = parseInt(prompt("Registrarse: Opción = 1\nIniciar Sesión: Opción = 2"));

    if (Ingreso === 1) {
        User = prompt("Ingrese un Correo Electrónico").toLocaleLowerCase().trim();
        Pass = prompt("Ingrese una contraseña").toLocaleLowerCase().trim();

        if (ListUsers.includes(User) && ListPass.includes(Pass)) {
            console.log("Usuario ya se encuentra registrado")
        }
        else {
            if (User !== "" && Pass !== "") {
                ListUsers.push(User);
                ListPass.push(Pass);
                console.log("Usuario Registrado con Éxito");
            } else {
                console.log("Por favor, ingrese todos los datos");
            }
        }

    } else if (Ingreso === 2) {
        let IntentosMaximos = 3;
        for (let i = 0; i < IntentosMaximos; i++) {
            User = prompt("Ingrese correo electrónico").toLocaleLowerCase();
            Pass = prompt("Ingrese contraseña").toLocaleLowerCase();
            if (ListUsers.includes(User) && ListPass.includes(Pass)) {
                console.log("Usuario Encontrado con éxito\nIngresando al Sistema de Gestión Académico");
                ingresoSatisfactorio = true;
                break;
            } else {
                let IntentosRestante = IntentosMaximos - (i + 1);
                console.log(`Intento fallido, intentos restantes ${IntentosRestante}`);
                if (IntentosRestante === 0) {
                    console.log("Intentos acabados, cuenta bloqueada");
                    break;
                }
            }
        }
        if (ingresoSatisfactorio) {
            do {
                Option = parseInt(prompt("Selecione una opcion\nOpcion 1: Mostrar Cursos Disponibles\nOpcion 2: Curso Administracion\nOpcion 3: Curso Sofware\nOpcion 4: Curso Diseño\nOpcion 5: Salir del Sistema"));
                switch (Option) {
                    case 1:
                        //consultar cursos disponibles
                        console.log("Mostrar Cursos y materias disponibles");
                        console.log(`Los cursos disponibles son:${cursos}\n y las materias disponibles son \nAdministración: ${materiasAdministracion}\nSoftware: ${materiasSofware}\nDiseño: ${materiasDiseño} `);
                        1
                        break;
                    case 2:

                        //Ingresar estudiantes a los cursos

                        let MateAdms = prompt("Bienvenido al curso de Administración\nIndique a cual curso quiere añadir los estudiantes\nOpcion 1: Finanzas\nOpcion 2: Recursos Humanos\nOpcion 3: Gestion de Proyectos");
                        
                        if (MateAdms == 1) {
                            let cantiEstudiante = parseInt(prompt("Ingrese la cantidad de estudiantes para el curso"));

                            let listaEstudiantes = [];
                            for (let i = 0; i < cantiEstudiante; i++) {
                                let nombres = prompt(`Ingrese el nombre del estudiante ${i + 1}`);
                                let momentofinal = 0;

                                for (let j = 0; j < 3; j++) {


                                    let notasAdmFI1 = parseFloat(prompt(`Ingrese la nota 1 del momento ${j + 1} valores entre 0 y 5`)) * 0.20;
                                    let notasAdmFI2 = parseFloat(prompt(`Ingrese la nota 2 del momento ${j + 1} valores entre 0 y 5`)) * 0.20;
                                    let notasAdmFI3 = parseFloat(prompt(`Ingrese la nota 3 del momento ${j + 1} valores entre 0 y 5`)) * 0.60;

                                    if (notasAdmFI1 >= 0 && notasAdmFI1 <= 5.0 &&
                                        notasAdmFI2 >= 0 && notasAdmFI2 <= 5.0 &&
                                        notasAdmFI3 >= 0 && notasAdmFI3 <= 5.0) {
                                        EntradaValida = true;

                                        let notaFinal = notasAdmFI1 + notasAdmFI2 + notasAdmFI3;

                                        let varMomento = (parseFloat(prompt(`Ingrese el porcentaje para el momento ${j + 1}`)) / 100) * notaFinal;

                                        momentofinal += varMomento;

                                    }
                                    else {
                                        console.log("Ingrese una nota valida")
                                    }

                                }

                                momentofinal = momentofinal;

                                let estado = momentofinal >= 3 ? "Aprobado" : "Reprobado";

                                listaEstudiantes.push({
                                    Nombres: nombres,
                                    NotaFinal: momentofinal,
                                    Materia: "Finanzas",
                                    Curso: "Administración",
                                    Estado: estado
                                });
                            }
                            for (let a = 0; a < cantiEstudiante; a++) {
                                console.log(listaEstudiantes[a])
                            }
                        }


                        else if (MateAdms == 2) {
                            let cantiEstudiante = parseInt(prompt("Ingrese la cantidad de estudiantes para el curso"));

                            let listaEstudiantes = [];
                            for (let i = 0; i < cantiEstudiante; i++) {
                                let nombres = prompt(`Ingrese el nombre del estudiante ${i + 1}`);
                                let momentofinal = 0;

                                for (let j = 0; j < 3; j++) {

                                    let notasAdmFI1 = parseFloat(prompt(`Ingrese la nota 1 del momento ${j + 1} valores entre 0 y 5`)) * 0.20;
                                    let notasAdmFI2 = parseFloat(prompt(`Ingrese la nota 2 del momento ${j + 1} valores entre 0 y 5`)) * 0.20;
                                    let notasAdmFI3 = parseFloat(prompt(`Ingrese la nota 3 del momento ${j + 1} valores entre 0 y 5`)) * 0.60;

                                    if (notasAdmFI1 >= 0 && notasAdmFI1 <= 5.0 &&
                                        notasAdmFI2 >= 0 && notasAdmFI2 <= 5.0 &&
                                        notasAdmFI3 >= 0 && notasAdmFI3 <= 5.0) {
                                        EntradaValida = true;

                                        let notaFinal = notasAdmFI1 + notasAdmFI2 + notasAdmFI3;

                                        let varMomento = (parseFloat(prompt(`Ingrese el porcentaje para el momento ${j + 1}`)) / 100) * notaFinal;

                                        momentofinal += varMomento;
                                    }
                                    else {
                                        console.log("Ingrese una nota valida")
                                    }


                                }

                                momentofinal = momentofinal;


                                let estado = momentofinal >= 3 ? "Aprobado" : "Reprobado";


                                listaEstudiantes.push({
                                    Nombres: nombres,
                                    NotaFinal: momentofinal,
                                    Materia: "Recursos Humanos",
                                    Curso: "Administración",
                                    Estado: estado
                                });
                            }

                            for (let a = 0; a < cantiEstudiante; a++) {
                                console.log(listaEstudiantes[a])
                            }
                        }

                        else if (MateAdms == 3) {
                            let cantiEstudiante = parseInt(prompt("Ingrese la cantidad de estudiantes para el curso"));

                            let listaEstudiantes = [];
                            for (let i = 0; i < cantiEstudiante; i++) {
                                let nombres = prompt(`Ingrese el nombre del estudiante ${i + 1}`);
                                let momentofinal = 0;

                                for (let j = 0; j < 3; j++) {

                                    let notasAdmFI1 = parseFloat(prompt(`Ingrese la nota 1 del momento ${j + 1} valores entre 0 y 5`)) * 0.20;
                                    let notasAdmFI2 = parseFloat(prompt(`Ingrese la nota 2 del momento ${j + 1} valores entre 0 y 5`)) * 0.20;
                                    let notasAdmFI3 = parseFloat(prompt(`Ingrese la nota 3 del momento ${j + 1} valores entre 0 y 5`)) * 0.60;

                                    if (notasAdmFI1 >= 0 && notasAdmFI1 <= 5.0 &&
                                        notasAdmFI2 >= 0 && notasAdmFI2 <= 5.0 &&
                                        notasAdmFI3 >= 0 && notasAdmFI3 <= 5.0) {
                                        EntradaValida = true;

                                        let notaFinal = notasAdmFI1 + notasAdmFI2 + notasAdmFI3;

                                        let varMomento = (parseFloat(prompt(`Ingrese el porcentaje para el momento ${j + 1}`)) / 100) * notaFinal;

                                        momentofinal += varMomento;
                                    }
                                    else {
                                        console.log("Ingrese una nota valida")
                                    }



                                }

                                momentofinal = momentofinal;


                                let estado = momentofinal >= 3 ? "Aprobado" : "Reprobado";


                                listaEstudiantes.push({
                                    Nombres: nombres,
                                    NotaFinal: momentofinal,
                                    Materia: "Gestion de Proyectos",
                                    Curso: "Administración",
                                    Estado: estado
                                });
                            }

                            for (let a = 0; a < cantiEstudiante; a++) {
                                console.log(listaEstudiantes[a])
                            }
                        }



                        break;
                    case 3:
                        //Ingresar estudiantes a los cursos "HTML", "JavaScript", "Base de Datos"

                        let MateSoft = prompt("Bienvenido al curso de Software\nIndique a cual curso quiere añadir los estudiantes\nOpcion 1: HTML\nOpcion 2: JavaScript\nOpcion 3: Base de Datos");

                        if (MateSoft == 1) {
                            let cantiEstudiante = parseInt(prompt("Ingrese la cantidad de estudiantes para el curso"));
                            let listaEstudiantes = [];

                            for (let i = 0; i < cantiEstudiante; i++) {
                                let nombres = prompt(`Ingrese el nombre del estudiante ${i + 1}`);
                                let momentofinal = 0;

                                for (let j = 0; j < 3; j++) {


                                    let notasAdmFI1 = parseFloat(prompt(`Ingrese la nota 1 del momento ${j + 1} valores entre 0 y 5`)) * 0.20;
                                    let notasAdmFI2 = parseFloat(prompt(`Ingrese la nota 2 del momento ${j + 1} valores entre 0 y 5`)) * 0.20;
                                    let notasAdmFI3 = parseFloat(prompt(`Ingrese la nota 3 del momento ${j + 1} valores entre 0 y 5`)) * 0.60;

                                    if (notasAdmFI1 >= 0 && notasAdmFI1 <= 5.0 &&
                                        notasAdmFI2 >= 0 && notasAdmFI2 <= 5.0 &&
                                        notasAdmFI3 >= 0 && notasAdmFI3 <= 5.0) {
                                        EntradaValida = true;

                                        let notaFinal = notasAdmFI1 + notasAdmFI2 + notasAdmFI3;

                                        let varMomento = (parseFloat(prompt(`Ingrese el porcentaje para el momento ${j + 1}`)) / 100) * notaFinal;

                                        momentofinal += varMomento;

                                    }
                                    else {
                                        console.log("Ingrese una nota valida")
                                    }




                                }

                                momentofinal = momentofinal;


                                let estado = momentofinal >= 3 ? "Aprobado" : "Reprobado";


                                listaEstudiantes.push({
                                    Nombres: nombres,
                                    NotaFinal: momentofinal,
                                    Materia: "HTML",
                                    Curso: "Software",
                                    Estado: estado
                                });
                            }

                            for (let a = 0; a < cantiEstudiante; a++) {
                                console.log(listaEstudiantes[a])
                            }
                        }


                        else if (MateSoft == 2) {
                            let cantiEstudiante = parseInt(prompt("Ingrese la cantidad de estudiantes para el curso"));
                            let listaEstudiantes = [];

                            for (let i = 0; i < cantiEstudiante; i++) {
                                let nombres = prompt(`Ingrese el nombre del estudiante ${i + 1}`);
                                let momentofinal = 0;

                                for (let j = 0; j < 3; j++) {

                                    let notasAdmFI1 = parseFloat(prompt(`Ingrese la nota 1 del momento ${j + 1} valores entre 0 y 5`)) * 0.20;
                                    let notasAdmFI2 = parseFloat(prompt(`Ingrese la nota 2 del momento ${j + 1} valores entre 0 y 5`)) * 0.20;
                                    let notasAdmFI3 = parseFloat(prompt(`Ingrese la nota 3 del momento ${j + 1} valores entre 0 y 5`)) * 0.60;

                                    if (notasAdmFI1 >= 0 && notasAdmFI1 <= 5.0 &&
                                        notasAdmFI2 >= 0 && notasAdmFI2 <= 5.0 &&
                                        notasAdmFI3 >= 0 && notasAdmFI3 <= 5.0) {
                                        EntradaValida = true;

                                        let notaFinal = notasAdmFI1 + notasAdmFI2 + notasAdmFI3;

                                        let varMomento = (parseFloat(prompt(`Ingrese el porcentaje para el momento ${j + 1}`)) / 100) * notaFinal;

                                        momentofinal += varMomento;
                                    }
                                    else {
                                        console.log("Ingrese una nota valida")
                                    }


                                }

                                momentofinal = momentofinal;


                                let estado = momentofinal >= 3 ? "Aprobado" : "Reprobado";


                                listaEstudiantes.push({
                                    Nombres: nombres,
                                    NotaFinal: momentofinal,
                                    Materia: "JavaScript",
                                    Curso: "Software",
                                    Estado: estado
                                });
                            }

                            for (let a = 0; a < cantiEstudiante; a++) {
                                console.log(listaEstudiantes[a])
                            }
                        }

                        else if (MateSoft == 3) {
                            let cantiEstudiante = parseInt(prompt("Ingrese la cantidad de estudiantes para el curso"));
                            let listaEstudiantes = [];

                            for (let i = 0; i < cantiEstudiante; i++) {
                                let nombres = prompt(`Ingrese el nombre del estudiante ${i + 1}`);
                                let momentofinal = 0;

                                for (let j = 0; j < 3; j++) {

                                    let notasAdmFI1 = parseFloat(prompt(`Ingrese la nota 1 del momento ${j + 1} valores entre 0 y 5`)) * 0.20;
                                    let notasAdmFI2 = parseFloat(prompt(`Ingrese la nota 2 del momento ${j + 1} valores entre 0 y 5`)) * 0.20;
                                    let notasAdmFI3 = parseFloat(prompt(`Ingrese la nota 3 del momento ${j + 1} valores entre 0 y 5`)) * 0.60;

                                    if (notasAdmFI1 >= 0 && notasAdmFI1 <= 5.0 &&
                                        notasAdmFI2 >= 0 && notasAdmFI2 <= 5.0 &&
                                        notasAdmFI3 >= 0 && notasAdmFI3 <= 5.0) {
                                        EntradaValida = true;

                                        let notaFinal = notasAdmFI1 + notasAdmFI2 + notasAdmFI3;

                                        let varMomento = (parseFloat(prompt(`Ingrese el porcentaje para el momento ${j + 1}`)) / 100) * notaFinal;

                                        momentofinal += varMomento;
                                    }
                                    else {
                                        console.log("Ingrese una nota valida")
                                    }



                                }

                                momentofinal = momentofinal;


                                let estado = momentofinal >= 3 ? "Aprobado" : "Reprobado";


                                listaEstudiantes.push({
                                    Nombres: nombres,
                                    NotaFinal: momentofinal,
                                    Materia: "Base de datos",
                                    Curso: "Softeware",
                                    Estado: estado
                                });
                            }

                            for (let a = 0; a < cantiEstudiante; a++) {
                                console.log(listaEstudiantes[a])
                            }
                        }
                        break;
                    case 4:
                            // Materis para diseño Diseño Visual", "Diseño Interactivo", "Prototipo"
                    let MateDiseño = prompt("Bienvenido al curso de Software\nIndique a cual curso quiere añadir los estudiantes\nOpcion 1: Diseño Visual\nOpcion 2: Diseño Interactivo\nOpcion 3: Prototipo");

                    if (MateDiseño == 1) {
                        let cantiEstudiante = parseInt(prompt("Ingrese la cantidad de estudiantes para el curso"));
                        let listaEstudiantes = [];

                        for (let i = 0; i < cantiEstudiante; i++) {
                            let nombres = prompt(`Ingrese el nombre del estudiante ${i + 1}`);
                            let momentofinal = 0;

                            for (let j = 0; j < 3; j++) {


                                let notasAdmFI1 = parseFloat(prompt(`Ingrese la nota 1 del momento ${j + 1} valores entre 0 y 5`)) * 0.20;
                                let notasAdmFI2 = parseFloat(prompt(`Ingrese la nota 2 del momento ${j + 1} valores entre 0 y 5`)) * 0.20;
                                let notasAdmFI3 = parseFloat(prompt(`Ingrese la nota 3 del momento ${j + 1} valores entre 0 y 5`)) * 0.60;

                                if (notasAdmFI1 >= 0 && notasAdmFI1 <= 5.0 &&
                                    notasAdmFI2 >= 0 && notasAdmFI2 <= 5.0 &&
                                    notasAdmFI3 >= 0 && notasAdmFI3 <= 5.0) {
                                    EntradaValida = true;

                                    let notaFinal = notasAdmFI1 + notasAdmFI2 + notasAdmFI3;

                                    let varMomento = (parseFloat(prompt(`Ingrese el porcentaje para el momento ${j + 1}`)) / 100) * notaFinal;

                                    momentofinal += varMomento;

                                }
                                else {
                                    console.log("Ingrese una nota valida")
                                }




                            }

                            momentofinal = momentofinal;


                            let estado = momentofinal >= 3 ? "Aprobado" : "Reprobado";


                            listaEstudiantes.push({
                                Nombres: nombres,
                                NotaFinal: momentofinal,
                                Materia: "Diseño Visual",
                                Curso: "Diseño",
                                Estado: estado
                            });
                        }

                        for (let a = 0; a < cantiEstudiante; a++) {
                            console.log(listaEstudiantes[a])
                        }
                    }


                    else if (MateDiseño == 2) {
                        let cantiEstudiante = parseInt(prompt("Ingrese la cantidad de estudiantes para el curso"));

                        let listaEstudiantes = [];
                        for (let i = 0; i < cantiEstudiante; i++) {
                            let nombres = prompt(`Ingrese el nombre del estudiante ${i + 1}`);
                            let momentofinal = 0;

                            for (let j = 0; j < 3; j++) {

                                let notasAdmFI1 = parseFloat(prompt(`Ingrese la nota 1 del momento ${j + 1} valores entre 0 y 5`)) * 0.20;
                                let notasAdmFI2 = parseFloat(prompt(`Ingrese la nota 2 del momento ${j + 1} valores entre 0 y 5`)) * 0.20;
                                let notasAdmFI3 = parseFloat(prompt(`Ingrese la nota 3 del momento ${j + 1} valores entre 0 y 5`)) * 0.60;

                                if (notasAdmFI1 >= 0 && notasAdmFI1 <= 5.0 &&
                                    notasAdmFI2 >= 0 && notasAdmFI2 <= 5.0 &&
                                    notasAdmFI3 >= 0 && notasAdmFI3 <= 5.0) {
                                    EntradaValida = true;

                                    let notaFinal = notasAdmFI1 + notasAdmFI2 + notasAdmFI3;

                                    let varMomento = (parseFloat(prompt(`Ingrese el porcentaje para el momento ${j + 1}`)) / 100) * notaFinal;

                                    momentofinal += varMomento;
                                }
                                else {
                                    console.log("Ingrese una nota valida")
                                }


                            }

                            momentofinal = momentofinal;


                            let estado = momentofinal >= 3 ? "Aprobado" : "Reprobado";


                            listaEstudiantes.push({
                                Nombres: nombres,
                                NotaFinal: momentofinal,
                                Materia: "Diseño Interactivo",
                                Curso: "Diseño",
                                Estado: estado
                            });
                        }

                        for (let a = 0; a < cantiEstudiante; a++) {
                            console.log(listaEstudiantes[a])
                        }
                    }

                    else if (MateDiseño == 3) {
                        let cantiEstudiante = parseInt(prompt("Ingrese la cantidad de estudiantes para el curso"));
                        let listaEstudiantes = [];

                        for (let i = 0; i < cantiEstudiante; i++) {
                            let nombres = prompt(`Ingrese el nombre del estudiante ${i + 1}`);
                            let momentofinal = 0;

                            for (let j = 0; j < 3; j++) {

                                let notasAdmFI1 = parseFloat(prompt(`Ingrese la nota 1 del momento ${j + 1} valores entre 0 y 5`)) * 0.20;
                                let notasAdmFI2 = parseFloat(prompt(`Ingrese la nota 2 del momento ${j + 1} valores entre 0 y 5`)) * 0.20;
                                let notasAdmFI3 = parseFloat(prompt(`Ingrese la nota 3 del momento ${j + 1} valores entre 0 y 5`)) * 0.60;

                                if (notasAdmFI1 >= 0 && notasAdmFI1 <= 5.0 &&
                                    notasAdmFI2 >= 0 && notasAdmFI2 <= 5.0 &&
                                    notasAdmFI3 >= 0 && notasAdmFI3 <= 5.0) {
                                    EntradaValida = true;

                                    let notaFinal = notasAdmFI1 + notasAdmFI2 + notasAdmFI3;

                                    let varMomento = (parseFloat(prompt(`Ingrese el porcentaje para el momento ${j + 1}`)) / 100) * notaFinal;

                                    momentofinal += varMomento;
                                }
                                else {
                                    console.log("Ingrese una nota valida")
                                }



                            }

                            momentofinal = momentofinal;


                            let estado = momentofinal >= 3 ? "Aprobado" : "Reprobado";


                            listaEstudiantes.push({
                                Nombres: nombres,
                                NotaFinal: momentofinal,
                                Materia: "Prototipo",
                                Curso: "Diseño",
                                Estado: estado
                            });
                        }

                        for (let a = 0; a < cantiEstudiante; a++) {
                            console.log(listaEstudiantes[a])
                        }
                    }

                        break;
                    case 5:
                        console.log("Saliendo del Sistema");
                        break;
                    default:
                        console.log("Opción no válida");
                }
            } while (Option !== 5);
        }
    } else {
        console.log("Opción no válida. Por favor, seleccione 1 o 2.");
    }
} while (!ingresoSatisfactorio); 