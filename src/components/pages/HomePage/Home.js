import React, { useState, useEffect } from 'react';
import './Home.css';

import { Link } from 'react-router-dom';


function Home(){
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
    <header>
            <div class="container">
                <p class="logo">P'aku Pet</p>
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
                </nav>
            </div>
        </header>

        <section id="hero">
            <h1>¡Queremos ayudarte a ti y a tu mascota!</h1>
            <button>ÚNETE A LA COMUNIDAD P'AKU PET</button>
        </section>

        <section id="somos-paku">
            <div class="container">
                <div class="img-container"></div>
                <div class="texto">

                    <h2>Somos <span class="color-acento">P'aku Pet</span></h2>
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
            <div class="container">
                <h2>Nuestros Colaboradores</h2>
                <div class="programas">
                </div>
            </div>
        </section>

        <section id="tinder">
            <div class="container">
                <h2>TINDER PET</h2>
                <div class="img-container"></div>            
            </div>
        </section>

        <section id="adopta">
            <div class="container">
                <h2>Adóptame</h2>
                <div class="img-container"></div>  
            </div>
        </section>

        <section id="tienda">
            <div class="container">
                <h2>TIENDA ONLINE</h2>
                <div class="img-container"></div>  
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
            <div class="container">
                <p>&copy; P'aku Pet 2022</p>
            </div>
        </footer>
      </>
    );
}

export default Home;