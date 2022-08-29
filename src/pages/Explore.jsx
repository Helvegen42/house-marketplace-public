import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import Slider from "../components/Slider";
import fehu from "../assets/png/fehu2.png";

function Explore() {
  return (
    <>
      <div className="logoHeader">
        <p className="logoHeaderText">
          HELVEGEN
          <img className="logoHeaderImg" src={fehu} alt="logo" />
        </p>
      </div>
      <div className="explore">
        <header>
          <p className="pageHeader">Explore</p>
        </header>
        <main>
          <Slider />
          <p className="exploreCategoryHeading">Categories</p>
          <div className="exploreCategories">
            <Link to="/category/rent" className="exploreCategoriesLinks">
              <img
                src={rentCategoryImage}
                alt="rent"
                className="exploreCategoryImg"
              />
              <p className="exploreCategoryName">Places for rent</p>
            </Link>
            <Link to="/category/sale" className="exploreCategoriesLinks">
              <img
                src={sellCategoryImage}
                alt="sell"
                className="exploreCategoryImg"
              />
              <p className="exploreCategoryName">Places for sale</p>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}

export default Explore;
