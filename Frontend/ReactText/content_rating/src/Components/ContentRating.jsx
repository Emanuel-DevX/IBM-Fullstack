
// import { Component } from 'react';
import { useState } from 'react';
import './ContentRating.css';

// class ContentRating extends Component {
//   constructor() {
//     super();
//     this.state = {
//       likes: 0,
//       dislikes: 0,
//       totalRatings :0,
//       handleLike:() => {
//         this.setState((prevState) => ({
//           likes: prevState.likes + 1,
//           totalRatings: prevState.totalRatings + 1,
//         }));
//       },
//       handleDislike:() => {
//         this.setState((prevState) => ({
//           dislikes: prevState.dislikes + 1,
//           totalRatings: prevState.totalRatings + 1,

//         }));
//       }
//     };
//   }
  // render() {
    function ContentRating() {
      const [likes, setLikes] = useState(0);
      const [dislikes, setDislikes] = useState(0);
      const [totalRatings, setTotalRatings] = useState(0);
    
      const handleLike = () => {
        setLikes((prev) => prev + 1);
        setTotalRatings((prev) => prev + 1);
      };
    
      const handleDislike = () => {
        setDislikes((prev) => prev + 1);
        setTotalRatings((prev) => prev + 1);
      };
    return (
     <>
    <div className='content-rating'>
        <p>
        There is some text here..
        <br />
        {/* Total Ratings: {this.state.totalRatings} */}
        Total Ratings: {totalRatings}

        </p>
        <div className='rating-buttons'>
        <button className="like-button"
         onClick={handleLike}>
            {/* Like ({this.state.likes}) */}
            Like ({likes})

          </button>
          <button className="dislike-button" onClick={handleDislike}>
            Dislike ({dislikes})
            {/* Dislike ({this.state.dislikes}) */}

          </button>
        </div>
    </div>    </>
    );
  }
// }

export default ContentRating;
