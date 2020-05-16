import React, { useState } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';
import { Contenedor, ContenedorFormulario } from './styles/App';



function App() {

  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      año: '',
      plan: ''
    }
  });

  const [cargando, setCargando] = useState(false);

  const { datos, cotizacion } = resumen;

  return (
    <Contenedor>
      <Header
        titulo="Cotizador de seguros"
      />

      <ContenedorFormulario>
        <Formulario
          setResumen={setResumen}
          setCargando={setCargando}
        />
        {cargando ? <Spinner /> : null}

        {!cargando ? <Resultado cotizacion={cotizacion} /> : null }
        {!cargando ? <Resumen datos={datos} /> : null }
        

        

      </ContenedorFormulario>



    </Contenedor>



  );

}

export default App;