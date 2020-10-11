---
permalink: java/daylight-saving-time-in-java-8
layout: post
title: 'Daylight Saving Time in Java 8'
tags:
  - java
  - datetime
category: java
author: Ahmed HENTETI
author_profile: https://ahenteti.github.io/
banner: https://images.unsplash.com/photo-1537202108838-e7072bad1927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=685&q=80
---

In this post I'm going to share with you the examples that I use to illustrate how java8 handles **Daylight Saving Time**

<p class="code-tabs"></p>

- Example1

  ```java
  import java.time.Instant;
  import java.time.LocalDateTime;
  import java.time.ZoneId;

  public class Main {

      public static void main(String[] args) {
          LocalDateTime beforeDST = LocalDateTime.ofInstant(Instant.parse("2020-10-25T00:59:59Z"), ZoneId.of("Europe/Paris"));
          LocalDateTime atDST = LocalDateTime.ofInstant(Instant.parse("2020-10-25T01:00:00Z"), ZoneId.of("Europe/Paris"));
          LocalDateTime afterDST = LocalDateTime.ofInstant(Instant.parse("2020-10-25T01:00:01Z"), ZoneId.of("Europe/Paris"));

          System.out.println("2020-10-25T00:59:59Z -> " + beforeDST + " UTC+2 [Europe/Paris]");
          // 2020-10-25T00:59:59Z -> 2020-10-25T02:59:59 UTC+2 [Europe/Paris]

          System.out.println("2020-10-25T01:00:00Z -> " + atDST + " UTC+1 [Europe/Paris]");
          // 2020-10-25T01:00:00Z -> 2020-10-25T02:00:00 UTC+1 [Europe/Paris]

          System.out.println("2020-10-25T01:00:01Z -> " + afterDST + " UTC+1 [Europe/Paris]");
          // 2020-10-25T01:00:01Z -> 2020-10-25T02:00:01 UTC+1 [Europe/Paris]
      }

  }
  ```

- Example2

  ```java
  import lombok.AllArgsConstructor;
  import lombok.Data;

  import java.time.Instant;
  import java.time.LocalDateTime;
  import java.time.ZoneId;

  import static org.junit.Assert.assertTrue;

  public class Main {

      public static void main(String[] args) {
          WindowTime collect1 = new WindowTime(Instant.parse("2020-10-25T00:00:00Z"), Instant.parse("2020-10-25T00:15:00Z"));
          assertTrue(collect1.isInside(LocalDateTime.parse("2020-10-25T02:07:04").atZone(ZoneId.systemDefault()).toInstant()));
          assertTrue(collect1.isInside(LocalDateTime.parse("2020-10-25T02:07:04")));

          WindowTime collect2 = new WindowTime(Instant.parse("2020-10-25T00:45:00Z"), Instant.parse("2020-10-25T01:00:00Z"));
          assertTrue(collect2.isInside(LocalDateTime.parse("2020-10-25T02:59:59").atZone(ZoneId.systemDefault()).toInstant()));
          assertTrue(collect2.isInside(LocalDateTime.parse("2020-10-25T02:59:59")));

          WindowTime collect3 = new WindowTime(Instant.parse("2020-10-25T01:00:00Z"), Instant.parse("2020-10-25T01:15:00Z"));
          assertTrue(collect3.isInside(LocalDateTime.parse("2020-10-25T02:08:56").atZone(ZoneId.systemDefault()).toInstant()));
          assertTrue(collect3.isInside(LocalDateTime.parse("2020-10-25T02:08:56")));

          WindowTime collect4 = new WindowTime(Instant.parse("2020-10-25T01:45:00Z"), Instant.parse("2020-10-25T02:00:00Z"));
          assertTrue(collect4.isInside(LocalDateTime.parse("2020-10-25T02:45:31").atZone(ZoneId.systemDefault()).toInstant()));
          assertTrue(collect4.isInside(LocalDateTime.parse("2020-10-25T02:45:31")));
      }

      @Data
      @AllArgsConstructor
      public static class WindowTime {

          private Instant start;
          private Instant end;

          public boolean isInside(LocalDateTime date) {
              LocalDateTime startLocal = LocalDateTime.ofInstant(start, ZoneId.systemDefault());
              LocalDateTime endLocal = LocalDateTime.ofInstant(end.minusNanos(1), ZoneId.systemDefault());
              return (date.isAfter(startLocal) && date.isEqual(startLocal)) || date.isBefore(endLocal);
          }

          public boolean isInside(Instant date) {
              return (date.isAfter(start) && date.equals(start)) || date.isBefore(end);
          }
      }
  }
  ```
