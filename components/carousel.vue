<template>
  <div>
    <div id="carousel" class="carousel pd-t20 pd-b20 align-center cm0">
      <figure v-hogehoge="slide" class="myfigure cm0">
        <img
          class="img_list"
          src="https://via.placeholder.com/1920x1080/27709b/ffffff?text=1"
        /><img
          class="img_list"
          src="https://via.placeholder.com/1920x1080/27709b/ffffff?text=2"
        /><img
          class="img_list"
          src="https://via.placeholder.com/1920x1080/27709b/ffffff?text=3"
        /><img
          class="img_list"
          src="https://via.placeholder.com/1920x1080/27709b/ffffff?text=4"
        /><img
          class="img_list"
          src="https://via.placeholder.com/1920x1080/27709b/ffffff?text=5"
        />
      </figure>
    </div>
    <!-- <div class="space"></div> -->
    <section class="Hero">
      <div class="inner">
        <!--カルーセル-->
        <div
          id="pic"
          class="carousel align-center"
          v-slide="slide"
          v-slide_stop="slideStop"
        >
          <div class="carousel__inner">
            <div class="pic" v-for="pic in pics" :key="pic.id">
              <a :href="pic.link" class="">
                <figure>
                  <img :src="pic.img" :alt="pic.alt" />
                </figure>
                <div>
                  <p>{{ pic.caption }}</p>
                </div>
              </a>
            </div>
          </div>

          <div class="slide_direction_btn grid">
            <div class="col grid flex-justify-sb">
              <a class="left_btn d-ib"><i class="fas fa-angle-left"></i></a>
              <a class="right_btn d-ib"><i class="fas fa-angle-right"></i></a>
            </div>
          </div>

          <div class="slide_marker">
            <a
              href="#"
              class="marker_btn d-ib"
              v-for="pic in pics"
              :data-key="pic.id"
              :key="pic.id"
              :class="{ now: slideActive === pic.id }"
              >●</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    /*simulations*/
    const demo_width = 500;
    const demo_length = 5;
    let demo_allWidth = demo_width * demo_length;
    let demo_limit = [];
    let demo_direction = -1;
    let demo_move;
    let demo_start = true;
    let demo_count = 0;
    let demo_ary = [];
    let demo_pre_ary = [];
    let demo_positionX = 0;
    let demo_distance = demo_direction * demo_width;

    //リミット
    for (let i = 0; i < demo_length; i++) {
      demo_limit[i] = demo_direction * demo_width * (i + 1);
    }
    console.log(demo_limit); //limit

    let func_demo = () => {
      for (let i = 0; i < demo_length; i++) {
        if (demo_start === true) {
          demo_ary[i] = 0;
        }

        demo_ary[i] += demo_direction * demo_width;

        if (demo_limit[i] === demo_ary[i]) {
          demo_ary[i] = demo_allWidth - demo_width;
        }
      }

      demo_start = false;
      console.log(demo_ary);
    };
    let demo = setInterval(func_demo, 2000);

    //
    // for(let i = 0; i < demo_length ; i++) {

    //   let demo_pre_ary = []

    //      for(let k = 0; k < demo_length ; k++) {
    //        if(demo_start === true) {
    //          console.log("最初だけ実行")
    //        }
    //        //リミットに該当
    //        if(i === k) {
    //          //リミットのindexが0の場合
    //          if(k === 0) {
    //            demo_pre_ary[k] = -(demo_direction * demo_width * (demo_length - 1))
    //            console.log(k +":"+ i)
    //          } else {
    //            //それ以外
    //            demo_pre_ary[k] = -(demo_direction * (demo_allWidth - demo_width))
    //          }
    //        } else {
    //          demo_pre_ary[k]　 = demo_direction * demo_width * i
    //          console.log(demo_ary)
    //        }
    //        demo_start = false

    //     }

    //   demo_ary[i] = demo_pre_ary
    // }
    //console.log(demo_ary)

    // let demo_func = () => {
    //   let demo_pre_ary = []
    //   for(let i = 0; i < demo_length ; i++) {

    //     demo_move = -demo_width * demo_count

    //     demo_pre_ary.push(demo_move)
    //   }
    //   demo_count ++
    //   console.log(demo_pre_ary)
    // }

    //setInterval(demo_func, 2000)
    ////////////////////////////////////////////////////////////
    new Vue({
      el: "#carousel",
      data: {
        width: 0,
        element: null,
        imgObj: {},
        flag: false,
      },
      created: function () {
        //setInterval(this.slide, 1000)
      },
      directives: {
        hogehoge: {
          inserted: function (el, binding, evt) {
            binding.value(evt, el);
          },
        },
      },
      methods: {
        slide(evt, el) {
          let aa = function () {
            if (Object.keys(bb).length !== 0) {
            }
          };

          //slide実施
          let count = 0;
          let bb = function (dd) {
            this.flag = false;
            let xx = -260;
            // let X = 9

            //マトリックス作成
            let elNum = dd.length; //画像の個数
            let allWidth = xx * elNum; //画像群の横幅
            let limit = [];

            for (let i = 0; i < elNum; i++) {
              limit[i] = xx * (i + 1);
            }
            let hh = false;

            //  setIntervalで実施
            let cc = () => {
              for (let k of Object.keys(dd)) {
                //k = Number(k)
                if (hh === false) {
                  dd[k].xx = 0;
                }

                if (dd[k].xx === limit[k]) {
                  if (dd[k].xx === -260) {
                    dd[k].xx = 780;
                  } else {
                    dd[k].xx += 1040;
                  }
                  dd[k].setAttribute(
                    "style",
                    `transform: translateX(${dd[k].xx}px)`
                  );
                } else {
                  dd[k].xx -= 260;
                  dd[k].setAttribute(
                    "style",
                    `transition: all .5s; transform: translateX(${dd[k].xx}px)`
                  );
                }
              }

              hh = true;
              count += 1;
            };

            setInterval(cc, 2000);
          };
          bb(el.children);
        },
      },
    });

    /*
参考
Vue.jsで直接DOM操作 したい時のTips - Speaker Deck 
https://speakerdeck.com/soichirokatsuki/vue-dot-jsdezhi-jie-domcao-zuo-sitaishi-falsetips?slide=8
*/

    Vue.directive("slide", {
      inserted: function (el, binding, evt) {
        binding.value(el, evt);
      },
    });

    Vue.directive("slide_stop", {
      inserted: function (el, binding, evt) {
        let f = function (el) {
          binding.value(el, evt);
        };
        window.addEventListener("mouseover", f);
      },
    });

    new Vue({
      el: "#pic",
      data: {
        pics: [
          {
            id: 1,
            link: "https://google.com",
            img: "https://via.placeholder.com/640x390/27709b/ffffff?text=1",
            alt: "test",
            caption:
              "【いももちレシピ】チーズ、みたらしだれなど人気アレンジも必見！",
          },
          {
            id: 2,
            link: "https://google.com",
            img: "https://via.placeholder.com/640x390/27709b/ffffff?text=2",
            alt: "test",
            caption:
              "【いももちレシピ】チーズ、みたらしだれなど人気アレンジも必見！",
          },
          {
            id: 3,
            link: "https://google.com",
            img: "https://via.placeholder.com/640x390/27709b/ffffff?text=3",
            alt: "test",
            caption:
              "【いももちレシピ】チーズ、みたらしだれなど人気アレンジも必見！",
          },
          {
            id: 4,
            link: "https://google.com",
            img: "https://via.placeholder.com/640x390/27709b/ffffff?text=4",
            alt: "test",
            caption:
              "【いももちレシピ】チーズ、みたらしだれなど人気アレンジも必見！",
          },
          {
            id: 5,
            link: "https://google.com",
            img: "https://via.placeholder.com/640x390/27709b/ffffff?text=5",
            alt: "test",
            caption:
              "【いももちレシピ】チーズ、みたらしだれなど人気アレンジも必見！",
          },
          {
            id: 6,
            link: "https://google.com",
            img: "https://via.placeholder.com/640x390/27709b/ffffff?text=6",
            alt: "test",
            caption:
              "【いももちレシピ】チーズ、みたらしだれなど人気アレンジも必見！",
          },
          {
            id: 7,
            link: "https://google.com",
            img: "https://via.placeholder.com/640x390/27709b/ffffff?text=7",
            alt: "test",
            caption:
              "【いももちレシピ】チーズ、みたらしだれなど人気アレンジも必見！",
          },
          {
            id: 8,
            link: "https://google.com",
            img: "https://via.placeholder.com/640x390/27709b/ffffff?text=8",
            alt: "test",
            caption:
              "【いももちレシピ】チーズ、みたらしだれなど人気アレンジも必見！",
          },
          {
            id: 9,
            link: "https://google.com",
            img: "https://via.placeholder.com/640x390/27709b/ffffff?text=9",
            alt: "test",
            caption:
              "【いももちレシピ】チーズ、みたらしだれなど人気アレンジも必見！",
          },
        ],
        pics_width: 640,
        pics_margin: 10,
        positionX: 0,
        defaultDirection: 1,
        now: false,
        slideActive: 5,
        fl_slideStop: null,
        flg_default: true,
        slidePositionArray: [],
        goLeftorRight: false,
      },
      computed: {
        elNum() {
          //画像の個数
          return this.pics.length;
        },
        picsWidthIncludeMargin() {
          //マージン含めた画像の横幅
          return this.pics_width + this.pics_margin * 2;
        },
        allWidth() {
          //画像群の横幅
          return (this.pics_width + this.pics_margin * 2) * this.pics.length;
        },
      },
      methods: {
        slide(el, evt) {
          //slideDirection = 1
          let parentPicsElm = el.querySelector(".carousel__inner"); //画像のエレメントを格elmに格納
          let slideLeft = el.querySelector(".left_btn");
          let slideRight = el.querySelector(".right_btn");
          let slideMarker = Array.from(
            document.querySelectorAll(".marker_btn")
          );

          //slide実施
          let main = (pics) => {
            //slide個別の位置
            let limit = [];
            let slideDirection = this.defaultDirection; //スライドのデフォルト方向をループ内で切り替わる変数に代入

            for (let i = 0; i < this.elNum; i++) {
              limit[i] = slideDirection * this.picsWidthIncludeMargin * (i + 1);
            }

            if (this.defaultDirection === 1) {
              limit.reverse();
            }

            let ImgSwitch = false;
            let lkk = 0;
            let rkk = 0;

            //let demo_kk = 0

            //   console.log(limit)
            let slideMain = () => {
              let k = 0; //リミット用
              let kk = 0; //スライドループ用
              for (let i = 0; i < this.elNum; i++) {
                //右方向の処理
                if (slideDirection === 1) {
                  if (rkk > 0) {
                    limit.reverse();
                    limit = limit.map(function (inverted) {
                      return -inverted;
                    });
                    rkk = 0;
                  }

                  if (this.defaultDirection === -1 && lkk === 0) {
                    limit.reverse();
                    limit = limit.map(function (inverted) {
                      return -inverted;
                    });
                    lkk++;
                  }
                  if (k === 0) {
                    k = this.elNum - 1;
                  } else {
                    k--;
                  }
                  kk = this.elNum - 1;
                } else {
                  if (lkk > 0) {
                    limit.reverse();
                    limit = limit.map(function (inverted) {
                      return -inverted;
                    });
                    lkk = 0;
                  }

                  if (this.defaultDirection === 1 && rkk === 0) {
                    limit.reverse();
                    limit = limit.map(function (inverted) {
                      return -inverted;
                    });
                    rkk++;
                  }

                  k = i;
                }

                //初回
                if (this.flg_default === true) {
                  this.slidePositionArray[k] = 0;
                }

                //移動座標をプラス
                //console.log(k + "からの: " + this.slidePositionArray[k])
                let tmp = this.slidePositionArray[k];
                this.slidePositionArray[k] +=
                  slideDirection * this.picsWidthIncludeMargin;
                tmp = this.slidePositionArray[k] - tmp;
                //console.log(k + "の移動距離: " + tmp)

                if (
                  slideDirection === 1 &&
                  limit[k] < this.slidePositionArray[k]
                ) {
                  let amount = this.slidePositionArray[k] - limit[k];
                  this.slidePositionArray[k] =
                    this.allWidth - this.picsWidthIncludeMargin + amount;
                  //console.log(this.slidePositionArray[k] + "上乗せ")
                } else if (
                  slideDirection === -1 &&
                  limit[k] > this.slidePositionArray[k]
                ) {
                  let amount = this.slidePositionArray[k] + limit[k];
                  this.slidePositionArray[k] = -(
                    this.allWidth -
                    this.picsWidthIncludeMargin +
                    amount
                  );
                  //console.log(this.slidePositionArray[k] + "上乗せ")
                }

                //リミットチェック
                if (limit[k] === this.slidePositionArray[k]) {
                  if (k === kk) {
                    //0

                    this.slidePositionArray[k] =
                      -slideDirection *
                      (this.allWidth - this.picsWidthIncludeMargin);
                  } else {
                    this.slidePositionArray[k] =
                      -slideDirection *
                      (this.allWidth - this.picsWidthIncludeMargin * (i + 1));
                  }
                  //リミットからの移動はtransitionなし
                  pics[k].setAttribute(
                    "style",
                    `transform: translateX(${this.slidePositionArray[k]}px)`
                  );
                } else {
                  //移動
                  pics[k].setAttribute(
                    "style",
                    `transition: all .5s; transform: translateX(${this.slidePositionArray[k]}px)`
                  );
                }
              }

              //slide marker
              if (slideDirection === -1) {
                if (this.slideActive === Object.keys(pics).length) {
                  this.slideActive = 0;
                }
                this.slideActive += 1;
              } else {
                if (this.slideActive === 0) {
                  this.slideActive = Object.keys(pics).length;
                } else {
                  if (this.slideActive === 1) {
                    this.slideActive = Object.keys(pics).length + 1;
                  }
                  this.slideActive -= 1;
                }
              }

              this.flg_default = false;
              slideDirection = this.defaultDirection; //方向を切り替えても最後に戻す
            };

            let centering = () => {
              let browserHalfWidth = window.innerWidth / 2;
              let CarouselInnerWidth = el.clientWidth / 2;
              let defaultPosition = -(CarouselInnerWidth - browserHalfWidth);
              el.setAttribute(
                "style",
                `transform: translateX(${defaultPosition}px)`
              );
            };

            //マウスオーバー、アウトでスライドonoff
            let slideStop = () => {
              clearInterval(this.fl_slideStop);
            };
            let slideStart = () => {
              this.fl_slideStop = setInterval(slideMain, 2000);
            };

            //右へ1つスライド
            let slideL = () => {
              slideDirection = 1;
              slideMain();
            };
            //左へ1つスライド
            let slideR = () => {
              slideDirection = -1;
              slideMain();
            };

            let slideMarkers = (evt) => {
              //現在の場所からクリックしたところの差分
              let amount = Number(evt.target.dataset.key) - this.slideActive;

              let count = 0;

              let slideTimes = setInterval(() => {
                if (amount > 0) {
                  slideDirection = -1;
                  count++;
                } else {
                  slideDirection = 1;
                  count--;
                }

                if (amount === count) {
                  clearInterval(slideTimes);
                  count = 0;
                }
                slideMain();
                console.log(amount);
              }, 100);
            };

            el.parentNode.addEventListener("mouseover", slideStop); //バナーにマウスオーバーでスライドストップ
            el.parentNode.addEventListener("mouseout", slideStart); //バナーにマウスアウトでスライド再開
            slideLeft.addEventListener("click", slideL);
            slideRight.addEventListener("click", slideR);
            slideMarker.forEach((slideMarke) =>
              slideMarke.addEventListener("click", slideMarkers)
            );

            this.fl_slideStop = setInterval(slideMain, 2000);
            setInterval(centering, 100);
          };
          main(parentPicsElm.children);
        },
        slideStop(el, evt) {},
      },
    });
  },
};
</script>

<style scoped>
/*============================================================================*/
/*============================================================================*/
.is_theme01 {
  background-color: #008cba;
  color: #fafafa;
}

.is_theme02 {
  background-color: #52d4fe;
  color: #fafafa;
}

.is_theme03 {
  background-color: #333333;
  color: #fafafa;
}

.is_theme04 {
  background-color: #f3f6f9;
  color: #333333;
}

.is_theme05 {
  background-color: #657382;
  color: #fafafa;
}

.is_theme06 {
  background-color: #fafafa;
  color: #333333;
}

.fw-normal {
  font-weight: normal;
}

.fw-bold {
  font-weight: bold;
}

body {
  padding-top: 50px;
  background-color: #1d364c;
  color: #fff;
  height: 100vh;
  line-height: 0;
}

.space {
  height: 200px;
}

.carousel img {
  width: 200px;
  margin: 0 30px;
}
.carousel .myfigure {
  white-space: nowrap;
  width: 780px;
  margin-left: auto;
  margin-right: auto;
}

.Hero {
  padding: 40px 0px;
  padding: 4rem 0rem;
  background-color: #fcf8f1;
}
.Hero .carousel {
  width: 10000px;
  width: 1000rem;
}
.Hero .carousel__inner {
  overflow: hidden;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: inline-block;
}
.Hero .carousel__inner .pic {
  display: inline-block;
}
.Hero .carousel__inner img {
  width: 640px;
  width: 64rem;
  height: 390px;
  height: 39rem;
  margin: 0px 10px;
  margin: 0rem 1rem;
}
.Hero .slide_direction_btn {
  width: 620px;
  width: 62rem;
  position: absolute;
  top: 180px;
  left: 50%;
  transform: translateX(-310px);
  margin-left: auto;
  margin-right: auto;
}
.Hero .slide_direction_btn .left_btn,
.Hero .slide_direction_btn .right_btn {
  padding-top: 10px;
  width: 50px;
  width: 5rem;
  height: 50px;
  height: 5rem;
  font-size: 30px;
  font-size: 3rem;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.9;
}
.Hero .slide_marker {
  margin-top: 10px;
}
.Hero .slide_marker a {
  color: #333333;
}
.Hero .slide_marker .now {
  color: #008cba;
}
.Hero .slide_marker .marker_btn {
  width: 20px;
  width: 2rem;
  height: 20px;
  height: 2rem;
}
</style>