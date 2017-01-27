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

        //Implementation
        var to = function (eventName) {
            var subscription = makeSubscription(subscriber, eventName);
            subscriptions.push(subscription);
        };

        //"API"
        return {
            To: to
        };

    };

    var subscribe = function (subscriber) {
        return makeSubscriptionApi(subscriber);
    };

    var publish = function (eventName, payload) {
        sendSubscriptions(eventName, payload);
    };

    return {
        Subscribe: subscribe,
        Publish: publish
    };

}

export default Bus();
