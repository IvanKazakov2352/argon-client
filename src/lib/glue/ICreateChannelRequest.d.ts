//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

///<reference path="../Either.d.ts"/>
///<reference path="../Maybe.ts"/>

interface ICreateChannelRequest
{
	serverId: string;
	name: string;
	kind: 'Text' | 'Voice' | 'Announcement';
	desc: string;
}
