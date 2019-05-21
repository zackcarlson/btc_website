import React from 'react';
import Feature from './Feature/Feature.js';
import '../Feature/FeatureContainer.css';

const FeatureContainer = (props) => (
  <div className='feature-container'>
    <div className='container'>
      <div className='row'>
        { [
            {
              paragraph: 'Stripe is an always-improving toolchain that gains new features every month. Our world-class engineering team constantly iterates upon every facet of the Stripe stack. And from Apple Pay to Bitcoin, building on Stripe means you get early access to the latest technologies.',
              header: 'REASONABLE FEES',
              button: 'Learn More',
            },
            {
              paragraph: 'We help power 100,000+ businesses in 100+ countries and across nearly every industry. Headquartered in San Francisco, Stripe has 9 global offices and hundreds of people working to help transform how modern businesses are built and run.',
              header: 'EASY VERIFICATION',
              button: 'Learn More'
            },
            {
              paragraph: 'Stripe is an always-improving toolchain that gains new features every month. Our world-class engineering team constantly iterates upon every facet of the Stripe stack. And from Apple Pay to Bitcoin, building on Stripe means you get early access to the latest technologies.',
              header: 'QUICK TRANSACTIONS',
              button: 'Learn More'
            },
            {
              paragraph: 'We help power 100,000+ businesses in 100+ countries and across nearly every industry. Headquartered in San Francisco, Stripe has 9 global offices and hundreds of people working to help transform how modern businesses are built and run.',
              header: 'INSTANT SUPPORT',
              button: 'Learn More'
            }
          ].map(info => <Feature headerText={info.header} paragraphText={info.paragraph} btnText={info.button}/>)
        }
      </div>
    </div>
  </div>
);

export default FeatureContainer;