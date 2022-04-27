import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState, KeyboardEvent, forwardRef, ForwardedRef } from 'react';
import StarIcon from './star.svg';

export const Rating = forwardRef(({ rating, isEditable = false, error, setRating, className, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {

	const [arrayRating, setArrayRating] = useState<JSX.Element[]>(Array(5).fill(<></>))

	useEffect(() => {
		constructorRating(rating);
	}, [rating])
	const constructorRating = (currentRating: number) => {
		const updatedRating = arrayRating.map((r: JSX.Element, i: number) => {
			return (
				<span
					className={cn(styles.star, {
						[styles.filled]: i < currentRating,
						[styles.editable]: isEditable
					})}
					onMouseEnter={() => changeDisplay(i + 1)}
					onMouseLeave={() => changeDisplay(rating)}
					onClick={() => onClick(i + 1)}
				>
					<StarIcon
						tabIndex={isEditable ? 0 : -	1}
						onKeyDown={(e: KeyboardEvent<SVGElement>) => isEditable && handleSpace(i + 1, e)}
					/>
				</span>
			);
		});
		setArrayRating(updatedRating)
	}

	const changeDisplay = (i: number) => {
		if (!isEditable) {
			return
		}
		constructorRating(i);
	}
	const onClick = (i: number) => {
		if (!isEditable || !setRating) {
			return
		}
		setRating(i)
	}
	const handleSpace = (i: number, event: KeyboardEvent<SVGElement>) => {
		if (event.code != 'Space' || !setRating) {
			return;
		}
		setRating(i)
	}
	return (
		<div {...props} ref={ref} className={cn(styles.ratingWrapper, {
			[styles.error]: error
		})}>
			{
				arrayRating.map((r, i) => (<span key={i}>{r}</span>))}
			{error && <span className={styles.errorMessage}>{error.message}</span>}


		</div>
	)

});