import { HhDataProps } from './HhData.props';
import styles from './HhData.module.css';
import { Card } from '../Card/Card';
import RateIcon from './rate.svg';
import { priceUsd } from '../../helpers/helpers';
export const HhData = ({ count, juniorSalary, middleSalary, seniorSalary }: HhDataProps): JSX.Element => {

	return (
		<div className={styles.hh}>
			<Card className={styles.count} >
				<div className={styles.title}>All Vacancies</div>
				<div className={styles.countValue}>{count}</div>
			</Card>
			<Card className={styles.salary} >
				<div>
					<div className={styles.title}>Junior</div>
					<div className={styles.salaryValue}>{priceUsd(juniorSalary)}</div>
					<div className={styles.rate}>
						<RateIcon className={styles.filled} />
						<RateIcon></RateIcon>
						<RateIcon></RateIcon>
					</div>
				</div>
				<div>
					<div>
						<div className={styles.title}>Middle</div>
						<div className={styles.salaryValue}>{priceUsd(middleSalary)}</div>
						<div className={styles.rate}>
							<RateIcon className={styles.filled} />
							<RateIcon className={styles.filled} />
							<RateIcon />
						</div>
					</div>
				</div>
				<div>
					<div>
						<div className={styles.title}>Senior</div>
						<div className={styles.salaryValue}>{priceUsd(seniorSalary)}</div>
						<div className={styles.rate}>
							<RateIcon className={styles.filled} />
							<RateIcon className={styles.filled} />
							<RateIcon className={styles.filled} />
						</div>
					</div>
				</div>
			</Card>
		</div>
	);

};