import { useState } from 'react';
import Statistics from './statistics-ui/statistics';
import FeedbackOptions from './feedbackoptions-ui/feedbackoptions';
import Section from './section-ui/section';
import Notification from './notification-ui/notification';
import styles from './app.module.css';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const optionNames = ['good', 'neutral', 'bad'];
  const onLeaveFeedback = [setGood, setNeutral, setBad];
  const total = good + neutral + bad;
  const percentage = Math.round((good / total) * 100);

  return (
    <div className={styles.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionNames}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={percentage}
          />
        )}
      </Section>
    </div>
  );
}
