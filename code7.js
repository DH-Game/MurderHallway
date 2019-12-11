gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDPlayerObjects1= [];
gdjs.Game_32OverCode.GDPlayerObjects2= [];
gdjs.Game_32OverCode.GDBarrierObjects1= [];
gdjs.Game_32OverCode.GDBarrierObjects2= [];
gdjs.Game_32OverCode.GDDoorRoom2Objects1= [];
gdjs.Game_32OverCode.GDDoorRoom2Objects2= [];
gdjs.Game_32OverCode.GDDoorRoom12Objects1= [];
gdjs.Game_32OverCode.GDDoorRoom12Objects2= [];
gdjs.Game_32OverCode.GDDoorRoom1Objects1= [];
gdjs.Game_32OverCode.GDDoorRoom1Objects2= [];
gdjs.Game_32OverCode.GDBackShadowObjects1= [];
gdjs.Game_32OverCode.GDBackShadowObjects2= [];
gdjs.Game_32OverCode.GDRightShadowObjects1= [];
gdjs.Game_32OverCode.GDRightShadowObjects2= [];
gdjs.Game_32OverCode.GDBloodyMaryObjects1= [];
gdjs.Game_32OverCode.GDBloodyMaryObjects2= [];
gdjs.Game_32OverCode.GDPlayerhitbox22Objects1= [];
gdjs.Game_32OverCode.GDPlayerhitbox22Objects2= [];
gdjs.Game_32OverCode.GDPlayerhitbox2Objects1= [];
gdjs.Game_32OverCode.GDPlayerhitbox2Objects2= [];
gdjs.Game_32OverCode.GDPlayerhitboxObjects1= [];
gdjs.Game_32OverCode.GDPlayerhitboxObjects2= [];
gdjs.Game_32OverCode.GDheart3Objects1= [];
gdjs.Game_32OverCode.GDheart3Objects2= [];
gdjs.Game_32OverCode.GDheart2Objects1= [];
gdjs.Game_32OverCode.GDheart2Objects2= [];
gdjs.Game_32OverCode.GDheart1Objects1= [];
gdjs.Game_32OverCode.GDheart1Objects2= [];
gdjs.Game_32OverCode.GDheartoutlineObjects1= [];
gdjs.Game_32OverCode.GDheartoutlineObjects2= [];
gdjs.Game_32OverCode.GDClaraObjects1= [];
gdjs.Game_32OverCode.GDClaraObjects2= [];
gdjs.Game_32OverCode.GDGhostface2Objects1= [];
gdjs.Game_32OverCode.GDGhostface2Objects2= [];
gdjs.Game_32OverCode.GDEmilyGObjects1= [];
gdjs.Game_32OverCode.GDEmilyGObjects2= [];
gdjs.Game_32OverCode.GDJasonObjects1= [];
gdjs.Game_32OverCode.GDJasonObjects2= [];
gdjs.Game_32OverCode.GDtextobject2Objects1= [];
gdjs.Game_32OverCode.GDtextobject2Objects2= [];
gdjs.Game_32OverCode.GDExitButtonObjects1= [];
gdjs.Game_32OverCode.GDExitButtonObjects2= [];
gdjs.Game_32OverCode.GDtextobjectObjects1= [];
gdjs.Game_32OverCode.GDtextobjectObjects2= [];
gdjs.Game_32OverCode.GDPlaybuttonObjects1= [];
gdjs.Game_32OverCode.GDPlaybuttonObjects2= [];
gdjs.Game_32OverCode.GDTextboxObjects1= [];
gdjs.Game_32OverCode.GDTextboxObjects2= [];
gdjs.Game_32OverCode.GDfogObjects1= [];
gdjs.Game_32OverCode.GDfogObjects2= [];
gdjs.Game_32OverCode.GDAmmaObjects1= [];
gdjs.Game_32OverCode.GDAmmaObjects2= [];
gdjs.Game_32OverCode.GDNewObjectObjects1= [];
gdjs.Game_32OverCode.GDNewObjectObjects2= [];
gdjs.Game_32OverCode.GDBackgroundObjects1= [];
gdjs.Game_32OverCode.GDBackgroundObjects2= [];
gdjs.Game_32OverCode.GDGameoverObjects1= [];
gdjs.Game_32OverCode.GDGameoverObjects2= [];
gdjs.Game_32OverCode.GDPlayObjects1= [];
gdjs.Game_32OverCode.GDPlayObjects2= [];
gdjs.Game_32OverCode.GDbutton2Objects1= [];
gdjs.Game_32OverCode.GDbutton2Objects2= [];
gdjs.Game_32OverCode.GDbuttonObjects1= [];
gdjs.Game_32OverCode.GDbuttonObjects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_0 = {val:false};
gdjs.Game_32OverCode.conditionTrue_1 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_1 = {val:false};


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.Game_32OverCode.GDExitButtonObjects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDPlaybuttonObjects1Objects = Hashtable.newFrom({"Playbutton": gdjs.Game_32OverCode.GDPlaybuttonObjects1});gdjs.Game_32OverCode.eventsList0x8d94d4 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition1IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9279084);
}
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
gdjs.Game_32OverCode.GDTextboxObjects1.createFrom(runtimeScene.getObjects("Textbox"));
gdjs.Game_32OverCode.GDtextobjectObjects1.createFrom(runtimeScene.getObjects("textobject"));
{for(var i = 0, len = gdjs.Game_32OverCode.GDTextboxObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDTextboxObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDtextobjectObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDtextobjectObjects1[i].hide(false);
}
}}

}


}; //End of gdjs.Game_32OverCode.eventsList0x8d94d4
gdjs.Game_32OverCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.Game_32OverCode.GDAmmaObjects1.createFrom(runtimeScene.getObjects("Amma"));
gdjs.Game_32OverCode.GDBloodyMaryObjects1.createFrom(runtimeScene.getObjects("BloodyMary"));
gdjs.Game_32OverCode.GDClaraObjects1.createFrom(runtimeScene.getObjects("Clara"));
gdjs.Game_32OverCode.GDEmilyGObjects1.createFrom(runtimeScene.getObjects("EmilyG"));
gdjs.Game_32OverCode.GDGhostface2Objects1.createFrom(runtimeScene.getObjects("Ghostface2"));
gdjs.Game_32OverCode.GDJasonObjects1.createFrom(runtimeScene.getObjects("Jason"));
{for(var i = 0, len = gdjs.Game_32OverCode.GDClaraObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDClaraObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDEmilyGObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDEmilyGObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDAmmaObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDAmmaObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDGhostface2Objects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDGhostface2Objects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDBloodyMaryObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDBloodyMaryObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDJasonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDJasonObjects1[i].setAnimation(5);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "Horror Suspense.mp3", true, 100, 1);
}}

}


{

gdjs.Game_32OverCode.GDExitButtonObjects1.createFrom(runtimeScene.getObjects("ExitButton"));

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.Game_32OverCode.GDPlaybuttonObjects1.createFrom(runtimeScene.getObjects("Playbutton"));

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDPlaybuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Murder Hallway", true);
}}

}


{


if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().begin("Dialogue With BM"); }gdjs.Game_32OverCode.eventsList0x8d94d4(runtimeScene);if (runtimeScene.getProfiler()) { runtimeScene.getProfiler().end("Dialogue With BM"); }
}


}; //End of gdjs.Game_32OverCode.eventsList0xb5aa0


gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDPlayerObjects1.length = 0;
gdjs.Game_32OverCode.GDPlayerObjects2.length = 0;
gdjs.Game_32OverCode.GDBarrierObjects1.length = 0;
gdjs.Game_32OverCode.GDBarrierObjects2.length = 0;
gdjs.Game_32OverCode.GDDoorRoom2Objects1.length = 0;
gdjs.Game_32OverCode.GDDoorRoom2Objects2.length = 0;
gdjs.Game_32OverCode.GDDoorRoom12Objects1.length = 0;
gdjs.Game_32OverCode.GDDoorRoom12Objects2.length = 0;
gdjs.Game_32OverCode.GDDoorRoom1Objects1.length = 0;
gdjs.Game_32OverCode.GDDoorRoom1Objects2.length = 0;
gdjs.Game_32OverCode.GDBackShadowObjects1.length = 0;
gdjs.Game_32OverCode.GDBackShadowObjects2.length = 0;
gdjs.Game_32OverCode.GDRightShadowObjects1.length = 0;
gdjs.Game_32OverCode.GDRightShadowObjects2.length = 0;
gdjs.Game_32OverCode.GDBloodyMaryObjects1.length = 0;
gdjs.Game_32OverCode.GDBloodyMaryObjects2.length = 0;
gdjs.Game_32OverCode.GDPlayerhitbox22Objects1.length = 0;
gdjs.Game_32OverCode.GDPlayerhitbox22Objects2.length = 0;
gdjs.Game_32OverCode.GDPlayerhitbox2Objects1.length = 0;
gdjs.Game_32OverCode.GDPlayerhitbox2Objects2.length = 0;
gdjs.Game_32OverCode.GDPlayerhitboxObjects1.length = 0;
gdjs.Game_32OverCode.GDPlayerhitboxObjects2.length = 0;
gdjs.Game_32OverCode.GDheart3Objects1.length = 0;
gdjs.Game_32OverCode.GDheart3Objects2.length = 0;
gdjs.Game_32OverCode.GDheart2Objects1.length = 0;
gdjs.Game_32OverCode.GDheart2Objects2.length = 0;
gdjs.Game_32OverCode.GDheart1Objects1.length = 0;
gdjs.Game_32OverCode.GDheart1Objects2.length = 0;
gdjs.Game_32OverCode.GDheartoutlineObjects1.length = 0;
gdjs.Game_32OverCode.GDheartoutlineObjects2.length = 0;
gdjs.Game_32OverCode.GDClaraObjects1.length = 0;
gdjs.Game_32OverCode.GDClaraObjects2.length = 0;
gdjs.Game_32OverCode.GDGhostface2Objects1.length = 0;
gdjs.Game_32OverCode.GDGhostface2Objects2.length = 0;
gdjs.Game_32OverCode.GDEmilyGObjects1.length = 0;
gdjs.Game_32OverCode.GDEmilyGObjects2.length = 0;
gdjs.Game_32OverCode.GDJasonObjects1.length = 0;
gdjs.Game_32OverCode.GDJasonObjects2.length = 0;
gdjs.Game_32OverCode.GDtextobject2Objects1.length = 0;
gdjs.Game_32OverCode.GDtextobject2Objects2.length = 0;
gdjs.Game_32OverCode.GDExitButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDExitButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDtextobjectObjects1.length = 0;
gdjs.Game_32OverCode.GDtextobjectObjects2.length = 0;
gdjs.Game_32OverCode.GDPlaybuttonObjects1.length = 0;
gdjs.Game_32OverCode.GDPlaybuttonObjects2.length = 0;
gdjs.Game_32OverCode.GDTextboxObjects1.length = 0;
gdjs.Game_32OverCode.GDTextboxObjects2.length = 0;
gdjs.Game_32OverCode.GDfogObjects1.length = 0;
gdjs.Game_32OverCode.GDfogObjects2.length = 0;
gdjs.Game_32OverCode.GDAmmaObjects1.length = 0;
gdjs.Game_32OverCode.GDAmmaObjects2.length = 0;
gdjs.Game_32OverCode.GDNewObjectObjects1.length = 0;
gdjs.Game_32OverCode.GDNewObjectObjects2.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32OverCode.GDGameoverObjects1.length = 0;
gdjs.Game_32OverCode.GDGameoverObjects2.length = 0;
gdjs.Game_32OverCode.GDPlayObjects1.length = 0;
gdjs.Game_32OverCode.GDPlayObjects2.length = 0;
gdjs.Game_32OverCode.GDbutton2Objects1.length = 0;
gdjs.Game_32OverCode.GDbutton2Objects2.length = 0;
gdjs.Game_32OverCode.GDbuttonObjects1.length = 0;
gdjs.Game_32OverCode.GDbuttonObjects2.length = 0;

gdjs.Game_32OverCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
