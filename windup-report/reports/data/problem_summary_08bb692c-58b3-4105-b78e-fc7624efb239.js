MIGRATION_ISSUES_DETAILS["08bb692c-58b3-4105-b78e-fc7624efb239"] = [
{description: "<p>Replace <code>management.endpoints.web.exposure.include=prometheus<\/code> with <code>quarkus.micrometer.export.prometheus.path=/actuator/prometheus<\/code><\/p>", ruleID: "springboot-metrics-to-quarkus-0300", issueName: "Replace Spring Prometheus Metrics endpoint mapping",
problemSummaryID: "08bb692c-58b3-4105-b78e-fc7624efb239", files: [
{l:"<a class='' href='application_properties.html?project=77968'>src/main/resources/application.properties<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/micrometer", t:"Quarkus Guide - Micrometer Metrics"},
]},
];
onProblemSummaryLoaded("08bb692c-58b3-4105-b78e-fc7624efb239");