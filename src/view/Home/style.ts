import styled from 'styled-components';
export const Container = styled.div`
  width: 80%;
  margin: auto;

  .nav{
    display: flex;
    align-items: center;
    justify-content: space-between;

    .cart{
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  section {
    height: 100;
    width: 100%;
    background: #e2e2;
    display: flex;
    justify-content: space-around;

    .product-content{
      display: grid;
      text-align: center;
      height: 300px;
      background:#1E90FF;
      border-radius: 12px;
      padding: 12px;

      .body {
        width: 100%;
        height: 400px;
       background-color:#1E90FF;
      }
    }


  }
`
