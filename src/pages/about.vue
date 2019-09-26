<template>
  <div id="aboutBox">
    <!-- 文字 -->
    <div class="col-lg-7 col-xl-6 offset-lg-1">
      <div class="content">
        <div class="title_en">Chrisly Cafe</div>
        <div class="fontContent">
          <div class="title title2"><span>關於華星</span></div>
          <div class="box">
            <p>「華星」華語樂壇璀璨的閃星星，星光背後，流著你與我熱愛這邊土地的熱血；</p>
            <p>「冰室」香港地道文化，當中保留的不止是一份情懷，更是一種態度；</p>
            <p>「客棧」猶如溫暖的家，為路途上的您，送上一份真摯的情。</p>
            <p>我們用心，將熱情散佈到每一角落，與您在這少少的聚首地方分享愛。</p>
          </div>
        </div>
      </div>
    </div>
    <!--右边过往奖励-->
    <div class="about_right"></div>
    <!--  图片  -->
    <div class="swiper-box col-lg-11">
      <div class="swiper-container swiper-no-swiping">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper_item"><img src="../../src/assets/images/pic_1.png" alt=""></div>
          <div class="swiper-slide swiper_item1"><img src="../../src/assets/images/pic_2.png" alt=""></div>
          <div class="swiper-slide swiper_item2"><img src="../../src/assets/images/pic_4.png" alt=""></div>
          <div class="swiper-slide swiper_item1"><img src="../../src/assets/images/pic_3.png" alt=""></div>
          <div class="swiper-slide swiper_item2"><img src="../../src/assets/images/pic_5.png" alt=""></div>
          <div class="swiper-slide swiper_item"><img src="../../src/assets/images/pic_6.png" alt=""></div>
        </div>
      </div>
    </div>

    <div class="lineBg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="49.248cm" height="1.588cm">
        <path fill-rule="evenodd"  fill="rgb(18, 18, 18)"
              d="M1354.198,-0.000 L1396.000,-0.000 L1396.000,41.801 L1354.198,-0.000 ZM1239.199,-0.000 L1294.801,-0.000 L1339.801,45.000 L1284.198,45.000 L1239.199,-0.000 ZM1120.199,-0.000 L1179.802,-0.000 L1224.801,45.000 L1165.198,45.000 L1120.199,-0.000 ZM1003.199,-0.000 L1060.801,-0.000 L1105.801,45.000 L1048.198,45.000 L1003.199,-0.000 ZM884.199,-0.000 L943.802,-0.000 L988.801,45.000 L929.198,45.000 L884.199,-0.000 ZM767.199,-0.000 L824.802,-0.000 L869.801,45.000 L812.198,45.000 L767.199,-0.000 ZM648.199,-0.000 L707.802,-0.000 L752.801,45.000 L693.198,45.000 L648.199,-0.000 ZM531.199,-0.000 L588.802,-0.000 L633.801,45.000 L576.198,45.000 L531.199,-0.000 ZM412.199,-0.000 L471.802,-0.000 L516.801,45.000 L457.198,45.000 L412.199,-0.000 ZM295.199,-0.000 L352.802,-0.000 L397.801,45.000 L340.198,45.000 L295.199,-0.000 ZM176.199,-0.000 L235.802,-0.000 L280.801,45.000 L221.198,45.000 L176.199,-0.000 ZM59.199,-0.000 L116.802,-0.000 L161.801,45.000 L104.198,45.000 L59.199,-0.000 ZM44.801,45.000 L-0.000,45.000 L-0.000,0.198 L44.801,45.000 Z"/>
      </svg>
    </div>
  </div>

</template>

<script>
    import Swiper from 'swiper';
    export default {
        name: "about",
        data(){
          return{
              creenWidth:''
          }
        },
        mounted() {
            this.initSwiper()
        },
        methods:{
          initSwiper(){
              var mySwiper = new Swiper ('.swiper-container', {
                  slidesPerView: 6,
                  spaceBetween: 35,
              });
              this.creenWidth = $(window)[0].outerWidth;
              if (this.creenWidth <= 1440){
                  mySwiper = new Swiper ('.swiper-container', {
                      spaceBetween: 25,
                  });
              }
          }
        }
    }
</script>

<style scoped lang="less">
  #aboutBox{
    &:before{
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      background: url("../../src/assets/images/about_bg.png") no-repeat top center;
      background-size: cover;
    }
    .content{
      padding: 0 8%;
      .title_en{
        margin-bottom: 0;
        color: #c8c8c8;
        font-size: 4.8rem;
      }
      .title2 span{
        padding: 0 0 0 10px;
        letter-spacing: 0.3rem;
        font-size: 2rem;
      }
      .fontContent{
        margin-top: -4rem;
        padding-left: 8%;
      }
      .box{
        font-size: 0.8rem;
      }
    }
    .about_right{
      position: absolute;
      right: 0;
      width: 160px;
      height: 70vh;
      top: 20%;
      background: url('../assets/images/about_right.png') no-repeat;
      background-size: cover;
      display: flex;
      justify-content: center;
    }
    .lineBg{
      margin-top: 2%;
      height: auto;
    }
    .swiper-box{
      margin: 4% auto 0;
      padding: 0;

      /*轮播图片*/
      .swiper-container {
        width: 100%;
        margin: 0;
        padding: 0;
      }
      .swiper-slide{
        width: 12.6% !important;
        height: 17%;
      }
      .swiper_item1{
        width: 12.2% !important;
      }
      .swiper_item2{
        width: 17.6% !important;
      }
      .swiper-slide img {
        max-width: 100%;
      }
    }
  }

  @media screen and (min-width: 2000px) {
    #aboutBox{
      .content{
        .box{
          font-size: 1.6rem;
          line-height: 2.4rem;
          margin-top: 2rem;
        }
        .title_en{
          font-size: 7rem;
        }
        .title2 span{
            font-size: 3.3rem;
        }
        .fontContent{
          margin-top: -5rem;
        }
      }
      .about_right{
        width: 270px;
        height: 64vh;
      }
      .swiper-box{
        .swiper-slide{
          width: 303px !important;
          height: 420px;
        }
        .swiper_item2{
          width: 420px !important;
        }
      }
    }
  }

@media screen and (max-width: 1440px) {
  #aboutBox {
    .content{
      .title_en{
        font-size: 3.8rem;
      }
      .fontContent{
        margin-top: -3rem;
      }
      .title2 span{
        font-size: 1.8rem;
        letter-spacing: 0.1rem;
        padding: 0 0 0 6px;
      }
      .box{
        font-size: 0.7rem;
        letter-spacing: 1px;
        p {
          margin-bottom: 0;
        };
      }
    }
    .about_right{
      width: 140px;
    }
  }
}


</style>
