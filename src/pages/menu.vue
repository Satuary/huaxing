<template>
  <div id="huaxingMenu">

    <!-- 文字-->
    <!-- 文121212121字-->



      <div class="col-lg-12 col-md-12 bannerTitle">
        <div class="content ">
          <div class="title_en">Chrisly Cafe</div>
          <div class="fontContent">
            <div class="title title2" ><span>華星菜單 </span></div>

            <!-- 768以上可見 -->
            <div class="box box1">
              <p>飲食是每一個城市最真實、最親民的生活文化， 飲食空間正是城市裡最老實、最親切的文化現場。</p>
              <p>探究這類文化現場的時空演變，就能發現 一個城市獨有的文化脈絡和生活味道。</p>
              <p>在香港，大牌檔和茶餐廳可算是其中最能代表這類文化現場的兩種本土飲食空間，</p>
              <p>在這裡，人(人文生活)、情(社區情感)、味 (味覺體驗)醞釀出別有滋味的城市和建築空間。</p>
              <p>大牌檔在城市的大街小巷雜湊成五味紛陳的地道風景， 茶餐廳則讓中西飲食文化混搭出獨一無二的香港味道。</p>
              <p>大牌檔和茶餐廳絕對是這座城市其中最原味、最港式的生活空間記憶。  </p>
            </div>

            <!--  768以下可見  -->
            <div class="box box2">
              <p>在香港，茶餐廳可算是其中</p>
              <p>最能代表這類文化現場的本土飲食空間</p>
              <p>茶餐廳讓中西飲食文化混搭出獨一無二的香港味道</p>
              <p>茶餐廳絕對是這座城市其中最原味</p>
              <p>最港式的生活空間記憶</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 輪播圖-->
      <div class="menuSwiper clearfix">
        <div class="btnBox">
          <div class="prev sweiprBtn"><img src="../../src/assets/images/prev.png" alt=""> </div>
          <div class="next sweiprBtn"><img src="../../src/assets/images/next.png" alt=""> </div>
        </div>
        <div class="swiper-container col-lg-9 col-md-10">
          <div class="swiper-wrapper">
            <div
              class="swiper-slide"
              v-for="(image, index) in images"
              style="display: inline-block">
              <img
                :src="image.src"
                @click="openGallery(index)" alt="">
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
      </div>
      <!--  image预览组件  -->
      <LightBox
        :images="images"
        ref="lightbox"
        :show-caption="true"
        :show-light-box="false"
      >
      </LightBox>


    <!-- footer -->
    <div class="footerBox">
      <bottom_footer></bottom_footer>
    </div>
  </div>
</template>

<script>
    import Swiper from 'swiper';
    import LightBox from 'vue-image-lightbox'   //引入图片预览组件
    import bottom_footer from '@/components/bottom_footer'

    export default {
        data(){
            return {
                num: 4,    //默认轮播图数量
            }
        },
        components:{
            LightBox,
            bottom_footer
        },
        data(){
          return{
            //  图片预览url
            images:[
                {
                  thumb: require('../../static/images/menuSwiper1.png'),
                  src: require('../../static/images/menuSwiper1.png')
                },
                {
                    thumb: require('../../static/images/menuSwiper2.png'),
                    src: require('../../static/images/menuSwiper2.png')
                },
                {
                    thumb: require('../../static/images/menuSwiper3.png'),
                    src: require('../../static/images/menuSwiper3.png')
                },
                {
                    thumb: require('../../static/images/menuSwiper4.png'),
                    src: require('../../static/images/menuSwiper4.png')
                },
            ]
          }
        },
        methods:{
            initSwiper(){
                /***
                 * 輪播圖初始化
                 * 获取屏幕宽度 设置轮播图可见数量
                 * num ===>   slidesPerView
                 */
                var creenWidth = $(window)[0].outerWidth;   //屏幕宽度
                if (creenWidth > 1025){
                    this.num = 4
                }else if (creenWidth > 900) {
                    this.num = 3
                }else {
                    this.num = 1.8
                }
                var mySwiper = new Swiper ('.swiper-container', {
                    slidesPerView: this.num,   //将轮播图设置为根据屏幕大小自动显示可见数量
                    spaceBetween:30,           // 轮播图item中的间距
                    navigation: {
                        nextEl: '.next',
                        prevEl: '.prev',
                    },
                });
            },
            /**
             *   点击放大图片
             */
            openGallery(index) {
                this.$refs.lightbox.showImage(index)
            }
        },
        mounted() {
            this.initSwiper();
            //单页面设置body高度 添加类名
            $('html,body').addClass('bg')
        },
        destroyed() {
            $('html,body').removeClass('bg')
        }
    }
</script>

<style scoped lang="less">
  #huaxingMenu{
    &:before{
      content: '';
      width: 100%;
      height: 100vh;
      position: absolute;
      left: 0;
      /*top: 0;*/
      bottom: 0;
      background: url("../../src/assets/images/menu_bg.png") no-repeat left bottom;
      background-size: 27%;
      z-index:0;
      @media (max-width: 1680px) {
        background-size:30%
      }
      @media (max-width: 1440px) {
        background-size: 32%;
      }
      @media (max-width: 1440px) and (min-height: 920px) {
        background-size: 32%;
      }
      @media (max-width: 1280px) {
        background-size: 28%;
        left: -6%;
      }
      @media (max-width: 1280px) and (min-height: 900px) {
        background-size: 35%;
        left: -9%;
      }
      @media(max-width: 1024px) and (min-height: 750px) {
        background-size: 40%;
        left: -20%;
      }
      @media (max-width: 1024px) and (max-height: 620px) {
        background-size: 25%;
        left: -10%;
      }
      @media (max-width: 1024px) and (min-height: 1100px){
        background-size: 50%;
      }
      @media (max-width: 768px) {
        background-size: 74%;
        left: -38%;
      }
      @media (max-width: 550px) {
        background-size: 72%;
        left: -30%;
      }
      @media (max-width: 414px){
        background-size: 68%;
      }
      @media (max-width: 375px) and (min-height: 800px) {
        background-size: 85%;
        left: -45%;
      }
      @media (max-width: 330px) {
        background-size: 60%;
      }
    }
    /*文字*/
    .bannerTitle{
      padding-right: 8%;
      z-index:2;
      @media (max-width: 1024px) {
        padding-right: 4%;
      }
      @media (max-width: 1024px) and (min-height: 1100px){
        margin-top: 3rem;
      }
      @media (max-width: 768px) {
        padding: 0 8% 0 15px;
      }
      @media (max-width: 330px) {
        padding: 0 15px;
      }
      /*内容*/
      .content{
        text-align: right;
        padding: 0;
        .title_en{
          color: #c8c8c8;
        }
        .fontContent{
          margin-top: -4rem;
          @media (min-width:2000px) {
            margin-top: -6rem;
          }
          @media (max-width: 1440px) {
            margin-top: -3rem;
          }
          @media (max-width: 1440px) and (min-height: 920px){
            margin-top: 1rem;
          }
          @media (max-width: 1280px) and (min-height: 900px) {
            margin-top: 1rem;
          }
          @media (max-width: 1024px)  and (min-height: 750px) {
            margin-top: 1rem;
          }
          @media (max-width: 1024px) and (max-height: 600px) {
            margin-top: -2rem;
          }
          @media (max-width: 1024px) and (min-height: 1100px){
            margin-top: 2rem;
          }
          @media (max-width: 550px){
            margin-top: -1rem;
          }
          .title{
            margin-right: 7%;
          }
          .box2{
            display: none;
          }
          .box{

            @media (max-width: 1680px) {
              margin-top: 1rem;
            }
            @media (max-width: 1440px) {
              margin-top: 0rem;
            }
            @media (max-width: 1280px) {
              p{
                margin-bottom: 0.5rem;
              }
            }

            @media (max-width: 1024px) and (min-height: 1100px){
              margin-top: 3rem;
              p{
                margin-bottom: 1rem;
              }
            }
            @media (max-width: 768px) {
              margin-right: 0;
            }
            @media (max-width: 550px) {
              margin-top: 1rem;
            }
            @media (max-width: 375px) and (min-height: 800px) {
              margin-top: 2rem;
            }
            @media (max-width:330px){
              margin-top: 0.5rem;
            }
          }

          @media (max-width: 768px){
            .box1{
              display: none;
            }
            .box2{
              display: block;
            }
          }
        }
      }
    }

    /*輪播圖*/
    .menuSwiper{
      position: relative;
      z-index:3;
      margin-top: 2rem;
      margin-right: 6%;
      @media (max-width: 1680px) {
        margin-top: 4rem;
      }
      @media (max-width: 1440px) {
        margin-top: 3rem;
      }
      @media (max-width: 1440px) and (min-height: 900px) {
        margin-top: 5rem;
      }
      @media (max-width: 1280px) and (max-height: 820px) {
        margin-top: 2rem;
      }
      @media (max-width: 1024px) and (min-height: 1100px){
        margin-top: 8rem;
      }
      @media (max-width: 768px) {
        margin-right: 0;
      }
      @media (max-width: 375px) {
        margin-top: 1rem;
      }
      @media (max-width: 375px) and (min-height: 800px) {
        margin-top: 4rem;
      }
      @media (max-width: 320px) {
        margin-top: 2rem;
      }
      .swiper-container{
        float: right;
        margin-right: 5rem;
        @media (max-width: 768px) {
          margin-right: 0;
        }
        .swiper-slide {
          img{
            width: 100%;
          }
        }
      }
      .btnBox{
        float: right;
        position: absolute;
        bottom: 0;
        right: 0;
        .sweiprBtn{
          width: 35px;
          height: 35px;
          background: #121212;
          display: flex;
          justify-content: center;
          align-items: center;
          outline: none;
          cursor: pointer;
          @media (min-width: 2000px) {
            width: 45px;
            height: 45px;
          }
          @media (max-width: 1024px) and (min-height: 1100px) {
            width: 45px;
            height: 45px;
          }
          @media (max-width: 768px) {
            display: none;
          }
          img{
            width: 70%;
          }
          }
          .prev{
            margin-bottom: 5px;
          }

      }

      .lineBg{
        height: unset;
        left: 11%;
        width: 64.6%;
        bottom: 30%;
        svg{
          transform: scale(0.86);
        }
        @media (min-width: 2000px) {
          svg{
            transform: scale(0.89);
          }
        }
        @media (max-width: 1680px) {
          svg {
            transform: scale(0.84);
          }
        }

        @media (max-width: 1280px) {
          left: 9%;
        }
        @media (max-width: 1024px) {
          width: 100%;
          svg{
            transform: scale(0.53);
          }
        }
        @media (max-width: 1024px) and (min-height: 750px) {
          left: 8.8%;
        }
        @media (max-width: 1024px) and (min-height: 1100px) {
          svg{
            transform: scale(0.64);
          }
        }
        @media (max-width: 768px) {
          left: 0;
          svg{
            transform: scale(0.7) translateX(5%);
          }
        }
        @media (max-width: 550px) {
          svg{
            transform: scale(0.63);
          }
        }
        @media (max-width: 330px) {
          svg{
            transform: scale(0.62);
          }
        }
      }
    }


  }


</style>


















