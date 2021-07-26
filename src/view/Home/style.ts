import styled from 'styled-components';
export const Container = styled.div`
  background: #b48395;
  background-size: cover;
 

  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin left: 60px;
    margin right:60px;

    .cart{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 12px;
    }
  }

  section {
    height: 100vh;
    width: 100%;
    background:#b48395;
    display: flex;
    justify-content: space-around;

    .product-content{
      display: grid;
      text-align: center;
      height: 250px;
      background:#d8bfd8;
      border-radius: 10px;
      padding: 10px;

    }


  }
`
