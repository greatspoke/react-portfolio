import { Htag, Tag, Card, HhData } from '../../components';
import { TopPageCompponentProps } from './TopPageComponent.props';
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from '../../interfaces/page.interface';


export const TopPageComponent = ({ page, products, firstCategory }: TopPageCompponentProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='grey' size='m'>{products.length}</Tag>}
				<span>Sorting</span>
			</div>
			<div>
				{products && products.map(p => (<div key={p._id}>{p.title}</div>))}
			</div>
			<div className={styles.hhTitle}>
				<Htag tag='h2'>Vacancies {page.category}</Htag>
				<Tag color='red' size='m'>valter.dev</Tag>
			</div>
			{firstCategory == TopLevelCategory.Courses && <HhData {...page.hh} />}
		</div>
	)

}