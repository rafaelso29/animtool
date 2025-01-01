import { Animation, Scene, FreeCamera } from "babylonjs";
import { ANIM_TYPE } from "./enums.js";
interface CamWithAnimationProps extends FreeCamera {
    animations: Animation[];
}
export declare function createCamAnim(targetCamera: CamWithAnimationProps, targetProperty: any, animationType: ANIM_TYPE, valueFrom: any, valueTo: any): boolean | Animation;
export declare function beginAnim(scene: Scene, targetCamera: CamWithAnimationProps, additionalSpd: number): void;
export {};
