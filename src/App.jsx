import React from 'react';
import ListaUsuarios from './ListaUsuarios';
function App() {
  const usuarios = [
    { nombre: 'Juan Pérez', edad: 30, profesion: 'Ingeniero' },
    { nombre: 'Ana García', edad: 25, profesion: 'Diseñadora' },
    { nombre: 'Luis Rodríguez', edad: 35, profesion: 'Profesor' }
  ];
  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ListaUsuarios usuarios={usuarios} />
    </div>
  );
}
export default App;
