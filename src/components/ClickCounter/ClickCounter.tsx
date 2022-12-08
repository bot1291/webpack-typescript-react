import { useState } from 'react';
import styles from './ClickCounter.module.scss';

export const ClickCounter = () => {
	const [count, setCount] = useState(0);
	return (
		<>
			<div className={styles.test}>
				<button
					className={styles.maslo}
					onClick={() => setCount(c => c + 1)}
					onMouseDown={() => setCount(c => c + 1)}>
					Count - {count}
				</button>
			</div>
			<button className={styles.maslo}>test</button>
		</>
	);
};
