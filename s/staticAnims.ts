import { Animation, Scene, Mesh, FreeCamera } from "babylonjs"
import { ANIM_TYPE } from "./enums.js"

let defaultFps = 30
interface CamWithAnimationProps extends FreeCamera {
    animations: Animation[];
}

export function createCamAnim(targetCamera: CamWithAnimationProps, targetProperty: any, animationType: ANIM_TYPE, valueFrom: any, valueTo: any): boolean | Animation{
    if(targetCamera.animations) return false
    const anim = new Animation(`animation`, targetProperty, defaultFps, animationType, Animation.ANIMATIONLOOPMODE_CYCLE)

    anim.setKeys([
        {
            frame: 0,
            value: valueFrom
        },
        {
            frame: defaultFps,
            value: valueTo
        }
    ])
    targetCamera.animations = targetCamera.animations || [];
    targetCamera.animations.push(anim as any);
    
    return anim
}

export function beginAnim(scene: Scene, targetCamera: CamWithAnimationProps, additionalSpd: number){
    scene.beginAnimation(targetCamera, 0, defaultFps, false, additionalSpd ? 1 + additionalSpd : 1)
}