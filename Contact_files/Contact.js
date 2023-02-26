// Created by iWeb 3.0.1 local-build-20090713

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({reflection_0:new IWReflection({opacity:0.50,offset:1.00})});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Contact_files/ContactMoz.css')
Widget.onload();fixAllIEPNGs('Media/transparent.gif');IMpreload('Contact_files','shapeimage_4','0');applyEffects()}
function onPageUnload()
{Widget.onunload();}
