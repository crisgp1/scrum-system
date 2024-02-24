import Sonido from './../Sounds/sonido2.mp3';

export default function Boton() {   

    const playSound = () => {
        const audio = new Audio(Sonido);
        audio.play();
        mostrarMensaje();
    }

    const mostrarMensaje = () => {
        document.getElementById('boton1').innerHTML = '<h1>ME ESTOY CAGANDO<h1>';
    }

    return (
      <button className="bg-red-300" id='boton1' onClick={playSound}>
       PRESIONA AQUI
      </button>
    )
}
