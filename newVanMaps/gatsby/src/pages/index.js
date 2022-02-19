import React from 'react';
import { Link } from 'gatsby';
import SEO from '../components/SEO';

export default function HomePage() {
  return (
    <>
      <SEO title=" " />
      <div className="center">
        {/* <h3>Where do you need to go?</h3>
        <h3>Search Bar ____This still doesn't work...</h3> */}
        <div className="mark">
          <Link to="/locations">
            Here is the list of all the locations available
          </Link>
        </div>
      </div>
    </>
  );
}
