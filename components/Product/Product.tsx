import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';
import { Button } from '../Button/Button';
import { declofNum, priceUsd } from '../../helpers/helpers';
import { Divider } from '../Divider/Divider';
import Image from 'next/image'
import SkillBoxIcon from './skillbox.png';
import { useRef, useState } from 'react';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {

	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
	const reviewRef = useRef<HTMLDivElement>(null);

	const scrollToReview = () => {
		setIsReviewOpened(true);
		reviewRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	}

	return (
		<div className={className} {...props}>
			<Card color="white" className={styles.product}>
				<div className={styles.logo}>
					<Image
						src={SkillBoxIcon}
						alt={product.title}
						width={70}
						height={70}
					></Image>
				</div>
				<div className={styles.title}> {product.title}</div>
				<div className={styles.price}>
					{priceUsd(product.price)}
					{product.oldPrice && <Tag className={styles.oldPrice} color='green'>{priceUsd(product.price - product.oldPrice)}</Tag>}
				</div>
				<div className={styles.credit}> {priceUsd(product.credit)}/<span className={styles.month}>mon.</span></div>
				<div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating}></Rating></div>
				<div className={styles.tags}>{product.categories.map(c => <Tag key={c} className={styles.category} color='ghost'>{c}</Tag>)}</div>
				<div className={styles.priceTitle}>price</div>
				<div className={styles.creditTitle}>credit</div>
				<div className={styles.rateTitle}><a href="#ref" onClick={scrollToReview}>{product.reviewCount} {declofNum(product.reviewCount, ['review', 'reviews'])}</a></div>
				<Divider className={styles.hr}></Divider>
				<div className={styles.description}>{product.description}</div>
				<div className={styles.feature}>
					{product.characteristics.map(c => (
						<div className={styles.characteristics} key={c.name}>
							<span className={styles.characteristicsName}>{c.name}</span>
							<span className={styles.characteristicsDots}></span>
							<span className={styles.characteristicsValue}>{c.value}</span>

						</div>
					))}
				</div>
				<div className={styles.advBlock}>
					{product.advantages && <div className={styles.advantages}>
						<div className={styles.advTitle}>Advantages</div>
						<div>{product.advantages}</div>
					</div>}
					{product.disadvantages && <div className={styles.disadvantages}>
						<div className={styles.advTitle}>Disadvantages</div>
						<div>{product.disadvantages}</div>
					</div>}
				</div>
				<Divider className={cn(styles.hr, styles.hr2)}></Divider>
				<div className={styles.actions}>
					<Button appearance='primary'> Read more</Button>
					<Button
						appearance='ghost'
						arrow={isReviewOpened ? 'down' : 'right'}
						className={styles.reviewButton}
						onClick={() => setIsReviewOpened(!isReviewOpened)}
					> Read reviews</Button>
				</div>
			</Card>
			{isReviewOpened && <Card color='blue' className={cn(styles.reviews, {
				[styles.opened]: isReviewOpened,
				[styles.closed]: !isReviewOpened,
			})} ref={reviewRef}>
				{product.reviews.map(r => (
					<div key={r._id}>
						<Review review={r} />
						<Divider />
					</div>
				))}
				<ReviewForm productId={product._id} />
			</Card>}
		</div>
	)

}