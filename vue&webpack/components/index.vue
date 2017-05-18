<!--html-->
<template>
	<div id="offCanvasWrapper" class="mui-off-canvas-wrap mui-draggable">
		<!--侧滑菜单部分-->
		<aside id="offCanvasSide" class="mui-off-canvas-left">
			<div id="offCanvasSideScroll" class="mui-scroll-wrapper">
				<div class="mui-scroll">
					<div class="title">侧滑导航</div>
					<div class="content">
						1111111asdasdasd
						这11111是可拖动式侧滑菜单示例，你可以在这里放置任何内容；关闭侧滑菜单有多种方式： 1.在手机屏幕任意位置向左拖动(drag)；2.点击本侧滑菜单页之外的任意位置; 3.点击如下红色按钮
						<span class="android-only">；4.Android手机按back键；5.Android手机按menu键
							</span>。
						<p style="margin: 10px 15px;">
							<button @click="offHide()" id="offCanvasHide" type="button" class="mui-btn mui-btn-danger mui-btn-block" style="padding: 5px 20px;">关闭侧滑菜单</button>
						</p>

					</div>
					<div class="title" style="margin-bottom: 25px;">侧滑列表示例</div>
					<ul class="mui-table-view mui-table-view-chevron mui-table-view-inverted">
						<li class="mui-table-view-cell">
							<!--<a class="mui-navigate-right">
								主题
							</a>-->
							<button class="mui-navigate-right" @click="linkTo(0)">主题</button>
							<!--<router-link class="mui-navigate-right" to="topics">Home</router-link>-->
						</li>
						<li class="mui-table-view-cell">
							<!--<a class="mui-navigate-right">
								Item 2
							</a>-->
							<button class="mui-navigate-right" @click="linkTo(1)">收藏</button>
						</li>
						<li class="mui-table-view-cell">
							<a class="mui-navigate-right">
								Item 3
							</a>
						</li>
						<li class="mui-table-view-cell">
							<a class="mui-navigate-right">
								Item 4
							</a>
						</li>
						<li class="mui-table-view-cell">
							<a class="mui-navigate-right">
								Item 5
							</a>
						</li>
						<li class="mui-table-view-cell">
							<a class="mui-navigate-right">
								Item 6
							</a>
						</li>
					</ul>
				</div>
			</div>
		</aside>
		<!--主界面部分-->
		<div class="mui-inner-wrap">
			<header class="mui-bar mui-bar-nav">
				<a href="#offCanvasSide" class="mui-icon mui-action-menu mui-icon-bars mui-pull-left"></a>
				<a class="mui-action-back mui-btn mui-btn-link mui-pull-right">关闭</a>
				<h1 class="mui-title">div模式右滑菜单</h1>
			</header>
			<div id="offCanvasContentScroll" class="mui-content mui-scroll-wrapper">
				<div class="mui-scroll" style="height: 100%;">
					<router-view></router-view>
				</div>
				<!--<swiper></swiper>-->
			</div>
			<!-- off-canvas backdrop -->
			<div class="mui-off-canvas-backdrop"></div>
			
		</div>
	</div>
</template>
<!--js-->
<script>
//	import swiper from "./swiper.vue";
	export default {
		data() {
			return {
				name: "第一页de",
			}
		},
		components:{
//			swiper,
		},
		methods:{
			linkTo(page){
				console.log(page)
				//跳转路由
				switch(page){
					case 0:
					window.location.href = "#/index/topics";
					break;
					case 1:
					window.location.href = "#/index/collect";
					break;
				}
				//关闭侧栏菜单
				this.offHide()
			},
			offHide(){
				var offCanvasWrapper = mui('#offCanvasWrapper');
				offCanvasWrapper.offCanvas('show');
			}
		},
		mounted() {
			mui.init();
			//侧滑容器父节点
			var offCanvasWrapper = mui('#offCanvasWrapper');
			//主界面容器
			var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
			//菜单容器
			var offCanvasSide = document.getElementById("offCanvasSide");
			/*if(!mui.os.android) {
				document.getElementById("move-togger").classList.remove('mui-hidden');
				var spans = document.querySelectorAll('.android-only');
				for(var i = 0, len = spans.length; i < len; i++) {
					spans[i].style.display = "none";
				}
			}*/
			//移动效果是否为整体移动
			var moveTogether = false;
			//侧滑容器的class列表，增加.mui-slide-in即可实现菜单移动、主界面不动的效果；
			/*var classList = offCanvasWrapper[0].classList;
			//变换侧滑动画移动效果；
			mui('.mui-input-group').on('change', 'input', function() {
				if(this.checked) {
					offCanvasSide.classList.remove('mui-transitioning');
					offCanvasSide.setAttribute('style', '');
					classList.remove('mui-slide-in');
					classList.remove('mui-scalable');
					switch(this.value) {
						case 'main-move':
							if(moveTogether) {
								//仅主内容滑动时，侧滑菜单在off-canvas-wrap内，和主界面并列
								offCanvasWrapper[0].insertBefore(offCanvasSide, offCanvasWrapper[0].firstElementChild);
							}
							break;
						case 'main-move-scalable':
							if(moveTogether) {
								//仅主内容滑动时，侧滑菜单在off-canvas-wrap内，和主界面并列
								offCanvasWrapper[0].insertBefore(offCanvasSide, offCanvasWrapper[0].firstElementChild);
							}
							classList.add('mui-scalable');
							break;
						case 'menu-move':
							classList.add('mui-slide-in');
							break;
						case 'all-move':
							moveTogether = true;
							//整体滑动时，侧滑菜单在inner-wrap内
							offCanvasInner.insertBefore(offCanvasSide, offCanvasInner.firstElementChild);
							break;
					}
					offCanvasWrapper.offCanvas().refresh();
				}
			});*/
			//主界面‘显示侧滑菜单’按钮的点击事件
			/*document.getElementById('offCanvasShow').addEventListener('tap', function() {
				offCanvasWrapper.offCanvas('show');
			});
			//菜单界面，‘关闭侧滑菜单’按钮的点击事件
			document.getElementById('offCanvasHide').addEventListener('tap', function() {
				console.log("close")
				offCanvasWrapper.offCanvas('close');
			});*/
			//主界面和侧滑菜单界面均支持区域滚动；
			/*mui('#offCanvasSideScroll').scroll();
			mui('#offCanvasContentScroll').scroll();*/
			//实现ios平台原生侧滑关闭页面；
			/*if(mui.os.plus && mui.os.ios) {
				mui.plusReady(function() { //5+ iOS暂时无法屏蔽popGesture时传递touch事件，故该demo直接屏蔽popGesture功能
					plus.webview.currentWebview().setStyle({
						'popGesture': 'none'
					});
				});
			}*/
		}
	}
</script>
<!--css-->
<style scoped lang="scss">
	html,
	body {
		background-color: #efeff4;
	}
	
	#offCanvasWrapper {
		height: 100%;
	}
	
	.mui-inner-wrap{
		height: 100%;
	}
	
	p {
		text-indent: 22px;
	}
	
	span.mui-icon {
		font-size: 14px;
		color: #007aff;
		margin-left: -15px;
		padding-right: 10px;
	}
	
	.mui-off-canvas-left {
		color: #fff;
	}
	
	.title {
		margin: 35px 15px 10px;
	}
	
	.title+.content {
		margin: 10px 15px 35px;
		color: #bbb;
		text-indent: 1em;
		font-size: 14px;
		line-height: 24px;
	}
	
	input {
		color: #000;
	}
</style>