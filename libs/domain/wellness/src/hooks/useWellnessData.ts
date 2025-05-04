import { useQuery } from '@tanstack/react-query';

interface WellnessData {
  id: string;
  date: string;
  steps: number;
  sleepHours: number;
  waterIntake: number;
}

const fetchWellnessData = async (): Promise<WellnessData[]> => {
  // This is a mock implementation. In a real app, this would be an API call
  return [
    {
      id: '1',
      date: '2024-03-20',
      steps: 8500,
      sleepHours: 7.5,
      waterIntake: 2.5,
    },
    {
      id: '2',
      date: '2024-03-21',
      steps: 9200,
      sleepHours: 8,
      waterIntake: 2.8,
    },
  ];
};

export const useWellnessData = () => {
  return useQuery({
    queryKey: ['wellness'],
    queryFn: fetchWellnessData,
  });
};
