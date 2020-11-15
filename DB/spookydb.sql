-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema spookydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `spookydb` ;

-- -----------------------------------------------------
-- Schema spookydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `spookydb` DEFAULT CHARACTER SET utf8 ;
USE `spookydb` ;

-- -----------------------------------------------------
-- Table `encounter`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `encounter` ;

CREATE TABLE IF NOT EXISTS `encounter` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `date` DATE NULL,
  `city` VARCHAR(45) NULL DEFAULT 'Unknown',
  `state_country` VARCHAR(2) NULL DEFAULT 'NA',
  `latitude` DOUBLE NULL,
  `longitude` DOUBLE NULL,
  `entity_type` VARCHAR(100) NULL,
  `entity_url` VARCHAR(5000) NULL DEFAULT 'CLASSIFIED',
  `disabled` TINYINT(1) NOT NULL DEFAULT 1,
  `body` TEXT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS spooky@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'spooky'@'localhost' IDENTIFIED BY 'spooky';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'spooky'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `encounter`
-- -----------------------------------------------------
START TRANSACTION;
USE `spookydb`;
INSERT INTO `encounter` (`id`, `date`, `city`, `state_country`, `latitude`, `longitude`, `entity_type`, `entity_url`, `disabled`, `body`) VALUES (1, '1967-10-20', 'Six Rivers National Forest', 'CA', 41.334754, -123.549006, 'Bigfoot', 'https://upload.wikimedia.org/wikipedia/en/9/99/Patterson%E2%80%93Gimlin_film_frame_352.jpg', 0, 'In the early afternoon of Friday, October 20, 1967, [witnesses] were riding generally northeast on horseback along the east bank of Bluff Creek. At sometime between 1:15 and 1:40 PM, they \"came to an overturned tree with a large root system at a turn in the creek, almost as high as a room\".\n\nWhen they rounded it, \"there was a logjam—a \'crow\'s nest\'—left over from the flood of \'64,\" and then they spotted the figure behind it nearly simultaneously. It was either \"crouching beside the creek to their left\" or \"standing\" there, on the opposite bank. ');
INSERT INTO `encounter` (`id`, `date`, `city`, `state_country`, `latitude`, `longitude`, `entity_type`, `entity_url`, `disabled`, `body`) VALUES (2, '1973-12-26', 'Georgetown', 'DC', 38.905780, -77.070183, 'Pazuzu', 'https://en.wikipedia.org/wiki/Pazuzu_(The_Exorcist)#/media/File:Pazuzu-0.jpg', 0, '12-year-old Reagan McNeil is possessed by Pazuzu.  Pazuzu is eventually exorcised by Father Lankester Merrin and Father Damien Karras.');
INSERT INTO `encounter` (`id`, `date`, `city`, `state_country`, `latitude`, `longitude`, `entity_type`, `entity_url`, `disabled`, `body`) VALUES (3, '1975-11-5', 'Snowflake', 'AZ', 34.513630, -110.116362, 'Grey Alien', 'http://apps.startribune.com/blogs/user_images/jameslileks_1389636946_greyalien.jpg', 0, 'Travis Walton is involved in a Close Encounter of the Fourth Kind when he is abducted and experimented on by Grey Aliens.  Walton is returned to Earth approximately five days later.');

COMMIT;
