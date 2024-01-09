import ListaDeTareas from './componentes/ListaDeTareas';
import titulo from './img/Titol.png'

function App() {
  return (
    <div className="m-auto w-fit">
      <div className='flex justify-center mt-[6rem]'>
        <img 
          src={titulo}
          alt='imagen título'
        />
      </div>
      <div className='bg-gray-200 w-[500px] h-[500px] rounded p-[2rem] space-y-4'>
        <h1 className='text-center'>Mis Tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
