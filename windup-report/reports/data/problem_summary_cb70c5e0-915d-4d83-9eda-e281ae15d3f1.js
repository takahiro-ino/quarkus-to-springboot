MIGRATION_ISSUES_DETAILS["cb70c5e0-915d-4d83-9eda-e281ae15d3f1"] = [
{description: "<p>Check if there is a Quarkus Extensions with Spring API compatibility for the Spring <code>springdoc-openapi-starter-webmvc-ui<\/code> component.<br/> If yes, then replace the <code>org.springdoc:springdoc-openapi-starter-webmvc-ui<\/code> dependency with the Quarkus extension.<br/> If no, consider rewrite the code that relies on this dependency leveraging the Quarkus Guides linked below.<\/p>", ruleID: "springboot-generic-catchall-groovy-00000", issueName: "Spring component springdoc-openapi-starter-webmvc-ui requires investigation",
problemSummaryID: "cb70c5e0-915d-4d83-9eda-e281ae15d3f1", files: [
{l:"<a class='' href='pom_xml.html?project=77968'>pom.xml<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/", t:"Quarkus - Guides"},
]},
];
onProblemSummaryLoaded("cb70c5e0-915d-4d83-9eda-e281ae15d3f1");