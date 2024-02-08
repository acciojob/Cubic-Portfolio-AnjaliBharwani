.scene-1 {
  width: 600px;
  height: 500px;
  perspective: 800px;
}

/* Cube Styles */
.cube-1 {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  animation: rotateCube 10s infinite linear;
}

/* Cube Animation */
@keyframes rotateCube {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

/* Face Styles */
.face {
  position: absolute;
  width: 100px;
  height: 100px;
  border: 2px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}

.front {
  transform: translateZ(50px);
  background-color: lightblue;
}

.back {
  transform: translateZ(-50px) rotateY(180deg);
  background-color: lightgreen;
}

.left {
  transform: translateX(-50px) rotateY(-90deg);
  background-color: lightpink;
}

.right {
  transform: translateX(50px) rotateY(90deg);
  background-color: lightcoral;
}

.top {
  transform: translateY(-50px) rotateX(90deg);
  background-color: lightyellow;
}

.bottom {
  transform: translateY(50px) rotateX(-90deg);
  background-color: lightsalmon;
}