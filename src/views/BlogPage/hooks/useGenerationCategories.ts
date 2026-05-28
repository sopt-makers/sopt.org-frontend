import { useGeneration } from '@src/hooks/useGeneration';
import { ALL_GENERATION, ALL_GENERATION_LABEL, OLDEST_GENERATION } from '@src/lib/constants/tabs';

const useGenerationCategories = () => {
  const latestGeneration = useGeneration();

  const options = [ALL_GENERATION];
  const labels: Record<number, string> = { [ALL_GENERATION]: ALL_GENERATION_LABEL };

  if (latestGeneration) {
    for (let generation = latestGeneration; generation >= OLDEST_GENERATION; generation--) {
      options.push(generation);
      labels[generation] = `${generation}기`;
    }
  }

  return { options, labels };
};

export default useGenerationCategories;
