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
  `lat` DOUBLE NULL,
  `long` DOUBLE NULL,
  `entity` VARCHAR(100) NULL DEFAULT 'Unknown',
  `entity_url` VARCHAR(5000) NULL DEFAULT 'NA',
  `disabled` INT(1) NULL DEFAULT 0,
  `body` TEXT NULL,
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
INSERT INTO `encounter` (`id`, `date`, `city`, `state_country`, `lat`, `long`, `entity`, `entity_url`, `disabled`, `body`) VALUES (1, '1967-10-20', 'Six Rivers National Forest', 'CA', 41.334754, -123.549006, 'Bigfoot', 'https://upload.wikimedia.org/wikipedia/en/9/99/Patterson%E2%80%93Gimlin_film_frame_352.jpg', 0, 'Witnesses were riding on horseback along the east bank of Bluff Creek.  Between 1:15 and 1:40 PM, they \"came to an overturned tree . . . at a turn in the creek . . . .\"  When they rounded it, they spotted the figure behind a logjam.  It was either \"crouching beside the creek. . .\" or \"standing\" there, on the opposite bank. ');

COMMIT;

