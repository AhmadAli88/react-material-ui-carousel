import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';

const items = [
  {
    title: 'Slide 1',
    description: 'This is the first slide',
    image: 'https://via.placeholder.com/600x300/FF5733/ffffff?text=Slide+1',
  },
  {
    title: 'Slide 2',
    description: 'This is the second slide',
    image: 'https://via.placeholder.com/600x300/33FF57/ffffff?text=Slide+2',
  },
  {
    title: 'Slide 3',
    description: 'This is the third slide',
    image: 'https://via.placeholder.com/600x300/5733FF/ffffff?text=Slide+3',
  },
];

const Custom = () => {
  return (
    <Carousel
      autoPlay={true} // Enables autoplay
      interval={3000} // Interval between slides in milliseconds
      navButtonsAlwaysVisible={true} // Always show the navigation buttons
      indicators={true} // Show indicators (dots) below the carousel
    >
      {items.map((item, index) => (
        <Paper key={index} style={{ padding: 20, textAlign: 'center' }}>
          <img
            src={item.image}
            alt={item.title}
            style={{ width: '100%', height: 'auto', borderRadius: 8 }}
          />
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </Paper>
      ))}
    </Carousel>
  );
};

export default Custom;
