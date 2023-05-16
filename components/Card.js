import React from 'react'
import { useState } from 'react'
import Image from 'next/image';

function Card() {

    const [cards, setCards] = useState([
        {
          id: 1,
          images: '/images/study1.jpg',
          content: 'Verdigim parayi sonuna kadar hakediyor kocluk icerisinde gercekten ilgilenildigimi hissettim gerek spor ici gerek gunluk hayattan abi-kardes iliskisindeki sorulari olsun cok samimi hissettirdi. Ayrica koclukta kazandigim bilgiler sayesinde kendi programimi yaratip takip edebilecek potansiyele sahip oldugumu dusunuyorum',
          person: 'Eren',
          isVisible: true
        },
        {
          id: 2,
          images: '/images/iyi.jpg',
          content: 'Kart 2',
          person: 'nededin',
          isVisible: true
        },
        {
          id: 3,
          content: 'Kart 3',
          person: 'mahmut',
          isVisible: false
        },
        {
          id: 4,
          content: 'Kart 4',
          person: 'Emir',
          isVisible: false
        },
        {
          id: 5,
          content: 'Kart 5',
          person: 'asad',
          isVisible: false
        },
        {
          id: 6,
          content: 'Kart 6',
          person: 'ali',
          isVisible: false
        }
      ]);
    
      const [visibleCards, setVisibleCards] = useState(cards.filter((card) => card.isVisible));
      const [showAll, setShowAll] = useState(false);
    
      const toggleCardVisibility = () => {
        setShowAll((prevState) => !prevState);
      };
    
      const getVisibleCards = () => {
        if (showAll) {
          return cards;
        } else {
          return visibleCards;
        }
      };

  return (
    <section className=' mt-5 d-grid  '>
                  
  

    <div className="container  ">
    <h2 className="h1 text-center mb-5 text-black" id='comment-more' >Danışan Yorumları</h2>

    <div className='w-100'>

      <div className="row"  data-aos="zoom-in" >
         
      {getVisibleCards().map((card) => (
                <div className="col-lg-6 col-md-6 mb-5" key={card.id}>
                <div className='card testimonial mx-auto'>
                               <div className='testimonial-card  card-body'>
                               <Image   src={card.images} alt="profile" className='rounded-circle' width={120} height={120}/>
                               <h5 className="card-title text-center  ">{card.person}</h5>
                                  <p className=" card-text text-center   ">{card.content}</p>
                               </div>
                               </div>
                         </div>
           ))}
            
              </div>

                <div className="text-center">
          <button onClick={toggleCardVisibility} className="btn-more">
              {showAll ? "Gizle" : "Tümünü Gör"}
            </button>   
             </div>
   </div>

</div>

                </section>
  )
}
export default Card






