//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

///<reference path="../Either.d.ts"/>
///<reference path="../Maybe.ts"/>

interface ChannelModified extends IArgonEvent
{
	EventKey: 'ChannelModified';
	channelId: string;
	bag: any;
}
