const Footer = ({ isDarkMode }) => {
  return (
    <>
      <div className="container ">
        <footer className={`py-3 my-4 `}>
          <ul className={`nav justify-content-center border-bottom pb-3 mb-3`}>
            <li className="nav-item">
              <a href="#" className={`nav-link px-2  ${isDarkMode ? ' text-light' : 'text-dark '}`}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className={`nav-link px-2  ${isDarkMode ? ' text-light' : 'text-dark '}`}>
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className={`nav-link px-2  ${isDarkMode ? ' text-light' : 'text-dark '}`}>
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className={`nav-link px-2  ${isDarkMode ? ' text-light' : 'text-dark '}`}>
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className={`nav-link px-2  ${isDarkMode ? ' text-light' : 'text-dark '}`}>
                About
              </a>
            </li>
          </ul>
          <p className="text-center">© 2024 Company, Inc</p>
        </footer>
      </div>
    </>
  );
};

export default Footer;

