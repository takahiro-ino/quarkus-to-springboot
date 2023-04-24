MIGRATION_ISSUES_DETAILS["e2940109-0e31-40af-af72-b8857830d996"] = [
{description: "<p>Check if there is a Quarkus Extensions with Spring API compatibility for the Spring <code>spring-boot-starter-test<\/code> component.<br/> If yes, then replace the <code>org.springframework.boot:spring-boot-starter-test<\/code> dependency with the Quarkus extension.<br/> If no, consider rewrite the code that relies on this dependency leveraging the Quarkus Guides linked below.<\/p>", ruleID: "springboot-generic-catchall-groovy-00000", issueName: "Spring component spring-boot-starter-test requires investigation",
problemSummaryID: "e2940109-0e31-40af-af72-b8857830d996", files: [
{l:"<a class='' href='pom_xml.html?project=77968'>pom.xml<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/", t:"Quarkus - Guides"},
]},
];
onProblemSummaryLoaded("e2940109-0e31-40af-af72-b8857830d996");