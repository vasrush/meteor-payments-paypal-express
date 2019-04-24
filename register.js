import Reaction from "/imports/plugins/core/core/server/Reaction";

Reaction.registerPackage({
  label: "PayPal",
  name: "reaction-paypal-express",
  icon: "fa fa-paypal",
  autoEnable: true,
  settings: {
    expressAuthAndCapture: false,
    express: {
      enabled: false,
      support: [
        "Authorize",
        "Capture",
        "Refund"
      ]
    },
    payflow: {
      enabled: false,
      support: [
        "Authorize",
        "Capture",
        "Refund"
      ]
    }
  },
  registry: [
    {
      label: "PayPal Express",
      provides: ["paymentSettings"],
      name: "paypal/settings/express",
      icon: "fa fa-paypal",
      template: "paypalExpressSettings"
    }, {
      route: "/paypal/done",
      template: "paypalDone",
      workflow: "coreWorkflow"
    }, {
      route: "/paypal/cancel",
      template: "paypalCancel",
      workflow: "coreWorkflow"
    }, {
      template: "paypalCheckoutButton",
      label: "Express",
      name: "payment/method/express",
      provides: ["paymentMethod"],
      icon: "fa fa-paypal",
      priority: 1
    }
  ]
});
