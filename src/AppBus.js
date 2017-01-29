function AppBus() {

    const subscriptions = [];

    const makeDeliveryJob = function (subscriber) {
        return function (payload) {
            subscriber.apply(null, [payload]);
        };
    };

    const makeSubscription = function (subscriber, eventName) {
        const send = makeDeliveryJob(subscriber);
        return {
            Subscriber: subscriber,
            EventName: eventName,
            Send: send
        };
    };

    const sendSubscriptions = function (eventName, payload) {
        subscriptions.forEach(function(subscription){
            if (subscription.EventName === eventName) {
                subscription.Send(payload);
            }
        });
    };

    const makeSubscriptionApi = function (subscriber) {

        //TODO: Ensure unique subscriptions
        const to = function (eventName) {
            const subscription = makeSubscription(subscriber, eventName);
            if(typeof eventName !== "string"){
              throw new Error("Event name is not a string. Found: " + typeof eventName);
            }
            subscriptions.push(subscription);
        };

        return {
            To: to
        };

    };

    const makeUnSubscribeApi = function (subscriber) {

        const from = function (eventName) {
          if(typeof eventName !== "string"){
            throw new Error("Event name is not a string. Found: " + typeof eventName);
          }
          subscriptions.forEach(function(subscription, index){
            if(subscription.EventName === eventName && subscription.Subscriber === subscriber){
              subscriptions.splice(index, 1);
            }
          });
        };

        return {
          From: from
        };

    };

    const subscribe = function (subscriber) {
      if(typeof subscriber !== "function"){
        throw new Error("Subscriber is not a function. Found: " + typeof subscriber);
      }
      return makeSubscriptionApi(subscriber);
    };

    const unSubscribe = function (subscriber) {
      if(typeof subscriber !== "function"){
        throw new Error("Subscriber is not a function. Found: " + typeof subscriber);
      }
      return makeUnSubscribeApi(subscriber);
    };

    const publish = function (eventName, payload) {
      if(typeof eventName !== "string") {
        throw new Error("Subscriber is not a string. Found: " + typeof subscriber);
      }
      sendSubscriptions(eventName, payload);
    };

    return {
        Subscribe: subscribe,
        Publish: publish,
        UnSubscribe: unSubscribe
    };

}

export default AppBus();
