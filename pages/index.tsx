import { useState } from 'react';
import { Htag, Button, P, Tag, Rating } from '../components';
import { Layout } from "../layout/Layout"; 
export default function Home(): JSX.Element {

  const [rating, setRating] = useState<number>(0);

  return (
    <Layout>
      <Htag tag='h1'>h1</Htag>
      <Button appearance='primary' arrow='right' className='dsds'>Button</Button>
      <Button appearance='ghost' arrow='down'> Button ghost</Button>
      <P size='l'>Paragraph</P>
      <Tag size='s' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag size='m' color='primary'>Primary</Tag>
      <Rating rating={rating} isEditable setRating={setRating}></Rating>
    </Layout>
  );
}
