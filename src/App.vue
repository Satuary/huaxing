<template>
  <div id="body">
    <nav-header></nav-header>
    <router-view/>
  </div>
</template>

<script>
  import nav from '@/components/nav'
  export default {
    components:{
      'nav-header': nav
    },
    mounted() {
      console.log("★ 華星冰室 ★\n" +
        "用心做好炒蛋、奶茶\n" +
        "冰室不賣冰，茶餐廳不供飯，是華星冰室的吸睛賣點。只提供最簡單的通粉、多士、三文治、飲品等，不會產生太多廚餘，也能更專注做好味道。")
    }
  }
</script>

<style lang="less">
@font-face {
  font-family: 'CHei3HK';
  font-display: swap;
  src: url("../static/fonts/CHei3HK.eot");
  src: url("../static/fonts/CHei3HK.woff") format('woff'),
  url("../static/fonts/CHei3HK.ttf") format('ttf'),
  url("../static/fonts/CHei3HK.svg") format('svg');
}

@font-face {
  font-family: 'PaintingWithChocolate';
  font-display: swap;
  src: url("../static/fonts/Painting_With_Chocolate.eot");
  src: url("../static/fonts/Painting_With_Chocolate.woff") format('woff'),
  url("../static/fonts/Painting_With_Chocolate.ttf") format('ttf'),
  url("../static/fonts/Painting_With_Chocolate.svg") format('svg');
}

@font-face {
  font-family: 'gilroy-bold';
  src: url("../static/fonts/gilroy-bold.eot");
  src: url("../static/fonts/gilroy-bold.woff") format('woff'),
  url("../static/fonts/gilroy-bold.ttf") format('ttf'),
  url("../static/fonts/gilroy-bold.svg") format('svg');
}

body,html{
  font-family: 'CHei3HK', '微软雅黑', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: @fontColor;
  overflow-x: hidden;
  background-color: @bodyBg;
}

a{
  display: inline-block;

  &:hover{
    text-decoration: none;
  }
}

p{
  @media (min-width: 1280px){
    margin-bottom: 0.5rem;
  }

  @media (min-width: 2000px){
    margin-bottom: 1rem;
  }

  @media (max-width: 640px){
    margin-bottom: 0.5rem;
  }
}
 /*body，html公共class*/
 .bg{
  height: 100%;
}
#body{
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  height: 100%;
}


/* - - - - - - -
      container
  - - - - - - - */
.container{
  @media screen{
    @media (min-width: 1400px){
      max-width: 1200px;
    }
    @media (min-width: 1600px){
      max-width: 1400px;
    }
    @media (min-width: 1700px){
      max-width: 1600px;
    }
    @media (min-width: 2000px){
      max-width: 2000px;
    }
  }
}


/* - - - - - - -
      title
  - - - - - - - */
.title{
  display: inline-block;

  span{
    position: relative;
    font-size: 2.2rem;
    font-weight: bold;
    z-index: 1;
    line-height: 65px;
    letter-spacing: 5px;

    @media (max-width: 768px){
      letter-spacing: 2px;
    }

    &:before, &:after{
      content: '';
      position: absolute;
      left: 0;
      width: calc(100% + 30px);
      background: @titleLine;
      z-index: -1;

      @media (max-width: 640px) {
        width: calc(100% + 10px);
      }
    }

    &:before{
      height: 4px;
      bottom: 5px;

      @media (max-width: 640px) {
        height: 3px;
        bottom: 3px;
      }
    }

    &:after{
      height: 2px;
      bottom: 1px;

      @media (max-width: 640px) {
        height: 1px;
        bottom: 0px;
      }
    }
  }
}

.title2{
  span{
    padding: 0 10px;
    &:before, &:after{
      width: 100%;
    }

    @media screen{
      @media (min-width: 2000px){
        font-size: 2.3rem;
      }
      @media (max-width: 1440px){
        font-size: 1.7rem;
      }
      @media (max-width: 768px){
        font-size: 1.9rem;
      }
      @media (max-width: 640px){
        font-size: 1.3rem;
      }
    }
  }
}

.whiteTitle{
  span{
    color: @linkColor;

    &:before, &:after{
      background: @bgBlack;
    }
  }
}

.title_en{
  font-family: "PaintingWithChocolate";
  font-size: 5rem;

  @media screen{
    @media (min-width: 2000px){
      font-size: 6rem;
    }
    @media (max-width: 1440px){
      font-size: 3.5rem;
    }
    @media (max-width: 768px){
      font-size: 4rem;
      letter-spacing: -3.5px;
    }
    @media (max-width: 640px){
      font-size: 2.8rem;
    }
  }
}


/* - - - - - - -
      lineBg
  - - - - - - -  */
.lineBg{
  position: absolute;
  width: 100%;
  height: 100%;
  display: inline-block;
  left: 0;

  svg{
    width: 100%;
    height: 100%;
    transform-origin:left top;
    transform: scale(0.7);

    @media screen{
      @media (min-width: 2000px){
        transform: scale(1);
      }
      @media (max-width: 1440px){
        transform: scale(0.5);
      }
      @media (max-width: 768px){
        transform: scale(0.4);
      }
      @media (max-width: 640px){
        transform: scale(0.25);
      }
    }
  }
}



/* - - - - - - -
      content
  - - - - - - -  */
.content{
  font-size: 24px;
  display: flex;
  flex: 1;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding:0 8%;

  .title{
    transform: translateY(-45%);

    @media (max-width: 640px){
      transform: translateY(0%);
    }
  }

  .title2{
    @media (min-width: 2000px){
      transform: translateY(-10%);
      padding-bottom: 2rem;
    }
  }

  .box{
    font-size: 1rem;
    line-height: 1.5rem;
    letter-spacing: 2px;

    @media screen{
      @media (min-width: 2000px){
        font-size: 1.5rem;
        line-height: 2rem;
      }
      @media (max-width: 1440px){
        font-size: 0.9rem;
      }
      @media (max-width: 768px){
        font-size: 1rem;
        letter-spacing: 1px;
      }
      @media (max-width: 640px){
        font-size: 0.7rem;
        line-height: 1.3rem;
      }
    }
  }

}


/* - - - - - - -
      footer
  - - - - - - - */
.footer{
  small{
    @media (max-width: 640px){
      font-size: 50%;
    }
  }
}
/*about 公共*/
#huaxingMenu,#aboutBox{
    .box{
      margin-right: 4%;
      line-height: 1.3rem;
      @media (min-width: 2000px) {
        line-height: 2.4rem;
        margin-top: 2rem;
      }
      @media (max-width: 1280px) {
        p{
          margin-bottom: 0.5rem;
        }
      }
      @media (max-width: 1280px) and (min-height: 900px){
        letter-spacing: 1.5px;
      }
      @media (max-width: 1024px)  and (min-height: 900px) {
        line-height: 1.4rem;
      }
      @media (max-width: 320px) {
        line-height: 1rem;
      }

    }
    .footerBox{
      position:absolute;
      bottom: 4%;
      left: 10%;
      @media (max-width: 768px){
        right: 6%;
        left: unset;
        bottom: 3%;
      }
    }
  }
</style>
