<template>
    <div class="container">
        <div class="img_box">
            <img class="active" src="https://i1.mifile.cn/a4/xmad_15547798366135_YcVSe.jpg"/>
            <img src="https://i1.mifile.cn/a4/xmad_15541194668557_Xpoxs.jpg"/>
            <img src="https://i1.mifile.cn/a4/xmad_15547822805969_hxdoV.jpg" />
            <img src="https://i1.mifile.cn/a4/xmad_15540348357918_QhSfb.jpg"/>
            <img src="https://i1.mifile.cn/a4/xmad_15547163541041_ipebP.jpg"/>
        </div>
        <div class="span_box">
            <span class="active_dot"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div class="switch_btn">
            <span> &lt; </span>
            <span>&gt;</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ph-carousel',
    mounted() {
        var oCon = document.getElementsByClassName("container")[0];
        var aImg = document.querySelectorAll(".img_box img");	
        console.log(aImg)
        var spanBoxDiv = document.getElementsByClassName("span_box")[0];
        var dots = spanBoxDiv.getElementsByTagName("span");	
        var switchBtn = document.getElementsByClassName("switch_btn")[0];
        var directsBtn = switchBtn.getElementsByTagName("span");	
        var ind = 0;	
        var timer = null;
        
        for(var i=0; i<dots.length; i++){
            console.log(i)
            dots[i].index = i;
            dots[i].onclick = function(){
                resetCSS();
                activeCSS(this.index);
                ind = this.index;
            }
        }
        directsBtn[0].onclick = function(){
            if(ind == 0){
                ind = dots.length - 1;
            }else{
                ind--;
            }
            resetCSS();
            activeCSS(ind);
        }
        directsBtn[1].onclick = autoPlay;
        clearInterval(timer);
        timer = setInterval(autoPlay,3000);
        oCon.onmouseover = function(){
            switchBtn.style.display = 'block';
            clearInterval(timer);
        }
        oCon.onmouseout = function(){
            switchBtn.style.display = 'none';
            clearInterval(timer);
            timer = setInterval(autoPlay,3000);
        }
        function autoPlay(){
            if(ind == dots.length - 1){
                ind = 0;
            }else{
                ind++;
            }
            resetCSS();
            activeCSS(ind);
        }
        function resetCSS(){
            for(var j=0; j<dots.length; j++){
                dots[j].className = "";
                aImg[j].className = "";
            }
        }
        function activeCSS(a){	
            dots[a].className = "active_dot";
            aImg[a].className = "active";
        }	
    },
}
</script>

<style lang="scss" scoped>
.container{
    width: 1226px;
    height: 460px;
    margin: 50px auto;
    position: relative;
}
.container img{
    width: 100%;
    height: 100%;
}
.img_box{
    height: 460px;
}
.img_box img{
    display: none;
    animation: fadeOut 8s 1;
}
.img_box img:hover{
    animation: none;
    cursor: pointer;
}
/*图片激活样式*/
.img_box .active{
    display: block;
}

/*切换的按钮*/
.span_box{
    width: 150px;
    height: 20px;
    position: absolute;
    right: 60px;
    bottom: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.span_box span{
    display: inline-block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid #ccc;
    background-color: rgba(0,0,0,.5);
}
.span_box .active_dot{
    background-color: rgba(255,255,255,.5);
}
.switch_btn{
    display: none;
}
.switch_btn span{
    font-size: 18px;
    display: inline-block;
    width: 41px;
    height: 69px;
    background: rgba(0,0,0,.3);
    position: absolute;
    top: 50%;
    margin-top: -34.5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
}
.switch_btn span:hover{
    background: rgba(0,0,0,.5);
}
.switch_btn span:nth-child(1){
    left: 10px;
}
.switch_btn span:nth-child(2){
    right: 10px;
}
</style>>