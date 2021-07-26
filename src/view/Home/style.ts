import styled from 'styled-components';
export const Container = styled.div`
  width:100%
  height:auto;
  background-size: cover;
  background-color:#dcd0ff;
 

  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin left: 80px;
    margin right:80px;

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
    background:#dcd0ff;
    display: flex;
    justify-content: space-around;

    .product-content{
      display: grid;
      text-align: center;
      height: 300 px;
      background:#7b68ee;
      border-radius: 11px;
      padding: 11px;

    }


  }
`
