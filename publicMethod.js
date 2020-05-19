export default {
    /*
    *数组去重
    * */
    noRepeat (arr) {
        return [...new Set(arr)];
    },
    /*
    * 数组找最大
    * */
    arrayMax (arr) {
        return Math.max(...arr);
    },
    /*
    * 数组最小
    * */
    arrayMin (arr) {
        return Math.min(...arr);
    },
    /*
    * 返回已 size 为长度的数组分割的原数组
    * */
    chunk (arr, size = 1) {
        return Array.from(
            {
                length: Math.ceil(arr.length / size),
            },
            (v, i) => arr.slice(i * size, i * size + size)
        );
    },
    /*
    * 对比两个数组并且返回其中不同的元素
    * */
    intersection (arr1, arr2) {
        return arr2.filter((v) => arr1.includes(v));
    },
    /*
    * 从右删除 n 个元素
    * */
    dropRight (arr, n = 0) {
        return n < arr.length ? arr.slice(0, arr.length - n) : [];
    },
    /*
    * 从左删除 n 个元素
    * */
    dropLeft (arr, n = 0) {
        return n < arr.length ? arr.slice(0, n) : [];
    },
    /*
    * 获取滚动条位置
    * */
    getScrollPosition (el = window) {
        return {
            x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
            y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop,
        };
    },
    /*
    * 获取 url 中的参数
    * */
    getURLParameters (url) {
        return url
            .match(/([^?=&]+)(=([^&]*))/g)
            .reduce(
                (a, v) => (
                    (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
                ),
                {}
            );
    },
    /*
    * 滚动条回到顶部动画
    * */
    scrollToTop () {
        const scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        } else {
            window.cancelAnimationFrame(scrollToTop);
        }
    },
    /*
    * 复制文本
    * */
    copy (str) {
        const el = document.createElement("textarea");
        el.value = str;
        el.setAttribute("readonly", "");
        el.style.position = "absolute";
        el.style.left = "-9999px";
        el.style.top = "-9999px";
        document.body.appendChild(el);
        const selected =
            document.getSelection().rangeCount > 0
                ? document.getSelection().getRangeAt(0)
                : false;
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        if (selected) {
            document.getSelection().removeAllRanges();
            document.getSelection().addRange(selected);
        }
    },
    /*
    * 检测设备类型
    * */
    detectDeviceType () {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        )
            ? "Mobile"
            : "Desktop";
    },
    /*
    * 时间戳转换为时间
    * 默认为当前时间转换结果
    * @params {Boolean} isMs 时间戳是否为毫秒
    * */
    timestampToTime (timestamp = Date.parse(new Date()), isMs = true) {
        const date = new Date(timestamp * (isMs ? 1 : 1000));
        return `${date.getFullYear()}-${
            date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1
            }-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    },
    /*
    * 数字千分位分割
    * @params {Number} num 需要转换的数字
    * */
    formatThousandSign (num) {
        num += ''
        const numArr = num.split('.')
        let str = numArr[0]
        let decimal = numArr[1]
        let thousandSignNum = str.split('').reverse().reduce((prev, next, index) => {
            return ((index % 3) ? next : (next + ',')) + prev
        })
        return numArr.length < 2 ? `${thousandSignNum}` : `${thousandSignNum}.${decimal}`
    },
    /*
    * 生成随机数
    * @params {Number} min 最小
    * @params {Number} max 最大
    * */
    randomNum (min, max) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * min + 1, 10);
            case 2:
                return parseInt(Math.random() * (max - min + 1) + min, 10);
            default:
                return 0;
        }
    },
    /*
    * 格式化日期
    *  @newDate {date} 日期
    *  @symbol {string} 连接符号
    * */
    formatDate (newDate, symbol) {
        const dt = newDate || new Date()
        const y = dt.getFullYear()
        const m = addZero((dt.getMonth() + 1))
        const d = addZero(dt.getDate())
        symbol = symbol || '-'
        function addZero (n) {
            if (n < 10) {
                return '0' + n
            } else {
                return '' + n
            }
        }
        return `${y}${symbol}${m}${symbol}${d}`
    }
}
