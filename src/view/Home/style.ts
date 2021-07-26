import styled from 'styled-components';
export const Container = styled.div`
  background: #7b68ee;
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
    height: 100 vh;
    width: 100%;
    background:#5252d4;
    display: flex;
    justify-content: space-around;

    .product-content{
      display: grid;
      text-align: center;
      height: 250px;
      background:#dcd0ff;
      border-radius: 10px;
      padding: 10px;

    }


  }
`
