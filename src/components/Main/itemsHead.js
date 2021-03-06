import React from 'react';


const Head = (props) => {
  return(
    <div className="products_count_container">
    <div className="products_count">16 product(s) found</div>
    <div>
      <span className="order_by">Order by</span>
      <select className="select_by_category" onChange={props.changeState}>
      <option selected disabled > Select </option>
        <option value="lowToHight" >Lowest to highest</option>
        <option value="highToLow">Highest to Lowest</option>
      </select>
    </div>
  </div>
  )
}

export default Head;