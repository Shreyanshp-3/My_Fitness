// import React, { useState } from 'react'
// import { Box } from '@mui/material';

// import HeroBanner from '../components/HeroBanner';
// import Exercises from '../components/Exercises';
// import SearchExercise from '../components/SearchExercise';
// // import Exercises from '../components/Exercises';

// const Home = () => {
//   const [bodyPart, setBodyPart] = useState('all')
//   const [exercise, setExercises] = useState([]);


//   console.log(bodyPart)
//   return (
//     <Box>
//       <HeroBanner />
//       <SearchExercise
//         setExercises={setExercises}
//         bodyPart={bodyPart}
//         setBodyPart={setBodyPart} />
//       <Exercises
//         exercises={exercise}
//         setExercises={setExercises}
//         bodyPart={bodyPart}
//       // setBodyPart={setBodyPart} 
//       />
//     </Box>
//   )
// }

// export default Home

import React, { useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercise';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  );
};

export default Home;
