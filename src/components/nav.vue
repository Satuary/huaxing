<template>
  <div id="nav">
    <nav class="navbar navbar-expand-lg d-flex">
      <!-- Brand -->
      <div class="navbar-brand "><router-link class="logo" to=""><img src="@static/images/logo.png"/></router-link></div>

      <!-- Toggler/collapsibe Button -->
      <button @click="navToggle" :class="[{'open': navStatus},' navbar-toggler']" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Navbar links -->
      <div class="justify-content-end collapse navbar-collapse" id="collapsibleNavbar" v-if="navStatus">
        <ul class="navbar-nav">
          <li class="nav-item" v-for="(item, key) in navList">
            <span :class="[{'active' : navActiveId == key},'d-inline-block']" @click="gotoPage(key)">{{item.name}}</span>
          </li>
        </ul>
      </div>

      <!-- 友情鏈接 -->
      <div class="friendLink d-flex align-items-center">
        <a class=" d-flex" target="_blank" href="https://www.facebook.com/chrislycafe/">
          <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px"><path width="20px" height="20px" class="cls-1" d="M880-1957.92H860a2.39,2.39,0,0,0-2.38,2.38v20.08a2.39,2.39,0,0,0,2.38,2.38h9.24v-9.3h-3.79v-4.25h3.79v-.28a8.72,8.72,0,0,1,8.39-8.51h.52v3.9h-.4a4,4,0,0,0-4,3.81v1.09H878l-.63,4.25h-3.7v9.3H880a2.39,2.39,0,0,0,2.38-2.38v-20.08A2.39,2.39,0,0,0,880-1957.92Zm.71-2.58a4.25,4.25,0,0,1,4.25,4.25v21.5a4.25,4.25,0,0,1-4.25,4.25h-21.5a4.25,4.25,0,0,1-4.25-4.25v-21.5a4.25,4.25,0,0,1,4.25-4.25Z" transform="scale(0.67) translate(-855 1960.5)"/></svg>
        </a>
        <a class=" d-flex" target="_blank" href="https://instagram.com/ccccafe/"><svg
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="20px" height="20px">
          <path class="cls-1" d="M939.09-2027.59a2,2,0,0,1,2,2,2,2,0,0,1-2,2,2,2,0,0,1-2-2A2,2,0,0,1,939.09-2027.59ZM931-2022.1a5,5,0,0,0-5,5,5,5,0,0,0,5,5,5,5,0,0,0,5-5A5,5,0,0,0,931-2022.1Zm0-2.72a7.72,7.72,0,0,1,7.72,7.72,7.73,7.73,0,0,1-7.72,7.73,7.73,7.73,0,0,1-7.72-7.73A7.72,7.72,0,0,1,931-2024.82Zm6.87-5.1H924.13a5.54,5.54,0,0,0-5.55,5.55v13.74a5.54,5.54,0,0,0,5.55,5.55h13.74a5.54,5.54,0,0,0,5.55-5.55v-13.74A5.54,5.54,0,0,0,937.87-2029.92Zm.49-2.58a7.64,7.64,0,0,1,7.64,7.64v14.72a7.64,7.64,0,0,1-7.64,7.64H923.64a7.64,7.64,0,0,1-7.64-7.64v-14.72a7.64,7.64,0,0,1,7.64-7.64Z" transform="scale(0.68) translate(-916 2032.5)"/>
        </svg></a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data(){
    return{
      navStatus:false,       // 导航打开关闭状态class
      navList: [
        {
          id: 0,
          name: '首頁',
          path: '/'
        },
        {
          id: 1,
          name: '關於華星',
          path: 'about'
        },
        {
          id: 3,
          name: '華星菜單',
          path: 'menu'
        }
      ],        // 导航栏数据
      navActiveId: 0         // 当前导航栏ID
    }
  },
  methods:{
    /**
     *  改变MENU菜单按钮状态
     */
    navToggle(){
      this.navStatus = !this.navStatus
    },
    /**
     * 跳转页面 and 关闭菜单
     */
    gotoPage(index){
      this.navActiveId = index;             // 存储当前选择导航栏索引
      let path = this.navList[index].path;  // 获取跳转链接
      this.navToggle();                     // 关闭菜单
      this.$router.push({path: path});      // 跳转页面
    }
  }
}
</script>


<style scoped lang="less">
  #nav{
    height: @navHeight;
    @media (max-width: 1440px){
      height: @navHeight_md;
    }
    .navbar-toggler{
      position: relative;
      z-index: 1;
      -webkit-user-select: none;
      user-select: none;
      outline: 0;

      span{
        display: block;
        width: 30px;
        height: 3px;
        margin-bottom: 5px;
        position: relative;
        background: @linkColor;
        border-radius: 3px;

        z-index: 1;

        transform-origin: 4px 0px;

        transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
        background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
        opacity 0.55s ease;

        &:last-of-type{
          transform-origin: 0% 100%;
          margin-bottom: 0px;
        }

        @media (max-width: 640px) {
          width: 25px;
          height: 2px;
        }
      }
      @media (max-width: 640px) {
        padding: 0;
      }
    }

    .navbar-toggler.open{
      span{
        opacity: 1;
        transform: rotate(45deg) translate(-2px, -1px);
        background: @fontColor;

        @media (max-width: 768px) {
          transform: rotate(45deg) translate(2px, 2px);
        }

        &:nth-of-type(2){
          opacity: 0;
          transform: rotate(0deg) scale(0.2, 0.2);
        }

        &:nth-of-type(3){
          transform: rotate(-45deg) translate(0, -1px);

          @media (max-width: 768px) {
            transform: rotate(-45deg) translate(-2px, 3px);
          }
        }
      }
    }

    .navbar-collapse {
      position: relative;
      z-index: 2;

      @media (max-width: 768px) {
        position: absolute;
        right: 0;
        top: @navHeight_md;
        background: @bgWhite;
        width: 32%;
      }

      @media (max-width: 640px) {
        top: @navHeight_sm;
      }
    }

    .navbar{
      height: 100%;

      .navbar-brand{
        width: @navBrandWidth;
        margin-right: 0;

        @media (max-width: 768px){
          width: 33%;
        }

        @media (max-width: 640px){
          width: 30%;
        }
      }

      .logo{
        width: auto;

        img{
          width: 70%;
          max-width: 320px;

          @media screen{
            @media (min-width: 2000px){
              width: auto;
            }
            @media (max-width: 1440px){
              width: 60%;
              transform: translateX(-20px);
            }
            @media (max-width: 768px){
              width: 100%;
              transform: translateX(0);
            }
          }
        }
      }

      .navbar-nav{
        width: auto;
        color: @linkColor;

        @media screen{
          @media (min-width: 2000px){
            font-size: 1.4rem;
          }

          @media (max-width: 1440px){
            font-size: 0.9rem;
          }
        }

        .nav-item{
          width: @navItemWidth;

          @media screen{
            @media (min-width: 2000px){
              width: @navItemWidth_2k;
            }

            @media (max-width: 1440px){
              width: @navItemWidth_sm;
            }

            @media (max-width: 768px) {
              width: 100%;
              display: flex;
            }

          }


          span{
            color: fade(@linkColor, 70%);
            position: relative;
            padding: 0 10%;
            overflow: hidden;
            transition: .1s;
            cursor: pointer;

            @media (max-width: 768px) {
              color: @fontColor;
              width: 100%;
              padding: 12px 5px;
            }
            @media (max-width: 640px) {
              padding: 8px 5px;
            }

            &:before, &:after{
              content: '';
              position: absolute;
              left: -100%;
              /*opacity: 0;*/
              width: 100%;
              background: @fontColor;
              z-index: -1;

              @media (max-width: 768px) {
                display: none;
              }
            }

            &:before{
              height: 4px;
              bottom: 4px;
              transition: .2s;
            }

            &:after{
              height: 2px;
              bottom: 1px;
              transition: .3s ease .2s;
            }
          }

          span.active, span:hover{
            color: fade(@linkColor, 100%);
            transform: scale(1.1);

            @media (max-width: 768px) {
              background: fade(@fontColor, 95%);
              transform: scale(1);
            }

            &:before, &:after{
              /*opacity: 1;*/
              left: 0;
            }
          }
        }
        .nav-lang{
          span{
            cursor: pointer;
          }
        }
      }

      .friendLink{
        position: relative;
        z-index: 2;
        margin:0 50px;

        .cls-1{
          fill: #fff;
        }

        a{
          margin-right: 15px;

          @media (max-width: 768px) {
            margin-right: 20px;
          }
        }

        @media (min-width: 2000px) {
          transform: scale(1.5);
        }

        @media (max-width: 768px) {
          position: absolute;
          right: 15%;
          margin: 0;
          transform: scale(1.25);
        }

        @media (max-width: 640px){
          transform: scale(1);
        }
      }

      @media screen{
        @media (min-width: 2000px){
          padding-left: 2rem;
          padding-right: 2rem;
        }

        @media (max-width: 768px){
          padding-left: 5%;
          padding-right: 5%;
        }
      }
    }

    @media screen{
      @media (min-width: 2000px){
        height: @navHeight_2k;
      }
      @media (max-width: 768px){
        height: @navHeight_md;
      }
      @media (max-width: 700px){
        height: @navHeight_sm;
      }
    }
  }

</style>
