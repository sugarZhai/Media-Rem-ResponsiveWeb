import styled from 'styled-components'
export const ListContainer = styled.div`
margin:0 0.2667rem 0.2667rem 0;
font-size:0;
.listSty{
  height:1.3333rem;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  padding:0 0.1333rem;
  margin-bottom:0.2667rem;
  background:white;
  >img{
    width:1.0667rem;
    height:1.0667rem;
    padding-right:0.2133rem;
  }
  .listFlex{
    flex:1;
    font-size:0.1867rem;
    color:#2d4054;
    .building{
        background:#ff9a2a;
    }
    .up{
      padding-bottom:0.3467rem;
      display:flex;
      align-items:center;
       >b{
         color:#00b4cf;
       }
       >i{
         font-size:0.2133rem;
         color:#999;
         padding-right:0.1067rem;
       }
       >p{
         color:white;
         font-size:0.1333rem;
         padding:0 0.08rem;
         margin:0 0.2933rem 0 0.1867rem;
       }
       .left{
         padding-left:0.2933rem;
       }
    }
    .down{
      display:flex;
      justify-content:space-between;
      align-items:center;
      position:relative;
      .triangle{
          position:absolute;
          left:0;
          top:0.32rem;
          width:0;
          height:0;
          z-index:10;
          border-left: 0.1067rem solid transparent;
          border-right: 0.1067rem solid transparent;
          border-bottom: 0.2133rem solid #00b4cf;
          &::after{
            content: '';
            position: absolute;
            top: 0.0133rem;
            left: -0.0933rem;
            border-left:0.0933rem solid transparent;
            border-right:0.0933rem solid transparent;
            border-bottom: 0.2133rem solid white;
          }
        }
      .addModal{
        display:inline-block;
        position:absolute;
        left:-0.2133rem;
        top:0.5067rem;
        background:white;
        color:yellow;
        border:0.0133rem solid #00b4cf;
        box-shadow:0 0.0533rem 0.08rem rgba(0,0,0,0.3);
        padding:0.2133rem 0.1333rem 0.16rem 0.1333rem;
        font-size:0.1867rem;
        z-index:2;
        >i{
          font-size:0.24rem;
          color:#00b4cf;
          position:absolute;
          right:0.1333rem;
          top:0.08rem;
        }
        >p{
          font-size:0.16rem;
          color:#2d4054;
          padding-bottom:0.1333rem;
          background:none;
        }
        >input{
          min-width:5.3333rem;
          border:0.0133rem solid #979797;
          border-radius:0.0533rem;
          padding:0.08rem 0 0.08rem 0.1333rem;
          color:#00b4cf;
          margin-bottom:0.2667rem;
        }
        .addBtn{
          color:white;
          font-size:0;
          padding-bottom:0.1067rem;
          >span{
            background:#00b4cf;
            padding:0.0533rem 0.1333rem;
            font-size:0.08rem;
          }
          .cancel{
            background:#2d4054;
            margin-left:0.2667rem;
          }
        }
      }
      .right{
          background:#00b4cf;
          font-size:0.1067rem;
          padding:0.0267rem 0.1333rem;
          >i{
            padding-right:0.08rem;
            font-size:0.1067rem;
          }
          color:white;
        }
      >div{
        display:flex;
        align-items:center;
        .add{
          background:#00b4cf;
          padding:0.0533rem 0.0533rem;
          margin-right:0.1067rem;
          font-size:0.2133rem;
          color:white;
        }
        >p{
          background:#efefef;
          margin-right:0.1067rem;
          font-size:0.1067rem;
          padding:0.0267rem 0.08rem;
          display:flex;
          align-items:center;
          >i{
            font-size:0.1067rem;
            padding-left:0.08rem;
            color:#000;
          }
        }
      }
    }
  }
}
@media screen and (max-width:768px){
  .listSty{
    align-items:center;
    padding:0.6667rem 0.1333rem;
    margin-bottom:0.2667rem;
    background:white;
    .listFlex{
      .up{
        padding-bottom:0.1333rem;
      }
      .down{
        >div{
          flex-wrap:wrap;
        }
        .phoneAdd{
           position:fixed;
           width:100%;
           left:0;
           bottom:0;
           min-height:100vh;
           background:rgba(0,0,0,0.6);
           z-index:3;
           .phoneModal{
              position:fixed;
              left:0;
              bottom:0;
              background:white;
              font-size:0;
              z-index:2;
              width:98%;
              text-align:center;
              padding:0.5333rem 0.1333rem 0.32rem 0.1333rem;
            >i{
              font-size:0.24rem;
              color:#00b4cf;
              position:absolute;
              right:0.1333rem;
              top:0.08rem;
            }
            >p{
              font-size:0.16rem;
              color:#2d4054;
              padding-bottom:0.4rem;
              background:none;
            }
            >input{
              border:0.0267rem solid  #979797;
              border-radius:0.0533rem;
              padding:0.08rem 0 0.08rem 0.1333rem;
              color:#00b4cf;
              margin-bottom:0.2667rem;
              min-width:70%;
            }
            .addBtn{
              color:white;
              font-size:0;
              padding-bottom:0.1067rem;
              margin:0 auto;
              display:flex;
              justify-content:space-around;
              >p{
                background:#00b4cf;
                padding:0.0533rem 0.16rem;
                font-size:0.08rem;
                margin:0.2667rem 0;
                text-align:center;
              }
              .cancel{
                background:#2d4054;
                margin-left:0.2667rem;
              }
            }
          }
        }
      }
    }
  }
}
`