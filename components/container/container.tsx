import Footer from '../footer/footer';
import HeaderKilian from '../header-kilian';
import Navbar from '../header/navbar';
import testclass from '../../styles'
import AnimatedBackground from '../Motion/motionbackround'
import RotatingImage from '../rotating';

export default function MainContainer(props: { [x: string]: any; children: any; }) {
  const { children } = props;

  return (
      <div className='../public/testclass relativ'>
        <RotatingImage />
        <main id="skip" className="absolute top-0 w-full bg-inherit">
        <div className="fixed top-0 left-0 w-full z-50 bg-inherit">
  <HeaderKilian />
</div>
          <div className='z-50'>
            {children}
          </div>
        </main>

        <Footer />
      </div>
  );
}

//   <body className="bg-inherit bg-[url('../public/bg.svg')] bg-cover">