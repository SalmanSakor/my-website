const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return <div className="footer">created by Salman Sakor, {year}.</div>;
};

export default Footer;
