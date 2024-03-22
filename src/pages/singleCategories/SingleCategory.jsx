import { Link, useParams, useLocation } from "react-router-dom";
import Button from "../../components/button/Button";
import { useState, useEffect } from "react";
import "./style.css";
import fashionUrl from "../../assets/images/fashion-1.png";
import foodUrl from "../../assets/images/food-hero.png";
import arrow from "../../assets/svg/arrow2.svg";

const itemsPerPage = 12;

function SingleCategory({ categories }) {
  const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

  const { id } = useParams();
  const category = categories.find((category) => category.id === id);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(category.providers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProviders = category.providers.slice(startIndex, endIndex);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scrollBy({
        top: -140 * parseFloat(getComputedStyle(document.documentElement).fontSize), // Scroll up by 10 times the root font size
        behavior: 'smooth' // Optional: Add smooth scrolling
      });
      
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    window.scrollBy({
        top: -80 * parseFloat(getComputedStyle(document.documentElement).fontSize), // Scroll up by 10 times the root font size
        behavior: 'smooth' // Optional: Add smooth scrolling
      });
      
  };

  let imgUrl = "";

  // Define imgUrl based on the pathname
  const lowercasePathname = location.pathname.toLowerCase();
  if (lowercasePathname.includes("fashion")) {
    imgUrl = fashionUrl;
  } else if (lowercasePathname.includes("food")) {
    imgUrl = foodUrl;
  }

  //   toggle sort by button
  const [sortIsActive, setSortIsActive] = useState(false);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <>
      <div className="cate-hero">
        <img src={imgUrl} alt="veggie salad" />
        {/* <p>Fashion deal</p> */}
      </div>
      <div id="topp"></div>
      <h2 className="category-name">{category.id}</h2>
      <section className="each-cate">
        <div className="found">
          <p>{category.providers.length} vendors found</p>
          <span
            className="sort-by"
            onClick={() => setSortIsActive(!sortIsActive)}>
            Sort by{" "}
            <img
              src={arrow}
              alt=""
              className={` ${sortIsActive ? "open" : ""} `}
            />
          </span>
        </div>
        <ul className={` ul-sorts ${sortIsActive ? "open" : ""} `}>
          <li>Highly Rated</li>
          <li>Location</li>
          <li>Price: Lowest to highest</li>
          <li>price: Highest to lowest</li>
        </ul>
        <div className="providers">
          {currentProviders.map((provider, index) => (
            <div key={index} className="provider-card">
              <div className="img-container">
                <img src={provider.imgUrl} alt="business image" />
              </div>
              <h3>{provider.name}</h3>
              <p>{provider.intro}</p>
              <div className="detail-btn">
                <Link to="/">
                  <Button text="View Details" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="pagination">
            <span onClick={prevPage} className={`direction ${currentPage === 1 ? 'disable' : ''}`} >
              <img src={arrow} alt="previous" className="prev" />
              Prev
            </span>
          <span className="page-number">
            {currentPage} of {totalPages}
          </span>
            <span
              onClick={nextPage}
              className={`direction ${currentPage === totalPages ? 'disable' : ''}`}>
              Next
              <img src={arrow} alt="next" />
            </span>
        </div>
      </section>
    </>
  );
}

export default SingleCategory;
