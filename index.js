window.onload = function() {
    var playerResult=document.getElementById("playerResult");
    var pcResult=document.getElementById("pcResult");
    var choices=document.getElementsByClassName("choices");
    var result=document.getElementById("result");
    var resultsAll=[["平","胜","败"],["败","平","胜"],["胜","败","平"]];
    var countTime=document.getElementById("countTime");
    var shitouSRC=document.getElementById("shiTou").getAttribute("src");
    var jiandaoSRC=document.getElementById("jiandao").getAttribute("src");
    var buSRC=document.getElementById("bu").getAttribute("src");
    var allTimeCount=document.getElementById("allTimes");
    console.log(choices);
    for (var i=0;i<choices.length;i++){
        var winTimes=0;//胜利次数
        var allTimes=0;//总次数
        (function(i) {//function的形参，也可以换成j，换成什么变量名都无所谓
            choices[i].onclick=function () {
                //显示玩家选择
                allTimes++;
                allTimeCount.innerHTML=allTimes;
                var playerSrc = this.getAttribute("src");
                playerResult.setAttribute("src",playerSrc);
                //产生电脑选择
                var playerChoice=i;
                var pcChoice;
                var pcResultsNum=Math.random();
                if(pcResultsNum<0.33){//石头
                    pcResult.setAttribute("src",shitouSRC);
                    pcChoice=0;
                } else if(pcResultsNum<0.67){//剪刀
                    pcResult.setAttribute("src",jiandaoSRC);
                    pcChoice=1;
                } else{//布
                    pcResult.setAttribute("src",buSRC);
                    pcChoice=2;
                }
             result.innerHTML=resultsAll[playerChoice][pcChoice];
                if(result.innerHTML =="胜") { winTimes++;}
                countTime.innerHTML=winTimes;
            }
            
        })(i);//这是循环中的i,被作为参数传入
    }
}
    /*<div id="choices">
     <img id="shiTou" src="images/shitou.jpg" alt="石头" />
     <img src="images/jiandao.jpg" />
     <img src="images/bu.jpg" />
     </div>
     */
    /*“display”不是一个HTML属性，是一个CSS属性，如果要用setAttribute方法修改的话，代码如下：
     [html] view plain copy
     box.setAttribute("style","display:block");
     但是不建议采用这种方法。
     推荐使用：
     [html] view plain copy
     box.style.display = "block";  */

/*原来console.log(i)里的i在循环完成的时候被赋值成了5，而每个按钮的onclick都被赋值了同一个function,也就是说每个function里
的i指的是同一个i，i=5，自然每个点击都会打印出5，那么该怎么解决呢？！
 再看接下来这段代码：
 <script>
 var btn=document.getElementsByTagName('button');
 for(var i=0;i<btn.length;i++){
 (function(i){ //这个是function里i，即function的形参，也可以换成j，换成什么变量名都无所谓
 btn[i].onclick=function(){
 console.log(i);
 }
 })(i);//这是循环中的i,被作为参数传入
 }
 </script>
 再运行这段代码，就可以得到你想要的效果，但是是为什么呢？
 知道了原因就好办了，利用闭包把每个function里的i都变成不同的i就行了，当时作为一名初学者还不懂闭包，也是后来才理解的。
 循环中的function自调用，将循环中的i作为参数传入function中，此时，function中的i已经不是循环中的i了（这里有点绕，其实形参i，
 即function里的i换成什么变量名都行），而是在内存中开辟了一个内存空间存储了作为参数传进来的i的值，这样function中的就不会
 随着循环中的i的值的改变而改变了,就可以打印出你要的结果了。*/
