import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container p-5">
      <ol class="list-group">
        <li class="list-group-item">Click the title to navigate to the page</li>

        <li class="list-group-item list-group-item-primary">
          <Link to="/fibonacci">Fibonacci</Link>
        </li>
        <li class="list-group-item list-group-item-warning">
          <Link to="/strings">Strings</Link>
        </li>
        <li class="list-group-item list-group-item-success">
          <Link to="/prime-numbers">Prime Numbers</Link>
        </li>
        <li class="list-group-item list-group-item-success">
          <Link to="/multiplication-table">Multiplication table</Link>
        </li>
        <li class="list-group-item list-group-item-success">
          <Link to="/sum-of-natural">Sum of Natural Number</Link>
        </li>
        <li class="list-group-item list-group-item-success">
          <Link to="/get-largest-number">Get the Largest Number</Link>
        </li>
        <li class="list-group-item list-group-item-success">
          <Link to="/check-within">Check Within 100 to 500</Link>
        </li> 
        <li class="list-group-item list-group-item-success">
          <Link to="/number-right-triangle">Number Right Triangle</Link>
        </li>
        <li class="list-group-item list-group-item-success">
          <Link to="/number-triangle">Number Triangle</Link>
        </li> 
        <li class="list-group-item list-group-item-success">
          <Link to="/right-triangle">Right Triangle</Link>
        </li> 
        <li class="list-group-item list-group-item-success">
          <Link to="/triangle">Triangle</Link>
        </li>  
        <li class="list-group-item list-group-item-success">
          <Link to="/total-digits">Total Digits</Link>
        </li> 
        <li class="list-group-item list-group-item-success">
          <Link to="/vowels">Vowels</Link>
        </li>      
      </ol>
    </div>
  );
}

export default Home;