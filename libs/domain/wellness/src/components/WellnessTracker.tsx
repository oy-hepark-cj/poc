import React from 'react';
import { useWellnessData } from '../hooks/useWellnessData';

export const WellnessTracker: React.FC = () => {
  const { data, isLoading, error } = useWellnessData();

  if (isLoading) return <div>Loading wellness data...</div>;
  if (error) return <div>Error loading wellness data</div>;

  return (
    <div className="wellness-tracker">
      <h2>Wellness Tracker</h2>
      <div className="wellness-stats">
        {data?.map((day) => (
          <div key={day.id} className="wellness-day">
            <h3>{day.date}</h3>
            <ul>
              <li>Steps: {day.steps}</li>
              <li>Sleep: {day.sleepHours} hours</li>
              <li>Water Intake: {day.waterIntake}L</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
