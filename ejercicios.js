const calcularPromedio = (notas) => {
  return notas.reduce((acc, curr) => acc + curr, 0) / notas.length;
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
