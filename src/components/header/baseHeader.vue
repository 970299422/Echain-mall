<template>
  <div>
    <el-header height="166px">
      <div class="bg_outer1">
        <el-menu
          class="menu1 inner_container"
          mode="horizontal"
          background-color="#38597f"
          text-color="#fff"
          active-text-color="#fff"
          
        >
          <div class="menu1-left">
            <el-submenu index="1">
              <template slot="title" class="mytitle">
                <img src="@/assets/svg/home_flag.svg" alt="home_flag.svg" /> {{language}}
              </template>
              <el-menu-item v-for='(item, key) in languageList' :key='key' @click="handleChange(1, item.value)">{{item.value}}</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">{{coinName}}</template>
              <el-menu-item index="2-1">JPY</el-menu-item>
              <el-menu-item index="2-2">HKD</el-menu-item>
              <el-menu-item index="2-3">EUR</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">{{country}}</template>
              <el-menu-item index="2-1">Singapore</el-menu-item>
              <el-menu-item index="2-2">American</el-menu-item>
              <el-menu-item index="2-3">China</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">
              <img src="@/assets/svg/Delivery.svg" alt="Delivery.svg" /> Free Shipping Worldwide
            </el-menu-item>
          </div>

          <div class="menu1-right">
            <el-menu-item class="links">
              <el-link :underline="false" href="#">E-Chain Game</el-link>
            </el-menu-item>
            <el-menu-item class="links">
              <el-link :underline="false" href="#">Auction Mall</el-link>
            </el-menu-item>
            <el-menu-item class="links">
              <el-link :underline="false" href="#">VIP Mall</el-link>
            </el-menu-item>
            <el-menu-item class="links">
              <el-link :underline="false" href="#">Sar Exchange</el-link>
            </el-menu-item>
            <el-menu-item class="links">
              <el-link :underline="false" href="#">Token Economy</el-link>
            </el-menu-item>
            <el-menu-item class="links">
              <el-link :underline="false" href="#">Saller Center</el-link>
            </el-menu-item>
            <el-menu-item class="links">
              <el-link :underline="false" href="#">E-chain App</el-link>
            </el-menu-item>
          </div>
        </el-menu>
      </div>
      <!-- Menu2 -->
      <div class="bg_outer1">
        <div class="menu2 inner_container">
          <div class="logo">
            <img src="../../assets/img/web1x_logo.png" alt="logo" />
          </div>

          <div>
            <el-input placeholder="Search" v-model="inputValue" class="searchClass">
              <el-button class="search-button conterClass" slot="append">
                <i class="el-icon-search"></i>
              </el-button>
            </el-input>
          </div>

          <div class="container-right">
            <div class="login-box" v-if="!loginStatus">
              <img src="../../assets/svg/Home_Sign in.svg" alt="sign" />
              <div class="user-info">
                <div class="welcome">Welcome</div>
                <div class="sign_action">
                  <el-button class="dialog-btn" type="text" @click="handleLogin">Sign in</el-button>
                  <span class="delimiter">/</span>
                  <el-button class="dialog-btn" type="text" @click="handleSignUp">Register</el-button>
                </div>
              </div>
            </div>

            <div class="user-nav" v-else @click="trggerUnderList">
              <img src="../../assets/svg/Home_Sign in.svg" alt="sign" />
              <div class="user-message">
                <p class="welcome">Hello</p>
                <p class="user-name">{{userInfo.mobile}}</p>

                <ul class="user-menu" v-if="underListStatus">
                  <li>orders</li>
                  <li>orders</li>
                  <li>orders</li>
                  <li>orders</li>
                  <li>orders</li>
                  <li>orders</li>
                  <li>orders</li>
                </ul>
              </div>
            </div>

            <div class="cart-box">
              <img src="../../assets/svg/Home_Cart.svg" alt="Cart" />
              <p>Cart</p>
            </div>
          </div>
        </div>
      </div>
      <!-- Menu3 -->
      <div class="bg_outer2">
        <el-menu
          mode="horizontal"
          class="menu3 inner_container"
          background-color="#122638"
          text-color="#ccc"
          active-text-color="#ccc"
        >
          <el-menu-item class="cate" index="1">
            <i @click="drawer = true" class="el-icon-s-unfold"></i>
            <p>All Categories</p>
          </el-menu-item>

          <el-menu-item
            v-for="(item) in cate"
            :key="item.id"
            class="memus-links"
          >
            <el-link class :underline="false" href="#">{{item.name}}</el-link>
          </el-menu-item>
          <!-- 展开种类弹窗 :index="index + 2" --> 
          <!-- <el-drawer :visible.sync="drawer" :with-header="false" :direction="direction" size="20%">
            <el-link class="mycart" :underline="false" href="#">Shopping Cart</el-link>
            <el-link
              class
              :underline="false"
              href="#"
            >Women's Clothing & Accessories</el-link>
            <el-link class :underline="false" href="#">Health & Beauty</el-link>
            <el-link class :underline="false" href="#">Men's Clothing & Accessories</el-link>
            <el-link class :underline="false" href="#">Home & Kitchen</el-link>
            <el-link class :underline="false" href="#">Luggage & Bags</el-link>
          </el-drawer>-->
        </el-menu>
      </div>
    </el-header>

		<!-- login/Register对话框 -->
    <el-dialog
      custom-class="login-dialog"
      :title='loginCompTitle'
      :visible.sync="dialogLoginVisible"
      :before-close="handleClose"
      width='418px'
    >
      <Login ref="login" 
        v-if="isLogin"
        @handleClose='handleClose'
      />
      <Register ref="register" 
        v-else
        @handleClose='handleClose'
      />

    </el-dialog>
  </div>
</template>
<script>

import { mapState } from "vuex";
import Login from "../loginComp/login.vue"
import Register from "../loginComp/register.vue"

export default {
	name: 'Header',
	components: {
    Login,
    Register,
  },
  data() {
    return {
      noLogin: true,
			drawer: false,
			inputValue: "",
			cate: [
        {
          id: 1,
          name: "Women's Clothing"
        },
        {
          id: 2,
          name: "Accessories Health"
        },
        {
          id: 3,
          name: "Beauty Men's Clothing"
        },
        {
          id: 4,
          name: "Accessories Home"
        },
        {
          id: 5,
          name: "Kitchen Luggage"
        },
        {
          id: 6,
          name: "Bags"
        }
      ],
			isLogin: false,
      dialogLoginVisible: false,
      language: 'English',
      coinName: 'USD',
      country: 'Canada',
      languageList: [
        {
          id: 1,
          value: '日本語'
        },
        {
          id: 2,
          value: '中文'
        },
      ],
      loginCompTitle: 'Sign in',
      userInfo: {},
      underListStatus: false
    };
  },
  computed: {
    ...mapState(["loginStatus"]),
  },
	methods: {
		handleLogin() {
      this.isLogin = true
      this.dialogLoginVisible = true;
      this.loginCompTitle = 'Sign in';
    },
    handleSignUp() {
      this.isLogin = false
      this.dialogLoginVisible = true;
      this.loginCompTitle = 'Sign up'
		},
		handleClose() {
      if (this.isLogin) {
        this.$refs.login.resetForm()
        this.$refs.login.compStatus = 1
      } else {
        this.$refs.register.resetForm()
      }
      this.dialogLoginVisible = false
    },
    handleChange(type, value) {
      this.language = value
    },
    trggerUnderList() {
      this.underListStatus = !this.underListStatus
    }
  },
  created() {
    if (localStorage.getItem('USERINFO')) this.userInfo = JSON.parse(localStorage.getItem('USERINFO'));
  },
};
</script>
<style lang="scss" scope>
.bg_outer1 {
  width: 100%;
  background-color: #38597f;
	font-family: "SourceHanSansCN";
	border: 0;
}
.inner_container {
  width: 1200px;
  margin: 0 auto;
}
.el-header {
  padding-left: 0 !important;
  padding-right: 0 !important;
}


.el-menu--horizontal > .el-menu-item {
	border-bottom: none;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: none;
}

.menu1 {
  padding: 0;
	text-align: left;
	height: 38px;
  line-height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .menu1-left, .menu1-right{
    display: flex;
    align-items: center;
  }
  &::before,
  &::after {
    content: none;
  }
  .el-menu-item {
    padding: 0;
    height: 38px;
    line-height: 38px;
    &:hover {
      background-color: #38597f !important;
    }
  }
  .el-submenu {
    // padding: 0 10px;
    margin-right: 30px;
    .el-submenu__title {
      padding: 0;
      height: 38px;
      line-height: 38px;
      &:hover{
        background-color: #38597f !important;
      }
    }
    .el-submenu__icon-arrow{
      right: -14px;
      color: #Fff;
    }
  }
  .menu1-right{
    .el-menu-item{
      margin-left: 25px;
    }
    .el-link--inner{
      color: #fff;
    }
    
  }
  // .el-menu {
  //   display: flex;
  //   align-items: center;
  //   // justify-content: space-between;
  //   border-bottom: none;
    
  // }
  // display: flex;
  // align-items: center;
  // justify-content: space-between;
  // .menu1-left{
  //   .el-select{
  //     margin-right: 20px;
  //   }
  //   .el-input .el-input__inner{
  //     height: 38px;
  //     line-height: 38px;
  //     background: transparent;
  //     border: 0;
  //     max-width: 60px;
  //     padding: 0;
  //     font-size: 12px;
  //     color:#fff;
  //     &::placeholder{
  //       color: #fff;
  //     }
  //   }
  // }
}
.bg_outer2 {
  background-color: #122538;
  width: 100%;
}
.menu2 {
	background-color: #38597f;
  height: 90px;
  display: flex;
  align-items: center;
  .el-menu-item:hover {
    background-color: #38597f !important;
  }
  ::v-deep .el-submenu:hover {
    background-color: #38597f !important;
  }
  .logo {
    width: 161px;
    font-size: 40px;
    font-weight: bolder;
  }
  .el-input {
    height: 40px;
    overflow: hidden;
    width: 618px;
    .el-button {
      height: 40px;
      width: 80px;
      border-radius: 20px;
    }
  }
  .search-button {
    background-color: #ffdc5a !important;
    margin-left: 0px;
    width: 60px;
    height: 45px;
    padding: 0;
  }

  .login-box{
    display: flex;
    align-items: center;
    margin-left: 23px;
    img {
      width: 28px;
      height: 28px;
    }
    .user-info {
      height: 28px;
      // width: 132px;
      margin-left: 8px;
      .welcome {
        text-align: left;
        font-size: 12px;
        color: #fff;
      }
      .sign_action {
        height: 20px;
        overflow: hidden;
        color: #fff;
        display: flex;
        align-items: center;
        
        .el-button {
          color: #fff;
          font-size: 14px;
        }
      }
    }

    .links {
      display: flex;
      align-items: center;
      .el-link {
        font-size: 18px;
      }
      .delimiter {
        margin: 0 5px;
      }
      i {
        margin-right: 10px;
      }
    }
  }

  .user-nav{
    display: flex;
    align-items: center;
    margin-left: 23px;
    cursor: pointer;
    img {
      width: 38px;
      height: 38px;
      margin-right: 4px;
    }
    .user-message {
      color: #fff;
      position: relative;
      .welcome{
        font-size: 12px;
        margin-bottom: 6px;
      }
      .user-name{
        font-size: 18px;
        position: relative;
        max-width: 100px;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
      }

      &::after{
          content: '';
          display: inline-block;
          position: absolute;
          bottom: 7px;
          right: -10px;
          width: 0;
          height: 0;
          border: 3px solid;
          border-color: #fff transparent transparent transparent;
        }

      .user-menu{
        width: 150px;
        position: absolute;
        left: -70px;
        top: 50px;
        z-index: 2;
        background: #fff;
        border-radius: 5px;
        padding: 10px 0px 20px 30px;
        box-sizing: border-box;
        
        li {
          height: 40px;
          line-height: 40px;
          color: #333;
          font-size: 14px;
          cursor: pointer;
          &:hover{
            color: #38597f;
          }
        }
        &::after {
          content: '';
          display: inline-block;
          position: absolute;
          top: -20px;
          right: 50%;
          transform: translateX(50%);
          width: 0;
          height: 0;
          border: 10px solid;
          border-color: transparent  transparent #fff  transparent ;
        }
      }
    }
  }
  .container-right{
    display: flex;
    align-items: center;
    position: relative;
    flex: 1;
  }
  .cart-box{
    display: flex;
    align-items: center;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    p {
      position: relative;
      top: 10px;
      font-size: 12px;
      color: #fff;
      margin-left: 10px;
    }
  }
}
.menu3 {
	background-color: #122538;
  height: 38px;
  .el-menu-item{
    height: 38px;
    line-height: 38px;
    padding: 0;
  }
  .cate {
		font-size: 14px;
		color: #fff !important;
    .el-button {
      padding: 0;
      margin: 0;
    }
    i {
      margin-right: 10px;
    }
    display: flex;
    align-items: center;
  }
  .memus-links{
      margin-left: 40px;
      .el-link {
        font-size: 14px;
        color: #fff
      }
    }
  .links {
    display: flex;
    .el-link {
      font-size: 18px;
    }
  }

  .el-drawer {
    .el-link {
      width: 100%;
    }
  }
}

.searchClass {
  border: 1px solid #c5c5c5;
  border-radius: 20px;
  background: #f4f4f4;
  margin-left: 180px;
}
.searchClass .el-input-group__prepend {
  border: none;
  background-color: transparent;
  padding: 0 10px 0 30px;
}
.searchClass .el-input-group__append {
  border: none;
  background-color: transparent;
}
.searchClass .el-input__inner {
  height: 36px;
  line-height: 36px;
  border: none;
  background-color: transparent;
}
.searchClass .el-icon-search {
  font-size: 16px;
  color: #2c2c2c;
}
.searchClass .centerClass {
  height: 100%;
  line-height: 100%;
  display: inline-block;
  vertical-align: middle;
  text-align: right;
}
.searchClass .line {
  width: 1px;
  height: 26px;
  background-color: #c5c5c5;
  margin-left: 14px;
}
.searchClass:hover {
  border: 1px solid #d5e3e8;
  background: #fff;
}
.searchClass:hover .line {
  background-color: #d5e3e8;
}
.searchClass:hover .el-icon-search {
  color: #409eff;
  font-size: 16px;
}
</style>