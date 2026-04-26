const calcularPromedio = (notas) => {
  return notas.reduce((acc, curr) => acc + curr, 0);
};

const filtrarAprobados = (alumnos) => {
  return alumnos.filter((alumno) => alumno.nota >= 6);
};

const formatearAlumnos = (alumnos) => {
  return alumnos.map(
    (alumno) => `Nombre: ${alumno.nombre} - Nota: ${alumno.nota}`,
  );
};

const buscarAlumno = (alumnos, nombre) => {
  return alumnos.find((alumno) => alumno.nombre === nombre);
};

const alumnos = [
  { nombre: "Ana", nota: 9 },
  { nombre: "Bruno", nota: 4 },
  { nombre: "Carla", nota: 7 },
  { nombre: "Diego", nota: 3 },
  { nombre: "Elena", nota: 6 },
  { nombre: "Fabio", nota: 8 },
];

const notas = alumnos.map((a) => a.nota);

console.log("(a) Promedio:", calcularPromedio(notas));
console.log("(b) Aprobados:", filtrarAprobados(alumnos));
console.log("(c) Formateados:", formatearAlumnos(alumnos));
console.log("(d) Buscar 'Carla':", buscarAlumno(alumnos, "Carla"));
console.log("(d) Buscar 'Zoe' (no existe):", buscarAlumno(alumnos, "Zoe"));

const myObj = { nombre: "Juan", apellido: "Doe" };
consola.registro(myObj);
