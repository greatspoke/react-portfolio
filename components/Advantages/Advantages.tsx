import { advantagesProps } from './Advantages.props';
import styles from './Advantages.module.css';
import CheckIcon from './check.svg';
export const Advantages = ({ advantages }: advantagesProps): JSX.Element => {

	return (
		<div className={styles.advantages}>

			<>
				{advantages.map(a => (
					<div key={a._id} className={styles.advantage}>
						<CheckIcon />
						<div className={styles.title}>{a.title}</div>
						<hr className={styles.vline}></hr>
						<div>{a.description}</div>

					</div>
				))}
			</>


		</div>
	);

};