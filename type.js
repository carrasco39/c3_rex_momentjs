"use strict";

{
	const PLUGIN_CLASS = SDK.Plugins.Rex_MomenJS;
	
	PLUGIN_CLASS.Type = class Rex_MomenJSType extends SDK.ITypeBase
	{
		constructor(sdkPlugin, iObjectType)
		{
			super(sdkPlugin, iObjectType);
		}
	};
}