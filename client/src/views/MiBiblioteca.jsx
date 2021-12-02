const MiBiblioteca = () => {



  return (
    <div>
      <p>Nombre de la Biblioteca</p>
      <div>
        <label htmlFor="buscaLibro">Buscar</label>
        <input type="search" name="buscaLibro" id="buscaLibro" />
      </div>
      <button>Filtros</button>
      <p>LISTADO DE LIBROS</p>
      <button>quitar de mi Biblioteca</button>
    </div>
  );
};

export default MiBiblioteca;
