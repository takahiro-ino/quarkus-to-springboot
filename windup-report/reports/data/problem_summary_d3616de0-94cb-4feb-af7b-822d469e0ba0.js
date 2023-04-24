MIGRATION_ISSUES_DETAILS["d3616de0-94cb-4feb-af7b-822d469e0ba0"] = [
{description: "<p>Replace <code>springdoc.swagger-ui.path<\/code> with <code>quarkus.swagger-ui.path<\/code><\/p><p>By adding <code>quarkus.swagger-ui.always-include=true<\/code> Quarkus will always expose the Swagger UI endpoint. It is only exposed in Dev mode by default.<\/p>", ruleID: "springboot-properties-to-quarkus-00005", issueName: "Replace Spring Swagger endpoint mapping",
problemSummaryID: "d3616de0-94cb-4feb-af7b-822d469e0ba0", files: [
{l:"<a class='' href='application_properties.html?project=77968'>src/main/resources/application.properties<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/openapi-swaggerui", t:"Quarkus Guide - using OpenAPI and Swagger"},
]},
];
onProblemSummaryLoaded("d3616de0-94cb-4feb-af7b-822d469e0ba0");