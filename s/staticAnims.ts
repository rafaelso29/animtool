import { Animation, Scene, Mesh } from "babylonjs"
import { ANIM_TYPE } from "./enums.js"

let defaultFps = 30
export function crAnim(targetMesh: Mesh, targetProperty: any, animationType: ANIM_TYPE, valueFrom: any, valueTo: any){
    const anim = new BABYLON.Animation(`animation`, targetProperty, defaultFps, animationType, Animation.ANIMATIONLOOPMODE_CYCLE)

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
    if(targetMesh.animations.length) {
        targetMesh.animations.push(anim as any)
    }else{
        targetMesh.animations = []
        targetMesh.animations.push(anim as any)
    }
    
    return anim
}

export function beginAnim(scene: Scene, targetMesh: Mesh, additionalSpd: number){
    scene.beginAnimation(targetMesh, 0, defaultFps, false, additionalSpd ? 1 + additionalSpd : 1)
}