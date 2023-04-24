MIGRATION_ISSUES_DETAILS["4594610d-04c2-4516-b3a1-ff6fbc748e11"] = [
{description: "<p>Replace the <code>spring-boot-maven-plugin<\/code> dependency. The <code>spring-boot-maven-plugin<\/code> dependency needs to be replaced with <code>quarkus-maven-plugin<\/code>, so that the application is built with Quarkus, both for running on the JVM and in native mode.<\/p>", ruleID: "springboot-plugins-to-quarkus-0000", issueName: "Replace the spring-boot-maven-plugin dependency",
problemSummaryID: "4594610d-04c2-4516-b3a1-ff6fbc748e11", files: [
{l:"<a class='' href='pom_xml.html?project=77968'>pom.xml<\/a>", oc:"1"},
], resourceLinks: [
{h:"https://quarkus.io/guides/maven-tooling#build-tool-maven", t:"Building Quarkus with maven"},
]},
];
onProblemSummaryLoaded("4594610d-04c2-4516-b3a1-ff6fbc748e11");