import { FC } from 'react';

import { useAppSelector } from 'src/shared/lib';
import { ThrowForm, getThrowList } from 'src/features/throw-form';

import styles from './styles.module.scss';

export const ThrowList: FC = () => {
   const throwList = useAppSelector(getThrowList);
   return (
      <ul className={styles.list}>
         {throwList.map((el) => (
            <li key={el}>
               <ThrowForm id={el} />
            </li>
         ))}
      </ul>
   );
};
