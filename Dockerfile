FROM maven:3.8.3-openjdk-17 AS build
WORKDIR /app
COPY ./backend /app
RUN mvn clean package -Pprod -DskipTests
FROM eclipse-temurin:17-alpine
WORKDIR /app
COPY --from=build /app/target/backend-0.0.1-SNAPSHOT.jar demo.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","demo.jar"]
