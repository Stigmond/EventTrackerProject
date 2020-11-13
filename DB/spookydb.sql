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
-- Table `Encounter`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Encounter` ;

CREATE TABLE IF NOT EXISTS `Encounter` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Title` VARCHAR(45) NOT NULL,
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
-- Data for table `Encounter`
-- -----------------------------------------------------
START TRANSACTION;
USE `spookydb`;
INSERT INTO `Encounter` (`id`, `Title`) VALUES (1, 'Encounter at Farpoint');

COMMIT;

