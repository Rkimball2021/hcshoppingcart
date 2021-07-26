import styled from 'styled-components';
export const Container = styled.div`
  width:100%
  height:auto;
  background-size: cover;
  background-color:#feb300;
 

  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin left: 60px;
    margin right: 60px;

    .cart{
      display: flex;
      justify-content: center;
      align-items: center;
      margin right: 0px
      right: 0px
      background:#ffaaab; 
    }
  }

  section {
    height: 100vh;
    width: 100%;
    background:#ffaaab;
    display: flex;
    justify-content: space-around;

    .product-content{
      display: grid;
      text-align: center;
      height: 300px;
      background:#ff5e6c;
      border-radius: 12px;
      padding:12px;
      padding: 11px;

    }


  }
`
