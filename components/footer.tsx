import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="min-h-52 bg-accent text-accent-foreground border-t">
      <div className="container py-8 md:py-16 flex justify-between flex-col lg:flex-row gap-8">
        <div className="space-x-4">
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

        <div className="flex items-center gap-4">
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
      <p className="max-w-xs mx-auto flex gap-2 justify-center items-center text-muted-foreground">
        &copy; {new Date().getFullYear()} built by
        <Link
          className="hover:text-foreground"
          target="_blank"
          href="https://www.linkedin.com/in/davut-simsek/"
        >
          Davut Simsek
        </Link>
      </p>
    </footer>
  );
}
