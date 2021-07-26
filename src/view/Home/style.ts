import styled from 'styled-components';
export const Container = styled.div`
  background:#7b68ee;
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
    background:#7b68ee;
    display: flex;
    justify-content: space-around;

    .product-content{
      display: grid;
      text-align: center right;
      height: 250 px;
      background:#dcd0ff;
      border-radius: 12px;
      padding: 12px;

    }


  }
`
