function Bus() {

    var subscriptions = [];

    var makeDeliveryJob = function (subscriber) {
        return function (payload) {
            subscriber.apply(null, [payload]);
        };
    };

    var makeSubscription = function (subscriber, eventName) {
        var subscription = {
            Subscriber: subscriber,
            EventName: eventName,
            Send: makeDeliveryJob(subscriber)
        };
        return subscription;
    };

    var sendSubscriptions = function (eventName, payload) {
        for (var i = 0; i < subscriptions.length; i++) {
            var subscription = subscriptions[i];
            if (subscription.EventName === eventName) {
                subscription.Send(payload);
            }
        }
    };

    var makeSubscriptionApi = function (subscriber) {

        //TODO: Ensure unique subscriptions

        //Implementation
        var to = function (eventName) {
            var subscription = makeSubscription(subscriber, eventName);
            if(typeof eventName !== "string")
              throw new Error("Event name is not a string. Found: " + typeof eventName);
            subscriptions.push(subscription);
        };

        //"API"
        return {
            To: to
        };

    };

    var makeUnsubscribeApi = function (subscriber) {

        var from = function (eventName) {
          if(typeof eventName !== "string")
            throw new Error("Event name is not a string. Found: " + typeof eventName);
          subscriptions.forEach(function(subscription, index){
            if(subscription.EventName === eventName && subscription.Subscriber === subscriber){
              subscriptions.splice(index, 1);
            }
          });
        };

        return {
          From: from
        };

    }

    var subscribe = function (subscriber) {
      if(typeof subscriber !== "function")
        throw new Error("Subscriber is not a function. Found: " + typeof subscriber);
      return makeSubscriptionApi(subscriber);
    };

    var unsubscribe = function (subscriber) {
      if(typeof subscriber !== "function")
        throw new Error("Subscriber is not a function. Found: " + typeof subscriber);
      return makeUnsubscribeApi(subscriber);
    }

    var publish = function (eventName, payload) {
        sendSubscriptions(eventName, payload);
    };

    return {
        Subscribe: subscribe,
        Publish: publish,
        UnSubscribe: unsubscribe
    };

}

export default Bus();
