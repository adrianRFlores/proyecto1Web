import React from 'react';
import PropTypes from 'prop-types';
import './LearnCard.css';

function LearnCard({
  id, imgsrc, header, body, href,
}) {
  return (
    <div className="learnCard" id={id}>
      <div className="cardImgStyle">
        <img className="cardImg" src={imgsrc} />
      </div>
      <div className="learnCardTextContainer">
        <div className="cardHeader">
          <h3>{header}</h3>
        </div>
        <div className="cardBody">
          <div className="bodyMarkdown">
            <p>{body}</p>
          </div>
        </div>
        <div className="cardFooter">
          <p>
            <a href={href}>Learn more</a>
          </p>
        </div>
      </div>
    </div>
  );
}

LearnCard.propTypes = {
  id: PropTypes.string.isRequired,
  imgsrc: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default LearnCard;
