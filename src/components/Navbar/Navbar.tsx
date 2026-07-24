import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { NAV_LINKS, RESUME_URL, SITE_NAME } from '../../data/constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Adds the glass-panel background/border once the page has scrolled past
  // the hero, keeping the navbar transparent over the hero's own grid backdrop.
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        isScrolled ? 'border-grid bg-background/80 backdrop-blur-md' : 'border-transparent bg-transparent'
      }`}
    >
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Primary">
          <a href="#hero" className="flex items-center gap-2 font-display text-lg font-semibold text-text-primary">
            <span className="flex h-8 w-8 items-center justify-center rounded-md border border-grid bg-panel font-mono text-sm text-accent-primary">
              SC
            </span>
            {SITE_NAME}
          </a>

          <ul className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-sm text-text-secondary transition-colors hover:text-accent-primary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <Button href={RESUME_URL} variant="secondary" target="_blank" rel="noopener noreferrer">
              Resume
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-grid text-text-primary md:hidden"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-b border-grid bg-background/95 backdrop-blur-md md:hidden"
          >
            <Container>
              <ul className="flex flex-col gap-1 py-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={closeMenu}
                      className="block rounded-md px-3 py-2 font-body text-sm text-text-secondary transition-colors hover:bg-panel hover:text-accent-primary"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <Button
                    href={RESUME_URL}
                    variant="primary"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                    onClick={closeMenu}
                  >
                    Resume
                  </Button>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
