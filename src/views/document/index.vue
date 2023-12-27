<template>
  <div class="document-page">

    <!-- listdown-leave-active listdown-leave-to -->

    <div
      class="value"
      :class="
        [
          {'listdown-leave-active':isShow},
          {'listdown-leave-to':isShow},
        ]
      "
      @click="isShowChange"
    >101</div>
    <br />
    <br />
    <br />
    <br />
    <div class="flex-box">
      <TextButton text="暗示" :active="true" />
      <TextButton text="暗示" />
      <TextButton text="暗示" />
      <TextButton text="暗示" />
      <TextButton text="暗示" />
      <TextButton text="暗示" />
      <TextButton text="暗示" />
      <TextButton text="暗示" />
      <TextButton text="暗示" />
      <TextButton text="暗示" />
    </div>
    <br />
    <br />
    <br />
    <div class="flex-box">
      <ImageButton text="暗示" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" :active="true" />
      <ImageButton text="暗示" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" count="22" />
      <ImageButton text="暗示" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" count="22" />
      <ImageButton text="暗示" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" count="22" />
      <ImageButton text="暗示" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" count="22" />
      <ImageButton text="暗示" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" count="22" />
      <ImageButton text="暗示" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" count="22" />
      <ImageButton text="暗示" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" count="22" />
      <ImageButton text="暗示" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" count="22" />
    </div>
    <br />
    <br />
    <div class="flex-box">
      <SportsButton text="FT" :active="true" />
      <SportsButton text="FT" />
      <SportsButton text="FT" />
      <SportsButton text="FT" />
      <SportsButton text="FT" />
      <SportsButton text="FT" />
      <SportsButton text="FT" />
      <SportsButton text="FT" />
      <SportsButton text="FT" />
      <SportsButton text="FT" />
      <SportsButton text="FT" />
    </div>
    <br />
    <br />

    <br />
    <br />
    <br />

    <i class="iconfont icon-a-americanfootball"></i>
    <br />
    <br />
    <br />
    <br />

    <van-button type="primary">主要按钮</van-button>
    <van-button type="success">成功按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>

    <br />
    <br />
    <br /><br />
    <br />
    <br /><br />
    <br />
    <br /><br />
    <br />
    <br /><br />
    <br />
    <br /><br />
    <br />
    <br />
    <div class="main">
      <h1 class="logo"><a href="https://www.iconfont.cn/" title="iconfont 首页" target="_blank">
        <img width="200" src="https://img.alicdn.com/imgextra/i3/O1CN01Mn65HV1FfSEzR6DKv_!!6000000000514-55-tps-228-59.svg">

      </a></h1>
      <div class="nav-tabs">
        <ul id="tabs" class="dib-box">
          <li class="dib active"><span>Unicode</span></li>
          <li class="dib"><span>Font class</span></li>
          <li class="dib"><span>Symbol</span></li>
        </ul>

      </div>
      <div class="tab-container">
        <div class="content unicode" style="display: block;">
          <ul class="icon_lists dib-box">

            <li class="dib">
              <span class="icon iconfont">&#xe601;</span>
              <div class="name">american football</div>
              <div class="code-name">&amp;#xe601;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe602;</span>
              <div class="name">boxing</div>
              <div class="code-name">&amp;#xe602;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe603;</span>
              <div class="name">hockey</div>
              <div class="code-name">&amp;#xe603;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe604;</span>
              <div class="name">cricket</div>
              <div class="code-name">&amp;#xe604;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe605;</span>
              <div class="name">football</div>
              <div class="code-name">&amp;#xe605;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe606;</span>
              <div class="name">baseball</div>
              <div class="code-name">&amp;#xe606;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe607;</span>
              <div class="name">handball</div>
              <div class="code-name">&amp;#xe607;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe608;</span>
              <div class="name">gaming</div>
              <div class="code-name">&amp;#xe608;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe609;</span>
              <div class="name">beach volleyball</div>
              <div class="code-name">&amp;#xe609;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe60a;</span>
              <div class="name">live-icon-1</div>
              <div class="code-name">&amp;#xe60a;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe60b;</span>
              <div class="name">pingpong</div>
              <div class="code-name">&amp;#xe60b;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe60c;</span>
              <div class="name">OP_BM</div>
              <div class="code-name">&amp;#xe60c;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe60d;</span>
              <div class="name">BT</div>
              <div class="code-name">&amp;#xe60d;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe60e;</span>
              <div class="name">BK</div>
              <div class="code-name">&amp;#xe60e;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe60f;</span>
              <div class="name">FT</div>
              <div class="code-name">&amp;#xe60f;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe610;</span>
              <div class="name">indoor soccer</div>
              <div class="code-name">&amp;#xe610;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe611;</span>
              <div class="name">snooker</div>
              <div class="code-name">&amp;#xe611;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe612;</span>
              <div class="name">volleyball</div>
              <div class="code-name">&amp;#xe612;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe613;</span>
              <div class="name">water polo</div>
              <div class="code-name">&amp;#xe613;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe614;</span>
              <div class="name">live</div>
              <div class="code-name">&amp;#xe614;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe615;</span>
              <div class="name">house</div>
              <div class="code-name">&amp;#xe615;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe616;</span>
              <div class="name">home</div>
              <div class="code-name">&amp;#xe616;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe617;</span>
              <div class="name">champion</div>
              <div class="code-name">&amp;#xe617;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe618;</span>
              <div class="name">calendar</div>
              <div class="code-name">&amp;#xe618;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe619;</span>
              <div class="name">推荐- icon-1</div>
              <div class="code-name">&amp;#xe619;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe61a;</span>
              <div class="name">championMatch</div>
              <div class="code-name">&amp;#xe61a;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe61b;</span>
              <div class="name">Hot</div>
              <div class="code-name">&amp;#xe61b;</div>
            </li>

            <li class="dib">
              <span class="icon iconfont">&#xe61c;</span>
              <div class="name">time</div>
              <div class="code-name">&amp;#xe61c;</div>
            </li>

          </ul>
          <div class="article markdown">
            <h2 id="unicode-">Unicode 引用</h2>
            <hr>

            <p>Unicode 是字体在网页端最原始的应用方式，特点是：</p>
            <ul>
              <li>支持按字体的方式去动态调整图标大小，颜色等等。</li>
              <li>默认情况下不支持多色，直接添加多色图标会自动去色。</li>
            </ul>
            <blockquote>
              <p>注意：新版 iconfont 支持两种方式引用多色图标：SVG symbol 引用方式和彩色字体图标模式。（使用彩色字体图标需要在「编辑项目」中开启「彩色」选项后并重新生成。）</p>
            </blockquote>
            <p>Unicode 使用步骤如下：</p>
            <h3 id="-font-face">第一步：拷贝项目下面生成的 <code>@font-face</code></h3>
            <pre><code
class="language-css"
>@font-face {
  font-family: 'iconfont';
  src: url('iconfont.ttf?t=1702990919037') format('truetype');
}
</code></pre>
            <h3 id="-iconfont-">第二步：定义使用 iconfont 的样式</h3>
            <pre><code
class="language-css"
>.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</code></pre>
            <h3 id="-">第三步：挑选相应图标并获取字体编码，应用于页面</h3>
            <pre>
<code
class="language-html"
>&lt;span class="iconfont"&gt;&amp;#x33;&lt;/span&gt;
</code></pre>
            <blockquote>
              <p>"iconfont" 是你项目下的 font-family。可以通过编辑项目查看，默认是 "iconfont"。</p>
            </blockquote>
          </div>
        </div>
        <div class="content font-class">
          <ul class="icon_lists dib-box">

            <li class="dib">
              <span class="icon iconfont icon-a-americanfootball"></span>
              <div class="name">
                american football
              </div>
              <div class="code-name">.icon-a-americanfootball
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-boxing"></span>
              <div class="name">
                boxing
              </div>
              <div class="code-name">.icon-boxing
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-hockey"></span>
              <div class="name">
                hockey
              </div>
              <div class="code-name">.icon-hockey
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-cricket"></span>
              <div class="name">
                cricket
              </div>
              <div class="code-name">.icon-cricket
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-football"></span>
              <div class="name">
                football
              </div>
              <div class="code-name">.icon-football
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-baseball"></span>
              <div class="name">
                baseball
              </div>
              <div class="code-name">.icon-baseball
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-handball"></span>
              <div class="name">
                handball
              </div>
              <div class="code-name">.icon-handball
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-gaming"></span>
              <div class="name">
                gaming
              </div>
              <div class="code-name">.icon-gaming
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-a-beachvolleyball"></span>
              <div class="name">
                beach volleyball
              </div>
              <div class="code-name">.icon-a-beachvolleyball
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-live-icon-1"></span>
              <div class="name">
                live-icon-1
              </div>
              <div class="code-name">.icon-live-icon-1
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-pingpong"></span>
              <div class="name">
                pingpong
              </div>
              <div class="code-name">.icon-pingpong
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-a-yumaoqiu-icon-1"></span>
              <div class="name">
                OP_BM
              </div>
              <div class="code-name">.icon-a-yumaoqiu-icon-1
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-a-lanqiu-icon-1"></span>
              <div class="name">
                BT
              </div>
              <div class="code-name">.icon-a-lanqiu-icon-1
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-a-wangqiu-icon-1"></span>
              <div class="name">
                BK
              </div>
              <div class="code-name">.icon-a-wangqiu-icon-1
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-zuqiu-icon-1"></span>
              <div class="name">
                FT
              </div>
              <div class="code-name">.icon-zuqiu-icon-1
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-a-indoorsoccer"></span>
              <div class="name">
                indoor soccer
              </div>
              <div class="code-name">.icon-a-indoorsoccer
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-snooker"></span>
              <div class="name">
                snooker
              </div>
              <div class="code-name">.icon-snooker
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-volleyball"></span>
              <div class="name">
                volleyball
              </div>
              <div class="code-name">.icon-volleyball
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-a-waterpolo"></span>
              <div class="name">
                water polo
              </div>
              <div class="code-name">.icon-a-waterpolo
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-a-dashibei-icon-22x"></span>
              <div class="name">
                live
              </div>
              <div class="code-name">.icon-a-dashibei-icon-22x
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-a-shouyeicon2x"></span>
              <div class="name">
                house
              </div>
              <div class="code-name">.icon-a-shouyeicon2x
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-a-tiyu-icon-12x"></span>
              <div class="name">
                home
              </div>
              <div class="code-name">.icon-a-tiyu-icon-12x
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-guanjunjingcai-2"></span>
              <div class="name">
                champion
              </div>
              <div class="code-name">.icon-guanjunjingcai-2
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-a-shijianpaixu-icon-1"></span>
              <div class="name">
                calendar
              </div>
              <div class="code-name">.icon-a-shijianpaixu-icon-1
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-a-tuijian-icon-1"></span>
              <div class="name">
                推荐- icon-1
              </div>
              <div class="code-name">.icon-a-tuijian-icon-1
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-a-guanjunsai-icon-1"></span>
              <div class="name">
                championMatch
              </div>
              <div class="code-name">.icon-a-guanjunsai-icon-1
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-a-rebo-icon-1"></span>
              <div class="name">
                Hot
              </div>
              <div class="code-name">.icon-a-rebo-icon-1
              </div>
            </li>

            <li class="dib">
              <span class="icon iconfont icon-a-xuanzeshijian-icon"></span>
              <div class="name">
                time
              </div>
              <div class="code-name">.icon-a-xuanzeshijian-icon
              </div>
            </li>

          </ul>
          <div class="article markdown">
            <h2 id="font-class-">font-class 引用</h2>
            <hr>

            <p>font-class 是 Unicode 使用方式的一种变种，主要是解决 Unicode 书写不直观，语意不明确的问题。</p>
            <p>与 Unicode 使用方式相比，具有如下特点：</p>
            <ul>
              <li>相比于 Unicode 语意明确，书写更直观。可以很容易分辨这个 icon 是什么。</li>
              <li>因为使用 class 来定义图标，所以当要替换图标时，只需要修改 class 里面的 Unicode 引用。</li>
            </ul>
            <p>使用步骤如下：</p>
            <h3 id="-fontclass-">第一步：引入项目下面生成的 fontclass 代码：</h3>
            <pre><code class="language-html">&lt;link rel="stylesheet" href="./iconfont.css"&gt;
</code></pre>
            <h3 id="-">第二步：挑选相应图标并获取类名，应用于页面：</h3>
            <pre><code class="language-html">&lt;span class="iconfont icon-xxx"&gt;&lt;/span&gt;
</code></pre>
            <blockquote>
              <p>"
                iconfont" 是你项目下的 font-family。可以通过编辑项目查看，默认是 "iconfont"。</p>
            </blockquote>
          </div>
        </div>
        <div class="content symbol">
          <ul class="icon_lists dib-box">

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-a-americanfootball"></use>
              </svg>
              <div class="name">american football</div>
              <div class="code-name">#icon-a-americanfootball</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-boxing"></use>
              </svg>
              <div class="name">boxing</div>
              <div class="code-name">#icon-boxing</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-hockey"></use>
              </svg>
              <div class="name">hockey</div>
              <div class="code-name">#icon-hockey</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-cricket"></use>
              </svg>
              <div class="name">cricket</div>
              <div class="code-name">#icon-cricket</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-football"></use>
              </svg>
              <div class="name">football</div>
              <div class="code-name">#icon-football</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-baseball"></use>
              </svg>
              <div class="name">baseball</div>
              <div class="code-name">#icon-baseball</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-handball"></use>
              </svg>
              <div class="name">handball</div>
              <div class="code-name">#icon-handball</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-gaming"></use>
              </svg>
              <div class="name">gaming</div>
              <div class="code-name">#icon-gaming</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-a-beachvolleyball"></use>
              </svg>
              <div class="name">beach volleyball</div>
              <div class="code-name">#icon-a-beachvolleyball</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-live-icon-1"></use>
              </svg>
              <div class="name">live-icon-1</div>
              <div class="code-name">#icon-live-icon-1</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-pingpong"></use>
              </svg>
              <div class="name">pingpong</div>
              <div class="code-name">#icon-pingpong</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-a-yumaoqiu-icon-1"></use>
              </svg>
              <div class="name">OP_BM</div>
              <div class="code-name">#icon-a-yumaoqiu-icon-1</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-a-lanqiu-icon-1"></use>
              </svg>
              <div class="name">BT</div>
              <div class="code-name">#icon-a-lanqiu-icon-1</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-a-wangqiu-icon-1"></use>
              </svg>
              <div class="name">BK</div>
              <div class="code-name">#icon-a-wangqiu-icon-1</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-zuqiu-icon-1"></use>
              </svg>
              <div class="name">FT</div>
              <div class="code-name">#icon-zuqiu-icon-1</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-a-indoorsoccer"></use>
              </svg>
              <div class="name">indoor soccer</div>
              <div class="code-name">#icon-a-indoorsoccer</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-snooker"></use>
              </svg>
              <div class="name">snooker</div>
              <div class="code-name">#icon-snooker</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-volleyball"></use>
              </svg>
              <div class="name">volleyball</div>
              <div class="code-name">#icon-volleyball</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-a-waterpolo"></use>
              </svg>
              <div class="name">water polo</div>
              <div class="code-name">#icon-a-waterpolo</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-a-dashibei-icon-22x"></use>
              </svg>
              <div class="name">live</div>
              <div class="code-name">#icon-a-dashibei-icon-22x</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-a-shouyeicon2x"></use>
              </svg>
              <div class="name">house</div>
              <div class="code-name">#icon-a-shouyeicon2x</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-a-tiyu-icon-12x"></use>
              </svg>
              <div class="name">home</div>
              <div class="code-name">#icon-a-tiyu-icon-12x</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-guanjunjingcai-2"></use>
              </svg>
              <div class="name">champion</div>
              <div class="code-name">#icon-guanjunjingcai-2</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-a-shijianpaixu-icon-1"></use>
              </svg>
              <div class="name">calendar</div>
              <div class="code-name">#icon-a-shijianpaixu-icon-1</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-a-tuijian-icon-1"></use>
              </svg>
              <div class="name">推荐- icon-1</div>
              <div class="code-name">#icon-a-tuijian-icon-1</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-a-guanjunsai-icon-1"></use>
              </svg>
              <div class="name">championMatch</div>
              <div class="code-name">#icon-a-guanjunsai-icon-1</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-a-rebo-icon-1"></use>
              </svg>
              <div class="name">Hot</div>
              <div class="code-name">#icon-a-rebo-icon-1</div>
            </li>

            <li class="dib">
              <svg class="icon svg-icon" aria-hidden="true">
                <use xlink:href="#icon-a-xuanzeshijian-icon"></use>
              </svg>
              <div class="name">time</div>
              <div class="code-name">#icon-a-xuanzeshijian-icon</div>
            </li>

          </ul>
          <div class="article markdown">
            <h2 id="symbol-">Symbol 引用</h2>
            <hr>

            <p>这是一种全新的使用方式，应该说这才是未来的主流，也是平台目前推荐的用法。相关介绍可以参考这篇<a href="">文章</a>
              这种用法其实是做了一个 SVG 的集合，与另外两种相比具有如下特点：</p>
            <ul>
              <li>支持多色图标了，不再受单色限制。</li>
              <li>通过一些技巧，支持像字体那样，通过 <code>font-size</code>, <code>color</code> 来调整样式。</li>
              <li>兼容性较差，支持 IE9+，及现代浏览器。</li>
              <li>浏览器渲染 SVG 的性能一般，还不如 png。</li>
            </ul>
            <p>使用步骤如下：</p>
            <h3 id="-symbol-">第一步：引入项目下面生成的 symbol 代码：</h3>
            <pre><code class="language-html">&lt;script src="./iconfont.js"&gt;&lt;/script&gt;
</code></pre>
            <h3 id="-css-">第二步：加入通用 CSS 代码（引入一次就行）：</h3>
            <pre><code class="language-html">&lt;style&gt;
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
&lt;/style&gt;
</code></pre>
            <h3 id="-">第三步：挑选相应图标并获取类名，应用于页面：</h3>
            <pre><code class="language-html">&lt;svg class="icon" aria-hidden="true"&gt;
  &lt;use xlink:href="#icon-xxx"&gt;&lt;/use&gt;
&lt;/svg&gt;
</code></pre>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TextButton from '@/components/Button/TextButton/index.vue'

import { ref } from 'vue'
const isShow = ref(false)
const isShowChange = () => {
  isShow.value = !isShow.value
}

</script>
<style lang="scss" scoped>
.my-swipe .van-swipe-item{color:#fff;font-size:20px;line-height:150px;text-align:center;background-color:#39a9ed}
.nav-tabs{position:relative}
.nav-tabs .nav-more{position:absolute;right:0;bottom:0;height:42px;line-height:42px;color:#666}
#tabs{border-bottom:1px solid #eee}
#tabs li{cursor:pointer;width:100px;height:40px;line-height:40px;text-align:center;font-size:16px;border-bottom:2px solid transparent;position:relative;z-index:1;margin-bottom:-1px;color:#666}
#tabs .active{border-bottom-color:red;color:#222}
.tab-container .content{display:none}
.main{padding:30px 100px;width:960px;margin:0 auto}
.main .logo{color:#333;text-align:left;margin-bottom:30px;line-height:1;height:110px;margin-top:-50px;overflow:hidden}
.main .logo a{font-size:160px;color:#333}
.helps{margin-top:40px}
.helps pre{padding:20px;margin:10px 0;border:solid 1px #e7e1cd;background-color:#fffdef;overflow:auto}
.icon_lists{width:100%!important;overflow:hidden}
.icon_lists li{width:100px;margin-bottom:10px;margin-right:20px;text-align:center;list-style:none!important;cursor:default}
.icon_lists li .code-name{line-height:1.2}
.icon_lists .icon{display:block;height:100px;line-height:100px;font-size:42px;margin:10px auto;color:#333;-webkit-transition:font-size .25s linear,width .25s linear;-moz-transition:font-size .25s linear,width .25s linear;transition:font-size .25s linear,width .25s linear}
.icon_lists .icon:hover{font-size:100px}
.icon_lists .svg-icon{width:1em;vertical-align:-.15em;fill:currentColor;overflow:hidden}
.icon_lists li .code-name,.icon_lists li .name{color:#666}
.markdown{color:#666;font-size:14px;line-height:1.8}
.highlight{line-height:1.5}
.markdown img{vertical-align:middle;max-width:100%}
.markdown h1{color:#404040;font-weight:500;line-height:40px;margin-bottom:24px}
.markdown h2,.markdown h3,.markdown h4,.markdown h5,.markdown h6{color:#404040;margin:1.6em 0 .6em 0;font-weight:500;clear:both}
.markdown h1{font-size:28px}
.markdown h2{font-size:22px}
.markdown h3{font-size:16px}
.markdown h4{font-size:14px}
.markdown h5{font-size:12px}
.markdown h6{font-size:12px}
.markdown hr{height:1px;border:0;background:#e9e9e9;margin:16px 0;clear:both}
.markdown p{margin:1em 0}
.markdown>.highlight,.markdown>blockquote,.markdown>ol,.markdown>p,.markdown>ul{width:80%}
.markdown ul>li{list-style:circle}
.markdown blockquote ul>li,.markdown>ul li{margin-left:20px;padding-left:4px}
.markdown>ol li p,.markdown>ul li p{margin:.6em 0}
.markdown ol>li{list-style:decimal}
.markdown blockquote ol>li,.markdown>ol li{margin-left:20px;padding-left:4px}
.markdown code{margin:0 3px;padding:0 5px;background:#eee;border-radius:3px}
.markdown b,.markdown strong{font-weight:600}
.markdown>table{border-collapse:collapse;border-spacing:0;empty-cells:show;border:1px solid #e9e9e9;width:95%;margin-bottom:24px}
.markdown>table th{white-space:nowrap;color:#333;font-weight:600}
.markdown>table td,.markdown>table th{border:1px solid #e9e9e9;padding:8px 16px;text-align:left}
.markdown>table th{background:#f7f7f7}
.markdown blockquote{font-size:90%;color:#999;border-left:4px solid #e9e9e9;padding-left:.8em;margin:1em 0}
.markdown blockquote p{margin:0}
.markdown .anchor{opacity:0;transition:opacity .3s ease;margin-left:8px}
.markdown .waiting{color:#ccc}
.markdown h1:hover .anchor,.markdown h2:hover .anchor,.markdown h3:hover .anchor,.markdown h4:hover .anchor,.markdown h5:hover .anchor,.markdown h6:hover .anchor{opacity:1;display:inline-block}
.markdown>br,.markdown>p>br{clear:both}
.hljs{display:block;background:#fff;padding:.5em;color:#333;overflow-x:auto}
.hljs-comment,.hljs-meta{color:#969896}
.hljs-emphasis,.hljs-quote,.hljs-string,.hljs-strong,.hljs-template-variable,.hljs-variable{color:#df5000}
.hljs-keyword,.hljs-selector-tag,.hljs-type{color:#a71d5d}
.hljs-attribute,.hljs-bullet,.hljs-literal,.hljs-symbol{color:#0086b3}
.hljs-name,.hljs-section{color:#63a35c}
.hljs-tag{color:#333}
.hljs-attr,.hljs-selector-attr,.hljs-selector-class,.hljs-selector-id,.hljs-selector-pseudo,.hljs-title{color:#795da3}
.hljs-addition{color:#55a532;background-color:#eaffea}
.hljs-deletion{color:#bd2c00;background-color:#ffecec}
.hljs-link{text-decoration:underline}
code[class*=language-],pre[class*=language-]{color:#000;background:0 0;text-shadow:0 1px #fff;font-family:Consolas,Monaco,'Andale Mono','Ubuntu Mono',monospace;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}
code[class*=language-] ::-moz-selection,code[class*=language-]::-moz-selection,pre[class*=language-] ::-moz-selection,pre[class*=language-]::-moz-selection{text-shadow:none;background:#b3d4fc}
code[class*=language-] ::selection,code[class*=language-]::selection,pre[class*=language-] ::selection,pre[class*=language-]::selection{text-shadow:none;background:#b3d4fc}
@media print{code[class*=language-],pre[class*=language-]{text-shadow:none}
}
pre[class*=language-]{padding:1em;margin:.5em 0;overflow:auto}
:not(pre)>code[class*=language-],pre[class*=language-]{background:#f5f2f0}
:not(pre)>code[class*=language-]{padding:.1em;border-radius:.3em;white-space:normal}
.token.cdata,.token.comment,.token.doctype,.token.prolog{color:#708090}
.token.punctuation{color:#999}
.namespace{opacity:.7}
.token.boolean,.token.constant,.token.deleted,.token.number,.token.property,.token.symbol,.token.tag{color:#905}
.token.attr-name,.token.builtin,.token.char,.token.inserted,.token.selector,.token.string{color:#690}
.language-css .token.string,.style .token.string,.token.entity,.token.operator,.token.url{color:#9a6e3a;background:hsla(0,0%,100%,.5)}
.token.atrule,.token.attr-value,.token.keyword{color:#07a}
.token.class-name,.token.function{color:#dd4a68}
.token.important,.token.regex,.token.variable{color:#e90}
.token.bold,.token.important{font-weight:700}
.token.italic{font-style:italic}
.token.entity{cursor:help}

</style>
