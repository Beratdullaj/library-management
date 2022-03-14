<template>
  <div class="about">
	<div class="section">
		<div class="container">
			<div class="content-section">
				<div class="title">
					<h1>About Us</h1>
				</div>
				<div class="content">
					<h3>Lorem ipsum dolor sit amet, consectetur adipisicing</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
					consequat.orem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32</p>
					<div class="button">
						<a href="">Read More</a>
					</div>
				</div>
				<div class="social">
					<a href=""><i class="fab fa-facebook-f"></i></a>
					<a href=""><i class="fab fa-twitter"></i></a>
					<a href=""><i class="fab fa-instagram"></i></a>
				</div>
			</div>
			<div class="image-section">				
				<img class="mt-2" src="../images/3.jpg">
				<img class="mt-2" src="../images/1.jpg">

			</div>
		</div>
	</div>
  </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400&display=swap');
*{
	margin:0px;
	padding:0px;
	box-sizing: border-box;
	font-family: 'Poppins', sans-serif;
}
.section{
	width: 100%;
	min-height: 100vh;
	background-color: #ddd;
}
.container{
	width: 80%;
	display: block;
	margin:auto;
	padding-top: 100px;
}
.content-section{
	float: left;
	width: 55%;
}
.image-section{
	float: right;
	width: 40%;
}
.image-section img{
	width: 100%;
	height: auto;
}
.content-section .title{
	text-transform: uppercase;
	font-size: 28px;
}
.content-section .content h3{
	margin-top: 20px;
	color:#5d5d5d;
	font-size: 21px;
}
.content-section .content p{
	margin-top: 10px;
	font-family: sans-serif;
	font-size: 18px;
	line-height: 1.5;
}
.content-section .content .button{
	margin-top: 30px;
}
.content-section .content .button a{
	background-color: #3d3d3d;
	padding:12px 40px;
	text-decoration: none;
	color:#fff;
	font-size: 25px;
	letter-spacing: 1.5px;
}
.content-section .content .button a:hover{
	background-color: #a52a2a;
	color:#fff;
}
.content-section .social{
	margin: 40px 40px;
}
.content-section .social i{
	color:#a52a2a;
	font-size: 30px;
	padding:0px 10px;
}
.content-section .social i:hover{
	color:#3d3d3d;
}
@media screen and (max-width: 768px){
	.container{
	width: 80%;
	display: block;
	margin:auto;
	padding-top:50px;
}
.content-section{
	float:none;
	width:100%;
	display: block;
	margin:auto;
}
.image-section{
	float:none;
	width:100%;
	
}
.image-section img{
	width: 100%;
	height: auto;
	display: block;
	margin:auto;
}
.content-section .title{
	text-align: center;
	font-size: 19px;
}
.content-section .content .button{
	text-align: center;
}
.content-section .content .button a{
	padding:9px 30px;
}
.content-section .social{
	text-align: center;
}

}

</style>
