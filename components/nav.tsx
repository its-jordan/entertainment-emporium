import Link from 'next/link';

export const Nav = () => {
  let Array: string[][] = [
    ['Home', '/'],
    ['Online Calculator', '/calculator'],
    ['Buy The Game!', '/purchase'],
    ['Contact Us', '/contact'],
  ];
  return (
    <nav className="top-nav justify-center items-center h-16">
      {Array.map(([title, url]) => (
        <Link key={title} href={url} className="nav-link">
          {title}
        </Link>
      ))}
    </nav>
  );
};
