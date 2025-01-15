import Footer from '../footer/footer';
import HeaderKilian from '../header-kilian';
import Navbar from '../header/navbar';
import testclass from '../../styles'
import AnimatedBackground from '../motionbackround'
import RotatingImage from '../rotating';

export default function MainContainer(props: { [x: string]: any; children: any; }) {
  const { children } = props;

  return (
      <div className='../public/testclass absolute'>
        <RotatingImage />
        <main id="skip" className="absolute top-0 w-full flex flex-col bg-inherit">
          <div className='sticky top-0 w-full z-50'>
            <HeaderKilian />
          </div>
          <div>
            {children}
          </div>
        </main>

        <Footer />
      </div>
  );
}

//   <body className="bg-inherit bg-[url('../public/bg.svg')] bg-cover">