MIGRATION_ISSUES_DETAILS["43a8ca51-edab-4eea-ae56-ebeec4ee0d43"] = [
{description: "<p>Replace the SpringBoot JPA artifact with Quarkus <code>spring-data-jpa<\/code> extension<\/p><p>Spring Data JPA is in spring-data-jpa artifact brought transitively by any <code>org.springframework.data:spring-data-*<\/code> dependency<br/>Add Quarkus dependency <code>io.quarkus:quarkus-spring-data-jpa<\/code><\/p>", ruleID: "springboot-jpa-to-quarkus-00000", issueName: "Replace the SpringBoot Data JPA artifact with Quarkus \'spring-data-jpa\' extension",
problemSummaryID: "43a8ca51-edab-4eea-ae56-ebeec4ee0d43", files: [
{l:"<a class='' href='pom_xml.html?project=77968'>pom.xml<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/spring-data-jpa", t:"Quarkus JPA Guide"},
]},
];
onProblemSummaryLoaded("43a8ca51-edab-4eea-ae56-ebeec4ee0d43");