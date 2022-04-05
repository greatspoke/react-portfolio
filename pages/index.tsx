import { Htag, Button, P, Tag } from '../components';

export default function Home(): JSX.Element {

  return (
    <>
      <Htag tag='h1'>h1</Htag>
      <Button appearance='primary' arrow='right' className='dsds'>Button</Button>
      <Button appearance='ghost' arrow='down'> Button ghost</Button>
      <P size='l'>Paragraph</P>
      <Tag size='s' color='red'>Red</Tag>
      <Tag size='s' color='green'>Green</Tag>
      <Tag size='m' color='primary'>Primary</Tag>
    </>
  );
}
