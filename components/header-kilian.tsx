import Link from 'next/link';

export default function HeaderKilian() {
  return (
    <header className="w-full h-[80px] flex items-center justify-center bg-gray-100 shadow-md fixed top-0 z-50">
      <img
        src="/Logo_web_11.svg" // Pfad zu SVG, ohne './public'
        alt="Logo"
        className="h-[50px] w-auto"
      />
    </header>
  );
}



