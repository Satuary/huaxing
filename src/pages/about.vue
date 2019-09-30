<template>
  <div id="aboutBox">

    <!-- 文字 -->
    <div class="col-lg-12 col-md-12 bannerTitle">
      <div class="content">
        <div class="title_en">Chrisly Cafe</div>
        <div class="fontContent">
          <div class="title title2"><span>關於華星</span></div>
          <div class="box">
            <p>「華星」華語樂壇璀璨的閃星星，星光背後，流著你與我熱愛這遍土地的熱血；</p>
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
    <div class="swiper-box col-lg-11 col-md-10">
      <div class="swiper-container " :class="className">
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
    <!--  底部条形背景  -->
    <div class="lineBg">
      <svg
        width="2116px" height="50px" viewBox="0 0 2116 50" version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink">
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(-750.000000, -5444.000000)" fill="#121212" fill-rule="nonzero">
            <g transform="translate(0.000000, 4320.000000)">
              <path d="M376.301,1124 L426.301,1174 L373,1174 L373,1124 L376.301,1124 Z M494.301,1124 L494.406782,1124.10527 L544.302,1174 L485.698,1174 L435.697,1124 L494.301,1124 Z M612.301,1124 L662.302,1174 L603.698,1174 L553.698,1124 L612.301,1124 Z M1318.301,1124 L1368.302,1174 L1309.402,1174 L1259.401,1124 L1318.301,1124 Z M730.301,1124 L780.302,1174 L721.698,1174 L671.697,1124 L730.301,1124 Z M1436.301,1124 L1486.302,1174 L1427.698,1174 L1377.697,1124 L1436.301,1124 Z M1554.301,1124 L1604.302,1174 L1545.698,1174 L1495.697,1124 L1554.301,1124 Z M848.301,1124 L898.302,1174 L839.698,1174 L789.697,1124 L848.301,1124 Z M1672.301,1124 L1722.302,1174 L1663.698,1174 L1613.697,1124 L1672.301,1124 Z M1790.301,1124 L1840.302,1174 L1781.698,1174 L1731.697,1124 L1790.301,1124 Z M1908.301,1124 L1958.302,1174 L1899.698,1174 L1849.697,1124 L1908.301,1124 Z M2024.301,1124 L2074.302,1174 L2017.698,1174 L1967.697,1124 L2024.301,1124 Z M2142.301,1124 L2192.302,1174 L2133.698,1174 L2083.697,1124 L2142.301,1124 Z M2260.301,1124 L2310.302,1174 L2251.698,1174 L2201.697,1124 L2260.301,1124 Z M2378.301,1124 L2428.302,1174 L2369.698,1174 L2319.697,1124 L2378.301,1124 Z M2489,1124 L2489,1174 L2487.698,1174 L2437.697,1124 L2489,1124 Z M966.301,1124 L1016.302,1174 L957.698,1174 L907.697,1124 L966.301,1124 Z M1084.301,1124 L1134.302,1174 L1075.698,1174 L1025.697,1124 L1084.301,1124 Z M1200.005,1124 L1250.005,1174 L1193.698,1174 L1143.697,1124 L1200.005,1124 Z" id="黑色條紋"></path>
            </g>
          </g>
        </g>
      </svg>
    </div>

    <!-- footer -->
    <div class="footerBox">
      <bottom_footer></bottom_footer>
    </div>
  </div>

</template>

<script>
    import Swiper from 'swiper';
    import bottom_footer from '@/components/bottom_footer'

    export default {
        name: "about",
        components:{
          bottom_footer
        },
        data(){
            return{
                creenWidth:'',
                className:'swiper-no-swiping', //默认轮播图不可拖动
                spaceBetween:35

            }
        },
        methods:{
          initSwiper(){
            /***
             * creenWidth    获取屏幕宽度
             * className     类名切换 大于1026的时候 添加swiper-no-swiping
             *               主要作用为：1026以上 图片不可拖动
             *
             */
              var creenWidth = $(window)[0].outerWidth;
              if (creenWidth < 550){
                  this.className = '';
              }
             else if (creenWidth < 1026 ) {
                 this.className = '';
             }else{
                 this.className = 'swiper-no-swiping';
             }

              var mySwiper = new Swiper ('.swiper-container', {
                  slidesPerView: 'auto',   //将轮播图设置为根据屏幕大小自动显示可见数量
                  loop:false
              });
          }
        },
        mounted() {
            this.initSwiper();
            // 单页面设置body高度 添加类名
            $('html,body').addClass('bg')
        },
        destroyed() {
            $('html,body').removeClass('bg')
        }
    }
</script>

<style scoped lang="less">
  #aboutBox {
    &:before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      width: 100%;
      height: 100vh;
      background: url("../../src/assets/images/about_bg.png") no-repeat top center;
      opacity: 0.7;
      background-size: cover;
    }

    /*文字*/

    .bannerTitle {
      margin-left: 5%;
      @media (max-width: 768px) {
        margin-left: 2%;
      }
      @media (max-width: 600px) {
        margin-left: 0;
      }

    /*  font >> content*/
    .content {
      padding: 0 8%;
      @media (max-width: 1440px) {
        .title {
          transform: translateY(-30%);
        }
      }
      @media (max-width: 375px) and (max-height: 780px) {
        padding: 0 2%;
      }
      @media (max-width: 1280px) and (min-height: 1024px) {
        padding: 4% 8%;
      }
      @media (max-width: 375px) {
        padding: 0;
      }

      .title_en {
        margin-bottom: 0;
        color: #c8c8c8;
      }

      .title2 span {
        padding: 0 0 0 10px;
        letter-spacing: 0.3rem;
        @media (min-width: 2000px) {
        }
        @media (max-width: 1440px) {
          letter-spacing: 0.1rem;
          padding: 0 0 0 6px;
        }
      }

      .fontContent {
        margin-top: -4rem;
        padding-left: 3%;
        @media (min-width: 2000px) {
          margin-top: -5rem;
        }
        @media screen and (max-width: 1280px) and (min-height: 820px) {
          margin-top: 0;
          padding-left: 0;
        }
        @media screen and (max-width: 1280px) and (max-height: 820px) {
          margin-top: -4rem;
          padding-left: 3.5%;
        }
        @media screen and (max-width: 1024px) and (min-height: 900px) {
          margin-top: 2rem;
          padding-left: 0;
        }
        @media screen and (max-width: 1024px) and (max-height: 900px) {
          margin-top: -4.7rem;
          padding-left: 5%;
        }
        @media (max-width: 768px) {
          margin-top: 1rem;
        }
        @media (max-width: 600px) {
          margin-top: 0;
          padding-left: 0;
        }
      }

      .box {
        @media (max-width: 1440px) {

          p:last-child {
            margin-top: 2rem;
          }
        }
        @media (max-width: 1024px) {
          margin-top: 2rem;
        }
        @media (max-width: 1280px) and (min-height: 1024px) {
          margin-top: 2rem;
          p {
            margin-bottom: 0.5rem;
          }
          p:last-child {
            margin-top: 3rem;
          }
        }
        @media (max-width: 1280px) and (max-height: 820px) {
          p:last-child {
            margin-top: 0rem;
          }
        }
        @media (max-width: 600px) {
          margin-top: 0;
          line-height: 1.2rem;
          p:last-child {
            margin-top: 0;
          }
        }
        @media (max-width: 375px) and (max-height: 700px) {
          margin-top: -1rem;
        }

      }
    }
  }
    /*右边背景*/
    .about_right{
      position: absolute;
      right: 0;
      width: 170px;
      height: 70vh;
      top: 20%;
      background: url('../assets/images/about_right.png') no-repeat;
      background-size: cover;
      display: flex;
      justify-content: center;
      @media (min-width: 2000px) {
        width: 270px;
        height: 64vh;
      }
      @media (max-width: 1440px){
        width: 130px;
        height: 56vh;
      }
      @media (max-width: 1440px) and (max-height: 905px){
        height: 66vh;
      }
      @media (max-width: 1366px){
        width: 120px;
        height: 70vh;
      }
      @media (max-width: 1280px){
        height: 60vh;
        width: 140px;
        top: 20%;
      }
      @media (max-width: 1280px) and (max-height: 820px){
        height: 73vh;
        width: 105px;
        top: 18%;
      }
      @media (max-width: 1024px){
        top: 18%;
        width: 115px;
      }
      @media (max-width: 1024px) and (min-height: 1000px){
        height: 54vh;
        top: 18%;
        width: 140px;
      }
      @media (max-width: 990px) {
        top: 44%;
        height: 45vh;
        width: 120px;
      }
      @media (max-width: 600px) {
        display: none;
      }
    }
    /*底部线*/
    .lineBg{
      margin-top: 2%;
      height: auto;
      @media (min-width: 2000px) {
        svg{
          transform: scale(0.7);
        }
      }
      @media (max-width: 1024px) {
        margin-top: 5%;
        svg{
          transform: scale(0.6);
        }
      }
      @media (max-width: 1024px) and (max-height: 800px){
        margin-top: 3%;
      }
      @media (max-width: 768px) {
        svg{
          transform: scale(0.5);
        }
      }
      @media (max-width: 550px) {
        display: none;
      }
    }
    .swiper-box{
      margin: 4% auto 0;
      padding: 0;
      @media (max-width: 1440px){
        margin: 6% auto 0;
      }
      @media screen and (max-width: 1280px) and (min-height: 820px) {
          margin: 4% auto 0;
      }
      @media screen and (max-width: 1280px) and (max-height: 820px) {
          margin: 3% auto 0;
      }
      @media (max-width: 768px){
        margin: 7% 4% 0;
      }
      @media (max-width: 600px){
        margin: 0;
        padding: 6% 6% 0 6%;
      }
      @media (max-width: 375px) and (min-height: 800px) {
        padding: 12% 6% 0 6%;
      }
      /*轮播图片 container*/
      .swiper-container {
        width: 100%;
        margin: 0;
        padding: 0;
      }
      .swiper-container /deep/ .swiper-slide{
        width: 12.6% ;
        /*height: 17%;*/
        margin-right: 40px ;
        @media (min-width: 2000px) {
          width: 303px ;
          height: 420px;
          margin-right: 45px;
        }
        @media (max-width: 1680px) {
          margin-right: 30px ;
        }
        @media (max-width: 1440px) {
          margin-right: 32px ;
        }
        @media (max-width: 1280px) and (min-height: 1024px){
          margin-right: 25px ;
        }
        @media (max-width: 1024px){
          margin-right: 35px ;
        }
        @media (max-width: 1024px) and (min-height: 900px) {
          margin-right: 40px ;
        }
        @media (max-width: 770px) {
          margin-right: 25px;
        }
      }
      .swiper-container /deep/ .swiper_item1{
        width: 12.2% ;
      }
      .swiper-container /deep/ .swiper_item2{
        width: 17.6% ;
        @media (min-width: 2000px){
          width: 420px ;
        }
      }
      .swiper-slide img {
        max-width: 100%;
      }
    }


  }

  @media screen and (max-width: 1026px) and (min-height: 900px){
    #aboutBox .swiper-box /deep/ .swiper-slide{
      width: unset !important;
    }
  }
  @media screen and (max-width: 1024px) {
    #aboutBox .swiper-box{
      .swiper-slide{
        height: 260px;
        width: 186px !important;
      }
      .swiper_item1{
        width: 180px !important;
      }
      .swiper_item2{
         width: 260px !important;
       }
    }
  }
  @media screen and (max-width: 768px) {
    #aboutBox .swiper-box {
      .swiper-slide{
        width: 175px !important;
      }
      .swiper_item1{
        width: 170px !important;
      }
      .swiper_item2{
        width: 245px !important;
      }
    }
  }
  @media screen and (max-width: 600px) {
    #aboutBox .swiper-box {
      .swiper-slide{
        width: 162px !important;
      }
      .swiper_item1{
        width: 156px !important;
      }
      .swiper_item2{
        width: 225px !important;
      }
    }
  }
  @media screen and (max-width: 375px) {
    #aboutBox .swiper-box {
      .swiper-slide{
        height: 210px;
        width: 150px !important;
      }
      .swiper_item1{
        width: 146px !important;
      }
      .swiper_item2{
        width: 211px !important;
      }
    }
  }
  @media (max-width: 340px) {
    #aboutBox .swiper-box {
      .swiper-slide{
        height: 200px;
        width: 110px !important;
      }
      .swiper_item1{
        width: 107px !important;
      }
      .swiper_item2{
        width: 154px !important;
      }
    }
  }
</style>
