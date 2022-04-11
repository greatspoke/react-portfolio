import styles from './Menu.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/servises.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/products.svg';
import { TopLevelCategory } from '../../interfaces/page.interface';


const firstLevelMenu: FirstLevelMenuItem[] = [
	{ route: 'courses', name: 'Courses', icon: <CoursesIcon />, id: TopLevelCategory.Courses },
	{ route: 'services', name: 'Services', icon: <ServicesIcon />, id: TopLevelCategory.Services },
	{ route: 'books', name: 'Books', icon: <BooksIcon />, id: TopLevelCategory.Books },
	{ route: 'products', name: 'Products', icon: <ProductsIcon />, id: TopLevelCategory.Products }
]
export const Menu = (): JSX.Element => {
	const { menu, setMenu, firstCategory } = useContext(AppContext)

	const buildFirstlevel = () => {
		return (
			<>
				{firstLevelMenu.map(m => (
					<div key={m.route}>
						<a href={`/${m.route}`}>
							<div className={cn(styles.firstLevel, {
								[styles.firstLevelActive]: m.id == firstCategory
							})}>
								{m.icon}
								<span >{m.name}</span>
							</div>
						</a>
						{m.id == firstCategory && buildSecondlevel(m)}
					</div>
				))}
			</>
		);
	};

	const buildSecondlevel = (menuItem: FirstLevelMenuItem) => {
		return (
			<div className={styles.secondBlock}>
				{menu.map(m => (
					<div key={m._id.secondCategory}>
						<div className={styles.secondLevel}>{m._id.secondCategory}</div>
						<div className={cn(styles.secondLevelBlock, {
							[styles.secondLevelBlockOpened]: m.isOpened
						})}>
							{buildThirdlevel(m.pages, menuItem.route)}
						</div>
					</div>
				))}
			</div>
		);
	};

	const buildThirdlevel = (pages: PageItem[], route: string) => {
		return (
			pages.map(p => (
				<a href={`/${route}/${p.alias}`} className={cn(styles.thirdLevel, {
					[styles.thirdLevelActive]: false
				})}>
					{p.category}
				</a>
			))
		);
	}
	return (
		<div className={styles.menu}>
			{buildFirstlevel()}
		</div>
	)

}