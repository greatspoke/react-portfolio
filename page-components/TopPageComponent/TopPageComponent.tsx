import { Htag, Tag, P, HhData, Sort, Product } from '../../components';
import { TopPageCompponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfaces/page.interface';
import { Advantages } from '../../components/Advantages/Advantages';
import { SortEnum } from '../../components/Sort/Sort.props';
import { useEffect, useReducer } from 'react';
import { sortReducer } from './sort.reducer';


export const TopPageComponent = ({ page, products, firstCategory }: TopPageCompponentProps): JSX.Element => {

	const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });

	const setSort = (sort: SortEnum) => {
		dispathSort({ type: sort });
	};

	useEffect(() => {
		dispathSort({ type: 'reset', initialState: products })
	}, [products]);

	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='grey' size='m'>{products.length}</Tag>}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div>
				{sortedProducts && products.map(p => (<Product key={p._id} product={p} />))}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Vacancies - {page.category}</Htag>
				<Tag color='red' size='m'>valter.dev</Tag>
			</div>
			{firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}

			{page.advantages && page.advantages.length > 0 && <>
				<Htag tag='h2'>Advantages</Htag>
				<Advantages advantages={page.advantages}></Advantages>
			</>
			}
			{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
			<Htag tag='h2'>Skills</Htag>
			{page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}

		</div>


	)

}