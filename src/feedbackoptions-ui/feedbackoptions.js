import React from 'react';
import PropTypes from 'prop-types';
import styles from './feedback.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ul className={styles.list}>
      {options.map((option, index) => {
        return (
          <li key={option} className={styles.listItem}>
            <button
              type="button"
              className={styles.button}
              onClick={() => {
                onLeaveFeedback[index](prevState => prevState + 1);
              }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.array.isRequired,
};

export default FeedbackOptions;
