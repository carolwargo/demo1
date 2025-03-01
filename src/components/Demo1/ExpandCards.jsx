import React from 'react';
import { InView } from "react-intersection-observer";
import styles from '../../styles/expandcards.module.css';
import State from '../../assets/images/Expand/State.png';
import Conf from '../../assets/images/Expand/Conf.png';
import Preseason from '../../assets/images/Expand/Preseason.png';
import TeamMD from '../../assets/images/Expand/TeamMD.png';
import B26 from '../../assets/images/Expand/B26.png';
import NCAA from '../../assets/images/Expand/NCAA.png';
//import SBC from '../../assets/images/Expand/SBC.png';

const PlayerPosts = () => {
  const cards = [
    { id: 'c1', icon: '1', title: 'POST TITLE', img: State, link: 'https://x.com'},
    { id: 'c2', icon: '2', title: 'POST TITLE', img: B26, link: 'https://x.com' },
    { id: 'c3', icon: '3', title: 'POST TITLE', img: TeamMD , link: 'https://x.com'}, 
    { id: 'c4', icon: '4', title: 'POST TITLE', img: NCAA, link: 'https://x.com' },
    { id: 'c5', icon: '5', title: 'POST TITLE', img: Preseason, link: 'https://x.com' },
    { id: 'c6', icon: '6', title: 'POST TITLE', img: Conf, link: 'https://x.com' },
  ];

  return (
    <div>
      <div className="page-container justify-content-center"> 
        {/* Page Content */}
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <div
              ref={ref}
              className={`w3-content w3-justify w3-text-grey w3-padding-32 
               ${inView ? "animate-fade-in" : ""}`}
              id="profile"
            >
        <div className="container">
              <h5 className="card-title">Player Posts</h5>
              <p className="card-text">VIEW POST</p>
            </div>
          <div className={styles.wrapper}>
            <div className={styles.container}>
              {cards.map((card, index) => (
                <React.Fragment key={card.id}>
                  <input
                    type="radio"
                    name="slide"
                    id={card.id}
                    defaultChecked={index === 0}
                    className={styles.input}
                  />
                  <label
                    htmlFor={card.id}
                    className={styles.card}
                    style={{
                      backgroundImage: `url(${card.img})`,
                    }}
                  >
                    <div className={styles.row}>
                      <div className={styles.icon}>{card.icon}</div>
                      <div className={styles.description}>
                        <h5>{card.title}</h5>
                        <p>{card.desc}</p>
                        <a
      href={card.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w3-text-grey hover-zoom"
    >
      VIEW THIS POST
    </a>
                      </div>
                    </div>
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
          )}
        </InView>

      </div>
    </div>
  );
};

export default PlayerPosts;






/** 
applications: import '../../styles/expandcards.css';

const PlayerPosts = () => {

    return (
        <div>
            <div className='wrapper'>
                <div className="container">
                    <input type="radio" name='slide' id='c1'checked />
                    <label htmlFor="c1" className='card'>
                        <div className="row">
                        <div className='icon'>1</div>
                        <div className='description'>
                            <h4>All-Star</h4>
                            <p>Winter has so much to offer- creative activities</p>
                        </div>
                        </div>
                    </label>


                    <input type="radio" name='slide' id='c2' />
                    <label htmlFor="c2" className='card'>
                        <div className="row">
                        <div className='icon'>2</div>
                        <div className='description'>
                            <h4>Big 26</h4>
                            <p>Winter has so much to offer- creative activities</p>
                        </div>
                        </div>
                    </label>


                    <input type="radio" name='slide' id='c3' />
                    <label htmlFor="c3" className='card'>
                        <div className="row">
                        <div className='icon'>3</div>
                        <div className='description'>
                            <h4>Doubles</h4>
                            <p>Winter has so much to offer- creative activities</p>
                        </div>
                        </div>
                    </label>


                    <input type="radio" name='slide' id='c4' />
                    <label htmlFor="c4" className='card'>
                        <div className="row">
                        <div className='icon'>4</div>
                        <div className='description'>
                            <h4>Home Run</h4>
                            <p>Winter has so much to offer- creative activities</p>
                        </div>
                        </div>
                    </label>



                    <input type="radio" name='slide' id='c5' />
                    <label htmlFor="c5" className='card'>
                        <div className="row">
                        <div className='icon'>5</div>
                        <div className='description'>
                            <h4>Mid Season</h4>
                            <p>Winter has so much to offer- creative activities</p>
                        </div>
                        </div>
                    </label>
                    

                    <input type="radio" name='slide' id='c6' />
                    <label htmlFor="c6" className='card'>
                        <div className="row">
                        <div className='icon'>6</div>
                        <div className='description'>
                            <h4>MVP</h4>
                            <p>Winter has so much to offer- creative activities</p>
                        </div>
                        </div>
                    </label>
                </div>
            </div>
       </div>
    )
}

export default PlayerPosts
*/