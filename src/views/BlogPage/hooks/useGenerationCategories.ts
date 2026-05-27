import { useGeneration } from '@src/hooks/useGeneration';
import { ALL_GENERATION, ALL_GENERATION_LABEL, OLDEST_GENERATION } from '@src/lib/constants/tabs';

const useGenerationCategories = () => {
  const latestGeneration = useGeneration();
  const generations = [];

  if (latestGeneration) {
    for (let generation = latestGeneration; generation >= OLDEST_GENERATION; generation--) {
      generations.push(generation);
    }
  }

  const options = [ALL_GENERATION, ...generations];
  const labels: Record<number, string> = {
    [ALL_GENERATION]: ALL_GENERATION_LABEL,
    ...Object.fromEntries(generations.map((generation) => [generation, `${generation}기`])),
  };

  return { options, labels };
};

export default useGenerationCategories;
