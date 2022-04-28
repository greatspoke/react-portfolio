import { ReviewProps } from './Review.props';
import styles from './Review.module.css';
import UserIcon from './user.svg';
import cn from 'classnames';
import { format } from 'date-fns';
import En from 'date-fns/locale/en-US';
export const Review = ({ review, className, ...props }: ReviewProps): JSX.Element => {

	const { name, title, description, createdAt } = review;
	return (
		<div className={cn(styles.review, className)}
			{...props}
		>

			<UserIcon className={styles.user} />
			<div className={styles.title}>
				<span className={styles.name}>{name}:</span>&nbsp;&nbsp;
				<span>{title}</span>
			</div>
			<div className={styles.date}>
				{format(new Date(createdAt), 'dd MMMM yyyy', { locale: En })}
			</div>
			<div className={styles.rating}>

			</div>
			<div className={styles.description}>
				{description}
			</div>


		</div>
	);

};