MIGRATION_ISSUES_DETAILS["67af751a-ca66-434d-a20c-c7298c6d747f"] = [
{description: "<p>Check if there is a Quarkus Extensions with Spring API compatibility for the Spring <code>spring-boot-starter-parent<\/code> component.<br/> If yes, then replace the <code>org.springframework.boot:spring-boot-starter-parent<\/code> dependency with the Quarkus extension.<br/> If no, consider rewrite the code that relies on this dependency leveraging the Quarkus Guides linked below.<\/p>", ruleID: "springboot-generic-catchall-groovy-00000", issueName: "Spring component spring-boot-starter-parent requires investigation",
problemSummaryID: "67af751a-ca66-434d-a20c-c7298c6d747f", files: [
{l:"<a class='' href='pom_xml.html?project=77968'>pom.xml<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/", t:"Quarkus - Guides"},
]},
];
onProblemSummaryLoaded("67af751a-ca66-434d-a20c-c7298c6d747f");