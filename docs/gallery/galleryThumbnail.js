$(document).ready(function () {
    // var scrollPosition;
    $('.js-modal-open').each(function () {
        $(this).on('click', function () {
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            ModalContent(checkKey(target), modal)

            // メモ
            // https://imasashi.net/modal-window_bg-fixed.html
            $(modal).fadeIn();
            // モーダルウィンドウスクロール位置リセット
            $('.modal-content').scrollTop(0);
            return false;
        });
    });

    $('.js-modal-close').on('click', function () {
        $('.js-modal').fadeOut();
        return false;
    });
});
function checkKey(tag) {
    if (tag in _data.shows) {
        return _data.shows[tag];
    } else {
        return _data.works[tag];
    }
}

//データオブジェクト
let _data = {
    shows: {
        //仕様keyはtagと同じにすること。tagはid,keyとしても使われる内部処理用なので注意。captionはなるべく短く。
        show1: {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-s1.jpg",
            description: "JINEN　個展",//画像の説明、展示の名前
            caption: "奥山帆夏展",
            tag: "show1",
            m_image: "./imgs/shows/2020/20-s1.jpg",
            m_title: "奥山帆夏展 | JINEN gallery（東京） | 2020",//モーダルで右端に出る文字
        },
        show2: {
            flag: false,
            img: "./imgs/thumbnail/2020/t-s2.jpg",
            description: "MAKII MASARU FINE ARTS展示風景_2 ",
            caption: "たわいもない中に",
            tag: "show2",
            m_image: "./imgs/shows/2020/20-s4.jpg",
            m_title: "たわいもない中に | MAKII MASARU FINE ARTS（東京） | 2020",
        },
        show3: {
            flag: false,
            img: "./imgs/thumbnail/2020/t-s3.jpg",
            description: "ヨロコビto個展展示風景",
            caption: "微睡の中",
            tag: "show3",
            m_image: "./imgs/shows/2020/20-s5.jpg",
            m_title: "微睡の中 | ヨロコビto（東京） | 2020",
        },
        show4: {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-s1.jpg",
            description: "藝祭 geisai",
            caption: "藝祭",
            tag: "show4",
            m_image: "./imgs/shows/2019/19-s1.jpg",
            m_title: "藝祭 | 東京藝術大学（東京） | 2019",
        },
        show5: {
            flag: false,
            img: "./imgs/thumbnail/2019/t-s2.jpg",
            description: "二人展　hutariten",
            caption: "ふたり展",
            tag: "show5",
            m_image: "./imgs/shows/2019/19-s4.jpg",
            m_title: "奥山帆夏・蛭田泰平ふたり展 | MAKII MASARU FINE ARTS（東京） | 2019",
        },
        show6: {
            flag: false,
            img: "./imgs/thumbnail/2019/t-s3.jpg",
            description: "卒展内部",
            caption: "卒業制作学内展",
            tag: "show6",
            m_image: "./imgs/shows/2019/19-s6.jpg",
            m_title: "東京芸術大学油画専攻卒業制作学内展 | 東京藝術大学 （東京）| 2019",
        },
        show7: {
            flag: false,
            img: "./imgs/thumbnail/2019/t-s4.jpg",
            description: "ヨロコビto個展展示風景",
            caption: "卒業制作展",
            tag: "show7",
            m_image: "./imgs/shows/2019/19-s7.jpg",
            m_title: "東京芸術大学油画専攻卒業制作展　| 東京都美術館（東京） | 2019",
        },

    },
    works: {
        works1: {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w1.jpg",
            description: "美瑛2020_1",
            caption: "美瑛",
            tag: "works1",
            m_image: "./imgs/works/2020/20-w20.jpg",
            m_title: "美瑛 | Biei  1 | 2020",
        },
        works2: {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w2.jpg",
            description: "美瑛2020_2",
            caption: "美瑛",
            tag: "works2",
            m_image: "./imgs/works/2020/20-w21.jpg",
            m_title: "美瑛 | Biei  2 | 2020",
        },
        works3: {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w3.jpg",
            description: "Tree2020",
            caption: "Tree",
            tag: "works3",
            m_image: "./imgs/works/2020/20-w5.jpg",
            m_title: "Tree | 2020",
        },
        works4: {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w4.jpg",
            description: "室咲2020_1",
            caption: "室咲",
            tag: "works4",
            m_image: "./imgs/works/2020/20-w8.jpg",
            m_title: "室咲 | Murozaki  1 | 2020",
        },
        works5: {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w5.jpg",
            description: "室咲2020_2",
            caption: "室咲",
            tag: "works5",
            m_image: "./imgs/works/2020/20-w9.jpg",
            m_title: "室咲 | Murozaki  2 | 2020",
        },
        works6: {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w6.jpg",
            description: "秋の暮2020",
            caption: "秋の暮",
            tag: "works6",
            m_image: "./imgs/works/2020/20-w10.jpg",
            m_title: "秋の暮  |  Aki no kure | 2020",
        },
        works7: {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w7.jpg",
            description: "秋霜2020_1",
            caption: "秋霜",
            tag: "works7",
            m_image: "./imgs/works/2020/20-w11.jpg",
            m_title: "秋霜 | Syuso | 2020",
        },
        works8: {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w8.jpg",
            description: "秋模様2020_",
            caption: "秋模様",
            tag: "works8",
            m_image: "./imgs/works/2020/20-w12.jpg",
            m_title: "秋模様 | Akimoyou | 2020",
        },
        works9: {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w9.jpg",
            description: "秋麗2020_1",
            caption: "秋麗",
            tag: "works9",
            m_image: "./imgs/works/2020/20-w13.jpg",
            m_title: "秋麗 | Syurei | 2020",
        },
        works10: {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w10.jpg",
            description: "水の風2020_1",
            caption: "水の風",
            tag: "works10",
            m_image: "./imgs/works/2020/20-w14.jpg",
            m_title: "水の風 | Mizu no kaze | 2020",
        },
        works11: {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w11.jpg",
            description: "青の風2020_1",
            caption: "青の風",
            tag: "works11",
            m_image: "./imgs/works/2020/20-w15.jpg",
            m_title: "青の風 | Ao no kaze | 2020",
        },
        works12: {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w12.jpg",
            description: "霜夜2020_1",
            caption: "霜夜",
            tag: "works12",
            m_image: "./imgs/works/2020/20-w16.jpg",
            m_title: "霜夜 | Shimoyo | 2020",
        },
        works14: {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w14.jpg",
            description: "美唄 | Bibai",
            caption: "美唄",
            tag: "works14",
            m_image: "./imgs/works/2020/20-w18.jpg",
            m_title: "美唄 | Bibai  1 | 2020",
        },
        works15: {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w13.jpg",
            description: "美唄2 2020_2",
            caption: "美唄",
            tag: "works15",
            m_image: "./imgs/works/2020/20-w17.jpg",
            m_title: "美唄 | Bibai  2 | 2020",
        },
        works16: {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w15.jpg",
            description: "美唄の山道から2020_1",
            caption: "美唄の山道から",
            tag: "works15",
            m_image: "./imgs/works/2020/20-w19.jpg",
            m_title: "美唄の山道から | Bibai no sandoukara | 2020",
        },
        works17: {//2020
            flag: false,
            img: "./imgs/thumbnail/2020/t-w17.jpg",
            description: "六月風2020_1",
            caption: "六月風",
            tag: "works17",
            m_image: "./imgs/works/2020/20-w23.jpg",
            m_title: "六月風 | Rokugatukaze | 2020",
        },
        works18: {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w1.jpg",
            description: "Cafe2019",
            caption: "Cafe",
            tag: "works18",
            m_image: "./imgs/works/2019/19-w1.jpg",
            m_title: "Cafe | 2019",
        },
        works19: {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w2.jpg",
            description: "Park2019",
            caption: "Park",
            tag: "works19",
            m_image: "./imgs/works/2019/19-w2.jpg",
            m_title: "Park  1 | 2019",
        },
        works20: {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w3.jpg",
            description: "Park2019_2",
            caption: "Park",
            tag: "works20",
            m_image: "./imgs/works/2019/19-w3.jpg",
            m_title: "Park  2 | 2019",
        },
        works21: {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w4.jpg",
            description: "TheSongofTrees12019_1",
            caption: "The Song of Trees",
            tag: "works21",
            m_image: "./imgs/works/2019/19-w4.jpg",
            m_title: "The Song of Trees 1 | 2019",
        },
        works22: {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w5.jpg",
            description: "Tree2019",
            caption: "Tree",
            tag: "works22",
            m_image: "./imgs/works/2019/19-w5.jpg",
            m_title: "Tree 1 | 2019",
        },
        works23: {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w6.jpg",
            description: "Tree2019_2",
            caption: "Tree",
            tag: "works23",
            m_image: "./imgs/works/2019/19-w6.jpg",
            m_title: "Tree  2 | 2019",
        },
        works24: {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w7.jpg",
            description: "自画像2019_1",
            caption: "自画像",
            tag: "works24",
            m_image: "./imgs/works/2019/19-w7.jpg",
            m_title: "自画像 | Self-portrait | 2019",
        },
        works25: {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w8.jpg",
            description: "夜ニ寄添2019_1",
            caption: "夜ニ寄添",
            tag: "works25",
            m_image: "./imgs/works/2019/19-w8.jpg",
            m_title: "夜ニ寄添 | Yoru ni yorisou | 2019",
        },
        works26: {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w9.jpg",
            description: "夜ニ寄添2019_2",
            caption: "夜ニ寄添",
            tag: "works26",
            m_image: "./imgs/works/2019/19-w9.jpg",
            m_title: "夜ニ寄添 | Yoru ni yorisou | 2019",
        },
        works27: {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w10.jpg",
            description: "夜ニ寄添2019_3",
            caption: "夜ニ寄添",
            tag: "works27",
            m_image: "./imgs/works/2019/19-w10.jpg",
            m_title: "夜ニ寄添 | Yoru ni yorisou | 2019",
        },
        works28: {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w11.jpg",
            description: "夜ニ寄添2019_4",
            caption: "夜ニ寄添",
            tag: "works28",
            m_image: "./imgs/works/2019/19-w11.jpg",
            m_title: "夜ニ寄添 | Yoru ni yorisou | 2019",
        },
        works29: {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w12.jpg",
            description: "夜ニ寄添2019_5",
            caption: "夜ニ寄添",
            tag: "works29",
            m_image: "./imgs/works/2019/19-w12.jpg",
            m_title: "夜ニ寄添 | Yoru ni yorisou | 2019",
        },
        works30: {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w13.jpg",
            description: "夜ニ寄添2019_6",
            caption: "夜ニ寄添",
            tag: "works30",
            m_image: "./imgs/works/2019/19-w13.jpg",
            m_title: "夜ニ寄添 | Yoru ni yorisou | 2019",
        },
        works31: {//2019
            flag: false,
            img: "./imgs/thumbnail/2019/t-w14.jpg",
            description: "夜ニ寄添2019_7",
            caption: "夜ニ寄添",
            tag: "works31",
            m_image: "./imgs/works/2019/19-w14.jpg",
            m_title: "夜ニ寄添 | Yoru ni yorisou | 2019",
        },
    }
};

function Thumbnail(data, target) {
    var parent = document.createElement("div");
    parent.className = "gallery-thumbnail";
    var img = document.createElement("img");
    img.src = data.img;
    img.alt = data.description;
    parent.appendChild(img);
    var div = document.createElement("div");
    div.className = "gallery-thumcaption";
    div.textContent = data.caption;
    parent.appendChild(div);
    var a = document.createElement("a");
    a.setAttribute("data-target", data.tag);
    a.className = "js-modal-open";
    a.appendChild(parent);
    target.appendChild(a);
}

function ShowsThumbnails(target) {
    Object.keys(_data.shows).forEach(function (key) {
        // var val = this[key];
        Thumbnail(_data.shows[key], target);
    }, _data.shows);
}

function WorksThumbnails(target) {
    Object.keys(_data.works).forEach(function (key) {
        // var val = this[key];
        Thumbnail(_data.works[key], target);
    }, _data.works);
}

function ModalContent(data, target) {
    if (data.flag) {
        return;
    } else {
        data.flag = true;
    }
    var root = document.createElement("div");
    root.className = "showbox";
    var img = document.createElement("img");
    img.src = data.m_image;
    root.appendChild(img);
    var textbox = document.createElement("div");
    textbox.className = "showtextbox";
    var div = document.createElement("div");
    div.className = "m-caption";
    div.textContent = data.m_title;
    textbox.appendChild(div);
    root.appendChild(textbox);

    var parent = document.createElement("div");
    parent.className = "modal-content";
    parent.appendChild(root);
    target.appendChild(parent);
}
/*function WorkInfo(data) {
    var root = document.createElement("div");
    root.className = "workbox";
    var img = document.createElement("img");
    img.src = data.m_image;
    root.appendChild(img);
    var textbox = document.createElement("div");
    textbox.className = "worktextbox";
    var div = document.createElement("div");
    div.className = "m-caption";
    div.textContent = data.m_title;
    textbox.appendChild(div);
    root.appendChild(textbox);
    var textbox = document.createElement("div");
    return root;
}*/
function ModalWindow(data, target) {
    var root = document.createElement("div");
    root.id = data.tag;
    root.className = "modal js-modal";
    var div = document.createElement("div");
    div.className = "modal-bg js-modal-close";
    root.appendChild(div);
    target.appendChild(root);
}
function ShowsModalWindows(target) {
    Object.keys(_data.shows).forEach(function (key) {
        ModalWindow(_data.shows[key], target);
    }, _data.shows);
}
function WorksModalWindows(target) {
    Object.keys(_data.works).forEach(function (key) {
        ModalWindow(_data.works[key], target);
    }, _data.works);
}