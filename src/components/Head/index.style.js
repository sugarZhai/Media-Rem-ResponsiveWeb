import styled from 'styled-components'
export const Container = styled.div`
font-size:0;
height:0.9067rem;
text-align:center;
background:white;
box-shadow:0 0.08rem 0.0533rem #e6e6e6;
position:relative;
.phoneIcon{
  position:absolute;
  left:0.3733rem;
  top:0.1867rem;
  font-size:0.48rem;
  color:#2d4054;
}
>svg{
  width:2.6667rem;
  height:0.4rem;
  padding-top:0.24rem;
}
.userSty{
  position:absolute;
  right:1.0667rem;
  top:0.24rem;
  >img{
    width:0.5333rem;
    height:0.5333rem;
    border-radius:2.6667rem;
  }
  >i{
    font-size:0.3467rem;
    color:#999;
    position:absolute;
    right:-0.4rem;
    top:0.1067rem;
  }
}
.signSty{
  position:absolute;
  top:0.8rem;
  right:0.0667rem;
  padding:0.1333rem 0;
  box-shadow:0.0267rem 0.0267rem 0.0267rem 0.0267rem #e6e6e6;
  background:white;
  >div{
    display:flex;
    align-items:center;
    height:0.4rem;
    padding:0 0.2133rem;
    font-size:0.2133rem;
    >i{
      font-size:0.24rem;
      padding-right:0.2667rem;
    }
  }
  .chooseSty{
    background:#efefef;
  }
}
`