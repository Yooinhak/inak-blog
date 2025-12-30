const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center border-t border-white/30 bg-base-100/60 text-base-content backdrop-blur-xl dark:border-white/10 dark:bg-base-100/10 p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by <span className="font-bold">Inhak Yoo</span>
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
