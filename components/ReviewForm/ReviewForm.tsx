import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import CloseIcon from './close.svg';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import { useForm, Controller } from 'react-hook-form';
import { IReviewForm, IReviewResponse } from './ReviewForm.interface';
import axios from 'axios';
import { API } from '../../helpers/api';
import { useState } from 'react';


export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {

	const { register, control, handleSubmit, formState: { errors }, reset } = useForm<IReviewForm>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string>();
	const onSubmit = async (formData: IReviewForm) => {
		try {
			const { data } = await axios.post<IReviewResponse>(API.review.createDemo, { ...formData, productId });
			if (data.message) {
				setIsSuccess(true);
				reset();
			} else {
				setError('Problem with data requred...')
			}
		} catch (e) {
			setError('Problem with data requred...')
		}

	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)}
				{...props}>
				<Input
					{...register('name', { required: { value: true, message: 'Name is required' } })}
					placeholder='Name'
					error={errors.name}
				/>

				<Input
					{...register('title', { required: { value: true, message: 'Title is required' } })}
					className={styles.title}
					placeholder='Review title'
					error={errors.title}
				/>
				<div className={styles.rating}>
					<span>Review</span>
					<Controller
						control={control}
						name='rating'
						rules={{ required: { value: true, message: 'Rating is required' } }}
						render={({ field }) => (
							<Rating
								isEditable
								rating={field.value}
								ref={field.ref}
								setRating={field.onChange}
								error={errors.rating}
							/>
						)}
					/>


				</div>
				<Textarea
					{...register('description', { required: { value: true, message: 'Description is required' } })}
					placeholder='Review text'
					className={styles.description}
					error={errors.description}
				/>
				<div className={styles.submit}>
					<Button appearance='primary'>
						Send
					</Button>
					<span className={styles.info}> * Please read carefully before sending...</span>

				</div>
			</div>
			{isSuccess && <div className={cn(styles.success, styles.panel)}>
				<div className={styles.successTitle}>Your review was sent</div>
				<div>
					Thank you! Your review will be live soon...
				</div>
				<CloseIcon className={styles.close} onClick={() => setIsSuccess(false)} />
			</div>}
			{error && <div className={cn(styles.error, styles.panel)}>
				{error}
				<CloseIcon className={styles.close} onClick={() => setError(undefined)} />
			</div>}
		</form>
	);
};