import Reaction from "/imports/plugins/core/core/server/Reaction";
import appEvents from "/imports/node-app/core/util/appEvents";

appEvents.on("afterCoreInit", () => {
  Reaction.addRolesToGroups({
    allShops: true,
    groups: ["customer", "guest"],
    roles: ["reaction-paypal/paypalDone", "reaction-paypal/paypalCancel"]
  });
});
