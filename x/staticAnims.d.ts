import { Scene, Mesh } from "babylonjs";
import { ANIM_TYPE } from "./enums.js";
export declare function crAnim(targetMesh: Mesh, targetProperty: any, animationType: ANIM_TYPE, valueFrom: any, valueTo: any): BABYLON.Animation;
export declare function beginAnim(scene: Scene, targetMesh: Mesh, additionalSpd: number): void;
