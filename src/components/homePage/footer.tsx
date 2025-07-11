/**
 * Footer Component
 * Renders the site footer with branding and copyright.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10 md:py-16 px-6 text-center">
      <p className="text-sm md:text-[22px]">
        &copy; Ecommerce Shop 2025. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
