import styled from 'styled-components'
export const  TabContainer = styled.div`
margin:0.2667rem 0.2667rem 0.2667rem 0;
font-size:0;
.tabSty{
  display:flex;
  justify-content:flex-start;
  align-items:center;
  background:white;
  height:0.6667rem;
  .tabFlex{
     width:1.0667rem;
     text-align:center;
     height:0.6667rem;
     font-size:0.2133rem;
     line-height:0.6667rem;
     color:#2d4054;
     border-right:0.0133rem solid #f3f3f3;
  }
  .activeTab{
    color:#00b4cf;
    border-bottom:0.0267rem solid #00b4cf;
  }
 
  .inputSty{
    margin-left:0.5333rem;
    flex:1;
    display:flex;
    justify-content:space-between;
    position:relative;
    >i{
      font-size:0.2133rem;
      color:#999;
      position:absolute;
      left:0.1067rem;
      top:0.08rem;
    }
    >input{
      height:0.32rem;
      background:#f3f3f3;
      border:0.0133rem solid #e1e4e6;
      padding-left:0.32rem;
    }
    .inputIcon{
      text-align:right;
      >i{
        font-size:0.2667rem;
        padding-right:0.2667rem;
        color:#2d4054;
      }
      .colorI{
        color:#00b4cf;
      }
    }
  }
}
@media screen and (max-width:768px){
    .tabSty{
        display:flex;
        justify-content:space-around;
        align-items:center;
        height:0.6667rem;
        background:white;
        .tabFlex{
          flex:0 0 33%;
          width:33%;
          text-align:center;
          height:0.6667rem;
          font-size:0.2133rem;
          line-height:0.6667rem;
          color:#2d4054;
          border-right:0.0133rem solid #f3f3f3;
        }
        .activeTab{
          color:#00b4cf;
          border-bottom:0.0267rem solid #00b4cf;
        }
    }
    .inputSty{
        background:white;
        display:flex;
        justify-content:space-between;
        position:relative;
        margin-bottom:0.2667rem;
        padding:0.16rem 0.2667rem;
        >i{
          font-size:0.4rem;
          color:#999;
          position:absolute;
          left:0.4rem;
          top:0.2133rem;
        }
        >input{
          width:100%;
          height:0.48rem;
          background:#f3f3f3;
          border:0.0133rem solid #e1e4e6;
          padding-left:0.48rem;
        }
    }
  }
`