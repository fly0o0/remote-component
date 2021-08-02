<template>
  <section :class="{'shadow': true}">
    <div class="container">
      <CpClose v-bind="$props" />

      <div class="ad"></div>
      <div class="box">
      <div class="light"></div>
        <div class="dialog">
          <div class="name-wrap">
            <CpTitle v-bind="$props" :clickable="true" />
          </div>
          <div class="con"></div>
          <CpButton v-bind="$props"></CpButton>
        </div>
        <div class="smoke"></div>
        <div class="coupon">
          <CpDetail v-bind="$props" :isPic="true"/>
        </div>
      </div>
      <div class="colors"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'coupon-modal-888',
  props: {
    lottery: {
      type: Object,
      required: true
    }
  },
  mounted() {
    console.log('订单')
  }
}
</script>

<style lang="less" scoped>
@topx: 1 / 200rem;

.wd(@w, @h) {
  width: @w *@topx;
  height: @h *@topx;
}
.bg(@url) {
  background-image: url(@url);
  background-size: 100% auto;
  background-repeat: no-repeat;
}
.ps(@t, @l) {
  position: absolute;
  top: @t *@topx;
  left: @l *@topx;
}
.pr(@t, @r) {
  position: absolute;
  top: @t *@topx;
  right: @r *@topx;
}

&.shadow {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10000;

  .container {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    .close {
      z-index: 20;
      position: fixed;
      top: 120 *@topx;
      right: 45 *@topx;
      .wd(60, 60);
      .bg("//yun.dui88.com/tuia/cdn/h5test/img/close.png");
      opacity: 0;
      animation: close-show 0.1s 1.5s forwards;
      @keyframes close-show {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
    }
    .box {
      .ps(0, 0);
      right: 0;
      bottom: 0;
      margin: auto;
      .wd(660, 701);
      transform-origin: center bottom;
      animation: box-show-0 0.6s linear forwards;
      @keyframes box-show-0 {
        0%,
        60%,
        75%,
        90%,
        to {
          animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }
        0% {
          opacity: 0;
          transform: translate3d(0, -3000 *@topx, 0) scaleY(1);
        }
        60% {
          opacity: 1;
          transform: translate3d(0, 0 *@topx, 0) scaleY(0.7);
        }
        75% {
          transform: translate3d(0, 0 *@topx, 0) scaleY(1.2);
        }
        90% {
          transform: translate3d(0, 0 *@topx, 0) scaleY(1);
        }
        to {
          transform: none;
        }
      }
      .light {
        position: absolute;
        top: -220 *@topx;
        left: -40 *@topx;
        opacity: 0;
        .wd(750, 752);
        .bg("//yun.dui88.com/tuia/cdn/h5test/img/light2.png");
        animation: lightShow 0.1s 1.4s linear forwards,
          light-rotate 9s linear infinite;
        @keyframes lightShow {
          to {
            opacity: 1;
          }
        }
        @keyframes light-rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
      .dialog {
        .ps(0, 0);
        right: 0;
        margin: auto;
        width: 621 *@topx;
        height: 634 *@topx;
        background-image: url("//yun.dui88.com/tuia/cdn/h5test/img/sprites.png");
        background-size: 621 *@topx 3170 *@topx;
        background-repeat: no-repeat;
        transform-origin: center bottom;
        animation: dialog-shake 0.5s 0.8s linear forwards,
          dialog-box 0.4s 1.3s steps(1) forwards;
        @keyframes dialog-shake {
          0%,
          30%,
          60% {
            transform: rotate(0deg);
          }
          15% {
            transform: rotate(6deg);
          }
          45% {
            transform: rotate(-6deg);
          }
          80% {
            transform: rotate(0) scaleY(0.7);
          }
          100% {
            transform: rotate(0) scaleY(1);
          }
        }
        @keyframes dialog-box {
          0% {
            background-position-y: 0 *@topx;
            transform: scaleX(1) scaleY(1);
          }
          25% {
            background-position-y: -634 *@topx;
            transform: scaleX(0.9) scaleY(1.15);
          }
          50% {
            background-position-y: -1268 *@topx;
            transform: scaleX(0.95) scaleY(1.08);
          }
          75% {
            background-position-y: -1902 *@topx;
            transform: scaleX(0.98) scaleY(1.04);
          }
          100% {
            background-position-y: -2536 *@topx;
            transform: scaleX(1) scaleY(1);
          }
        }
        .name-wrap {
          text-align: center;
          .name {
            position: relative;
            top: 205 *@topx;
            padding: 4 *@topx 50 *@topx;
            background-color: #ed8117;
            border-radius: 23 *@topx;
            font-size: 24 *@topx;
            line-height: 32 *@topx;
            font-family: "SourceHanSansSC";
            color: #fff;
            font-weight: 400;
            opacity: 0;
            animation: nameShow 0.2s 1.4s linear forwards;
            @keyframes nameShow {
              to {
                opacity: 1;
              }
            }
          }
        }
        .con {
          .wd(276, 103);
          .ps(160, 0);
          right: 0;
          margin: auto;
          .bg("//yun.dui88.com/tuia/cdn/h5test/img/gongheilei.png");
          opacity: 0;
          animation: conMove 0.5s 1.3s linear forwards;
          @keyframes conMove {
            0% {
              transform: translate3d(0, 0, 0) rotate(-6deg);
              opacity: 0;
            }
            50% {
              transform: translate3d(0, -200 *@topx, 0) rotate(-6deg);
              opacity: 1;
            }
            100% {
              transform: translate3d(0, -200 *@topx, 0) rotate(0);
              opacity: 1;
            }
          }
        }
        .btn {
          position: absolute;
          bottom: 26 *@topx;
          left: 0;
          right: 0;
          opacity: 0;
          margin: auto;
          .bg("//yun.dui88.com/tuia/cdn/h5test/img/btn.png");
          .wd(222, 221);
          animation: btnShow 0.2s 1.4s linear forwards,
            btn-scale 0.6s 1.6s linear infinite;
          @keyframes btnShow {
            to {
              bottom: -50 *@topx;
              opacity: 1;
            }
          }
          @keyframes btn-scale {
            0%,
            100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
          }
        }
      }
      .coupon {
        .ps(80, 0);
        right: 0;
        margin: auto;
        .wd(598, 285);
        padding: 0;
        transform: scaleY(0);
        border-radius: 10 *@topx;
        transform-origin: center bottom;
        background-color: #fff;
        border: 6 *@topx solid white;
        border-radius: 10 *@topx;
        overflow: hidden;
        animation: couponShow 0.2s 1.3s linear forwards;
        @keyframes couponShow {
          0% {
            transform: scaleY(0);
          }
          33% {
            transform: scaleY(0.1);
          }
          67% {
            transform: scaleY(0.3);
          }
          100% {
            transform: scaleY(1);
          }
        }
        img {
          display: block;
          .wd(598, 285);
        }
      }
      .smoke {
        pointer-events: none;
        width: 300 *@topx;
        height: 300 *@topx;
        .ps(350, 0);
        transform: scale(2);
        right: 0;
        margin: auto;
        background-image: url("//yun.dui88.com/tuia/cdn/h5test/img/smoke.png");
        background-size: 4200 *@topx 300 *@topx;
        background-repeat: no-repeat;
        animation-name: keyframes-smoke;
        animation-duration: 0.5s;
        animation-delay: 0.25s;
        opacity: 0;
        animation-iteration-count: forwards;
        animation-fill-mode: forwards;
        animation-timing-function: steps(1);

        @keyframes keyframes-smoke {
          0% {
            opacity: 1;
            width: 300 *@topx;
            height: 300 *@topx;
            background-image: url("//yun.dui88.com/tuia/cdn/h5test/img/smoke.png");
            background-size: 4200 *@topx 300 *@topx;
          }

          7.14% {
            background-position: -300 *@topx 0 *@topx;
          }

          14.29% {
            background-position: -600 *@topx 0 *@topx;
          }

          21.43% {
            background-position: -900 *@topx 0 *@topx;
          }

          28.57% {
            background-position: -1200 *@topx 0 *@topx;
          }

          35.71% {
            background-position: -1500 *@topx 0 *@topx;
          }

          42.86% {
            background-position: -1800 *@topx 0 *@topx;
          }

          50.00% {
            background-position: -2100 *@topx 0 *@topx;
          }

          57.14% {
            background-position: -2400 *@topx 0 *@topx;
          }

          64.29% {
            background-position: -2700 *@topx 0 *@topx;
          }

          71.43% {
            background-position: -3000 *@topx 0 *@topx;
          }

          78.57% {
            background-position: -3300 *@topx 0 *@topx;
          }

          85.71% {
            background-position: -3600 *@topx 0 *@topx;
            opacity: 1;
          }

          92.86%,
          100% {
            background-position: -3900 *@topx 0 *@topx;
            opacity: 0;
          }
        }
      }
    }
    .colors {
      pointer-events: none;
      width: 750 *@topx;
      height: 800 *@topx;
      transform: scale(1.6);
      .ps(200, 0);
      background-image: url("//yun.dui88.com/tuia/cdn/h5test/img/icons.png");
      background-size: 8250 *@topx 800 *@topx;
      background-repeat: no-repeat;
      animation-name: keyframes-icons;
      animation-duration: 0.6s;
      animation-delay: 1.3s;
      opacity: 0;
      animation-iteration-count: forwards;
      animation-fill-mode: forwards;
      animation-timing-function: steps(1);
      @keyframes keyframes-icons {
        0% {
          width: 750 *@topx;
          height: 800 *@topx;
          background-image: url("//yun.dui88.com/tuia/cdn/h5test/img/icons.png");
          background-size: 8250 *@topx 800 *@topx;
          opacity: 1;
        }

        9.09% {
          background-position: -750 *@topx 0 *@topx;
        }

        18.18% {
          background-position: -1500 *@topx 0 *@topx;
        }

        27.27% {
          background-position: -2250 *@topx 0 *@topx;
        }

        36.36% {
          background-position: -3000 *@topx 0 *@topx;
        }

        45.45% {
          background-position: -3750 *@topx 0 *@topx;
        }

        54.55% {
          background-position: -4500 *@topx 0 *@topx;
        }

        63.64% {
          background-position: -5250 *@topx 0 *@topx;
        }

        72.73% {
          background-position: -6000 *@topx 0 *@topx;
        }

        81.82% {
          background-position: -6750 *@topx 0 *@topx;
        }

        90.91%,
        100% {
          background-position: -7500 *@topx 0 *@topx;
          opacity: 0;
        }
      }
    }
  }
}
</style>