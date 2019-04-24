import Reaction from "/imports/plugins/core/core/server/Reaction";

appEvents.emit("afterCoreInit", () => {
  Reaction.addRolesToGroups({
    allShops: true,
    groups: ["customer", "guest"],
    roles: ["reaction-paypal/paypalDone", "reaction-paypal/paypalCancel"]
  });
});
