import React, { useState } from 'react';
import StarRating from '../../common/Rating/StarRating';

const ReviewsAccordion = ({ reviews, averageRating }) => {
  const [rating, setRating] = useState(0);
  const [reviewForm, setReviewForm] = useState({
    name: '',
    email: '',
    comment: '',
    saveInfo: false
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setReviewForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit review logic
  };

  return (
    <div className="accordion-body wd-customer-review">
      <div className="review-heading">
        <h6 className="title">Customer review</h6>
        <div className="box-rate-review">
          <div className="rating-summary">
            <ul className="list-star">
              <StarRating rating={averageRating} />
              <li><span className="count-star text-md">({reviews.length})</span></li>
            </ul>
            <span className="text-md rating-average">{averageRating.toFixed(1)}/5.0</span>
          </div>
          
          <div className="rating-breakdown">
            {[5, 4, 3, 2, 1].map((star) => {
              const count = reviews.filter(r => r.rating === star).length;
              const percentage = (count / reviews.length) * 100;
              
              return (
                <div key={star} className="rating-breakdown-item">
                  <div className="rating-score">
                    {star} <i className="icon icon-star" />
                  </div>
                  <div className="rating-bar">
                    <div className="value" style={{ width: `${percentage}%` }} />
                  </div>
                  <span className="rating-count">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
        <a href="#form-review" className="tf-btn btn-dark2 animate-btn">Write a review</a>
      </div>
      
      <div className="review-section">
        <ul className="review-list">
          {reviews.map(review => (
            <li key={review.id} className="review-item">
              <div className="review-avt">
                <img src={review.avatar} alt={review.author} />
              </div>
              <div className="review-content">
                <div className="review-info">
                  <div className="review-meta">
                    <span className="review-author fw-medium text-md">{review.author}</span>
                    <span className="review-date text-sm">{review.date}</span>
                  </div>
                  <StarRating rating={review.rating} />
                </div>
                <p className="text text-sm text-main-4">{review.comment}</p>
              </div>
            </li>
          ))}
        </ul>
        
        <form id="form-review" onSubmit={handleSubmit} className="form-review">
          <h6 className="title">Write a review</h6>
          <p className="note text-md text-main-4">
            Your email address will not be published. Required fields are marked *
          </p>
          
          <div className="box-rating">
            <span className="text-md">Your rating *</span>
            <div className="list-rating-check">
              {[5, 4, 3, 2, 1].map((star) => (
                <React.Fragment key={star}>
                  <input 
                    type="radio" 
                    id={`star${star}`} 
                    name="rate" 
                    value={star}
                    checked={rating === star}
                    onChange={() => setRating(star)}
                  />
                  <label htmlFor={`star${star}`} title={`${star} stars`} />
                </React.Fragment>
              ))}
            </div>
          </div>
          
          <div className="group-2-ip">
            <input 
              type="text" 
              name="name"
              placeholder="Name *" 
              value={reviewForm.name}
              onChange={handleInputChange}
              required
            />
            <input 
              type="email" 
              name="email"
              placeholder="Email *" 
              value={reviewForm.email}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <textarea 
            name="comment" 
            id="note" 
            placeholder="Your review *" 
            value={reviewForm.comment}
            onChange={handleInputChange}
            required
          />
          
          <div className="check-save">
            <input 
              type="checkbox" 
              className="tf-check" 
              id="checksave" 
              name="saveInfo"
              checked={reviewForm.saveInfo}
              onChange={handleInputChange}
            />
            <label htmlFor="checksave" className="label text-md">
              Save my name, email, and website in this browser for the next time I comment.
            </label>
          </div>
          
          <button type="submit" className="tf-btn animate-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

ReviewsAccordion.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    })
  ).isRequired,
  averageRating: PropTypes.number.isRequired
};

export default ReviewsAccordion;