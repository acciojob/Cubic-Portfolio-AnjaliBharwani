//your code here
.scene-1{
	height:600px;
	width:100%;
	display:flex;
	justify-content:center;
	align-items:center;
	text-align:center;
	background-color:beige
	
}
.cube-1{
	height:200px;
	width:200px;
	position:relative;
	line-height:200px;
	transform-style:preserve-3d;
	animation: spin 3s ease-in-out infinite;
}
.box{
	height:100%;
	width:100%;
	position:absolute;

	background:rgba(226, 161, 253, 0.5);
	border:1px solid black;
}

.top{
	transform:rotateX(90deg);
	margin-top:-100px;
	  	   background:rgba(200, 121, 200, 0.5);
}
.right{
	transform:rotateY(90deg);
	margin-left:100px;
	   background:rgba(200, 201, 205, 0.5);
	
}
.bottom{
	transform:rotateX(-90deg);
	margin-top:100px;
	   background:rgba(200, 101, 205, 0.5);
	
}
.left{
	transform:rotateY(-90deg);
	margin-left:-100px;
}
.front{
    transform:translateZ(100px);
}
.back{
	transform:translateZ(-100px) rotateX(180deg);
	   background:rgba(200, 101, 285, 0.5);
	
}

@keyframes spin{
	0%{
	   transform:rotateX(-30deg) rotateY(-20deg);
      }
     100%{
        transform: rotateX(20deg) rotateY(-360deg);
	 }
}

/* @keyframes spin{
	0%{
	   transform:rotateX(-20deg) rotateY(20deg);
      }
     100%{
        transform: rotateX(-20deg) rotateY(740deg);
	 }
} */