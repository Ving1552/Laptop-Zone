import React from 'react';
import axios from 'axios';

function Cart() {

  const getTestData = async()=> {
    //get the token from the localstorage
    let token = localStorage.getItem("token");
    //add the token to the header of the request
    let response = await axios.get('/user/test', {
      headers: { Authorization: "Bearer " + token}
    });
    console.log(response);
    let message = response.data.message;
    alert(message);
  }

  return (
    <div>
      {/* make req to private route test */}
      <button className='btn btn-primary d-block mx-auto mt-5' onClick={getTestData}>
        Get Test Data
      </button>
    </div>
  )
}

export default Cart;