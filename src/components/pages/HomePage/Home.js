import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../context/authContext';
import Modal from './Modal';
import ModalMatch from '../Match/Modal';

function Home(){
  const { user, logout, loading } = useAuth();
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);
  const [openModal6, setOpenModal6] = useState(false);
  const [openModal7, setOpenModal7] = useState(false);
  const [openModal8, setOpenModal8] = useState(false);
  const [openModal9, setOpenModal9] = useState(false);
//Modales de los Matchs
  const [match1, setMatch1] = useState(false);
  const [match2, setMatch2] = useState(false);
  const [match3, setMatch3] = useState(false);
  const [match4, setMatch4] = useState(false);
  const [match5, setMatch5] = useState(false);
  const [match6, setMatch6] = useState(false);
  const [match7, setMatch7] = useState(false);
  const [match8, setMatch8] = useState(false);
  const [match9, setMatch9] = useState(false);

  const handleLogout = async () => {
    await logout();
  }

    if(loading) return <h1>Loading</h1>

  return (
    <>
        <div>
            Welcome {user.email}
        </div>
        <header>
            <div className="container">
                <p className="logo">P'aku Pet</p>
                <nav>
                    <a href="#somos-paku">¿QUIÉNES SOMOS?</a>
                    <a href="#colaboradores">COLABORADOES</a>
                    <a href="#tinder">TINDER PET</a>
                    <a href="#adopta">ADÓPTAME</a>
                    <a href="#tienda">TIENDA ONLINE</a>
                    <a href="#info">MÁS INFORMACIÓN</a>
                    <Link to='/sign-up' onClick={closeMobileMenu}>
                      <button>
                        Sign Up
                      </button> 
                    </Link>
                    <button onClick={handleLogout}>
                        Logout
                    </button>
                </nav>
            </div>         
        </header>
        
        <section id="hero">
            <h1>¡Queremos ayudarte a ti y a tu mascota!</h1>
            <button>ÚNETE A LA COMUNIDAD P'AKU PET</button>
        </section>

        <section id="somos-paku">
            <div className="container">
                <div className="img-container"></div>
                <div className="texto">

                    <h2>Somos <span className="color-acento">P'aku Pet</span></h2>
                    <p> 

                    Paku Pet es una web creada por tres amantes del mundo animal. El proyecto nació con el objetivo de ayudar a todas aquellas personas que conviven con animales
                    y darles los recursos necesarios para mejorar la convivencia entre ellos. 
                    Y viendo la necesidad de dar respuesta a dudas más complejas, esta consta de veterinarios,
                    etólogos, biólogos, adiestradores, etc., para ofrecer un contenido más específico y riguroso.        
        
                    </p>
                </div>
            </div>
        </section>

        <section id="colaboradores">
            <div className="container">
                <h2>Nuestros Colaboradores</h2>
                <div className="programas">
                </div>
            </div>
        </section>

        <section id="tinder">
            <div className="container">
                <h2>TINDER PET   
                    <Link to='/match' onClick={closeMobileMenu}>
                        <button>
                            Matchs
                        </button> 
                    </Link>
                </h2>
                <div className="programas">
                    <div className="carta">
                        <h3>Rumba</h3>
                        <p>Cachorro</p>
                        <p>1,8 km</p>
                        <button 
                            onClick={() => setOpenModal1(true)}>
                                Ver más
                        </button>
                        <Modal 
                        open={openModal1} 
                        onClose={() => setOpenModal1(false)}
                        imge={'cachorro.jpg'} 
                        name={'RUMBA'} 
                        cat={'un cachorro'} 
                        edad={'4'} 
                        km={'1,8'}/>
                        <button 
                            onClick={()=>setMatch1(true)}>
                                Match
                        </button>
                        <ModalMatch 
                        open={match1} 
                        onClose={() => setMatch1(false)}
                        imge={'cachorro.jpg'} 
                        name={'RUMBA'} 
                        cat={'Cachorro'}/>
                    </div>  
                    <div className="carta">
                        <h3>Brutus</h3>
                        <p>Adulto</p>
                        <p>1,6 km</p>
                        <button 
                            onClick={() => setOpenModal2(true)}>
                                Ver más
                        </button>
                        <Modal 
                        open={openModal2} 
                        onClose={() => setOpenModal2(false)}
                        imge={'adulto.jpg'} 
                        name={'Brutus'} 
                        cat={'un adulto'} 
                        edad={'20'} 
                        km={'1,6'}/>
                        <button 
                            onClick={()=>setMatch2(true)}>
                                Match
                        </button>
                        <ModalMatch 
                        open={match2} 
                        onClose={() => setMatch2(false)}
                        imge={'adulto.jpg'} 
                        name={'BRUTUS'} 
                        cat={'Adulto'}/>
                    </div> 
                    <div className="carta">
                        <h3>Micky</h3>
                        <p>Abuelito</p>
                        <p>1,8 km</p>
                        <button 
                            onClick={() => setOpenModal3(true)}>
                                Ver más
                        </button>
                        <Modal 
                        open={openModal3} 
                        onClose={() => setOpenModal3(false)}
                        imge={'abuelito.jpg'} 
                        name={'Micky'} 
                        cat={'un abuelito'} 
                        edad={'60'} 
                        km={'1,8'}/>
                        <button 
                            onClick={()=>setMatch3(true)}>
                                Match
                        </button>
                        <ModalMatch 
                        open={match3} 
                        onClose={() => setMatch3(false)}
                        imge={'abuelito.jpg'} 
                        name={'MICKY'} 
                        cat={'Abuelito'}/>
                    </div>
                </div> 
                <div className="buttonG">MÁS PERROS P'AKU</div>
                <div className="programas">
                    <div className="gatos">
                        <h3>Lupe</h3>
                        <p>Abuelito</p>
                        <p>3,6 km</p>
                        <button 
                            onClick={() => setOpenModal4(true)}>
                                Ver más
                        </button>
                        <Modal 
                        open={openModal4} 
                        onClose={() => setOpenModal4(false)}
                        imge={'cat-814952_1920.jpg'} 
                        name={'Lupe'} 
                        cat={'un abuelito'} 
                        edad={'60'} 
                        km={'3,6'}/>
                        <button 
                            onClick={()=>setMatch4(true)}>
                                Match
                        </button>
                        <ModalMatch 
                        open={match4} 
                        onClose={() => setMatch4(false)}
                        imge={'cat-814952_1920.jpg'} 
                        name={'LUPE'} 
                        cat={'Abuelito'}/>
                    </div> 
                    <div className="gatos">
                        <h3>Pelos</h3>
                        <p>Cachorro</p>
                        <p>1,0 km</p>
                        <button 
                            onClick={() => setOpenModal5(true)}>
                                Ver más
                        </button>
                        <Modal 
                        open={openModal5} 
                        onClose={() => setOpenModal5(false)}
                        imge={'cat-2934720_1920.jpg'} 
                        name={'Pelos'} 
                        cat={'un cachorro'} 
                        edad={'5'} 
                        km={'1,0'}/>
                        <button 
                            onClick={()=>setMatch5(true)}>
                                Match
                        </button>
                        <ModalMatch 
                        open={match5} 
                        onClose={() => setMatch5(false)}
                        imge={'cat-2934720_1920.jpg'} 
                        name={'PELOS'} 
                        cat={'Cachorro'}/>
                    </div> 
                    <div className="gatos">
                        <h3>Gatita</h3>
                        <p>Adulto</p>
                        <p>2,3 km</p>
                        <button 
                            onClick={() => setOpenModal6(true)}>
                                Ver más
                        </button>
                        <Modal 
                        open={openModal6} 
                        onClose={() => setOpenModal6(false)}
                        imge={'cat-2068462_1920.jpg'} 
                        name={'Gatita'} 
                        cat={'una adulta'} 
                        edad={'24'} 
                        km={'2,3'}/>
                        <button 
                            onClick={()=>setMatch6(true)}>
                                Match
                        </button>
                        <ModalMatch 
                        open={match6} 
                        onClose={() => setMatch6(false)}
                        imge={'cat-2068462_1920.jpg'} 
                        name={'GATITA'} 
                        cat={'Adulta'}/>
                    </div>          
                </div>
                <div className="buttonG">MÁS GATOS P'AKU</div>
                <div className="programas">
                    <div className="conejos">
                        <h3>Gamorín</h3>
                        <p>Abuelito</p>
                        <p>3,6 km</p>
                        <button 
                            onClick={() => setOpenModal7(true)}>
                                Ver más
                        </button>
                        <Modal 
                        open={openModal7} 
                        onClose={() => setOpenModal7(false)}
                        imge={'conejo1.jpg'} 
                        name={'Gamorín'} 
                        cat={'un abuelito'} 
                        edad={'50'} 
                        km={'3,6'}/>
                        <button 
                            onClick={()=>setMatch7(true)}>
                                Match
                        </button>
                        <ModalMatch 
                        open={match7} 
                        onClose={() => setMatch7(false)}
                        imge={'conejo1.jpg'} 
                        name={'GAMORÍN'} 
                        cat={'Abuelito'}/>
                    </div> 
                    <div className="conejos">
                        <h3>Pulgas</h3>
                        <p>Abuelita</p>
                        <p>1,0 km</p>
                        <button 
                            onClick={() => setOpenModal8(true)}>
                                Ver más
                        </button>
                        <Modal 
                        open={openModal8} 
                        onClose={() => setOpenModal8(false)}
                        imge={'conejo2.jpg'} 
                        name={'Pulgas'} 
                        cat={'una abuelita'} 
                        edad={'70'} 
                        km={'1,0'}/>
                        <button 
                            onClick={()=>setMatch8(true)}>
                                Match
                        </button>
                        <ModalMatch 
                        open={match8} 
                        onClose={() => setMatch8(false)}
                        imge={'conejo2.jpg'} 
                        name={'PULGAS'} 
                        cat={'Abuelita'}/>
                    </div> 
                    <div className="conejos">
                        <h3>Pelusa</h3>
                        <p>Adulto</p>
                        <p>2,3 km</p>
                        <button 
                            onClick={() => setOpenModal9(true)}>
                                Ver más
                        </button>
                        <Modal 
                        open={openModal9} 
                        onClose={() => setOpenModal9(false)}
                        imge={'conejo3.jpg'} 
                        name={'Pelusa'} 
                        cat={'un adulto'} 
                        edad={'15'} 
                        km={'2,3'}/>
                        <button 
                            onClick={()=>setMatch9(true)}>
                                Match
                        </button>
                        <ModalMatch 
                        open={match9} 
                        onClose={() => setMatch9(false)}
                        imge={'conejo3.jpg'} 
                        name={'PELUSA'} 
                        cat={'Adulto'}/>
                    </div>          
                </div>
                <div className="buttonG">MÁS CONEJOS P'AKU</div>
            </div>
        </section>

        <section id="adopta">
            <div className="container">
                <h2>Adóptame</h2>
                <div className="img-container"></div>
                <Link to='/adopt' onClick={closeMobileMenu}>
                    <button>
                        Adopta ahora
                    </button> 
                </Link>
            </div>
        </section>

        <section id="tienda">
            <div className="container">
                <h2>Tienda Online</h2>
                <div className="img-container"></div>
                <Link to='/store' onClick={closeMobileMenu}>
                    <button>
                        Ingresar a la tienda
                    </button> 
                </Link>
            </div>
        </section>

        <section id="info">
            <h2>MÁS INFORMACIÓN</h2>
            <p>Queremos ofrecer la mayor gama de opciones, así que compartimos artículos que resuelven las cuestiones que los cuidadores de perros, gatos y demas se platean a
    diario. También se tiene contenido relacionado con los animales exóticos y la fauna salvaje. Además, informamos acerca de la situación actual de las
    distintas especies animales registradas y concienciamos para promover un mundo más respetuoso con todos los seres vivos.

    En Paku Pet trabajamos con tres objetivos claros: educar, informar y concienciar. Nos esforzamos cada día para publicar contenido útil y de calidad, que nos
    permita ayudar a todos nuestros lectores a convertirse en auténticos expertos animales e informar para mejorar la situación actual del mundo animal, combatiendo
    el abandono, el maltrato y la explotación.

    Todo el contenido se actualiza constantemente y se aborda desde una perspectiva animalista, respetando en todo momento las necesidades naturales de cada especie.
    Además, se busca colaborar activamente con asociaciones, protectoras, fundaciones, clínicas veterinaria, etc., para fomentar la adopción responsable de animales,
    luchar contra el abandono y resaltar la importancia de acudir a profesionales siempre que sea necesario. En este sentido, nuestros artículos son una guía que no
    sustituyen la atención veterinaria o el trabajo realizado por un educador o adiestrador canino.

    Con todo ello, en Paku Pet aspiramos a convertirnos en la página web de referencia del mundo animal de habla hispana para llegar a un número mayor de personas y,
    entre todos, mejorar la calidad de vida de los animales.
            </p>
        </section>

        <footer>
            <div className="container">
                <p>&copy; P'aku Pet 2022</p>
            </div>
        </footer>
      </>
    );
}

export default Home;