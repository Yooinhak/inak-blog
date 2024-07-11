// import styles from './style.module.css';

// const Component = () => {
//   return (
//     <div className={styles.container}>
//       <input
//         type="checkbox"
//         id="checkbox"
//         className={styles.checkbox + ' ' + styles['visually-hidden']}
//       />
//       <label className={styles.icon} htmlFor="checkbox">
//         <div className={styles.hamburger}>
//           <span className={`${styles.bar} ${styles['bar-1']}`}></span>
//           <span className={`${styles.bar} ${styles['bar-2']}`}></span>
//           <span className={`${styles.bar} ${styles['bar-3']}`}></span>
//           <span className={`${styles.bar} ${styles['bar-4']}`}></span>
//           <span className={`${styles.bar} ${styles['bar-5']}`}></span>
//         </div>
//       </label>
//     </div>
//   );
// };

// export default Component;

'use client';

import { useState } from 'react';

const Component = () => {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="inline-block">
      <input
        type="checkbox"
        id="checkbox"
        className="absolute hidden"
        checked={checked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="checkbox" className="cursor-pointer">
        <div className="w-8 h-8 relative">
          <span
            className={`block w-8 h-1 bg-blue-500 rounded transition-all duration-400 ease-in-out absolute ${checked ? 'top-3.5 bg-transparent' : 'top-0'}`}
          ></span>
          <span
            className={`block h-1 bg-blue-500 rounded transition-all duration-400 ease-in-out absolute top-3.5 ${checked ? 'w-8 transform rotate-45 left-0' : 'w-1 rotate-90 left-3.5'}`}
          ></span>
          <span
            className={`block w-1 h-1 bg-blue-500 rounded transition-all duration-400 ease-in-out absolute top-3.5 right-0 left-3.5 ${checked ? 'w-8 transform -rotate-45' : 'w-1'}`}
          ></span>
          <span
            className={`block w-8 h-1 bg-blue-500 rounded transition-all duration-400 ease-in-out absolute bottom-0 top-3.5 ${checked ? 'bottom-3.5 bg-transparent' : 'bottom-0'}`}
          ></span>
          <span
            className={`block w-8 h-1 bg-blue-500 rounded transition-all duration-400 ease-in-out absolute bottom-0 ${checked ? 'bottom-3.5 bg-transparent' : 'bottom-0'}`}
          ></span>
        </div>
      </label>
    </div>
  );
};

export default Component;
