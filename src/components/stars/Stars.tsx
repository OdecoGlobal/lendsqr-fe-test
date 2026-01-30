import filledStar from '../../assets/star-filled.svg';
import emptyStar from '../../assets/star-empty.svg';

import styles from './stars.module.scss';

interface StarTierProps {
  tier: 1 | 2 | 3;
}

const StarTier = ({ tier }: StarTierProps) => {
  const totalStars = 3;

  return (
    <div className={styles['star-tier']}>
      {[...Array(totalStars)].map((_, index) => {
        const isFilled = index < tier;

        return (
          <img
            key={index}
            src={isFilled ? filledStar : emptyStar}
            alt={isFilled ? 'Filled star' : 'Empty star'}
            className="star-tier__icon"
          />
        );
      })}
    </div>
  );
};

export default StarTier;
