CREATE DATABASE  IF NOT EXISTS `blog` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `blog`;
-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: blog
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `post_id` int(11) NOT NULL,
  `comment_date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `comment_fk_post` (`post_id`),
  KEY `comment_fk_user_idx` (`user_id`),
  CONSTRAINT `comment_fk_post` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `comment_fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'I already upped it one speed, anything after that is hilarious to me but if it helps disabled people by using slower/faster speeds then it’s a great feature. Only somewhat useful to me but still something I will use.',4,11,'2019-11-02 20:32:24'),(2,'Already watch YouTube at 2-4x speed. This is a great, simple improvement!',5,11,'2019-11-02 20:34:03'),(3,'Alexa sound hilarious at high speed.',6,11,'2019-11-02 20:36:50'),(4,'I think the one place Samsung might have a chance (besides audio quality) is making a seamless multi-room audio system with these that undercuts Sonos in price. It’s going to come down to the smartthings/software though.',4,3,'2019-11-02 20:38:08'),(5,'One of mine has been acting weird, but it still boots and sometimes responds. All the others work fine. Wondered if it was just its location in the house (WiFi dead zone) or if the unit itself was beginning to fail. Been longer than mid-September, but maybe that one is on the beta channel.',5,7,'2019-11-02 20:39:28'),(6,'It’s why I refuse to use an Android device. The amount of real time tracking taking place is unreal. The metrics being sent to Google every day about device usage would shock most people.\nI switched from Gmail to ProtonMail, use Firefox/Brave, and use an iPhone. No more Google.',3,10,'2019-11-02 20:41:59');
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `body` text NOT NULL,
  `user_id` int(11) NOT NULL,
  `post_date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `post_fk_user` (`user_id`),
  CONSTRAINT `post_fk_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'Google is buying Fitbit: now what?','Google is buying Fitbit and the reasons why are both simple and complicated. It’s the kind of big acquisition Google has done before (more money than YouTube, less than Nest or DoubleClick), but this one seems to have struck a particular nerve. My Twitter replies are currently filled with Fitbit customers promising to go buy Apple Watches right now. Whatever happens in the immediate aftermath, Google is going to have a big new team, a big new set of wary users, and a lot of big organizational issues to figure out.\nIn the short term, Google is clearly aware that Fitbit customers are going to be a little spooked. The company was sure to note that it will give those users “the choice to review, move, or delete their data” in the announcement post. Whether that will calm everybody down is a different matter.',1,'2019-11-02 19:41:56'),(2,'Google will replace Home devices','If your Google Home or Google Home Mini has recently stopped working, good news: Google will likely replace it.\nThis year, there have been a growing number of reports of bricked Homes and Home Minis on Google’s support forums (via 9to5Google) and on Reddit (via Android Police), and the volume of reports has picked up since mid-September. It’s wasn’t clear what the issue was, and Google finally acknowledged that there was a problem in September.\nIt seems Google’s had a breakthrough, issuing a statement to 9to5Google today saying it’s found a fix for the issue, which was caused by an error in an automatic firmware update. Google says the fix will roll out to working devices soon to (hopefully) prevent them from bricking at any point in the future. The company will also replace affected Google Homes and Home Minis, even if they’re out of warranty.',1,'2019-11-02 19:46:35'),(3,'Free Google Home Mini','If you’re a Spotify Premium subscriber, Spotify is offering you a Google Home Mini for free now through November 15th, or until supplies run out (via Business Insider).\nBefore you try to jump on this offer, note that the deal is for the previous generation of Google’s smallest smart speaker, not the newly released Nest Mini. And some circumstances will rule you out of the promotion (more on that later). But if you qualify, it’s a great way to get a $50 smart speaker as part of your monthly Spotify subscription.',2,'2019-11-02 19:52:21'),(4,'Alexa and Google Home vulnerability','Security researchers with SRLabs have disclosed a new vulnerability affecting both Google and Amazon smart speakers that could allow hackers to eavesdrop on or even phish unsuspecting users. By uploading a malicious piece of software disguised as an innocuous Alexa skill or Google action, the researchers showed how you can get the smart speakers to silently record users, or even ask them for the password to their Google account.\nThe vulnerability is a good reminder to keep a close eye on the third-party software that you use with your voice assistants, and to delete any that you’re unlikely to use again where possible. There’s no evidence that this vulnerability has been exploited in the real world, however, and SRLabs disclosed their findings to both Amazon and Google before making them public.',3,'2019-11-02 19:57:09'),(5,'Samsung says fingerprint security fix','Samsung says that it plans to release a patch for its phones’ in-display fingerprint sensors as early as next week, after reports emerged that the biometric security method could be rendered useless by certain screen protectors. The issue relates to some “silicone screen protecting cases,” according to Samsung, and affects the Galaxy S10, S10 Plus, and S10 5G, as well as the or Galaxy Note 10 and Note 10 Plus.\nAccording to the company, the issue is caused by the phones’ ultrasonic fingerprint sensor incorrectly reading 3D patterns in the screen protector as fingerprints. As a result, any person could then unlock a phone wrapped in such a case, creating a security issue.',3,'2019-11-02 20:03:56'),(6,'Bluetooth vulnerability','A fast-acting hacker could be able to weaken the encryption of Bluetooth devices and subsequently snoop on communications or send falsified ones to take over a device due to a newly discovered vulnerability in the standard.\nThe vulnerability is pretty clever: instead of directly breaking the encryption, it allows hackers to force a pair of Bluetooth devices to use weaker encryption in the first place, making it far easier to crack. Each time two Bluetooth devices connect, they establish a new encryption key. If an attacker gets in between that setup process, they could potentially trick the two devices into settling on an encryption key with a relatively small number of characters. The attacker would still have to perform a brute-force attack against one of the devices to figure out the exact password, but that attack could happen in an achievable amount of time, thanks to this flaw.',2,'2019-11-02 20:06:54'),(7,'Thousands of Android apps can track your phone','When you explicitly tell an Android app, “No, you don’t have permission to track my phone,” you probably expect that it won’t have abilities that let it do that. But researchers say that thousands of apps have found ways to cheat Android’s permissions system, phoning home your device’s unique identifier and enough data to potentially reveal your location as well.\n\nEven if you say “no” to one app when it asks for permission to see those personally identifying bits of data, it might not be enough: a second app with permissions you have approved can share those bits with the other one or leave them in shared storage where another app — potentially even a malicious one — can read it. The two apps might not seem related, but researchers say that because they’re built using the same software development kits (SDK), they can access that data, and there’s evidence that the SDK owners are receiving it. It’s like a kid asking for dessert who gets told “no” by one parent, so they ask the other parent.',3,'2019-11-02 20:10:19'),(8,'Facebook trained AI to fool facial recognition','Facebook remains embroiled in a multibillion-dollar judgement lawsuit over its facial recognition practices, but that hasn’t stopped its artificial intelligence research division from developing technology to combat the very misdeeds of which the company is accused. According to VentureBeat, Facebook AI Research (FAIR) has developed a state-of-the-art “de-identification” system that works on video, including even live video. It works by altering key facial features of a video subject in real time using machine learning, to trick a facial recognition system into improperly identifying the subject.\n\nThis de-identification technology has existed in the past and there are entire companies, like Israeli AI and privacy firm D-ID, dedicated to providing it for still images. There’s also a whole category of facial recognition fooling imagery you can wear yourself, called adversarial examples, that work by exploiting weaknesses in how computer vision software has been trained to identify certain characteristics. Take for instance this pair of sunglasses with an adversarial pattern printed onto it that can make a facial recognition system think you’re actress Milla Jovovich.',1,'2019-11-02 20:14:29'),(9,'Samsung announces Galaxy Home Mini','Samsung has quietly announced a new Bixby-powered smart speaker called the Galaxy Home Mini, and it’s inviting Galaxy smartphone owners in South Korea to sign up to beta-test the new device. Samsung says the new speaker can control IoT devices, it integrates with Samsung’s SmartThings platform, and it uses sound technology provided by Samsung’s AKG audio brand. SamMobile was first to spot the announcement.\n\nThis is the first time Samsung has officially admitted that its smaller smart speaker exists, although we had a decent idea it was coming, thanks to its appearance in a Federal Communications Commission filing earlier this year. Beyond the few details shared by Samsung in the beta announcement, we know next to nothing about this new device. We don’t even know for sure whether the speaker is battery powered, for example. Presumably, we’ll find out when Samsung decides to officially announce the speaker, although it’s unclear if this will happen before or after beta testers get their hands on it.',2,'2019-11-02 20:17:39'),(10,'Attack a robot, it might photograph you in the act','Humans haven’t quite reached a WALL-E-like society where robots care for our every possible need, but we do have a few roving security robots that can monitor places like banks, casinos, malls, and hospitals so human security guards can catch a break. Some people don’t seem to like the new robot cops: earlier this month in Hayward, California, a security robot captured video of an alleged attacker shortly before he bowled it over.\n\nKnocking over one of these robots isn’t something you’d likely do by accident — Knightscope says it weighs 398 lbs. But most people shouldn’t worry about running into them at all, for now. Knightscope tells The Verge that there are only about 75 Knightscope robots deployed in 15 US states right now, and a report at Vox suggests these types of bots won’t replace security guards anytime soon: Slack has two robots from Cobalt to help secure its offices, but still employs the same three night guards it did before it got the robots.',1,'2019-11-02 20:23:01'),(11,'Now you can choose how fast Alexa talks','Amazon is launching a new ability for it’s Alexa smart assistant today: the ability to choose how fast it talks. By saying “Alexa, speak slower” or “Alexa, speak faster,” you can, well, get Alexa to speak slower or faster. Amazon says there will be seven different speeds for Alexa, two slower than the default and four that are faster. You can also say “Alexa, speak at your default rate.”\n\nAmazon is touting the feature as something that helps with accessibility, and that certainly is a possible benefit. In the press release, Sarah Caplener, the head of Alexa for Everyone, is quoted as saying the slower speeds are for “hard of hearing and older customers” while the faster speeds are a boon to “customers who are blind or low vision,” because they “are used to consuming audio content and want to be able to listen more quickly.” Amazon has been working to make Alexa more accessible on several fronts over the past year.',1,'2019-11-02 20:24:32');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `username` varchar(45) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `type` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'Dieter Bohn','dieterbohn','dieterbohn@outlook.com',1),(2,'Jay Peters','jaypeters','jaypeters@outlook.com',1),(3,'Jon Porter','jonPorty','jonPorter@outlook.com',0),(4,'Rodrigo Franco','rodrigoamf','rodrigoamf@outlook.com',1),(5,'Nadia Nogues Franco','nadianogues','nadianogues@outlook.com',1),(6,'Helena Nogues Franco','helenanf','helenanf@outlook.com',1);
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

-- Dump completed on 2019-11-02 21:10:51
