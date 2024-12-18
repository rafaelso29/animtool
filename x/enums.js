import { Animation } from "babylonjs";
export var ANIM_TYPE;
(function (ANIM_TYPE) {
    ANIM_TYPE[ANIM_TYPE["float"] = Animation.ANIMATIONTYPE_FLOAT] = "float";
    ANIM_TYPE[ANIM_TYPE["vector"] = Animation.ANIMATIONTYPE_VECTOR3] = "vector";
})(ANIM_TYPE || (ANIM_TYPE = {}));
export var LOOP_MODE;
(function (LOOP_MODE) {
    LOOP_MODE[LOOP_MODE["cycle"] = Animation.ANIMATIONLOOPMODE_CYCLE] = "cycle";
})(LOOP_MODE || (LOOP_MODE = {}));
//# sourceMappingURL=enums.js.map