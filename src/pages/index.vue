<template>
  <div id="index">

    <!-- banner -->
    <div id="banner">
      <!-- banner 圖片 -->
      <div class="banner_img text-left">
        <img :src="banner" />
      </div>
      <!-- 文字 -->
      <div class="font wow fadeIn" data-wow-duration="1s">
        <div class="rect"></div>
        <div class="content justify-content-center">
          <div class="title"><span>華星冰室</span></div>
          <div class="title"><span>用心做好炒蛋、奶茶</span></div>
          <div class="box"><p>冰室不賣冰，茶餐廳不供飯，是華星冰室的吸睛賣點。只提供最簡單的通粉、多士、三文治、飲品等，不會產生太多廚餘，也能更專注做好味道。</p></div>
        </div>
      </div>
    </div>

    <!-- about -->
    <div id="about">
      <div class="container">
        <!-- 条形背景 -->
        <div class="lineBg wow fadeIn" data-wow-duration="0.8s" data-wow-delay="0.8s">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink">
            <path fill-rule="evenodd"  fill="rgb(18, 18, 18)"
                  d="M1056.198,720.000 L580.089,243.890 L336.198,-0.001 L393.801,-0.001 L456.661,62.859 L1089.000,695.198 L1089.000,720.000 L1056.198,720.000 ZM453.198,-0.001 L512.801,-0.001 L564.308,51.506 L1089.000,576.199 L1089.000,635.801 L677.350,224.152 L453.198,-0.001 ZM572.198,-0.001 L627.801,-0.001 L668.293,40.491 L1089.000,461.198 L1089.000,516.802 L752.717,180.519 L572.198,-0.001 ZM687.198,-0.001 L746.801,-0.001 L776.872,30.070 L1089.000,342.198 L1089.000,401.801 L825.382,138.184 L687.198,-0.001 ZM806.198,-0.001 L864.280,-0.001 L883.834,19.553 L1089.000,224.719 L1089.000,282.801 L901.490,95.291 L806.198,-0.001 ZM923.677,-0.001 L981.801,-0.001 L989.437,7.635 L1089.000,107.198 L1089.000,165.322 L976.364,52.686 L923.677,-0.001 ZM1041.198,-0.001 L1089.000,-0.001 L1089.000,47.801 L1050.263,9.064 L1041.198,-0.001 ZM996.801,720.000 L937.198,720.000 L461.089,243.890 L217.198,-0.001 L276.801,-0.001 L344.796,67.995 L996.801,720.000 ZM877.801,720.000 L820.198,720.000 L344.089,243.890 L100.198,-0.001 L157.801,-0.001 L225.796,67.995 L877.801,720.000 ZM760.801,720.000 L701.198,720.000 L225.089,243.890 L-0.000,18.802 L-0.000,-0.001 L40.801,-0.001 L108.796,67.995 L760.801,720.000 ZM52.801,720.000 L-0.000,720.000 L-0.000,667.198 L52.801,720.000 ZM-0.000,607.801 L-0.000,550.199 L169.801,720.000 L112.198,720.000 L-0.000,607.801 ZM-0.000,431.199 L288.801,720.000 L229.198,720.000 L-0.000,490.801 L-0.000,431.199 ZM-0.000,314.198 L405.801,720.000 L348.198,720.000 L-0.000,371.801 L-0.000,314.198 ZM-0.000,195.198 L524.801,720.000 L465.198,720.000 L-0.000,254.801 L-0.000,195.198 ZM-0.000,135.801 L-0.000,78.199 L641.801,720.000 L584.198,720.000 L108.089,243.890 L-0.000,135.801 Z"/>
          </svg>
        </div>
        <!-- 盒子内容 -->
        <div id="about_box" class="row wow fadeIn" data-wow-duration="1s">
          <!-- 图片 -->
          <div class="media_img">
            <img :src="aboutImg"/>
          </div>
          <!-- 文字 -->
          <div class="col-lg-8 col-md-8 col-10 content_bg d-flex align-content-center">
            <div class="content text-left justify-content-center">
              <div class="title title2"><span>關於華星</span></div>
              <div class="box">
                <p>「華星」華語樂壇璀璨的閃星星，星光背後，流著你與我熱愛這遍土地的熱血；</p>
                <p>「冰室」香港地道文化，當中保留的不止是一份情懷，更是一種態度；</p>
                <p>「客棧」猶如溫暖的家，為路途上的您，送上一份真摯的情。</p>
                <p>&nbsp;我們用心，將熱情散佈到每一角落，與您在這少少的聚首地方分享愛。</p>
              </div>
            </div>
          </div>
          <!-- 查看更多 -->
          <router-link to="/about" class="more RedMoreBtn wow fadeInUp"data-wow-duration="1s" data-wow-delay="0.8s">查 看更多</router-link>
        </div>
      </div>
    </div>

    <!-- store -->
    <div id="store">
      <div class="container">
        <!-- 条形背景 -->
        <div class="lineBg text-lg-left text-right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="51px" height="830px">
            <path fill-rule="evenodd"  fill="rgb(18, 18, 18)"
                  d="M0.500,719.952 L0.500,661.349 L50.500,711.349 L50.500,769.951 L0.500,719.952 ZM0.500,543.349 L50.500,593.349 L50.500,651.952 L0.500,601.952 L0.500,543.349 ZM0.500,425.349 L50.500,475.349 L50.500,533.951 L0.500,483.952 L0.500,425.349 ZM0.500,307.349 L50.500,357.349 L50.500,415.952 L0.500,365.952 L0.500,307.349 ZM0.500,247.952 L0.500,189.349 L50.500,239.349 L50.500,297.952 L6.676,254.128 L0.500,247.952 ZM0.500,71.349 L50.500,121.348 L50.500,179.952 L0.500,129.952 L0.500,71.349 ZM0.500,0.650 L50.500,0.650 L50.500,61.952 L0.500,11.952 L0.500,0.650 ZM50.500,829.348 L50.500,829.651 L0.500,829.651 L0.500,779.349 L50.500,829.348 Z"/>
          </svg>
        </div>
        <div class="row wow fadeIn" data-wow-duration="1s">
          <!-- 文字 -->
          <div class="col-lg-6 col-md-12 col-12">
            <div class="content">
              <div class="title_en order-lg-0 text-lg-left mb-lg-5 order-1 text-right mb-3">Chrisly Cafe</div>
              <div class="title title2"><span>分店資料</span></div>
              <div class="box">
                <p class="font1" data-content="台北">忠孝店</p>
                <p>地址：台北市大安區忠孝東路四段170巷17弄5號<br/>電話：02-27111881<br/>傳真：02-27110117</p>
                <p class="font2">營業時間</p>
                <p>7:00am - 11:00pm</p>
              </div>
            </div>
          </div>
          <!-- 图片 -->
          <div id="map_box" class="col-md-12 col-12">
            <div id="map" v-if="!mapImg"></div>
            <div id="map_defalut" v-if="mapImg"><img src="@static/images/map.png"/></div>
            <!-- 边框 -->
            <div class="rect_border">
              <div class="rect_border1"></div>
              <div class="rect_border2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- news -->
    <div id="news">
      <div class="container">
        <div id="news_box" class="d-flex wow fadeIn" data-wow-duration="1s">
          <!-- 内容 -->
          <div class="content_bg align-content-center">
            <div class="content text-lg-right text-left justify-content-start">
              <div class="title title2 whiteTitle"><span>新聞公告</span></div>
              <div class="box">
                <p>華星集團是一間源自香港的多元品牌休閒餐飲集團，</p>
                <p>並於香港、澳門及台北建立了超過10間的餐廳網絡，</p>
                <p>為顧客引入不同國家及地區飲食文化中具代表性的佳餚。</p>
              </div>
              <!-- 按鈕 -->
              <div class="BtnBox d-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="36px" height="54px">
                  <path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="6px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                        d="M27.799,45.598 L8.000,25.798 L27.799,5.999 "/>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  width="36px" height="54px">
                  <path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="6px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
                        d="M5.799,45.598 L25.598,25.798 L5.799,5.999 "/>
                </svg>
              </div>
            </div>
          </div>
          <!-- 图片 -->
          <div class="media_img d-flex justify-content-center">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide"><img src="@static/images/1ccweb.jpg" alt=""/></div>
                <div class="swiper-slide"><img src="@static/images/2homeslide.jpg" alt=""/></div>
                <div class="swiper-slide"><img src="@static/images/3homeslide.jpg" alt=""/></div>
                <div class="swiper-slide"><img src="@static/images/4homeslide.jpg" alt=""/></div>
                <div class="swiper-slide"><img src="@static/images/5homeslide.jpg" alt=""/></div>
              </div>
            </div>
          </div>
          <!-- 边框 -->
          <div class="rect_border">
            <div class="rect_border1"></div>
            <div class="rect_border2"></div>
            <!-- 分页 -->
            <div class="date d-flex justify-content-end align-items-end"></div>
          </div>
        </div>
      </div>
      <!-- 条形背景 -->
      <div class="lineBg text-right">
        <svg
          width="2116px" height="50px" viewBox="0 0 2116 50" version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-100.000000, -5444.000000)" fill="#121212" fill-rule="nonzero">
              <g transform="translate(0.000000, 4320.000000)">
                <path d="M376.301,1124 L426.301,1174 L373,1174 L373,1124 L376.301,1124 Z M494.301,1124 L494.406782,1124.10527 L544.302,1174 L485.698,1174 L435.697,1124 L494.301,1124 Z M612.301,1124 L662.302,1174 L603.698,1174 L553.698,1124 L612.301,1124 Z M1318.301,1124 L1368.302,1174 L1309.402,1174 L1259.401,1124 L1318.301,1124 Z M730.301,1124 L780.302,1174 L721.698,1174 L671.697,1124 L730.301,1124 Z M1436.301,1124 L1486.302,1174 L1427.698,1174 L1377.697,1124 L1436.301,1124 Z M1554.301,1124 L1604.302,1174 L1545.698,1174 L1495.697,1124 L1554.301,1124 Z M848.301,1124 L898.302,1174 L839.698,1174 L789.697,1124 L848.301,1124 Z M1672.301,1124 L1722.302,1174 L1663.698,1174 L1613.697,1124 L1672.301,1124 Z M1790.301,1124 L1840.302,1174 L1781.698,1174 L1731.697,1124 L1790.301,1124 Z M1908.301,1124 L1958.302,1174 L1899.698,1174 L1849.697,1124 L1908.301,1124 Z M2024.301,1124 L2074.302,1174 L2017.698,1174 L1967.697,1124 L2024.301,1124 Z M2142.301,1124 L2192.302,1174 L2133.698,1174 L2083.697,1124 L2142.301,1124 Z M2260.301,1124 L2310.302,1174 L2251.698,1174 L2201.697,1124 L2260.301,1124 Z M2378.301,1124 L2428.302,1174 L2369.698,1174 L2319.697,1124 L2378.301,1124 Z M2489,1124 L2489,1174 L2487.698,1174 L2437.697,1124 L2489,1124 Z M966.301,1124 L1016.302,1174 L957.698,1174 L907.697,1124 L966.301,1124 Z M1084.301,1124 L1134.302,1174 L1075.698,1174 L1025.697,1124 L1084.301,1124 Z M1200.005,1124 L1250.005,1174 L1193.698,1174 L1143.697,1124 L1200.005,1124 Z" id="黑色條紋"></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>

    <!-- menu -->
    <div id="menu">
      <div class="container">
        <div class="row wow fadeIn" data-wow-duration="1s">
          <!-- 图片 -->
          <div class="media_img">
            <div class="box1 d-flex text-left">
              <span><img src="@static/images/menu1.png" alt=""></span>
              <!-- 条形背景 -->
              <div class="lineBg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink">
                  <path fill-rule="evenodd"  fill="rgb(18, 18, 18)"
                        d="M275.637,305.000 L305.000,275.637 L305.000,305.000 L275.637,305.000 ZM163.638,305.000 L305.000,163.638 L305.000,224.726 L224.726,305.000 L163.638,305.000 ZM112.726,305.000 L50.637,305.000 L305.000,50.638 L305.000,112.726 L304.062,113.664 L112.726,305.000 ZM-0.000,304.726 L-0.000,243.638 L210.197,33.440 L243.637,-0.000 L304.726,-0.000 L191.062,113.664 L-0.000,304.726 ZM-0.000,192.726 L-0.000,131.052 L97.611,33.440 L131.052,-0.000 L192.726,-0.000 L79.062,113.664 L-0.000,192.726 ZM-0.000,80.140 L-0.000,-0.000 L80.140,-0.000 L-0.000,80.140 Z"/>
                </svg>
              </div>
            </div>
            <div class="box d-lg-flex d-md-block">
              <div class="box2 d-lg-flex text-left">
                <img src="@static/images/menu2.png" alt="" />
              </div>
              <div class="box d-lg-flex d-md-flex">
                <div class="box3">
                  <img src="@static/images/menu3.png" alt=""/>
                </div>
                <div class="box4">
                  <img src="@static/images/menu4.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
          <!-- 文字 -->
          <div class="col-12 content_bg">
            <div class="content text-right">
              <div class="title_en mb-lg-5">HongKong Food</div>
              <div class="title title2"><span>華星菜單</span></div>
              <div class="box col-md-6 offset-md-6 col-8 offset-4">
                <p>自上世紀五十年代香港就興起冰室這種飲食場所，它提供揉合香港特色的西式餐飲，</p>
                <p>往後在食物種類多樣化和煮食設備優化的過程中，</p>
                <p>發展出茶餐廳這獨一無二的飲食空間類型，並成為最能代表香港在地特色的生活場景。</p>
              </div>
            </div>
          </div>
          <!-- 查看更多 -->
          <router-link to="/menu" class="more BlackMoreBtn">查 看更多</router-link>
        </div>
      </div>
    </div>

    <!-- footer -->
    <div class="footer" id="home_footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-12">
            <div class="content">
              <div class="title title2"><span>聯繫我們</span></div>
              <div class="box">
                <p class="mb-0">E-mail: info@chrislycafe.com.tw <br/> Tel: 020-88596231</p>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-12 d-flex align-items-end justify-content-lg-end justify-content-md-end justify-content-start">
            <small>2019 華星冰室有限公司. All Rights Reserved.</small>
          </div>
        </div>
      </div>
    </div>

    <!-- backTop -->
    <div id="backTop" v-if="BtnStatus" @click="backToTop">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="101.5px" height="101.5px">
        <path fill-rule="evenodd"  fill="rgb(204, 38, 42)"
              d="M-0.000,-0.000 L100.000,-0.000 L100.000,100.000 L-0.000,100.000 L-0.000,-0.000 Z"/>
        <path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="3px" stroke-linecap="butt" stroke-linejoin="miter" fill="none"
              d="M38.828,36.313 L50.142,24.999 L61.456,36.313 "/>
        <path fill-rule="evenodd"  stroke="rgb(255, 255, 255)" stroke-width="3px" stroke-linecap="square" stroke-linejoin="miter" fill="none"
              d="M50.142,26.999 L50.142,74.500 "/>
      </svg>
    </div>
  </div>
</template>


<script>
    import { WOW } from 'wowjs';
    import  bannerSrc from "@static/images/banner.png"
    import  bannerSrc_mobile from "@static/images/mobile_pic.png"

    import  aboutSrc from "@static/images/about.png"
    import  aboutSrc_mobile from "@static/images/mobile_about.png"

    import Swiper from 'swiper';


    export default {
      data(){
        return{
          beaches: [
            {
              title: '華星冰室（忠孝店）',
              icon: 'http://chrislycafe.com.hk/assets/images/cafe-pin.png',
              position: {lat: 25.03318, lng: 121.56466},
              // desc: '<h1>華星冰室（旺角店）</h1><p>台北市大安區忠孝東路四段170巷17弄5號<br/>7:00am - 11:00pm<br/>2520-6666</p>'
            }
          ],
          mapStyle: [
            {
              featureType: "all",
              elementType: "geometry.fill",
              stylers: [
                {
                  // color: "#E3C6A4"
                }
              ]
            },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.fill",
              stylers: [
                {
                  // color: "#333333"
                },
                {
                  visibility: "on"
                }
              ]
            },
            {
              featureType: "administrative.locality",
              elementType: "labels.text.stroke",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  // color: "#ffffff"
                },
                {
                  weight: "0.75"
                }
              ]
            },
            {
              featureType: "landscape.natural",
              elementType: "geometry.fill",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  // color: "#F6E2CC"
                }
              ]
            },
            {
              featureType: "poi",
              elementType: "geometry.fill",
              stylers: [
                {
                  visibility: "on"
                },
                {
                  // color: "#B08A5F"
                }
              ]
            },
            {
              featureType: "poi.park",
              elementType: "geometry.fill",
              stylers: [
                {
                  // color: "#D2A97A"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "geometry",
              stylers: [
                {
                  lightness: 100
                },
                {
                  visibility: "simplified"
                }
              ]
            },
            {
              featureType: "road",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "transit",
              elementType: "labels.icon",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            },
            {
              featureType: "water",
              elementType: "all",
              stylers: [
                {
                  // color: "#BE9463"
                }
              ]
            },
            {
              featureType: "water",
              elementType: "labels",
              stylers: [
                {
                  visibility: "off"
                }
              ]
            }
          ],          // 地图样式
          windowWidth: 0,           // 窗口宽度
          windowHeight: 0,          // 窗口高度
          banner: bannerSrc,        // 首页Banner
          aboutImg: aboutSrc,       // 关于华星图片
          mapImg: 0,                // 地图加载不出来时的图片
          BtnStatus: false          // 返回顶部按钮状态
        }
      },
      methods:{
        /**
         * 实例化地图
         */
        init() {
          // 实例化地图
          if(window.google){
            var map = new google.maps.Map(document.getElementById("map"), {
              zoom: 17, //地图空间
              center: this.beaches[0].position, //初始化定位,
              styles: this.mapStyle
            });
            // 点击地图和卫星图像的控件时
            map.addListener("maptypeid_changed", () => {
              if (map.mapTypeId == "hybrid") {
                map.setOptions({
                  styles: this.changeStyle(
                    "#666666",
                    "#343434"
                  )
                });
              } else {
                map.setOptions({
                  styles: this.changeStyle(
                    "#333333",
                    "#666666",
                  )
                });
              }
            });
            // 配置地图
            this.setMarker(map);
          }else{
            this.mapImg = 1     // 如果google加载失效显示图片
          }
        },

        /**
         * 实例化地图
         */
        setMarker(map) {
          //实例化信息窗口
          var infowindow = new google.maps.InfoWindow({
            content: this.infoWin_Content(0)
          });
          // 循环店铺的标记
          for (var i = 0; i < this.beaches.length; i++) {
            const beach = this.beaches[i];
            const index = i
            const marker = new google.maps.Marker({
              position: beach.position,
              map: map,
              icon: beach.icon,
              title: beach.title,
              zIndex: index,
              desc: beach.desc
            });
            // 监听每个标记的点击事件，弹出对应的信息窗口
            // marker.addListener("click", () => {
            //   infowindow.setContent(this.infoWin_Content(marker.desc));
            //   infowindow.open(map, marker);
            // });
          }
        },

        /**
         * 信息窗口的html
         */
        infoWin_Content(storeDesc) {
          return (
            '<div id="content">' +
            '<div id="bodyContent">' +
            storeDesc +
            '</div>' +
            '</div>'
          );
        },

        /**
         * 改变样式
         */
        changeStyle(neighborhoodColor, neighborhoodStroke) {
          this.mapStyle[1].stylers[0].color = neighborhoodColor;
          this.mapStyle[2].stylers[0].color = neighborhoodStroke;
          return this.mapStyle;
        },

        /**
         * 滚动事件
         */
        handleScroll(){
          let scrollTop = $(window).scrollTop();
          this.BtnStatus = scrollTop > this.windowHeight ? true : false;
        },

        /**
         *  返回顶部
         */
        backToTop(){
          this.scrollAnimate(0, 500);
        },

        /**
         * 动画滚动
         */
        scrollAnimate(scroll, speed){
          $("html, body").animate({
            scrollTop: scroll
          }, {
            duration: speed
          });
        }
      },
      created() {
          // this.$router.go(0)
        this.windowWidth = window.innerWidth;
        this.windowHeight = window.innerHeight;
        if(this.windowWidth<1024){
          this.banner = bannerSrc_mobile;
          this.aboutImg = aboutSrc_mobile;
        }

      },
      mounted: function () {
        this.init();    // 初始化地图

        window.addEventListener('scroll', this.handleScroll, true); // 监听（绑定）滚动事件

        var swiper = new Swiper('.swiper-container', {    // 初始化swiper
          autoplay: {
            delay: 3000,//1秒切换一次
          },
          slidesPerView: 2,
          spaceBetween: 0,
          loop: true,
          pagination: {
            el: '.date',
            type: 'fraction',
            // 数字补0
            formatFractionCurrent: function (number) {
              var myNum = number > 9 ? number : '0' + number;
              return myNum;
            },
            formatFractionTotal: function (number) {
              var myNum = number > 9 ? number : '0' + number;
              return myNum;
            },
          },
        });
        swiper.params.speed = 380; // 设置轮播速度

        new WOW({
          live: false,
          callback:     function(box) {
            $(box).find('.rect_border').addClass('animate_border')        // 滚动时给border添加className
          },
        }).init();      // wow
      },
      destroyed () {
        window.removeEventListener('scroll', this.handleScroll); // 离开页面 关闭监听 不然会报错
      }
    }
</script>

<style scoped lang="less">
  #index{
    height: auto;
  }
  #index:before{
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: calc(100% - @navBrandWidth);
    min-width: 320px;
    height: 100vh;
    background: @bgRed;

    @media screen{
      @media (min-width: 2000px){
        width: calc(100% - @navBrandWidth_2k);
      }
      @media (max-width: 1000px){
        width: 60%;
      }
      @media (max-width: 640px){
        min-width: unset;
      }
    }
  }

  /* - - - - - - -
      moreBtn
  - - - - - - -  */
  .more{
    width: 280px;
    height: 65px;
    line-height: 65px;
    color: @linkColor;
    position: relative;
    z-index: 1;
    font-size: 14px;

    @media screen{
      @media (max-width: 1680px){
        width: 250px;
      }
      @media (max-width: 1440px){
        height: 55px;
        line-height: 55px;
      }
      @media (max-width: 1000px){
        width: 200px;
        height: 50px;
        line-height: 50px;
      }
      @media (max-width: 640px){
        width: 140px;
        height: 35px;
        line-height: 35px;
        font-size: 12px;
      }
    }

    &:after{
      position: absolute;
      content: '';
      width: 50px;
      height: 2px;
      top: 38px;
      margin-left: 10px;
      background: @bgWhite;

      @media (max-width: 1000px){
        width: 28px;
        height: 1px;
        top: 30px;
        margin-left: 5px;
      }
      @media (max-width: 640px){
        width: 22px;
        height: 1px;
        top: 25px;
      }
    }
  }

  .RedMoreBtn{
    background: url('../../static/images/buttonBg.png') @moreRedBg 30% 50%;
    background-size: auto 120px;

    @media (max-width: 1000px){
      background-size: auto 100px;
    }
    @media (max-width: 640px){
      background-size: auto 80px;
    }
  }

  .BlackMoreBtn{
    background: @moreBlackBg;
  }


  /* - - - - - - -
      container
  - - - - - - -  */
  .container{
    padding-top: 14rem;
    padding-bottom: 14rem;
    position: relative;

    @media screen{
      @media (min-width: 2000px){
        padding-bottom: 20rem;
      }
      @media (max-width: 1440px){
        padding-top: 10rem;
        padding-bottom: 10rem;
      }
      @media (max-width: 1000px){
        padding-top: 7rem;
        padding-bottom: 7rem;
      }
      @media (max-width: 640px){
        padding-top: 5rem;
        padding-bottom: 5rem;
      }
    }
  }


  /* - - - - - - -
      rect_border
  - - - - - - -  */
  .rect_border{
    position: absolute;
    border: none;

    .rect_border1::before,
    .rect_border1::after,
    .rect_border2::before,
    .rect_border2::after {
      content: " ";
      background: @bgRed;
      position: absolute;
      -webkit-transition-duration: 0.3s;
      -moz-transition-duration: 0.3s;
      -o-transition-duration: 0.3s;
      transition-duration: 0.3s;
    }

    .rect_border1::before {
      top: 0px;
      left: 0px;
      width: @border;
      height: 0px;
      /*animation: drawHoriLineLeft .2s ease-in-out 1.2s forwards;*/

      @media (max-width: 1024px){
        width: @border_sm;
      }
      @media (max-width: 640px){
        width: @border_sm - 2;
      }
    }

    .rect_border1::after {
      top: 0px;
      right: 0px;
      width: 0px;
      height: @border;
      /*animation: drawHoriLineTop .2s ease-in-out 1.2s forwards;*/
      @media (max-width: 1024px){
        height: @border_sm;
      }
      @media (max-width: 640px){
        height: @border_sm - 2;
      }
    }

    .rect_border2::before {
      bottom: 0px;
      left: 0px;
      width: 0px;
      height: @border;
      /*animation: drawHoriLineBottom .2s ease-in-out 1.2s forwards;*/
      @media (max-width: 1024px){
        height: @border_sm;
      }
      @media (max-width: 640px){
        height: @border_sm - 2;
      }
    }

    .rect_border2::after {
      bottom: 0px;
      right: 0px;
      width: @border;
      height: 0px;
      /*animation: drawHoriLineRight .2s ease-in-out 1.2s forwards;*/
      @media (max-width: 1024px){
        width: @border_sm;
      }
      @media (max-width: 640px){
        width: @border_sm - 2;
      }
    }

  }

  .animate_border {
    .rect_border1::before {
      animation: drawHoriLineLeft .2s ease-in-out 0.7s forwards;
    }

    .rect_border1::after {
      animation: drawHoriLineTop .2s ease-in-out 0.7s forwards;
    }

    .rect_border2::before {
      animation: drawHoriLineBottom .2s ease-in-out 0.7s forwards;
    }

    .rect_border2::after {
      animation: drawHoriLineRight .2s ease-in-out 0.7s forwards;
    }
  }

  .keyframes(all,drawHoriLineLeft,{
    from{height: 0px;}
    to{height: 100%;}
  });

  .keyframes(all,drawHoriLineTop,{
    from{width: 0px;}
    to{width: 100%;}
  });

  .keyframes(all,drawHoriLineBottom,{
    from{width: 0px;}
    to{width: 100%;}
  });

  .keyframes(all,drawHoriLineRight,{
    from{height: 0px;}
    to{height: 100%;}
  });


  /* - - - - - - -
      banner
  - - - - - - -  */
  #banner{
    width: 100%;
    height: calc(100vh - @navHeight);
    position: relative;
    z-index: 1;

    .banner_img{
      height: 100%;
      img{
        width: auto;
        height: 100%;
      }
    }

    .font{
      position: absolute;
      right: 5%;
      top: 21%;
      z-index: 1;
      width: 50%;
      height: 60%;
      display: flex;
      flex-direction: row;

      @media screen{
        @media (min-width: 2000px){
          width: 45%;
          height: 55%;
        }
        @media (max-width: 1024px) {
          width: 80%;
          height: 45%;
        }
        @media (max-width: 1000px) {
          right: 2%;
        }
        @media (max-width: 640px) {
          width: 95%;
          top: 30%;
        }
      }

      .rect{
        width: 17%;
        display: flex;
        background: fade(@bgRed, 70%);

        @media (max-width: 1000px){
          width: 12%;
        }
      }

      .content{
        background: @bgWhite;

        @media screen{
          @media (min-width: 2000px){
            padding-top: 9%;
            padding-bottom: 9%;
          }
          @media (max-width: 640px) {
            padding: 0 5%;
          }
        }

        .title{
          span{
            @media screen{
              @media (min-width: 2000px){
                line-height: 85px;
                font-size: 2.8rem;
              }
              @media (max-width: 1440px){
                line-height: 50px;
                font-size: 1.7rem;
              }
              @media (max-width: 1024px){
                font-size: 2rem;
              }
              @media (max-width: 640px) {
                font-size: 1.6rem;
                line-height: 40px;
              }
            }
          }
        }

        .box{
          @media screen{
            @media (min-width: 2000px){
              font-size: 1.5rem;
              line-height: 2.5rem;
              padding-top: 50px;
            }

            @media (max-width: 1440px){
              font-size: 0.9rem;
            }

            @media (max-width: 1024px){
              font-size: 1.3rem;
              line-height: 26px;
            }

            @media (max-width: 1000px){
              font-size: 0.8rem;
              line-height: 20px;
            }

            @media (max-width: 640px){
             padding-top: 7%;
              font-size: 0.7rem;
            }
          }
        }
      }
    }

    @media screen{
      @media (min-width: 2000px){
        height: calc(100vh - @navHeight_2k);
      }
      @media (max-width: 1000px) {
        height: calc(100vh - @navHeight_md);
      }
      @media (max-width: 700px) {
        height: calc(100vh - @navHeight_sm);
      }
    }
  }


  /* - - - - - - -
      about
  - - - - - - -  */
  #about{
    background: url("../../static/images/aboutBg2.png") no-repeat center top;
    background-size: cover;

    .lineBg{
      left: @aboutLeft;

      @media (max-width: 1000px){
        left: unset;
        right: @aboutLeft * 2;
      }
      @media (max-width: 640px){
        right: @aboutLeft / 2;
      }

      svg{
        @media (max-width: 1000px){
          transform: scale(0.45, 0.7);
          transform-origin: right top;
        }

        @media (max-width: 640px){
          transform: scale(0.45, 0.5);
        }
      }
    }

    #about_box{
      position: relative;
      z-index: 1;
      padding-top: @aboutTop;

      .media_img{
        width: @aboutImgWidth;
        z-index: 1;
        position: absolute;
        left: @aboutLeft * 2;
        top: @aboutTop;

        img{
          width: 100%;
          max-width: 810px;
        }

        @media screen{
          @media (min-width: 2000px){
            width: @aboutImgWidth_2k;
          }
          @media (max-width: 1000px){
            width: 77%;
            left: unset;
            right: @aboutLeft;
          }
        }
      }

      .content_bg{
        background: url("../../static/images/aboutBg.png") no-repeat left top;
        background-size: cover;
        margin-top: @aboutTop;
        margin-left: calc(@aboutImgWidth - @aboutImgWidth / 4);

        @media screen{
          @media (min-width: 2000px){
            margin-left: calc(@aboutImgWidth_2k - @aboutImgWidth_2k / 4);
          }
          @media (max-width: 1000px){
            margin-left: 10%;
            margin-top: 15%;
          }
          @media (max-width: 640px){
            margin-left: 5%;
            margin-top: 10%;
          }
        }

        .content{
          display: flex;
          flex-direction: column;
          padding: @aboutContentPadTop 8% (@aboutContentPadTop + 5%) 0;
          padding-left: calc(@aboutImgWidth  - @aboutImgWidth / 5);

          @media screen{
            @media (min-width: 2000px){
              padding: (@aboutContentPadTop + 2%) 8% (@aboutContentPadTop + 10%) 0;
              padding-left: calc(@aboutImgWidth_2k  - @aboutImgWidth_2k / 5);
            }

            @media (max-width: 1440px){
              padding-bottom: @aboutContentPadTop;
            }

            @media (max-width: 1000px){
              padding: 30% 10% 20% 10%;
            }
          }
        }
      }
    }

    .more{
      position: absolute;
      bottom: 5%;
      right: -4%;

      @media (max-width: 1000px){
        bottom: 3%;
        right: @aboutLeft * 2;
      }
      @media (max-width: 640px){
        right: 20px;
      }
    }
  }


  /* - - - - - - -
      store
  - - - - - - -  */
  #store{
    .lineBg{
      svg{
        @media (max-width: 1024px){
          margin-top: 5%;
        }
        @media (max-width: 1000px){
          width: 55px;
          height: 50%;
          transform-origin: right top;
          margin-right: 2%;
        }
        @media (max-width: 640px){
          height: 80%;
          margin-right: 5%;
          margin-top: 15%;
        }
      }
    }

    #map_box{
      position: absolute;
      right: 0;
      width: 55%;
      padding: @mapPadTop - 1% @mapPadLeft - 1% 0 0;

      @media (max-width: 1000px){
        position: relative;
        padding: 0 0 @mapPadLeft @mapPadTop;
      }
      @media (max-width: 640px){
        padding-bottom: @mapPadLeft - 1%;
        padding-left: @mapPadTop * 2;
      }

      #map,#map_defalut{
        position: relative;
        z-index: 1;
        width: 100%;
        overflow: hidden;

        @media (max-width: 640px){
          width: 95%;
        }
      }

      #map{
        height: 55vh;

        @media (min-width: 2000px){
          height: 50vh;
        }
        @media (max-width: 1680px){
          height: 50vh;
        }
        @media (max-width: 1024px){
          height: 35vh;
        }
        @media (max-width: 1000px){
          height: 45vh;
        }
        @media (max-width: 640px){
          height: 35vh;
        }
      }

      #map_defalut{
        img{
          width: 100%;
        }

        @media (max-width: 640px){
          width: 95%;
        }
      }
    }

    .content{
      padding: 5% 15%;

      @media (max-width: 1024px){
        padding: 0 @mapPadTop 0 @mapPadTop + 3%;
      }
      @media (max-width: 1000px){
        padding: 0 @mapPadTop + 3% 0 @mapPadTop;
      }
      @media (max-width: 640px){
        padding: 0 (@mapPadTop / 2) + 3% 0 @mapPadTop / 2;
      }

      .font1{
        font-size: 18px;
        padding: 5px 0 0 1em;
        position: relative;
        margin-bottom: 0.5rem;

        @media (min-width: 2000px){
          font-size: 1.7rem;
        }
        @media (max-width: 1000px){
          font-size: 1.4rem;
        }
        @media (max-width: 640px){
          font-size: 1rem;
        }

        &:before{
          position: absolute;
          font-size: 24px;
          top: 0;
          left: 0;
          color: fade(@fontColor, 20%);
          content: attr(data-content);

          @media (min-width: 2000px){
            font-size: 1.7rem;
          }
          @media (max-width: 1000px){
            font-size: 1.7rem;
          }
          @media (max-width: 640px){
            font-size: 1.2rem;
          }
        }
      }

      .font2{
        font-size: 18px;
        margin-bottom: 0.5rem;
        margin-top: 2rem;

        @media (min-width: 2000px){
          font-size: 1.6rem;
        }
        @media (max-width: 1000px){
          font-size: 1.4rem;
        }
        @media (max-width: 640px){
          font-size: 1rem;
        }
      }
    }

    .rect_border{
      width: 90%;
      height: 90%;
      right: 0;
      top: 0;

      @media (max-width: 1000px){
        width: 86%;
        right: unset;
        top: unset;
        left: 0;
        bottom: 0;
      }
      @media (max-width: 640px){
        left: @mapPadTop;
      }
    }
  }


  /* - - - - - - -
      news
  - - - - - - -  */
  #news{
    background: url("../../static/images/newsBg2.png") no-repeat center top;
    background-size: cover;
    position: relative;

    .container{
      padding-bottom: @newsPadBottom;

      @media (max-width: 640px){
        padding-bottom: 7rem;
      }
    }

    .lineBg{
      height: auto;
      right: 0;
      bottom: @newsPadBottom;
      left: unset;

      @media (max-width: 1000px){
        bottom: 8%;
      }
      @media (max-width: 640px){
        bottom: 9%;
      }

      svg{
        transform-origin: right bottom;
        @media (min-width: 2000px){
          transform: scale(0.7);
        }
        @media (max-width: 1000px){
          transform: scale(0.7);
        }
        @media (max-width: 640px){
          transform: scale(1) translateX(10%);
        }
      }
    }

    #news_box{
      position: relative;
      z-index: 1;

      .media_img{
        width: 55%;
        z-index: 1;
        position: absolute;
        right: 0;
        overflow: hidden;


        @media screen{
          @media (min-width: 2000px){
            width: 60%;
          }
          @media (max-width: 1024px){
            width: 53%;
            padding-left: 4%;
            top: 5%;
          }
          @media (max-width: 1000px){
            width: 65%;
            top: 0;
          }
        }

        .swiper-container{
          padding-bottom: @newsPadBottom;
          transform: translateX(-@newsMarTop + 2%);

          @media (min-width: 2000px){
            transform: translateX(-@newsMarTop + 7%);
          }

          @media (max-width: 1440px){
            transform: translateX(-@newsMarTop - 2%);
          }

          @media (max-width: 1024px){
            transform: translateX(-@newsMarTop - 7%);
          }

          @media (max-width: 1000px){
            transform: translateX(-@newsMarTop);
          }
        }

        .swiper-slide {
          text-align: center;
          /* Center slide text vertically */
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          -webkit-justify-content: center;
          justify-content: center;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          transition: 300ms;
          transform: translateY(@newsPadBottom) scale(0.88);
          /*transform: scale(0.8);*/

          img{
            width: 100%;
            max-width: 540px;
          }
        }

        .swiper-slide-active,.swiper-slide-duplicate-active{
          transform: translate(@newsMarTop * 2, 0) scale(1);
          z-index: 1;
        }
      }

      .content_bg{
        background: url("../../static/images/newsBg.png") no-repeat left top;
        background-size: cover;
        margin-top: @newsMarTop;
        flex: 0 0 50%;
        max-width: 50%;

        @media screen{
          @media (max-width: 1000px){
            flex: 85%;
            max-width: 85%;
            margin-top: @newsMarTop_md;
            z-index: 1;
          }
          @media (max-width: 640px){
            margin-top: @newsMarTop_sm;
          }
        }

        .content{
          color: @linkColor;
          display: flex;
          flex-direction: column;
          padding: @newsPadTop 15% @newsPadTop+5% 8%;

          @media (max-width: 1000px){
            padding: 15% 12%;
          }
        }
      }
    }

    .BtnBox{
      padding-top: @newsMarTop - 5%;

      svg{
        transform: scale(0.8);
        &:last-of-type{
          margin: 0 10px 0 30px;
        }
      }
    }

    .rect_border{
      width: @newsBorderWidth;
      height: @newsBorderHeight;
      right: 0;
      top: @newsMarTop;

      @media (max-width: 1000px){
        width: 75%;
        height: @newsBorderHeight - 5%;
        top: @newsMarTop_md - 5%;
      }
      @media (max-width: 640px){
        top: @newsMarTop_sm - 10%;
      }
    }

    .date{
      padding: @border + 10px;
      height: 100%;
      font-family: "gilroy-bold";
      font-size: 0.7rem;

      /deep/.swiper-pagination-current {
        font-size: 2rem;
        transform: translate(-3px, 7px);

        @media (max-width: 1000px) {
          font-size: 1.6rem;
        }
        @media (max-width: 640px) {
          font-size: 1rem;
          transform: translate(-0px, 3px);
        }
      }

      /deep/.swiper-pagination-total {
        font-size: 1.2rem;
        transform: translateY(3px);

        @media (max-width: 1000px) {
          font-size: 0.9rem;
        }
        @media (max-width: 640px) {
          font-size: 0.6rem;
        }
      }

      @media (max-width: 1000px){
        padding: 10px 15px;
      }
      @media (max-width: 640px){
        padding: 10px;
      }
    }

  }


  /* - - - - - - -
      menu
  - - - - - - -  */
  #menu{
    .row{
      position: relative;
    }

    .lineBg{
      left: @menuPadTop + 3%;
      top: @menuPadTop + 5%;

      @media (max-width: 1440px){
        top: @menuPadTop * 2;
      }

      @media (max-width: 1024px){
        top: @menuPadTop * 2.5;
      }

      @media (max-width: 1000px){
        top: @menuPadTop * 2 + 3%;
        left: 13%;
      }

      svg{
        width: 350px;
        height: 350px;

        @media (max-width: 1000px){
          transform: scale(0.55);
        }
        @media (max-width: 640px){
          transform: scale(0.3);
        }
      }
    }

    .media_img{
      background: url('../../static/images/mengBg.png') no-repeat;
      background-size: contain;
      padding: @menuPadTop 5% @menuPadBottom 5%;

      @media (max-width: 1440px){
        padding-top: @menuPadTop + 5%;
      }

      @media (max-width: 1024px){
        padding-top: @menuPadTop * 2;
      }

      @media (max-width: 1000px){
        background-position: (-@menubgPos / 2) bottom;
        background-size: auto @menubgPos;
        padding: 30% 5% 5% 5%;
      }

      @media (max-width: 640px){
        background-position: 200% bottom;
        background-size: auto @menubgPos;
        padding: 45% 5% 5% 3%;
      }

      .box1,.box2,.box3,.box4{
        img{
          width: 330px;
          position: relative;
          z-index: 1;

          @media screen{
            @media (min-width: 2000px){
              width: 450px;
            }

            @media (max-width: 1680px){
              width: 300px;
            }

            @media (max-width: 1440px){
              width: 240px;
            }

            @media (max-width: 1024px){
              width: 200px;
            }

            @media (max-width: 640px){
              width: 120px;
            }
          }
        }
      }
    }

    .content_bg{
      position: absolute;

      .content{
        padding-right: 0;

        .title2{
          @media (max-width: 1000px){
            transform: translateY(0);
            padding: 5% 0;
          }
        }
      }
    }

    .more{
      position: absolute;
      bottom: @menuPadBottom * 2;
      right: 0;

      @media (max-width: 1000px){
        bottom: @menuPadBottom;
      }
      @media (max-width: 640px){
        right: 5%;
      }
    }
  }


  /* - - - - - - -
      index_footer
  - - - - - - -  */
  #home_footer{
     .container{
      padding-top: 0 !important;
      padding-bottom: 3rem !important;

      @media (max-width: 768px){
        padding-bottom: 2rem !important;
      }
      @media (max-width: 640px){
        padding-bottom: 1rem !important;
      }
    }

    svg{
      transform-origin: right bottom;
      transform: scale(0.8);
    }

    .friendLink{
      margin:0 10px 15px 0;
    }

    .content{
      @media (max-width: 640px){
        padding: 0;
      }

      .title{
        transform: translateY(0%);

        span{
          font-size: 1.6rem;

          @media (max-width: 640px){
            font-size: 1.3rem;
          }
        }
      }

      p{
        font-family: "gilroy-bold";
        letter-spacing: 0;
      }
    }
  }


  /* - - - - - - -
      backTop
  - - - - - - -  */
  #backTop{
    margin-left: 10px;
    cursor: pointer;
    position: fixed;
    right: 20px;
    bottom: 20px;
    transform: scale(0.55);
    z-index: 5;

    @media (max-width: 1000px){
      transform: scale(0.4);
      right: 0px;
    }

    @media (max-width: 640px){
      transform: scale(0.3);
    }
  }

</style>
