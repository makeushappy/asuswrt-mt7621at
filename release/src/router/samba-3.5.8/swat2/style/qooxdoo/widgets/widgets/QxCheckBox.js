/* Copyright (c): 2002-2005 (Germany): United Internet, 1&1, GMX, Schlund+Partner, Alturo */
function QxCheckBox(vText,vValue,vName,vChecked){QxAtom.call(this,vText);this.setTabIndex(1);if(isValid(vValue)){this.setValue(vValue);};if(isValid(vName)){this.setName(vName);};if(isValid(vChecked)){this.setChecked(vChecked);};this.addEventListener("click",this._g3);this.addEventListener("keydown",this._g4);this.addEventListener("keyup",this._g5);};QxCheckBox.extend(QxAtom,"QxCheckBox");QxCheckBox.removeProperty({name:"icon"});QxCheckBox.addProperty({name:"name",type:String});QxCheckBox.addProperty({name:"value",type:String});QxCheckBox.addProperty({name:"checked",type:Boolean,defaultValue:false,getAlias:"isChecked"});proto._c1=true;proto._modifyIcon=null;proto._hasIcon=function(){return true;};proto._e3Icon=function(){var i=this._f1=new QxInputCheckIcon();i.setType("checkbox");i.setChecked(this.isChecked());i.setEnabled(this.isEnabled());i.setAnonymous(true);i.setParent(this);};proto._modifyChecked=function(_b1,_b2,_b3,_b4){if(this._f1){this._f1.setChecked(_b1);};return true;};if((new QxClient).isMshtml()){proto._modifyVisible=function(_b1,_b2,_b3,_b4){QxWidget.prototype._modifyVisible.call(this,_b1,_b2,_b3,_b4);if(this._f1&&_b1){this._f1.getElement().checked=this.getChecked();};return true;};};proto._g3=function(e){var t=e.getDomTarget();this.setChecked(t.tagName=="input"?t.checked:!this.isChecked());};proto._g4=function(e){if(e.getKeyCode()==QxKeyEvent.keys.enter&&!e.getAltKey()){this.setChecked(this._f1?!this._f1.isChecked():!this.isChecked());};};proto._g5=function(e){if(e.getKeyCode()==QxKeyEvent.keys.space){this.setChecked(this._f1?!this._f1.isChecked():!this.isChecked());};};proto.dispose=function(){if(this.getDisposed()){return;};this.removeEventListener("click",this._g3);this.removeEventListener("keydown",this._g4);this.removeEventListener("keyup",this._g5);return QxAtom.prototype.dispose.call(this);};