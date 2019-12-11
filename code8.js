gdjs.WinCode = {};
gdjs.WinCode.GDPlayerObjects1= [];
gdjs.WinCode.GDPlayerObjects2= [];
gdjs.WinCode.GDPlayerObjects3= [];
gdjs.WinCode.GDBarrierObjects1= [];
gdjs.WinCode.GDBarrierObjects2= [];
gdjs.WinCode.GDBarrierObjects3= [];
gdjs.WinCode.GDDoorRoom2Objects1= [];
gdjs.WinCode.GDDoorRoom2Objects2= [];
gdjs.WinCode.GDDoorRoom2Objects3= [];
gdjs.WinCode.GDDoorRoom12Objects1= [];
gdjs.WinCode.GDDoorRoom12Objects2= [];
gdjs.WinCode.GDDoorRoom12Objects3= [];
gdjs.WinCode.GDDoorRoom1Objects1= [];
gdjs.WinCode.GDDoorRoom1Objects2= [];
gdjs.WinCode.GDDoorRoom1Objects3= [];
gdjs.WinCode.GDBackShadowObjects1= [];
gdjs.WinCode.GDBackShadowObjects2= [];
gdjs.WinCode.GDBackShadowObjects3= [];
gdjs.WinCode.GDRightShadowObjects1= [];
gdjs.WinCode.GDRightShadowObjects2= [];
gdjs.WinCode.GDRightShadowObjects3= [];
gdjs.WinCode.GDBloodyMaryObjects1= [];
gdjs.WinCode.GDBloodyMaryObjects2= [];
gdjs.WinCode.GDBloodyMaryObjects3= [];
gdjs.WinCode.GDPlayerhitbox22Objects1= [];
gdjs.WinCode.GDPlayerhitbox22Objects2= [];
gdjs.WinCode.GDPlayerhitbox22Objects3= [];
gdjs.WinCode.GDPlayerhitbox2Objects1= [];
gdjs.WinCode.GDPlayerhitbox2Objects2= [];
gdjs.WinCode.GDPlayerhitbox2Objects3= [];
gdjs.WinCode.GDPlayerhitboxObjects1= [];
gdjs.WinCode.GDPlayerhitboxObjects2= [];
gdjs.WinCode.GDPlayerhitboxObjects3= [];
gdjs.WinCode.GDheart3Objects1= [];
gdjs.WinCode.GDheart3Objects2= [];
gdjs.WinCode.GDheart3Objects3= [];
gdjs.WinCode.GDheart2Objects1= [];
gdjs.WinCode.GDheart2Objects2= [];
gdjs.WinCode.GDheart2Objects3= [];
gdjs.WinCode.GDheart1Objects1= [];
gdjs.WinCode.GDheart1Objects2= [];
gdjs.WinCode.GDheart1Objects3= [];
gdjs.WinCode.GDheartoutlineObjects1= [];
gdjs.WinCode.GDheartoutlineObjects2= [];
gdjs.WinCode.GDheartoutlineObjects3= [];
gdjs.WinCode.GDBackGroundObjects1= [];
gdjs.WinCode.GDBackGroundObjects2= [];
gdjs.WinCode.GDBackGroundObjects3= [];
gdjs.WinCode.GDTextboxObjects1= [];
gdjs.WinCode.GDTextboxObjects2= [];
gdjs.WinCode.GDTextboxObjects3= [];
gdjs.WinCode.GDPlaybuttonObjects1= [];
gdjs.WinCode.GDPlaybuttonObjects2= [];
gdjs.WinCode.GDPlaybuttonObjects3= [];
gdjs.WinCode.GDExitButtonObjects1= [];
gdjs.WinCode.GDExitButtonObjects2= [];
gdjs.WinCode.GDExitButtonObjects3= [];
gdjs.WinCode.GDtextobjectObjects1= [];
gdjs.WinCode.GDtextobjectObjects2= [];
gdjs.WinCode.GDtextobjectObjects3= [];
gdjs.WinCode.GDGameCodeObjects1= [];
gdjs.WinCode.GDGameCodeObjects2= [];
gdjs.WinCode.GDGameCodeObjects3= [];
gdjs.WinCode.GDTEXTbackgrounObjects1= [];
gdjs.WinCode.GDTEXTbackgrounObjects2= [];
gdjs.WinCode.GDTEXTbackgrounObjects3= [];
gdjs.WinCode.GDLink1Objects1= [];
gdjs.WinCode.GDLink1Objects2= [];
gdjs.WinCode.GDLink1Objects3= [];
gdjs.WinCode.GDLink2Objects1= [];
gdjs.WinCode.GDLink2Objects2= [];
gdjs.WinCode.GDLink2Objects3= [];

gdjs.WinCode.conditionTrue_0 = {val:false};
gdjs.WinCode.condition0IsTrue_0 = {val:false};
gdjs.WinCode.condition1IsTrue_0 = {val:false};
gdjs.WinCode.condition2IsTrue_0 = {val:false};


gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDPlaybuttonObjects1Objects = Hashtable.newFrom({"Playbutton": gdjs.WinCode.GDPlaybuttonObjects1});gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDExitButtonObjects1Objects = Hashtable.newFrom({"ExitButton": gdjs.WinCode.GDExitButtonObjects1});gdjs.WinCode.eventsList0x8dc3ec = function(runtimeScene) {

{


gdjs.WinCode.condition0IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)), "textScroll");
}if (gdjs.WinCode.condition0IsTrue_0.val) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "textScroll");
}}

}


{


gdjs.WinCode.condition0IsTrue_0.val = false;
gdjs.WinCode.condition1IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
}if ( gdjs.WinCode.condition0IsTrue_0.val ) {
{
gdjs.WinCode.condition1IsTrue_0.val = gdjs.dialogueTree.hasClippedScrollingCompleted();
}}
if (gdjs.WinCode.condition1IsTrue_0.val) {
{gdjs.dialogueTree.goToNextDialogueLine();
}}

}


{


gdjs.WinCode.condition0IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.WinCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0.02);
}}

}


{


gdjs.WinCode.condition0IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
}if (gdjs.WinCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0.07);
}}

}


}; //End of gdjs.WinCode.eventsList0x8dc3ec
gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDBloodyMaryObjects1Objects = Hashtable.newFrom({"BloodyMary": gdjs.WinCode.GDBloodyMaryObjects1});gdjs.WinCode.eventsList0xb5aa0 = function(runtimeScene) {

{


gdjs.WinCode.condition0IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.WinCode.condition0IsTrue_0.val) {
gdjs.WinCode.GDBloodyMaryObjects1.createFrom(runtimeScene.getObjects("BloodyMary"));
gdjs.WinCode.GDTEXTbackgrounObjects1.createFrom(runtimeScene.getObjects("TEXTbackgroun"));
gdjs.WinCode.GDTextboxObjects1.createFrom(runtimeScene.getObjects("Textbox"));
gdjs.WinCode.GDtextobjectObjects1.createFrom(runtimeScene.getObjects("textobject"));
{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "Win.json");
}{for(var i = 0, len = gdjs.WinCode.GDBloodyMaryObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDBloodyMaryObjects1[i].getBehavior("Flash").Flash(0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{}{for(var i = 0, len = gdjs.WinCode.GDtextobjectObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDtextobjectObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.WinCode.GDTextboxObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDTextboxObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.WinCode.GDBloodyMaryObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDBloodyMaryObjects1[i].setAnimation(2);
}
}{gdjs.evtTools.sound.playMusic(runtimeScene, "free_creepy_track_5.wav", true, 100, 1);
}}

}


{

gdjs.WinCode.GDPlaybuttonObjects1.createFrom(runtimeScene.getObjects("Playbutton"));

gdjs.WinCode.condition0IsTrue_0.val = false;
gdjs.WinCode.condition1IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDPlaybuttonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.WinCode.condition0IsTrue_0.val ) {
{
gdjs.WinCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.WinCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Murder Hallway", true);
}}

}


{

gdjs.WinCode.GDExitButtonObjects1.createFrom(runtimeScene.getObjects("ExitButton"));

gdjs.WinCode.condition0IsTrue_0.val = false;
gdjs.WinCode.condition1IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDExitButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.WinCode.condition0IsTrue_0.val ) {
{
gdjs.WinCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.WinCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.WinCode.GDBloodyMaryObjects1.createFrom(runtimeScene.getObjects("BloodyMary"));

gdjs.WinCode.condition0IsTrue_0.val = false;
gdjs.WinCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.WinCode.GDBloodyMaryObjects1.length;i<l;++i) {
    if ( !(gdjs.WinCode.GDBloodyMaryObjects1[i].getBehavior("Flash").IsFlashing((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        gdjs.WinCode.condition0IsTrue_0.val = true;
        gdjs.WinCode.GDBloodyMaryObjects1[k] = gdjs.WinCode.GDBloodyMaryObjects1[i];
        ++k;
    }
}
gdjs.WinCode.GDBloodyMaryObjects1.length = k;}if ( gdjs.WinCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.WinCode.GDBloodyMaryObjects1.length;i<l;++i) {
    if ( gdjs.WinCode.GDBloodyMaryObjects1[i].getVariableNumber(gdjs.WinCode.GDBloodyMaryObjects1[i].getVariables().get("talk")) == 0 ) {
        gdjs.WinCode.condition1IsTrue_0.val = true;
        gdjs.WinCode.GDBloodyMaryObjects1[k] = gdjs.WinCode.GDBloodyMaryObjects1[i];
        ++k;
    }
}
gdjs.WinCode.GDBloodyMaryObjects1.length = k;}}
if (gdjs.WinCode.condition1IsTrue_0.val) {
/* Reuse gdjs.WinCode.GDBloodyMaryObjects1 */
gdjs.WinCode.GDTextboxObjects1.createFrom(runtimeScene.getObjects("Textbox"));
gdjs.WinCode.GDtextobjectObjects1.createFrom(runtimeScene.getObjects("textobject"));
{gdjs.dialogueTree.startFrom("Endgame");
}{for(var i = 0, len = gdjs.WinCode.GDtextobjectObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDtextobjectObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.WinCode.GDTextboxObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDTextboxObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.WinCode.GDBloodyMaryObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDBloodyMaryObjects1[i].returnVariable(gdjs.WinCode.GDBloodyMaryObjects1[i].getVariables().get("talk")).setNumber(1);
}
}}

}


{


gdjs.WinCode.condition0IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.dialogueTree.isRunning();
}if (gdjs.WinCode.condition0IsTrue_0.val) {
}

}


{


gdjs.WinCode.condition0IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.dialogueTree.isDialogueLineType("text");
}if (gdjs.WinCode.condition0IsTrue_0.val) {
gdjs.WinCode.GDtextobjectObjects1.createFrom(runtimeScene.getObjects("textobject"));
{for(var i = 0, len = gdjs.WinCode.GDtextobjectObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDtextobjectObjects1[i].setString(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.WinCode.eventsList0x8dc3ec(runtimeScene);} //End of subevents
}

}


{

gdjs.WinCode.GDBloodyMaryObjects1.createFrom(runtimeScene.getObjects("BloodyMary"));

gdjs.WinCode.condition0IsTrue_0.val = false;
gdjs.WinCode.condition1IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.WinCode.condition0IsTrue_0.val ) {
{
gdjs.WinCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDBloodyMaryObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.WinCode.condition1IsTrue_0.val) {
/* Reuse gdjs.WinCode.GDBloodyMaryObjects1 */
{for(var i = 0, len = gdjs.WinCode.GDBloodyMaryObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDBloodyMaryObjects1[i].returnVariable(gdjs.WinCode.GDBloodyMaryObjects1[i].getVariables().get("talk")).setNumber(0);
}
}}

}


}; //End of gdjs.WinCode.eventsList0xb5aa0


gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDPlayerObjects1.length = 0;
gdjs.WinCode.GDPlayerObjects2.length = 0;
gdjs.WinCode.GDPlayerObjects3.length = 0;
gdjs.WinCode.GDBarrierObjects1.length = 0;
gdjs.WinCode.GDBarrierObjects2.length = 0;
gdjs.WinCode.GDBarrierObjects3.length = 0;
gdjs.WinCode.GDDoorRoom2Objects1.length = 0;
gdjs.WinCode.GDDoorRoom2Objects2.length = 0;
gdjs.WinCode.GDDoorRoom2Objects3.length = 0;
gdjs.WinCode.GDDoorRoom12Objects1.length = 0;
gdjs.WinCode.GDDoorRoom12Objects2.length = 0;
gdjs.WinCode.GDDoorRoom12Objects3.length = 0;
gdjs.WinCode.GDDoorRoom1Objects1.length = 0;
gdjs.WinCode.GDDoorRoom1Objects2.length = 0;
gdjs.WinCode.GDDoorRoom1Objects3.length = 0;
gdjs.WinCode.GDBackShadowObjects1.length = 0;
gdjs.WinCode.GDBackShadowObjects2.length = 0;
gdjs.WinCode.GDBackShadowObjects3.length = 0;
gdjs.WinCode.GDRightShadowObjects1.length = 0;
gdjs.WinCode.GDRightShadowObjects2.length = 0;
gdjs.WinCode.GDRightShadowObjects3.length = 0;
gdjs.WinCode.GDBloodyMaryObjects1.length = 0;
gdjs.WinCode.GDBloodyMaryObjects2.length = 0;
gdjs.WinCode.GDBloodyMaryObjects3.length = 0;
gdjs.WinCode.GDPlayerhitbox22Objects1.length = 0;
gdjs.WinCode.GDPlayerhitbox22Objects2.length = 0;
gdjs.WinCode.GDPlayerhitbox22Objects3.length = 0;
gdjs.WinCode.GDPlayerhitbox2Objects1.length = 0;
gdjs.WinCode.GDPlayerhitbox2Objects2.length = 0;
gdjs.WinCode.GDPlayerhitbox2Objects3.length = 0;
gdjs.WinCode.GDPlayerhitboxObjects1.length = 0;
gdjs.WinCode.GDPlayerhitboxObjects2.length = 0;
gdjs.WinCode.GDPlayerhitboxObjects3.length = 0;
gdjs.WinCode.GDheart3Objects1.length = 0;
gdjs.WinCode.GDheart3Objects2.length = 0;
gdjs.WinCode.GDheart3Objects3.length = 0;
gdjs.WinCode.GDheart2Objects1.length = 0;
gdjs.WinCode.GDheart2Objects2.length = 0;
gdjs.WinCode.GDheart2Objects3.length = 0;
gdjs.WinCode.GDheart1Objects1.length = 0;
gdjs.WinCode.GDheart1Objects2.length = 0;
gdjs.WinCode.GDheart1Objects3.length = 0;
gdjs.WinCode.GDheartoutlineObjects1.length = 0;
gdjs.WinCode.GDheartoutlineObjects2.length = 0;
gdjs.WinCode.GDheartoutlineObjects3.length = 0;
gdjs.WinCode.GDBackGroundObjects1.length = 0;
gdjs.WinCode.GDBackGroundObjects2.length = 0;
gdjs.WinCode.GDBackGroundObjects3.length = 0;
gdjs.WinCode.GDTextboxObjects1.length = 0;
gdjs.WinCode.GDTextboxObjects2.length = 0;
gdjs.WinCode.GDTextboxObjects3.length = 0;
gdjs.WinCode.GDPlaybuttonObjects1.length = 0;
gdjs.WinCode.GDPlaybuttonObjects2.length = 0;
gdjs.WinCode.GDPlaybuttonObjects3.length = 0;
gdjs.WinCode.GDExitButtonObjects1.length = 0;
gdjs.WinCode.GDExitButtonObjects2.length = 0;
gdjs.WinCode.GDExitButtonObjects3.length = 0;
gdjs.WinCode.GDtextobjectObjects1.length = 0;
gdjs.WinCode.GDtextobjectObjects2.length = 0;
gdjs.WinCode.GDtextobjectObjects3.length = 0;
gdjs.WinCode.GDGameCodeObjects1.length = 0;
gdjs.WinCode.GDGameCodeObjects2.length = 0;
gdjs.WinCode.GDGameCodeObjects3.length = 0;
gdjs.WinCode.GDTEXTbackgrounObjects1.length = 0;
gdjs.WinCode.GDTEXTbackgrounObjects2.length = 0;
gdjs.WinCode.GDTEXTbackgrounObjects3.length = 0;
gdjs.WinCode.GDLink1Objects1.length = 0;
gdjs.WinCode.GDLink1Objects2.length = 0;
gdjs.WinCode.GDLink1Objects3.length = 0;
gdjs.WinCode.GDLink2Objects1.length = 0;
gdjs.WinCode.GDLink2Objects2.length = 0;
gdjs.WinCode.GDLink2Objects3.length = 0;

gdjs.WinCode.eventsList0xb5aa0(runtimeScene);
return;

}
gdjs['WinCode'] = gdjs.WinCode;
