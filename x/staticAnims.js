import { Animation } from "babylonjs";
let defaultFps = 30;
export function createCamAnim(targetCamera, targetProperty, animationType, valueFrom, valueTo) {
    if (targetCamera.animations)
        return false;
    const anim = new Animation(`animation`, targetProperty, defaultFps, animationType, Animation.ANIMATIONLOOPMODE_CYCLE);
    anim.setKeys([
        {
            frame: 0,
            value: valueFrom
        },
        {
            frame: defaultFps,
            value: valueTo
        }
    ]);
    targetCamera.animations = targetCamera.animations || [];
    targetCamera.animations.push(anim);
    return anim;
}
export function beginAnim(scene, targetCamera, additionalSpd) {
    scene.beginAnimation(targetCamera, 0, defaultFps, false, additionalSpd ? 1 + additionalSpd : 1);
}
//# sourceMappingURL=staticAnims.js.map