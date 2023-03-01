//check webGl compatibility
import './isWebGLCompatible';

if (WebGL.isWebGLAvailable()) {
  console.log("webgl working");
} else {
  const warning = WebGL.getWebGLErrorMessage();
  console.log(warning);
}