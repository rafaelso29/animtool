import { Animation } from "babylonjs";
let defaultFps = 30;
export function crAnim(targetMesh, targetProperty, animationType, valueFrom, valueTo) {
    const anim = new BABYLON.Animation(`animation`, targetProperty, defaultFps, animationType, Animation.ANIMATIONLOOPMODE_CYCLE);
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
    if (targetMesh.animations.length) {
        targetMesh.animations.push(anim);
    }
    else {
        targetMesh.animations = [];
        targetMesh.animations.push(anim);
    }
    return anim;
}
export function beginAnim(scene, targetMesh, additionalSpd) {
    scene.beginAnimation(targetMesh, 0, defaultFps, false, additionalSpd ? 1 + additionalSpd : 1);
}
//# sourceMappingURL=staticAnims.js.map