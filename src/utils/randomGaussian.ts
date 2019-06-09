import gaussian from 'gaussian';

export default function randomGaussian(mean = 0, standardDeviation = 1): () => number {
  const distribution = gaussian(mean, standardDeviation * standardDeviation);

  return function () {
    return distribution.ppf(Math.random());
  };
}
