import styled from 'styled-components'
export const MaskContainer = styled.div`
.maskSty{
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size:0;
  /* .setRate{
     animation:myFirst 2s;
	   -webkit-animation:myFirst 2s linear infinite;
  } */
  .maskFlex{
    width:30%;
    flex:0 0 30%;
    background:#ff9A2A;
    margin-right:3%;
    text-align:center;
    color:white;
    position:relative;
    >b{
      font-size:0.24rem;
      position:absolute;
      top:0.2133rem;
      left:0.16rem;
    }
    >p{
      position:absolute;
      bottom:0.0267rem;
      right:0.2133rem;
      font-size:0.64rem;
    }
    .iconBox{
        width:1.6rem;
        height:1.4667rem;
        margin:0 auto;
        padding-bottom:0.16rem;
      
      >i{
         width:1.4667rem;
         height:1.4667rem;
         display:inline-block;
         font-size:1.6rem;
         opacity:0.2;
         &::before{
          display:inline-block;
          width:1.4667rem;
          height:1.4667rem;
         }
      }
    }
    @keyframes myFirst
    {
      from {
         transform:rotate(0deg);
        -ms-transform:rotate(0deg);
        -webkit-transform:rotate(0deg);
      }
      to {
        transform:rotate(180deg);
        -ms-transform:rotate(180deg);
        -webkit-transform:rotate(180deg);
      }
    }

    @-webkit-keyframes myFirst 
    {
      from {
         transform:rotate(0deg);
        -ms-transform:rotate(0deg);
        -webkit-transform:rotate(0deg);
      }
      to {
        transform:rotate(180deg);
        -ms-transform:rotate(180deg);
        -webkit-transform:rotate(180deg);
      }
    }
  }
}
@media screen and (max-width:768px){
  .maskSty{
    display:flex;
    justify-content:space-around;
    align-items:center;
    font-size:0;
    .maskFlex{
      flex:0 0 47%;
      background:#ff9A2A;
      text-align:center;
      color:white;
      position:relative;
    }
}
.countFlex{
    margin-top:0.2667rem;
    background:white;
    text-align:center;
    color:#2d4054;
    height:1.6rem;
    margin-right:2%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    >div{
      flex:0 0 30%;
      text-align:center;
      >p{
        font-size:0.16rem;
        padding-bottom:0.4rem;
      }
      >b{
        font-size:0.2667rem;
      }
    }
  }
}
@media screen and (min-width:768px) and (max-width:1024px){
  .countFlex{
    width:30%;
    flex:0 0 30%;
    background:white;
    text-align:center;
    color:#2d4054;
    height:1.6rem;
    margin-right:2%;
    >div{
      display:flex;
      justify-content:space-between;
      align-items:center;
      padding:0.0533rem 0.16rem;
      >p{
        font-size:0.16rem;
      }
      >b{
        font-size:0.2667rem;
      }
    }
  }
}
@media screen and (min-width:1024px){
  .countFlex{
    width:30%;
    flex:0 0 30%;
    background:white;
    text-align:center;
    color:#2d4054;
    height:1.6rem;
    margin-right:2%;
    display:flex;
    justify-content:space-around;
    align-items:center;
    >div{
      flex:0 0 30%;
      text-align:center;
      >p{
        font-size:0.16rem;
        padding-bottom:0.4rem;
      }
      >b{
        font-size:0.2667rem;
      }
    }
  }
}
`