import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Htag, Button, P, Tag, Rating, Input, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Home({ menu }: HomeProps): JSX.Element {

  const [rating, setRating] = useState<number>(0);

  return (
    <>
      <Htag tag='h1'>h1</Htag>
      <Button appearance='primary' arrow='right' className='dsds'>Button</Button>
      <Button appearance='ghost' arrow='down'> Button ghost</Button>
      <P size='l'>Paragraph</P>
      <Tag size='s' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag size='m' color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
      <Input placeholder='test' />
      <Textarea placeholder='test' />

    </>
  );
}

export default withLayout(Home);


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(API.topPage.find, {
    firstCategory
  });
  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}