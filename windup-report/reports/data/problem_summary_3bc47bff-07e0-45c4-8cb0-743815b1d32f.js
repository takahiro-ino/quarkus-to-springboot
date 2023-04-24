MIGRATION_ISSUES_DETAILS["3bc47bff-07e0-45c4-8cb0-743815b1d32f"] = [
{description: "<p>Check if there is a Quarkus Extensions with Spring API compatibility for the Spring <code>spring-boot-maven-plugin<\/code> component.<br/> If yes, then replace the <code>org.springframework.boot:spring-boot-maven-plugin<\/code> dependency with the Quarkus extension.<br/> If no, consider rewrite the code that relies on this dependency leveraging the Quarkus Guides linked below.<\/p>", ruleID: "springboot-generic-catchall-groovy-00000", issueName: "Spring component spring-boot-maven-plugin requires investigation",
problemSummaryID: "3bc47bff-07e0-45c4-8cb0-743815b1d32f", files: [
{l:"<a class='' href='pom_xml.html?project=77968'>pom.xml<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/", t:"Quarkus - Guides"},
]},
];
onProblemSummaryLoaded("3bc47bff-07e0-45c4-8cb0-743815b1d32f");