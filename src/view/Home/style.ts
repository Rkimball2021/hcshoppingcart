import styled from 'styled-components';
export const Container = styled.div`
  width: 100vh;
  margin: auto;
  background: #7b68ee;
 

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
    }
  }

  section {
    height: 100;
    width: 100%;
    background:#5252d4;
    display: flex;
    justify-content: space-around;

    .product-content{
      display: grid;
      text-align: center;
      height: 300px;
      background:#dcd0ff;
      border-radius: 12px;
      padding: 12px;

    }


  }
`
