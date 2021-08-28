import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out some of our Tools!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
              label='Intelligence'
              path='/services'
            />
            <CardItem
              src='images/img-6.jpg'
              text='Etiam dapibus nunc ac semper mollis.'
              label='Enablement'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Fusce lacinia ullamcorper elit, sit amet porttitor tellus vestibulum eget.'
              label='Engagement'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Integer pulvinar non quam eget varius. Morbi volutpat magna leo.'
              label='Analytics'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Proin consequat velit purus, sit amet volutpat ante volutpat ac.'
              label='Management'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
