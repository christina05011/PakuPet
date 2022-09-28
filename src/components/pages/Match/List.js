import React from 'react';
import NavLogin from '../SignUp/NavLogin';
import './Match.css'

const posts = [
  {id: 1, nombre: 'Rumba', img: 'cachorro.jpg', cat:'Cachorro'},
  {id: 2, nombre: 'Micky', img: 'abuelito.jpg', cat:'Abuelito'},
  {id: 3, nombre: 'Lupe', img: 'cat-814952_1920.jpg', cat:'Abuelito'},
  {id: 4, nombre: 'Gamorín', img: 'conejo1.jpg', cat:'Abuelito'},
  {id: 5, nombre: 'Gatita', img: 'cat-2068462_1920.jpg', cat:'Adulto'}
];

const List = () => {
  return (
    <>
      <NavLogin />
      <div className='background'>
        <section id="match">
          <h2>MATCHS</h2>
            <div className='containerMat'>
                <img src={require('../../../images/' + posts[0].img)} alt='/'/> 
                <div className='Right'>
                  <div className='contOverlayM'>
                    <div className='contentM'>
                      <h1>{posts[0].nombre}</h1>
                      <p2>{posts[0].cat}</p2>
                    </div>
                  </div>
                </div> 
            </div> 

            <div className='containerMat1'>
                <img src={require('../../../images/' + posts[1].img)} alt='/'/> 
                <div className='Right'>
                  <div className='contOverlayM'>
                    <div className='contentM'>
                      <h1>{posts[1].nombre}</h1>
                      <p2>{posts[1].cat}</p2>
                    </div>
                  </div>
                </div> 
            </div> 

            <div className='containerMat2'>
                <img src={require('../../../images/' + posts[2].img)} alt='/'/> 
                <div className='Right'>
                  <div className='contOverlayM'>
                    <div className='contentM'>
                      <h1>{posts[2].nombre}</h1>
                      <p2>{posts[2].cat}</p2>
                    </div>
                  </div>
                </div> 
            </div> 

            <div className='containerMat3'>
                <img src={require('../../../images/' + posts[3].img)} alt='/'/> 
                <div className='Right'>
                  <div className='contOverlayM'>
                    <div className='contentM'>
                      <h1>{posts[3].nombre}</h1>
                      <p2>{posts[3].cat}</p2>
                    </div>
                  </div>
                </div> 
            </div> 

        </section>
      </div>
    </>
  );
};

export default List;