<template>
  <!-- <div class="container"> -->
  <el-container class="index-container">
    
    <Header/>

    <!-- 主体 -->
    <el-main>
      <el-image :src="require('@/assets/img/web1x_home_banner.png')" fit="contain" class="banner"></el-image>
      <div class="inner_container">
        <div class="event-tags">
          <!-- <img class="el-image" v-for="item in eventTag" :key="item.id" :src="item.img" /> -->
          <div class="tag">
            <img src="@/assets/img/web1x_banner_1.png" alt />
            <div class="content">
              <h3>Token investment</h3>
              <p>15 dividends throughout the year</p>
            </div>
          </div>
          <div class="tag">
            <img src="@/assets/img/web1x_banner_2.png" alt />
            <div class="content">
              <h3>E-chain game</h3>
              <p>Enjoy shopping in the game</p>
            </div>
          </div>
          <div class="tag">
            <img src="@/assets/img/web1x_banner_3.png" alt />
            <div class="content">
              <h3>Auction mall</h3>
              <p>Luxury items start at $1</p>
            </div>
          </div>
          <div class="tag">
            <img src="@/assets/img/web1x_banner_4.png" alt />
            <div class="content">
              <h3>VIP mall</h3>
              <p>Enjoy local service at a low price</p>
            </div>
          </div>
          <!-- <p>{{eventTag}}</p> -->
        </div>

        <div class="recommendations">
          <div class="headline">
            <span>Recommended Brand</span>
            <el-link :underline="false">
              More
              <i class="el-icon-arrow-right"></i>
            </el-link>
          </div>
          <div class="content">
            <div class="left">
              <el-card :body-style="{ padding: '0px' }">
                <img class="image" src="../../assets/img/web1x_品牌1.png" />
                <div class="desc">
                  <p class="brand">global brand</p>
                  <p class="discount">off 15%</p>
                </div>
              </el-card>
            </div>
            <div class="right">
              <!-- <el-card
                v-for="item in recommend.imgList"
                :key="item.id"
                :body-style="{ padding: '0px' }"
              >
                <img class="image" :src="item.img" />
              </el-card>-->
              <el-card :body-style="{ padding: '0px' }">
                <img class="image" src="../../assets/img/web1x_品牌2.png" />
              </el-card>
              <el-card :body-style="{ padding: '0px' }">
                <img class="image" src="../../assets/img/web1x_品牌3.png" />
              </el-card>
              <el-card :body-style="{ padding: '0px' }">
                <img class="image" src="../../assets/img/web1x_品牌4.png" />
              </el-card>
              <el-card :body-style="{ padding: '0px' }">
                <img class="image" src="../../assets/img/web1x_品牌5.png" />
              </el-card>
              <el-card :body-style="{ padding: '0px' }">
                <img class="image" src="../../assets/img/web1x_品牌6.png" />
              </el-card>
              <el-card :body-style="{ padding: '0px' }">
                <img class="image" src="../../assets/img/web1x_品牌7.png" />
              </el-card>
            </div>
          </div>
        </div>
        <div class="just-for-you">
          <div class="headline">
            <span>The best products, just for you</span>
            <el-link :underline="false">
              More
              <i class="el-icon-arrow-right"></i>
            </el-link>
          </div>
          <div class="content">
            <!-- <el-card v-for="item in justForYou" :key="item.id" :body-style="{ padding: '0px' }">
              <img class="image" :src="item.img" />
              <div class="info">
                <div class="goods-name">{{item.name}}</div>
                <div class="price">
                  <span class="currency">
                    $
                    <span class="value">{{item.price}}</span>
                  </span>
                  <span class="country">{{item.country}}</span>
                </div>
              </div>
            </el-card>-->

            <el-card shadow="never" :body-style="{ padding: '0px' }">
              <img class="image" src="../../assets/img/web1x_1号图.png" />
              <div class="info">
                <div
                  class="goods-name"
                >Cartoon Printed Lunch Bag Insulated Thermal Cool Bags Picnic Food Box ……</div>
                <div class="price">
                  <span class="currency">
                    $
                    <span class="value">
                      79.
                      <span class="decimal">99</span>
                    </span>
                  </span>
                  <span class="country">Canada</span>
                </div>
              </div>
            </el-card>
            <el-card shadow="never" :body-style="{ padding: '0px' }">
              <img class="image" src="../../assets/img/web1x_2号图.png" />
              <div class="info">
                <div
                  class="goods-name"
                >Cartoon Printed Lunch Bag Insulated Thermal Cool Bags Picnic Food Box ……</div>
                <div class="price">
                  <span class="currency">
                    $
                    <span class="value">
                      79.
                      <span class="decimal">99</span>
                    </span>
                  </span>
                  <span class="country">Canada</span>
                </div>
              </div>
            </el-card>
            <el-card shadow="never" :body-style="{ padding: '0px' }">
              <img class="image" src="../../assets/img/web1x_3号图.png" />
              <div class="info">
                <div
                  class="goods-name"
                >Cartoon Printed Lunch Bag Insulated Thermal Cool Bags Picnic Food Box ……</div>
                <div class="price">
                  <span class="currency">
                    $
                    <span class="value">
                      79.
                      <span class="decimal">99</span>
                    </span>
                  </span>
                  <span class="country">Canada</span>
                </div>
              </div>
            </el-card>
            <el-card shadow="never" :body-style="{ padding: '0px' }">
              <img class="image" src="../../assets/img/web1x_4号图.png" />
              <div class="info">
                <div
                  class="goods-name"
                >Cartoon Printed Lunch Bag Insulated Thermal Cool Bags Picnic Food Box ……</div>
                <div class="price">
                  <span class="currency">
                    $
                    <span class="value">
                      79.
                      <span class="decimal">99</span>
                    </span>
                  </span>
                  <span class="country">Canada</span>
                </div>
              </div>
            </el-card>
            <el-card shadow="never" :body-style="{ padding: '0px' }">
              <img class="image" src="../../assets/img/web1x_5号图.png" />
              <div class="info">
                <div
                  class="goods-name"
                >Cartoon Printed Lunch Bag Insulated Thermal Cool Bags Picnic Food Box ……</div>
                <div class="price">
                  <span class="currency">
                    $
                    <span class="value">
                      79.
                      <span class="decimal">99</span>
                    </span>
                  </span>
                  <span class="country">Canada</span>
                </div>
              </div>
            </el-card>
            <el-card shadow="never" :body-style="{ padding: '0px' }">
              <img class="image" src="../../assets/img/web1x_6号图.png" />
              <div class="info">
                <div
                  class="goods-name"
                >Cartoon Printed Lunch Bag Insulated Thermal Cool Bags Picnic Food Box ……</div>
                <div class="price">
                  <span class="currency">
                    $
                    <span class="value">
                      79.
                      <span class="decimal">99</span>
                    </span>
                  </span>
                  <span class="country">Canada</span>
                </div>
              </div>
            </el-card>
            <el-card shadow="never" :body-style="{ padding: '0px' }">
              <img class="image" src="../../assets/img/web1x_7号图.png" />
              <div class="info">
                <div
                  class="goods-name"
                >Cartoon Printed Lunch Bag Insulated Thermal Cool Bags Picnic Food Box ……</div>
                <div class="price">
                  <span class="currency">
                    $
                    <span class="value">
                      79.
                      <span class="decimal">99</span>
                    </span>
                  </span>
                  <span class="country">Canada</span>
                </div>
              </div>
            </el-card>
            <el-card shadow="never" :body-style="{ padding: '0px' }">
              <img class="image" src="../../assets/img/web1x_8号图.png" />
              <div class="info">
                <div
                  class="goods-name"
                >Cartoon Printed Lunch Bag Insulated Thermal Cool Bags Picnic Food Box ……</div>
                <div class="price">
                  <span class="currency">
                    $
                    <span class="value">
                      79.
                      <span class="decimal">99</span>
                    </span>
                  </span>
                  <span class="country">Canada</span>
                </div>
              </div>
            </el-card>
            <el-card shadow="never" :body-style="{ padding: '0px' }">
              <img class="image" src="../../assets/img/web1x_9号图.png" />
              <div class="info">
                <div
                  class="goods-name"
                >Cartoon Printed Lunch Bag Insulated Thermal Cool Bags Picnic Food Box ……</div>
                <div class="price">
                  <span class="currency">
                    $
                    <span class="value">
                      79.
                      <span class="decimal">99</span>
                    </span>
                  </span>
                  <span class="country">Canada</span>
                </div>
              </div>
            </el-card>
            <el-card shadow="never" :body-style="{ padding: '0px' }">
              <img class="image" src="../../assets/img/web1x_10号图.png" />
              <div class="info">
                <div
                  class="goods-name"
                >Cartoon Printed Lunch Bag Insulated Thermal Cool Bags Picnic Food Box ……</div>
                <div class="price">
                  <span class="currency">
                    $
                    <span class="value">
                      79.
                      <span class="decimal">99</span>
                    </span>
                  </span>
                  <span class="country">Canada</span>
                </div>
              </div>
            </el-card>
          </div>
        </div>
        <div class="token-eco">
          <div class="headline">
            <span>Token Economy Investment Product</span>
            <el-link :underline="false">
              More
              <i class="el-icon-arrow-right"></i>
            </el-link>
          </div>
          <div class="content">
            <!-- <el-card v-for="item in tokenEco" :key="item.id" :body-style="{ padding: '0px' }">
              <img class="image" :src="item.img" />
              <div class="info">
                <div class="goods-name">P Fashion Tablet Inch Android 8.10 Version Tablet</div>
                <el-progress :percentage="item.progress"></el-progress>
              </div>
            </el-card>-->
            <el-card :body-style="{ padding: '0px' }">
              <img class="image" src="../../assets/img/web1x_Token_1.png" />
              <div class="info">
                <div
                  class="goods-name"
                >Silicone Baking Bakeware Bread Cook Brushes Pastry Oil BBQ Basting Brush Tool Color ……</div>
                <div class="saller">
                  Saller:
                  <span>Giorgio Armani hongkong</span>
                </div>
                <el-progress :percentage="80" :show-text="false"></el-progress>
                <div class="others">
                  <span class="hs-code">
                    HS Code:
                    <span class="code">038190</span>
                  </span>
                  <el-link class="more">More</el-link>
                </div>
              </div>
            </el-card>
            <el-card :body-style="{ padding: '0px' }">
              <img class="image" src="../../assets/img/web1x_Token_2.png" />
              <div class="info">
                <div
                  class="goods-name"
                >Silicone Baking Bakeware Bread Cook Brushes Pastry Oil BBQ Basting Brush Tool Color ……</div>
                <div class="saller">
                  Saller:
                  <span>Giorgio Armani hongkong</span>
                </div>
                <el-progress :percentage="30" :show-text="false"></el-progress>
                <div class="others">
                  <span class="hs-code">
                    HS Code:
                    <span class="code">038190</span>
                  </span>
                  <span class="more">More</span>
                </div>
              </div>
            </el-card>
            <el-card :body-style="{ padding: '0px' }">
              <img class="image" src="../../assets/img/web1x_Token_3.png" />
              <div class="info">
                <div
                  class="goods-name"
                >Silicone Baking Bakeware Bread Cook Brushes Pastry Oil BBQ Basting Brush Tool Color ……</div>
                <div class="saller">
                  Saller:
                  <span>Giorgio Armani hongkong</span>
                </div>
                <el-progress :percentage="50" :show-text="false"></el-progress>
                <div class="others">
                  <span class="hs-code">
                    HS Code:
                    <span class="code">038190</span>
                  </span>
                  <span class="more">More</span>
                </div>
              </div>
            </el-card>
            <el-card :body-style="{ padding: '0px' }">
              <img class="image" src="../../assets/img/web1x_Token_4.png" />
              <div class="info">
                <div
                  class="goods-name"
                >Silicone Baking Bakeware Bread Cook Brushes Pastry Oil BBQ Basting Brush Tool Color ……</div>
                <div class="saller">
                  Saller:
                  <span>Giorgio Armani hongkong</span>
                </div>
                <el-progress :percentage="80" :show-text="false"></el-progress>
                <div class="others">
                  <span class="hs-code">
                    HS Code:
                    <span class="code">038190</span>
                  </span>
                  <span class="more">More</span>
                </div>
              </div>
            </el-card>
          </div>
        </div>
      </div>
    </el-main>

    <el-footer>
      <div class="inner_container">
        <div class="left">
          <div class="links">
            <el-link :underline="false" href="#">Business Center</el-link>
            <el-link :underline="false" href="#">Privacy Policy</el-link>
            <el-link :underline="false" href="#">Terms of Use</el-link>
            <el-link :underline="false" href="#">Copyright Protection</el-link>
            <el-link :underline="false" href="#">Support</el-link>
            <el-link :underline="false" href="#">About E-Chain Mall</el-link>
          </div>
          <p>©️ 2020 ICP Joom(China)</p>
        </div>
        <div class="right">
          <div class="icons">
            <img src="../../assets/img/web1x_app store.png" alt="ios store icon" />
            <img src="../../assets/img/web1x_google play.png" alt="Android store icon" />
          </div>
        </div>
      </div>
    </el-footer>

  </el-container>
</template>

<script>

import Header from '../../components/header/baseHeader.vue'

export default {
  name: "Index",
  components: {
    Header
  },
  data() {
    return {
      bannerList: "",
      eventTag: [],
      recommend: {},
      justForYou: [],
      tokenEco: [],
      direction: "ltr",
      // 对话框
      dialogLoginVisible: false,
      isLogin: false,
      noLogin: true
    }
  },
  methods: {
  },

  // =============== lifecycle functions ===============
  created() {
    // console.log("MockData: ", MockData)
    // console.log("banner: ", this.bannerList[0].url)
  },
}
</script>

<style lang="scss" scoped>

::v-deep .login-dialog {
  padding: 20px 55px 80px 55px;
  box-sizing: border-box;
  border-radius: 10px;
  .el-dialog__body {
    padding: 0;
  }
}


.inner_container {
  width: 1200px;
  margin: 0 auto;
}

.el-header,
.el-main,
.el-footer {
  padding-left: 0 !important;
  padding-right: 0 !important;
}

/* main 内容页 */
.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  padding: 0;
  min-width: 1200px;
  .banner{
    min-width: 1200px;
  }
  .headline {
    font-weight: bolder;
    font-size: 18px;
    display: flex;
    justify-content: space-between;
  }

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }

  .event-tags {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    .tag {
      position: relative;

      .content {
        width: 160px;
        position: absolute;
        top: 40px;
        left: 35px;
        text-align: left;
        color: #eee;
        h3 {
          font-size: 18px;
          font-weight: bolder;
          margin-bottom: 5px;
        }
        p {
          width: 140px;
          font-size: 12px;
          line-height: 15px;
        }
      }
    }
  }

  .recommendations {
    margin-top: 20px;
    .headline {
      margin-bottom: 10px;
      text-align: left;
    }
    .content {
      display: flex;
      justify-content: space-between;

      .left {
        .el-card {
          width: 374px;
          height: 540px;
          position: relative;
          .image {
            width: 100%;
            height: 100%;
            /* display: block; */
          }
          .desc {
            position: absolute;
            top: 225px;
            left: 50px;
            color: #eee;
            .brand {
              font-size: 40px;
              line-height: 70px;
              font-weight: bold;
              font-family: "Noto Sans SC";
            }
            .discount {
              font-size: 65px;
              font-weight: bolder;
            }
          }
        }
      }
      .right {
        width: 822px;
        display: flex;
        flex-wrap: wrap;

        .el-card {
          border: 0;
          /* margin-bottom: 2px; */
          width: 274px;
          height: 269px;
          .image {
            width: 100%;
            height: 100%;
          }
        }
        .el-card:nth-child(4n) {
          margin-right: 0px;
        }
      }
    }
  }

  .just-for-you {
    margin-top: 20px;
    .headline {
      margin-bottom: 10px;
      text-align: left;
    }
    .content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .el-card {
        width: 228px;
        height: 309px;
        margin-bottom: 50px;
        border: none;
        .image {
          width: 228px;
          height: 225px;
        }
        .info {
          .goods-name {
            height: 58px;
            line-height: 20px;
            font-size: 12px;
            text-align: left;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .price {
            height: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .currency {
              .value {
                font-weight: bolder;
                .decimal {
                  font-size: 12px;
                }
              }
            }
            .country {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
  .token-eco {
    margin-top: 20px;
    .headline {
      margin-bottom: 10px;
      text-align: left;
    }
    .content {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .el-card {
        width: 288px;
        height: 372px;
        .image {
          width: 288px;
          height: 188px;
        }
        .info {
          padding: 20px 15px;
          text-align: left;
          font-size: 12px;
          .goods-name {
            height: 58px;
            line-height: 20px;
            text-align: left;
            text-overflow: -o-ellipsis-lastline;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .saller {
            color: #989898;
          }
          .el-progress {
            margin: 20px 0;
            ::v-deep .el-progress-bar__inner {
              background-image: linear-gradient(to right, #f79191, #ff5453);
            }
          }
          .others {
            display: flex;
            justify-content: space-between;
            color: #989898;
          }
        }
      }
    }
  }
}

.dialog-title {
  font-size: 28px;
}
.dialog-btn {
  color: black; // todo....
}
.el-footer {
  background-color: #38597f;
  color: #feffff;
  height: 217px !important;
  text-align: left;
  padding-top: 70px;
  padding-bottom: 34px;
  .inner_container {
    display: flex;
    .left {
      .links {
        width: 746px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 38px;
        .el-link {
          color: #feffff;
        }
      }
    }
    .right {
      margin-left: 294px;
      .icons {
        display: flex;
        flex-direction: column;
        img {
          width: 115px;
          height: 34px;
          margin-bottom: 16px;
        }
      }
    }
  }
}
</style>
