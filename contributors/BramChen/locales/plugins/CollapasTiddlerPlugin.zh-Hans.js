/***
|''Name:''|CollapseTiddlersPlugin.zh-Hans|
|''Source:''|[[TiddlyWiki-zh|http://tiddlywiki-zh.googlecode.com/svn/trunk/contributors/BramChen/locales/plugins/]]|
|''Require:''|[[CollapseTiddlersPlugin|http://www.tiddlytools.com/#CollapseTiddlersPlugin]]|
***/
//{{{
if (typeof commands.collapseTiddler != "undefined"){
	config.commands.collapseTiddler.text="折合";
	config.commands.collapseTiddler.tooltip="折合本文章";
	config.commands.expandTiddler.text="展开";
	config.commands.expandTiddler.tooltip="展开本文章";
	config.commands.collapseOthers.text="折合其他";
	config.commands.collapseOthers.tooltip="展开本文章，并折合其他以开启的文章";
};
//}}}