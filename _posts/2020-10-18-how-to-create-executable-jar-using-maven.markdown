---
permalink: java/how-to-create-executable-jar-using-maven
layout: post
title: 'How to create executable jar file using maven'
tags:
  - java
  - maven
category: java
author: Ahmed HENTETI
author_profile: https://ahenteti.github.io/
banner: https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1061&q=80
---

In this post I'm going to share with you the technique that I have tested to create executable jars using maven. This technique is based on the `maven-assembly-plugin` plugin which creates a jar containing all the dependencies.

Here an example of `pom.xml` which use this plugin

```xml
<?xml version="1.0" encoding="UTF-8"?>

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>io.github.ahenteti.java</groupId>
    <artifactId>executable-jar-demo</artifactId>
    <version>1.0</version>

    <build>
        <plugins>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-assembly-plugin</artifactId>
                <executions>
                    <execution>
                        <phase>package</phase>
                        <goals>
                            <goal>single</goal>
                        </goals>
                        <configuration>
                            <archive>
                                <manifest>
                                    <mainClass>
                                        io.github.ahenteti.java.App
                                    </mainClass>
                                </manifest>
                            </archive>
                            <descriptorRefs>
                                <descriptorRef>jar-with-dependencies</descriptorRef>
                            </descriptorRefs>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>

</project>
```

I hope you find it useful :)

## References

- [maven-assembly-plugin website](https://maven.apache.org/plugins/maven-assembly-plugin/usage.html)
- [Baeldung executable-jar-with-maven article](https://www.baeldung.com/executable-jar-with-maven)
