-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: store
-- ------------------------------------------------------
-- Server version	8.0.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie` (
  `id` int NOT NULL AUTO_INCREMENT,
  `idmovie` int NOT NULL,
  `available` tinyint(1) NOT NULL,
  `title` varchar(45) NOT NULL,
  `director` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (1,1,1,'Sonic: O Filme','Jeff Fowler'),(2,1,1,'Sonic: O Filme','Jeff Fowler'),(3,1,1,'Sonic: O Filme','Jeff Fowler'),(4,1,1,'Sonic: O Filme','Jeff Fowler'),(5,1,1,'Sonic: O Filme','Jeff Fowler'),(6,1,1,'Sonic: O Filme','Jeff Fowler'),(7,1,1,'Sonic: O Filme','Jeff Fowler'),(8,1,1,'Sonic: O Filme','Jeff Fowler'),(9,2,0,'Velozes e Furiosos 1','Justin Lin'),(10,2,1,'Velozes e Furiosos 1','Justin Lin'),(11,2,1,'Velozes e Furiosos 1','Justin Lin'),(12,2,1,'Velozes e Furiosos 1','Justin Lin'),(13,2,1,'Velozes e Furiosos 1','Justin Lin'),(14,2,1,'Velozes e Furiosos 1','Justin Lin'),(15,2,1,'Velozes e Furiosos 1','Justin Lin'),(16,3,1,'Velozes e Furiosos 2','Justin Lin'),(17,3,1,'Velozes e Furiosos 2','Justin Lin'),(18,3,1,'Velozes e Furiosos 2','Justin Lin'),(19,3,1,'Velozes e Furiosos 2','Justin Lin'),(20,3,1,'Velozes e Furiosos 2','Justin Lin'),(21,3,1,'Velozes e Furiosos 2','Justin Lin'),(22,4,1,'Velozes e Furiosos 3','Justin Lin'),(23,4,1,'Velozes e Furiosos 3','Justin Lin'),(24,4,1,'Velozes e Furiosos 3','Justin Lin'),(25,4,1,'Velozes e Furiosos 3','Justin Lin'),(26,4,1,'Velozes e Furiosos 3','Justin Lin'),(27,5,1,'Harry Potter e a Pedra Filosofal','Chris Columbus'),(28,5,1,'Harry Potter e a Pedra Filosofal','Chris Columbus'),(29,5,1,'Harry Potter e a Pedra Filosofal','Chris Columbus'),(30,5,1,'Harry Potter e a Pedra Filosofal','Chris Columbus'),(31,5,1,'Harry Potter e a Pedra Filosofal','Chris Columbus'),(32,5,1,'Harry Potter e a Pedra Filosofal','Chris Columbus'),(33,5,1,'Harry Potter e a Pedra Filosofal','Chris Columbus'),(34,5,1,'Harry Potter e a Pedra Filosofal','Chris Columbus'),(35,5,1,'Harry Potter e a Pedra Filosofal','Chris Columbus');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-06 23:42:01
