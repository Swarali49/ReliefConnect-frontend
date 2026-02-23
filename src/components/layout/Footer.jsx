function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <span>© {new Date().getFullYear()} ReliefConnect</span>
        <span> | Built as FSAD Project</span>
      </div>
      <div className="footer__right">
        <span>Contact: </span>
        <a href="mailto:reliefconnect.support@gmail.com">
          reliefconnect.support@gmail.com
        </a>
        <span className="footer__divider">|</span>
        <span>Feedback: We value your suggestions.</span>
      </div>
    </footer>
  );
}

export default Footer;
