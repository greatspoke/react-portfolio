import { Htag, Button } from '../components';

export default function Home(): JSX.Element {

  return (
    <>
      <Htag tag='h1'>h1</Htag>
      <Button appearance='primary' arrow='right' className='dsds'>Button</Button>
      <Button appearance='ghost' arrow='down'> Button ghost</Button>
    </>
  );
}
