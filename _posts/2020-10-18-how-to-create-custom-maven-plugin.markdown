---
permalink: java/how-to-create-custom-maven-plugin
layout: post
title: 'How to create custom maven plugin'
tags:
  - java
  - maven
category: java
author: Ahmed HENTETI
author_profile: https://ahenteti.github.io/
banner: https://images.unsplash.com/photo-1596461009523-7d647a4e2399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80
---

In this post I'm going to share with you how I have created my first maven plugin

Before that, here what I have retained from this [plugin introductory page from apache](<https://maven.apache.org/guides/introduction/introduction-to-plugins.html#:~:text=Plugins%20are%20the%20central%20feature,Project%20Object%20Model%20(POM).>)

- a **maven plugin** is a maven project which has `packaging` value equals to `maven-plugin` and consist of any number of **Mojos**
- a **Mojo** is really just a goal in maven. It is an `@Mojo` annotated Java class where we specify the goal name, which phase of the lifecycle it fits into and the parameter it it is expecting

## My HolloWorld maven plugin

<p class="code-tabs"></p>

- HelloWorldMojo

  ```java
  package io.github.ahenteti.java;

  import org.apache.maven.plugin.AbstractMojo;
  import org.apache.maven.plugin.MojoExecutionException;
  import org.apache.maven.plugins.annotations.LifecyclePhase;
  import org.apache.maven.plugins.annotations.Mojo;
  import org.apache.maven.plugins.annotations.Parameter;

  import java.io.File;
  import java.io.FileWriter;
  import java.io.IOException;

  @Mojo(name = "sayhi", defaultPhase = LifecyclePhase.PROCESS_RESOURCES)
  public class HelloWorldMojo extends AbstractMojo {

      @Parameter(property = "sayhi.greeting", defaultValue = "Hello World!")
      private String greeting;

      public void execute() throws MojoExecutionException {
          getLog().info(greeting);
      }

  }
  ```

- pom.xml

  ```xml
  <project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/maven-v4_0_0.xsd">
      <modelVersion>4.0.0</modelVersion>

      <groupId>io.github.ahenteti.java</groupId>
      <artifactId>helloworld-maven-plugin</artifactId>
      <version>1.0</version>
      <packaging>maven-plugin</packaging>

      <dependencies>
          <dependency>
              <groupId>org.apache.maven</groupId>
              <artifactId>maven-plugin-api</artifactId>
              <version>2.0</version>
          </dependency>
          <dependency>
              <groupId>org.apache.maven.plugin-tools</groupId>
              <artifactId>maven-plugin-annotations</artifactId>
              <version>3.4</version>
              <scope>provided</scope>
          </dependency>
      </dependencies>

  </project>
  ```

After we have created our maven plugin and installed it in our maven repository, we can now use it like this in other maven projects

```xml
<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>io.github.ahenteti.java</groupId>
    <artifactId>maven-plugin-demo</artifactId>
    <version>1.0</version>

    <properties>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
        <maven.compiler.source>1.8</maven.compiler.source>
        <maven.compiler.target>1.8</maven.compiler.target>
    </properties>

    <build>
        <plugins>
            <plugin>
                <groupId>io.github.ahenteti.java</groupId>
                <artifactId>helloworld-maven-plugin</artifactId>
                <version>1.0</version>
                <configuration>
                    <greeting>Welcome</greeting>
                </configuration>
                <executions>
                    <execution>
                        <phase>process-resources</phase>
                        <goals>
                            <goal>sayhi</goal>
                        </goals>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>
</project>
```

## References

- [Apache guide-java-plugin-development article](https://maven.apache.org/guides/plugin/guide-java-plugin-development.html)
