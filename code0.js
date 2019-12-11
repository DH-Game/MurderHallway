gdjs.Title_32ScreenCode = {};
gdjs.Title_32ScreenCode.GDPlayerObjects1= [];
gdjs.Title_32ScreenCode.GDPlayerObjects2= [];
gdjs.Title_32ScreenCode.GDBarrierObjects1= [];
gdjs.Title_32ScreenCode.GDBarrierObjects2= [];
gdjs.Title_32ScreenCode.GDDoorRoom2Objects1= [];
gdjs.Title_32ScreenCode.GDDoorRoom2Objects2= [];
gdjs.Title_32ScreenCode.GDDoorRoom12Objects1= [];
gdjs.Title_32ScreenCode.GDDoorRoom12Objects2= [];
gdjs.Title_32ScreenCode.GDDoorRoom1Objects1= [];
gdjs.Title_32ScreenCode.GDDoorRoom1Objects2= [];
gdjs.Title_32ScreenCode.GDBackShadowObjects1= [];
gdjs.Title_32ScreenCode.GDBackShadowObjects2= [];
gdjs.Title_32ScreenCode.GDRightShadowObjects1= [];
gdjs.Title_32ScreenCode.GDRightShadowObjects2= [];
gdjs.Title_32ScreenCode.GDBloodyMaryObjects1= [];
gdjs.Title_32ScreenCode.GDBloodyMaryObjects2= [];
gdjs.Title_32ScreenCode.GDPlayerhitbox22Objects1= [];
gdjs.Title_32ScreenCode.GDPlayerhitbox22Objects2= [];
gdjs.Title_32ScreenCode.GDPlayerhitbox2Objects1= [];
gdjs.Title_32ScreenCode.GDPlayerhitbox2Objects2= [];
gdjs.Title_32ScreenCode.GDPlayerhitboxObjects1= [];
gdjs.Title_32ScreenCode.GDPlayerhitboxObjects2= [];
gdjs.Title_32ScreenCode.GDheart3Objects1= [];
gdjs.Title_32ScreenCode.GDheart3Objects2= [];
gdjs.Title_32ScreenCode.GDheart2Objects1= [];
gdjs.Title_32ScreenCode.GDheart2Objects2= [];
gdjs.Title_32ScreenCode.GDheart1Objects1= [];
gdjs.Title_32ScreenCode.GDheart1Objects2= [];
gdjs.Title_32ScreenCode.GDheartoutlineObjects1= [];
gdjs.Title_32ScreenCode.GDheartoutlineObjects2= [];
gdjs.Title_32ScreenCode.GDBackGroundObjects1= [];
gdjs.Title_32ScreenCode.GDBackGroundObjects2= [];
gdjs.Title_32ScreenCode.GDNameInputObjects1= [];
gdjs.Title_32ScreenCode.GDNameInputObjects2= [];
gdjs.Title_32ScreenCode.GDPlaybuttonObjects1= [];
gdjs.Title_32ScreenCode.GDPlaybuttonObjects2= [];
gdjs.Title_32ScreenCode.GDNameObjects1= [];
gdjs.Title_32ScreenCode.GDNameObjects2= [];
gdjs.Title_32ScreenCode.GDPlayerNameObjects1= [];
gdjs.Title_32ScreenCode.GDPlayerNameObjects2= [];
gdjs.Title_32ScreenCode.GDExitButtonObjects1= [];
gdjs.Title_32ScreenCode.GDExitButtonObjects2= [];
gdjs.Title_32ScreenCode.GDgameratingObjects1= [];
gdjs.Title_32ScreenCode.GDgameratingObjects2= [];

gdjs.Title_32ScreenCode.conditionTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition0IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition1IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition2IsTrue_0 = {val:false};
gdjs.Title_32ScreenCode.condition3IsTrue_0 = {val:false};


gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDPlayerNameObjects1Objects = Hashtable.newFrom({"PlayerName": gdjs.Title_32ScreenCode.GDPlayerNameObjects1});gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDPlaybuttonObjects1Objects = Hashtable.newFrom({"Playbutton": gdjs.Title_32ScreenCode.GDPlaybuttonObjects1});gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.Title_32ScreenCode.GDExitButtonObjects1});gdjs.Title_32ScreenCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
{}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(3);
}}

}


{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "free_creepy_track_5.wav", true, 100, 1);
}}

}


{

gdjs.Title_32ScreenCode.GDPlayerNameObjects1.createFrom(runtimeScene.getObjects("PlayerName"));

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDPlayerNameObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Title_32ScreenCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("EnterNameText").setNumber(1);
}}

}


{


gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("EnterNameText")) == 1;
}if (gdjs.Title_32ScreenCode.condition0IsTrue_0.val) {
gdjs.Title_32ScreenCode.GDNameInputObjects1.createFrom(runtimeScene.getObjects("NameInput"));
gdjs.Title_32ScreenCode.GDPlayerNameObjects1.createFrom(runtimeScene.getObjects("PlayerName"));
{for(var i = 0, len = gdjs.Title_32ScreenCode.GDPlayerNameObjects1.length ;i < len;++i) {
    gdjs.Title_32ScreenCode.GDPlayerNameObjects1[i].setString((( gdjs.Title_32ScreenCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.Title_32ScreenCode.GDNameInputObjects1[0].getString()));
}
}{runtimeScene.getGame().getVariables().get("EnterPlayerNameIntoDialogue").setString((( gdjs.Title_32ScreenCode.GDNameInputObjects1.length === 0 ) ? "" :gdjs.Title_32ScreenCode.GDNameInputObjects1[0].getString()));
}}

}


{

gdjs.Title_32ScreenCode.GDPlaybuttonObjects1.createFrom(runtimeScene.getObjects("Playbutton"));

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition2IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDPlaybuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Title_32ScreenCode.condition1IsTrue_0.val ) {
{
gdjs.Title_32ScreenCode.condition2IsTrue_0.val = !(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().get("PlayerName")) == "");
}}
}
if (gdjs.Title_32ScreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Murder Hallway", false);
}}

}


{

gdjs.Title_32ScreenCode.GDExitButtonObjects1.createFrom(runtimeScene.getObjects("ExitButton"));

gdjs.Title_32ScreenCode.condition0IsTrue_0.val = false;
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = false;
{
gdjs.Title_32ScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Title_32ScreenCode.mapOfGDgdjs_46Title_9532ScreenCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Title_32ScreenCode.condition0IsTrue_0.val ) {
{
gdjs.Title_32ScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Title_32ScreenCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


{
}

}


}; //End of gdjs.Title_32ScreenCode.eventsList0xb5aa0


gdjs.Title_32ScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Title_32ScreenCode.GDPlayerObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPlayerObjects2.length = 0;
gdjs.Title_32ScreenCode.GDBarrierObjects1.length = 0;
gdjs.Title_32ScreenCode.GDBarrierObjects2.length = 0;
gdjs.Title_32ScreenCode.GDDoorRoom2Objects1.length = 0;
gdjs.Title_32ScreenCode.GDDoorRoom2Objects2.length = 0;
gdjs.Title_32ScreenCode.GDDoorRoom12Objects1.length = 0;
gdjs.Title_32ScreenCode.GDDoorRoom12Objects2.length = 0;
gdjs.Title_32ScreenCode.GDDoorRoom1Objects1.length = 0;
gdjs.Title_32ScreenCode.GDDoorRoom1Objects2.length = 0;
gdjs.Title_32ScreenCode.GDBackShadowObjects1.length = 0;
gdjs.Title_32ScreenCode.GDBackShadowObjects2.length = 0;
gdjs.Title_32ScreenCode.GDRightShadowObjects1.length = 0;
gdjs.Title_32ScreenCode.GDRightShadowObjects2.length = 0;
gdjs.Title_32ScreenCode.GDBloodyMaryObjects1.length = 0;
gdjs.Title_32ScreenCode.GDBloodyMaryObjects2.length = 0;
gdjs.Title_32ScreenCode.GDPlayerhitbox22Objects1.length = 0;
gdjs.Title_32ScreenCode.GDPlayerhitbox22Objects2.length = 0;
gdjs.Title_32ScreenCode.GDPlayerhitbox2Objects1.length = 0;
gdjs.Title_32ScreenCode.GDPlayerhitbox2Objects2.length = 0;
gdjs.Title_32ScreenCode.GDPlayerhitboxObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPlayerhitboxObjects2.length = 0;
gdjs.Title_32ScreenCode.GDheart3Objects1.length = 0;
gdjs.Title_32ScreenCode.GDheart3Objects2.length = 0;
gdjs.Title_32ScreenCode.GDheart2Objects1.length = 0;
gdjs.Title_32ScreenCode.GDheart2Objects2.length = 0;
gdjs.Title_32ScreenCode.GDheart1Objects1.length = 0;
gdjs.Title_32ScreenCode.GDheart1Objects2.length = 0;
gdjs.Title_32ScreenCode.GDheartoutlineObjects1.length = 0;
gdjs.Title_32ScreenCode.GDheartoutlineObjects2.length = 0;
gdjs.Title_32ScreenCode.GDBackGroundObjects1.length = 0;
gdjs.Title_32ScreenCode.GDBackGroundObjects2.length = 0;
gdjs.Title_32ScreenCode.GDNameInputObjects1.length = 0;
gdjs.Title_32ScreenCode.GDNameInputObjects2.length = 0;
gdjs.Title_32ScreenCode.GDPlaybuttonObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPlaybuttonObjects2.length = 0;
gdjs.Title_32ScreenCode.GDNameObjects1.length = 0;
gdjs.Title_32ScreenCode.GDNameObjects2.length = 0;
gdjs.Title_32ScreenCode.GDPlayerNameObjects1.length = 0;
gdjs.Title_32ScreenCode.GDPlayerNameObjects2.length = 0;
gdjs.Title_32ScreenCode.GDExitButtonObjects1.length = 0;
gdjs.Title_32ScreenCode.GDExitButtonObjects2.length = 0;
gdjs.Title_32ScreenCode.GDgameratingObjects1.length = 0;
gdjs.Title_32ScreenCode.GDgameratingObjects2.length = 0;

gdjs.Title_32ScreenCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['Title_32ScreenCode'] = gdjs.Title_32ScreenCode;
