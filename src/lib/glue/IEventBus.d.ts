//     This code was generated by a Reinforced.Typings tool.
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

///<reference path="../Either.d.ts"/>
///<reference path="../Maybe.ts"/>
///<reference path="IArgonEvent.d.ts"/>

interface IEventBus
{
	SubscribeToServerEvents(ServerId: string) : Promise<AsyncIterable<IArgonEvent>>;
}
