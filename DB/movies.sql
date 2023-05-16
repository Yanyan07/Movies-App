-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: localhost    Database: moviesdb
-- ------------------------------------------------------
-- Server version	8.0.30

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `genres`
--

DROP TABLE IF EXISTS `genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genres` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genres`
--

LOCK TABLES `genres` WRITE;
/*!40000 ALTER TABLE `genres` DISABLE KEYS */;
INSERT INTO `genres` VALUES (1,'action'),(2,'comedy'),(3,'drama'),(4,'fantasy'),(5,'horror'),(6,'mystery'),(7,'romance');
/*!40000 ALTER TABLE `genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie`
--

DROP TABLE IF EXISTS `movie`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `description` text,
  `minutes` int DEFAULT NULL,
  `img_url` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `rate` double DEFAULT NULL,
  `released_year` int DEFAULT NULL,
  `is_available` bit(1) DEFAULT b'1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=36 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie`
--

LOCK TABLES `movie` WRITE;
/*!40000 ALTER TABLE `movie` DISABLE KEYS */;
INSERT INTO `movie` VALUES (1,'A prince cursed to spend his days as a hideous monster sets out to regain his humanity by earning a young woman\'s love.',84,'beauty_and_beast.png','beauty and the beast',8,1991,_binary ''),(2,'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',153,'the_dark_knight.png','the dark knight',9,2008,_binary ''),(3,'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',201,'the_lord_of_the_rings.png','The Lord of the Rings: The Return of the King ',9,2003,_binary ''),(4,'When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.',136,'the_matrix.png','the matrix',8.7,1999,_binary ''),(5,'After being kidnapped and imprisoned for fifteen years, Oh Dae-Su is released, only to find that he must find his captor in five days.',120,'oldboy.png','oldboy',8.4,2003,_binary ''),(6,'A Phoenix secretary embezzles $40,000 from her employer\'s client, goes on the run and checks into a remote motel run by a young man under the domination of his mother.',109,'psycho.png','psycho',8.5,1960,_binary ''),(7,'Vampire Count Orlok expresses interest in a new residence and real estate agent Hutter\'s wife.',94,'nosferatu.png','Nosferatu',7.9,1922,_binary ''),(8,'The wife and mistress of a loathed school principal plan to murder him with what they believe is the perfect alibi.',117,'diabolique.png','diabolique',8.1,1955,_binary ''),(9,'A young couple trying for a baby moves into an aging, ornate apartment building on Central Park West, where they find themselves surrounded by peculiar neighbors.',137,'rosemary\'s_baby.png','rosemary\'s baby',8,1968,_binary ''),(10,'With Spider-Man\'s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.',148,'spider_man.png',' Spider-Man: No Way Home ',8.2,2021,_binary ''),(11,'When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.',164,'jai_bhim.png','jai bhim',8.8,2021,_binary ''),(12,'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',142,'forrest_gump.png','forrest gump',8.8,1994,_binary ''),(13,'The Tramp struggles to live in modern industrial society with the help of a young homeless woman.',87,'modern_times.png','Modern Times',8.5,1936,_binary ''),(14,'When an open-minded Jewish waiter and his son become victims of the Holocaust, he uses a perfect mixture of will, humor and imagination to protect his son from the dangers around their camp.',116,'life_is_beautiful.png','life is beautiful',8.6,1997,_binary ''),(15,'Aspiring musician Miguel, confronted with his family\'s ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.',105,'coco.png','coco',8.4,2017,_binary ''),(16,'78-year-old Carl Fredricksen travels to Paradise Falls in his house equipped with balloons, inadvertently taking a young stowaway.',96,'up.png','up',8.3,2009,_binary ''),(17,'Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.',22,'south_park.png','south park',8.7,1997,_binary ''),(18,'After the Rebels are overpowered by the Empire, Luke Skywalker begins his Jedi training with Yoda, while his friends are pursued across the galaxy by Darth Vader and bounty hunter Boba Fett.',124,'star_wars_V.png','Star Wars: Episode V - The Empire Strikes Back',8.7,1980,_binary ''),(19,'During her family\'s move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, a world where humans are changed into beasts.',125,'spirited_away.png','spirited away',8.6,2001,_binary ''),(20,'Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?',106,'your_name.png','your name',8.4,2016,_binary ''),(21,'A cowboy doll is profoundly threatened and jealous when a new spaceman action figure supplants him as top toy in a boy\'s bedroom.',81,'toy_story.png','toy story',8.3,1995,_binary ''),(22,'An orphan soldier, Lieutenant Ram\'s life changes, after he gets a letter from a girl named Sita. He meets her and love blossoms between them. When he comes back to his camp in Kashmir,After he gets caught in jail, he sends a letter to Sita which won\'t reach her.',163,'sita_ramam.png','sita ramam',8.6,2022,_binary ''),(23,'A filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema\'s projectionist.\n\nA filmmaker recalls his childhood when falling in love with the pictures at the cinema of his home village and forms a deep friendship with the cinema\'s projectionist.\n\n',155,'cinema_paradiso.png','cinema paradiso',8.5,1988,_binary ''),(24,'Amélie is an innocent and naive girl in Paris with her own sense of justice. She decides to help those around her and, along the way, discovers love.',122,'amelie.png','amelie',8.3,2001,_binary ''),(25,'A retired legal counselor writes a novel hoping to find closure for one of his past unresolved homicide cases and for his unreciprocated love with his superior - both of which still haunt him decades later.',129,'the_secret_in_their_eyes.png','the secret in their eyes',8.2,2009,_binary ''),(26,'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',189,'the_green_mile.png','the green mile',8.6,1999,_binary ''),(27,'After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.',130,'the_prestige.png','the  prestige',8.5,2006,_binary ''),(28,'A research team in Antarctica is hunted by a shape-shifting alien that assumes the appearance of its victims.\n\n',109,'the_thing.png','the thing',8.2,1982,_binary ''),(29,'The story of Dr. Yehia, a psychotherapist at Al Abbasia hospital. He works in the department treating the criminally insane, only to find his best friend to be one of the patients.',170,'the_blue_elephant.png','The Blue Elephant ',8,2014,_binary ''),(30,'A film projectionist longs to be a detective, and puts his meagre skills to work when he is framed by a rival for stealing his girlfriend\'s father\'s pocketwatch.',45,'sherlock_jr.png','Sherlock Jr.',8.2,1924,_binary '');
/*!40000 ALTER TABLE `movie` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_genres`
--

DROP TABLE IF EXISTS `movie_genres`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie_genres` (
  `movie_id` bigint NOT NULL,
  `genres_id` int NOT NULL,
  PRIMARY KEY (`movie_id`,`genres_id`),
  KEY `FK53x08betoqqiv345tpl73o360` (`genres_id`),
  CONSTRAINT `FK53x08betoqqiv345tpl73o360` FOREIGN KEY (`genres_id`) REFERENCES `genres` (`id`),
  CONSTRAINT `FKtxy82siu9syjeyhc9de6mbsh` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_genres`
--

LOCK TABLES `movie_genres` WRITE;
/*!40000 ALTER TABLE `movie_genres` DISABLE KEYS */;
INSERT INTO `movie_genres` VALUES (2,1),(3,1),(4,1),(5,1),(10,1),(18,1),(22,1),(30,1),(13,2),(14,2),(15,2),(16,2),(17,2),(21,2),(24,2),(30,2),(2,3),(3,3),(5,3),(8,3),(9,3),(11,3),(12,3),(14,3),(20,3),(22,3),(23,3),(25,3),(26,3),(27,3),(1,4),(7,4),(10,4),(18,4),(19,4),(20,4),(26,4),(6,5),(7,5),(8,5),(9,5),(13,5),(15,5),(28,5),(29,5),(5,6),(6,6),(11,6),(22,6),(25,6),(27,6),(28,6),(29,6),(12,7),(14,7),(23,7),(24,7),(25,7),(30,7);
/*!40000 ALTER TABLE `movie_genres` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movie_user`
--

DROP TABLE IF EXISTS `movie_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movie_user` (
  `user_id` bigint NOT NULL,
  `movie_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`movie_id`),
  KEY `FK3qyi116ibvl6ffciqxhcg7uf9` (`movie_id`),
  CONSTRAINT `FK3cco8hkg4d2m1qh6xxffgcpgb` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `FK3qyi116ibvl6ffciqxhcg7uf9` FOREIGN KEY (`movie_id`) REFERENCES `movie` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movie_user`
--

LOCK TABLES `movie_user` WRITE;
/*!40000 ALTER TABLE `movie_user` DISABLE KEYS */;
INSERT INTO `movie_user` VALUES (1,2),(1,15);
/*!40000 ALTER TABLE `movie_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'eric@gmail.com','user','eric','123'),(2,'oscar@gmail.com','admin','oscar','456'),(3,'stan@gmail.com','user','stan','111'),(4,'kyle@gmail.com','user','kyle','222'),(5,'kenny@gmail.com','user','kenny','333'),(6,'butter@gmail.com','user','butters','444');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-15 11:51:46
