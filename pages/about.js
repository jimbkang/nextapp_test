import Link from 'next/link';
import { isAbsolute } from 'path';

function About() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>About Us</li>
      </ul>

      <h1>About</h1>
    </>
  );
}

export default About;
