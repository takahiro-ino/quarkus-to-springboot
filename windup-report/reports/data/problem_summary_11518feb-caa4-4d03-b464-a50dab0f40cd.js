MIGRATION_ISSUES_DETAILS["11518feb-caa4-4d03-b464-a50dab0f40cd"] = [
{description: "<p>Check if there is a Quarkus Extensions with Spring API compatibility for the Spring <code>spring-boot-starter-validation<\/code> component.<br/> If yes, then replace the <code>org.springframework.boot:spring-boot-starter-validation<\/code> dependency with the Quarkus extension.<br/> If no, consider rewrite the code that relies on this dependency leveraging the Quarkus Guides linked below.<\/p>", ruleID: "springboot-generic-catchall-groovy-00000", issueName: "Spring component spring-boot-starter-validation requires investigation",
problemSummaryID: "11518feb-caa4-4d03-b464-a50dab0f40cd", files: [
{l:"<a class='' href='pom_xml.html?project=77968'>pom.xml<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/", t:"Quarkus - Guides"},
]},
];
onProblemSummaryLoaded("11518feb-caa4-4d03-b464-a50dab0f40cd");