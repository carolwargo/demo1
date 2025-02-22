import React from 'react';
import styles from '../../styles/expandcards.module.css';
import AllState from '../../assets/images/PlayerPosts/AllState.png';
import Big26 from '../../assets/images/PlayerPosts/Big26.png';
import Doubles from '../../assets/images/PlayerPosts/Doubles.png';
import HR from '../../assets/images/PlayerPosts/HR.png';
import Mid from '../../assets/images/PlayerPosts/Mid.png';
import MVP from '../../assets/images/PlayerPosts/MVP.png';

const PlayerPosts = () => {
  const cards = [
    { id: 'c1', icon: '1', title: 'All-Star', desc: 'Winter has so much to offer - creative activities', img: AllState },
    { id: 'c2', icon: '2', title: 'Big 26', desc: 'Winter has so much to offer - creative activities', img: Big26 },
    { id: 'c3', icon: '3', title: 'Doubles', desc: 'Winter has so much to offer - creative activities', img: Doubles },
    { id: 'c4', icon: '4', title: 'Home Run', desc: 'Winter has so much to offer - creative activities', img: HR },
    { id: 'c5', icon: '5', title: 'Mid Season', desc: 'Winter has so much to offer - creative activities', img: Mid },
    { id: 'c6', icon: '6', title: 'MVP', desc: 'Winter has so much to offer - creative activities', img: MVP },
  ];

  return (
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
                  <h4>{card.title}</h4>
                  <p>{card.desc}</p>
                </div>
              </div>
            </label>
          </React.Fragment>
        ))}
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