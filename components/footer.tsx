import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="min-h-52 py-12 bg-accent text-accent-foreground border-t space-y-12">
      <div className="container py-8  flex flex-col justify-between lg:flex-row items-center lg:items-start gap-8">
        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 ">
          <Link className="text-muted-foreground hover:text-foreground" href="">
            company
          </Link>
          <Link className="text-muted-foreground hover:text-foreground" href="">
            contact us
          </Link>
          <Link className="text-muted-foreground hover:text-foreground" href="">
            careers
          </Link>
          <Link className="text-muted-foreground hover:text-foreground" href="">
            privacy policy
          </Link>
          <Link className="text-muted-foreground hover:text-foreground" href="">
            terms
          </Link>
        </div>

        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 ">
          <p className="text-muted-foreground">
            Follow us on social media &rarr;
          </p>
          <div className="flex items-center gap-4">
            <Link
              className="text-muted-foreground hover:text-foreground"
              href=""
            >
              <Instagram />
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href=""
            >
              <Facebook />
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href=""
            >
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>

      <p className="max-w-xs mx-auto flex gap-2 justify-center items-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} built by
        <Link
          className="hover:text-foreground"
          target="_blank"
          href="https://portfolio-davut-simsek.vercel.app/"
        >
          Davut Simsek
        </Link>
      </p>
    </footer>
  );
}
