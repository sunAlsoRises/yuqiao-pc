window.onload = function () {
    (function () {
        var that = null;
        var index = 1;
        var timer;

        function Carousel() {
            this.container=document.getElementById('container');  //轮播图的整体div
            this.list=  document.getElementById('list');       //图片盒子
            this.imgLen=document.getElementsByTagName('img');
            this.buttons = document.getElementById('buttons').getElementsByTagName('span');//轮播图上的小点
            this.prev=document.getElementById('prev'); //上一页的点击按钮
            this.next=document.getElementById('next'); //下一页的点击按钮
            that = this;
        }

        Carousel.prototype.init = function () {
            // 1,轮播功能
            that.autoCarousel();
            // 2鼠标移动功能
            that.container.onmouseover = stop;
            that.container.onmouseout = play;
            //小点移动功能
            play();
            // 上一页
            that.prev.onclick = prevClick;
            //下一页
            that.next.onclick = nextClick;
        }
        Carousel.prototype.buttonsShow = function () {
            //将之前的小圆点的样式清除
            for (var i = 0; i < that.buttons.length; i++) {
                if (that.buttons[i].className == "on") {
                    that.buttons[i].className = "";
                }
            }
            //数组从0开始，故index需要-1
            that.buttons[index - 1].className = "on";
        }
        Carousel.prototype.animate = function (offset) {
            //获取的是style.left，是相对左边获取距离，所以第一张图后style.left都为负值，
            //且style.left获取的是字符串，需要用parseInt()取整转化为数字。
            var newLeft = parseInt(that.list.style.left) + offset;
            that.list.style.left = newLeft + 'px';
            //无限滚动判断
            if (newLeft > -500) {
                that.list.style.left = -2500 + 'px';
            }
            if (newLeft < -2500) {
                that.list.style.left = -500 + 'px';
            }
        }
        Carousel.prototype.autoCarousel = function () {
            for (var i = 0; i < that.buttons.length; i++) {
                (function (i) {
                    that.buttons[i].onclick = function () {
                        /*  这里获得鼠标移动到小圆点的位置，用this把index绑定到对象buttons[i]上，去谷歌this的用法  */
                        /*  由于这里的index是自定义属性，需要用到getAttribute()这个DOM2级方法，去获取自定义index的属性*/
                        var clickIndex = parseInt(this.getAttribute('index'));
                        var offset = 500 * (index - clickIndex); //这个index是当前图片停留时的index
                        //动画功能
                        that.animate(offset);
                        index = clickIndex; //存放鼠标点击后的位置，用于小圆点的正常显示
                        that.buttonsShow();
                    }
                })(i)
            }
        }

        function play() {
            //重复执行的定时器
            timer = setInterval(function () {
                that.next.onclick();
            }, 2000)
        }

        function stop() {
            clearInterval(timer);
        }

        function prevClick() {
            index -= 1;
            if (index < 1) {
                index = 5
            }
            that.buttonsShow();
            that.animate(500);
        };

        function nextClick() {
            //由于上边定时器的作用，index会一直递增下去，我们只有5个小圆点，所以需要做出判断
            index += 1;
            if (index > 5) {
                index = 1
            }
            that.animate(-500);
            that.buttonsShow();
        };
        // 将轮播对象暴露出来
        window.Carousel = Carousel;
    }());
    // 创建轮播图对象
    var  lunbo = new Carousel();
    lunbo.init();
}