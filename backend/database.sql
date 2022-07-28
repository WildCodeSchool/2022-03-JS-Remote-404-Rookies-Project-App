

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

DROP TABLE IF EXISTS `rookies_app_db`.`entities` ;
DROP TABLE IF EXISTS `rookies_app_db`.`images` ;
DROP TABLE IF EXISTS `rookies_app_db`.`sectors` ;
DROP TABLE IF EXISTS `rookies_app_db`.`workforces` ;
DROP TABLE IF EXISTS `rookies_app_db`.`companies` ;
DROP TABLE IF EXISTS `rookies_app_db`.`schools` ;
DROP TABLE IF EXISTS `rookies_app_db`.`users` ;
DROP TABLE IF EXISTS `rookies_app_db`.`profiles` ;
DROP TABLE IF EXISTS `rookies_app_db`.`student_levels` ;
DROP TABLE IF EXISTS `rookies_app_db`.`school_ressources` ;
DROP TABLE IF EXISTS `rookies_app_db`.`teaching_fields` ;
DROP TABLE IF EXISTS `rookies_app_db`.`school_has_teaching_field` ;
DROP TABLE IF EXISTS `rookies_app_db`.`languages` ;
DROP TABLE IF EXISTS `rookies_app_db`.`project_types` ;
DROP TABLE IF EXISTS `rookies_app_db`.`school_project_has_teaching_field` ;
DROP TABLE IF EXISTS `rookies_app_db`.`stages` ;
DROP TABLE IF EXISTS `rookies_app_db`.`school_projects_has_languages` ;
DROP TABLE IF EXISTS `rookies_app_db`.`company_project` ;
DROP TABLE IF EXISTS `rookies_app_db`.`company_project_has_teaching_fields` ;
-- -----------------------------------------------------
-- Table `rookies_app_db`.`entities`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `rookies_app_db`.`entities` (
  `id` INT NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `entities` (`id`, `name`) VALUES
(1, 'Company'),
(2, 'School');
-- -----------------------------------------------------
-- Table `rookies_app_db`.`sectors`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `rookies_app_db`.`sectors` (
  `id` INT NOT NULL,
  `sector` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `sectors` (`id`, `sector`) VALUES
(1, 'Agroalimentaire'),
(2, 'Bois / Papier / Carton / Imprimerie'),
(3, 'Banque / Assurance'),
(4, 'BTP / Matériaux de construction'),
(5, 'Chimie / Parachimie'),
(6, 'Commerce / Négoce / Distribution'),
(7, 'Édition / Communication / Multimédia'),
(8, 'Électronique / Électricité'),
(9, 'Études et conseils'),
(10, 'Industrie pharmaceutique'),
(11, 'Informatique / Télécoms'),
(12, 'Machines et équipements / Automobile'),
(13, 'Métallurgie / Travail du métal'),
(14, 'Plastique / Caoutchouc'),
(15, 'Services aux entreprises'),
(16, 'Textile / Habillement / Chaussure'),
(17, 'Transports / Logistique'),
(18, 'Autres');
-- -----------------------------------------------------
-- Table `rookies_app_db`.`images`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `rookies_app_db`.`images` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image_url` VARCHAR(255) NOT NULL,
  `image_alt` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));

INSERT INTO `images` (`id`, `image_url`, `image_alt`) VALUES
(1, 'frontend/src/assets/pictures/random-user.jpg', 'profile-john-doe'),
(2, '/src/assets/pictures/random-user.jpg', 'profile-brigitte-school'),
(3, '/src/assets/pictures/poudlard.jpg', 'school-poudlard'),
(4, '/src/assets/pictures/dunder-mifflin.jpg', 'company-dunder-mifflin'),
(5, '/public/avatars/wcs.png', 'wildcodeschool'),
(6, '/public/avatars/rookies.png', 'rookies'),
(7, '/public/avatars/jerome-santoni.jpg', 'rookies fondateur'),
(8, '/public/avatars/julien-richard.jpg', 'wcs teacher'),
(9, '/public/avatars/elyes-sahli.jpg', 'rookies co-fondateur');



-- -----------------------------------------------------
-- Table `rookies_app_db`.`workforces`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `rookies_app_db`.`workforces` (
  `id` INT NOT NULL,
  `range` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `workforces` (`id`, `range`) VALUES
(1, '0 - 1'),
(2, '2 - 9'),
(3, '10 - 49'),
(4, '50 - 249'),
(5, '250 et plus');
-- -----------------------------------------------------
-- Table `rookies_app_db`.`companies`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `rookies_app_db`.`companies` (
  `id` VARCHAR(255) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` LONGTEXT NULL,
  `website` VARCHAR(45) NULL,
  `sectors_id` INT NULL,
  `images_id` INT NULL,
  `workforces_id` INT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_companies_sectors1`
    FOREIGN KEY (`sectors_id`)
    REFERENCES `rookies_app_db`.`sectors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_companies_images1`
    FOREIGN KEY (`images_id`)
    REFERENCES `rookies_app_db`.`images` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_companies_workforces1`
    FOREIGN KEY (`workforces_id`)
    REFERENCES `rookies_app_db`.`workforces` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE INDEX `fk_companies_sectors1_idx` ON `rookies_app_db`.`companies` (`sectors_id` ASC);

CREATE INDEX `fk_companies_images1_idx` ON `rookies_app_db`.`companies` (`images_id` ASC);

CREATE INDEX `fk_companies_workforces1_idx` ON `rookies_app_db`.`companies` (`workforces_id` ASC);

CREATE INDEX `images_id` ON `rookies_app_db`.`companies` (`images_id` ASC);

CREATE INDEX `sectors_id` ON `rookies_app_db`.`companies` (`sectors_id` ASC);

CREATE INDEX `workforces_id` ON `rookies_app_db`.`companies` (`workforces_id` ASC);


INSERT INTO `companies` (`id`, `name`, `description`, `website`, `sectors_id`, `images_id`, `workforces_id`) VALUES
('1', 'Rookies', 'machine à projets', 'https://www.rookiesprojects.com/', 15, 6, 2);



-- -----------------------------------------------------
-- Table `rookies_app_db`.`schools`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `rookies_app_db`.`schools` (
  `id` VARCHAR(255) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(255) NULL,
  `website` VARCHAR(45) NULL,
  `images_id` INT NULL,
  `campuses` VARCHAR(510) NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_schools_images1`
    FOREIGN KEY (`images_id`)
    REFERENCES `rookies_app_db`.`images` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE INDEX `fk_schools_images1_idx` ON `rookies_app_db`.`schools` (`images_id` ASC);

CREATE INDEX `images_id` ON `rookies_app_db`.`schools` (`images_id` ASC);

INSERT INTO `schools` (`id`, `name`, `description`, `website`, `images_id`, `campuses`) VALUES
('1', 'Wild Code School', 'La Wild Code School propose des formations intensives aux métiers tech - Développement web, Data analyse, Cybersécurité, Product management - sur campus, à distance ou en entreprise.', 'https://www.wildcodeschool.com/fr-FR', 5, "Remote");

-- -----------------------------------------------------
-- Table `rookies_app_db`.`users`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `rookies_app_db`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `hashedpassword` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

CREATE UNIQUE INDEX `email_UNIQUE` ON `rookies_app_db`.`users` (`email` ASC);

INSERT INTO `users` (`id`, `email`, `hashedpassword`) VALUES
(3, 'julien.richard@wildcodeschool.com', '$argon2id$v=19$m=65536,t=5,p=1$wCiUeYdaDWDCX7ZQ2qKFng$pYxPOsrdfo9p2XJO6st7h60EIL++m2j+o/AS58W8dMo'),
(5, 'jeromesantoni@rookies.com', '$argon2id$v=19$m=65536,t=5,p=1$wCiUeYdaDWDCX7ZQ2qKFng$pYxPOsrdfo9p2XJO6st7h60EIL++m2j+o/AS58W8dMo'),
(6, 'admin@rookies.com', '$argon2id$v=19$m=65536,t=5,p=1$wCiUeYdaDWDCX7ZQ2qKFng$pYxPOsrdfo9p2XJO6st7h60EIL++m2j+o/AS58W8dMo'),
(7, 'cloe.truel@wildcodeschool.com', '$argon2id$v=19$m=65536,t=5,p=1$wCiUeYdaDWDCX7ZQ2qKFng$pYxPOsrdfo9p2XJO6st7h60EIL++m2j+o/AS58W8dMo'),
(8, 'vicky.lucea@wildcodeschool.com', '$argon2id$v=19$m=65536,t=5,p=1$wCiUeYdaDWDCX7ZQ2qKFng$pYxPOsrdfo9p2XJO6st7h60EIL++m2j+o/AS58W8dMo'),
(9, 'guilhem.seyvet@wildcodeschool.com', '$argon2id$v=19$m=65536,t=5,p=1$wCiUeYdaDWDCX7ZQ2qKFng$pYxPOsrdfo9p2XJO6st7h60EIL++m2j+o/AS58W8dMo'),
(10, 'elyes.sahli@rookies.com', '$argon2id$v=19$m=65536,t=5,p=1$wCiUeYdaDWDCX7ZQ2qKFng$pYxPOsrdfo9p2XJO6st7h60EIL++m2j+o/AS58W8dMo');



-- -----------------------------------------------------
-- Table `rookies_app_db`.`profiles`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `rookies_app_db`.`profiles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `create_time` VARCHAR(45) NULL DEFAULT 'CURRENT_TIMESTAMP',
  `phone` INT NULL,
  `role` VARCHAR(45) NULL,
  `linkedin` VARCHAR(45) NULL,
  `entity_category_id` INT NOT NULL,
  `company_id` VARCHAR(255) NULL,
  `school_id` VARCHAR(255) NULL,
  `is_admin` TINYINT NOT NULL,
  `user_id` INT NOT NULL,
  `images_id` INT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_User_Entity`
    FOREIGN KEY (`entity_category_id`)
    REFERENCES `rookies_app_db`.`entities` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_company1`
    FOREIGN KEY (`company_id`)
    REFERENCES `rookies_app_db`.`companies` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_school1`
    FOREIGN KEY (`school_id`)
    REFERENCES `rookies_app_db`.`schools` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_profile_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `rookies_app_db`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_profile_images1`
    FOREIGN KEY (`images_id`)
    REFERENCES `rookies_app_db`.`images` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

CREATE INDEX `fk_User_Entity_idx` ON `rookies_app_db`.`profiles` (`entity_category_id` ASC);

CREATE INDEX `fk_user_company1_idx` ON `rookies_app_db`.`profiles` (`company_id` ASC);

CREATE INDEX `fk_user_school1_idx` ON `rookies_app_db`.`profiles` (`school_id` ASC);

CREATE INDEX `fk_profile_user1_idx` ON `rookies_app_db`.`profiles` (`user_id` ASC);

CREATE INDEX `fk_profile_images1_idx` ON `rookies_app_db`.`profiles` (`images_id` ASC);

CREATE INDEX `images_id` ON `rookies_app_db`.`profiles` (`images_id` ASC);

CREATE INDEX `school_id_idx` ON `rookies_app_db`.`profiles` (`school_id` ASC);

CREATE INDEX `company_id_idx` ON `rookies_app_db`.`profiles` (`company_id` ASC);

INSERT INTO `profiles` (`id`, `firstname`, `lastname`, `create_time`, `phone`, `role`, `linkedin`, `entity_category_id`, `company_id`, `school_id`, `is_admin`, `user_id`, `images_id`) VALUES
(3, 'Julien', 'Richard', '10062022', 0607070707, 'Formateur', 'linkedin.com/jujurichard', 2, null, "1", 1, 3, 8),
(5, 'Jérôme', 'Santoni', '10062022', 0606060608, 'Entrepreneur', 'linkedin.com/rookies', 1, "1", null, 1, 5, 7),
(6, 'Jérôme', 'admin', '10062022', 0617341155, 'Fondateur', 'linkedin.com/rookies', 1, "1", null, 1, 6, 7),
(7, 'Cloé', 'Truel', '13072022', 0492651752, 'career specialist', 'linkedin.com/cloétruel', 2, null, "1", 1, 7, null),
(8, 'Vicky', 'Lucea', '13072022', 0492651755, 'Experience manager', 'linkedin.com/vickylucea', 2, null, "1", 1, 8, null),
(9, 'Guilhem', 'Seyvet', '13072022', 0687587813, 'Teaching Assistant', 'linkedin.com/guilhemCV', 2, null, "1", 1, 9, null),
(10, 'Elyes', 'Sahli', '13072022', 0655183712, 'Fondateur', 'linkedin.com/elyessahli', 1, "1", null, 1, 10, 9);


-- -----------------------------------------------------
-- Table `rookies_app_db`.`student_levels`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `rookies_app_db`.`student_levels` (
  `id` INT NOT NULL,
  `level` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `student_levels` (`id`, `level`) VALUES
(1, 'Bac (CAP, BEP'),
(2, 'Bac +2 (BTS, DUT, DEUST)'),
(3, 'Bac +3 (License, BUT)'),
(4, 'Bac +4 (Master 1, Maitrise)'),
(5, 'Bac +5 (Master 2, DEA, DESS, Diplôme ingénieur)'),
(6, 'Bac +8 (Doctorat)');
-- -----------------------------------------------------
-- Table `rookies_app_db`.`school_ressources`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `rookies_app_db`.`school_ressources` (
  `id` VARCHAR(255) NOT NULL,
  `course` VARCHAR(45) NOT NULL,
  `training` VARCHAR(45) NOT NULL,
  `student_level_id` INT NOT NULL,
  `campus` VARCHAR(255) NOT NULL,
  `student_workforce` INT NOT NULL,
  `is_grouped` TINYINT NOT NULL,
  `group_size` INT NOT NULL,
  `group_quantity` VARCHAR(45) NOT NULL,
  `weekly_time_dedicated` INT NOT NULL,
  `objectives` LONGTEXT NOT NULL,
  `mission_examples` LONGTEXT NOT NULL,
  `submission_date` DATE NOT NULL,
  `start_date` DATE NOT NULL,
  `end_date` DATE NOT NULL,
  `ideal_location` VARCHAR(255) NULL,
  `commitment` LONGTEXT NOT NULL,
  `profiles_id` INT NOT NULL,
  `workforces_id` INT NULL,
  `sectors_id` INT NULL,
  `remote` TINYINT NULL,
  `schools_id` VARCHAR(255) NOT NULL,
  `full` TINYINT NOT NULL,
  `stages_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_school_project_student_level1`
    FOREIGN KEY (`student_level_id`)
    REFERENCES `rookies_app_db`.`student_levels` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_school_projects_users1`
    FOREIGN KEY (`profiles_id`)
    REFERENCES `rookies_app_db`.`profiles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_school_projects_workforces1`
    FOREIGN KEY (`workforces_id`)
    REFERENCES `rookies_app_db`.`workforces` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_school_projects_sectors1`
    FOREIGN KEY (`sectors_id`)
    REFERENCES `rookies_app_db`.`sectors` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_school_ressources_schools1`
    FOREIGN KEY (`schools_id`)
    REFERENCES `rookies_app_db`.`schools` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE INDEX `fk_school_project_student_level1_idx` ON `rookies_app_db`.`school_ressources` (`student_level_id` ASC);

CREATE INDEX `fk_school_projects_users1_idx` ON `rookies_app_db`.`school_ressources` (`profiles_id` ASC);

CREATE INDEX `fk_school_projects_workforces1_idx` ON `rookies_app_db`.`school_ressources` (`workforces_id` ASC);

CREATE INDEX `fk_school_projects_sectors1_idx` ON `rookies_app_db`.`school_ressources` (`sectors_id` ASC);

CREATE INDEX `fk_school_ressources_schools1_idx` ON `rookies_app_db`.`school_ressources` (`schools_id` ASC);

-- -----------------------------------------------------
-- Table `rookies_app_db`.`teaching_fields`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `rookies_app_db`.`teaching_fields` (
  `id` INT NOT NULL,
  `field` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `teaching_fields` (`id`, `field`) VALUES
(1, 'Marketing'),
(2, 'Digital et développement web'),
(3, 'Communication'),
(4, 'Graphisme et Design'),
(5, 'Ingénierie'),
(6, 'Finance'),
(7, 'RH'),
(8, 'Supply Chain'),
(9, 'DD & RSE');
-- -----------------------------------------------------
-- Table `rookies_app_db`.`project_types`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `rookies_app_db`.`project_types` (
  `id` INT NOT NULL,
  `project_type` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `project_types` (`id`, `project_type`) VALUES
(1, 'Consulting : proposez une mission propre à votre entreprise et bénificier d’un renfort temporaire.'),
(2, 'Recruitement : proposez une mission pour trouvez les talents qu’il vous faut.'),
(3, 'Branding : proposez une mission pour promouvoir votre marque auprès des étudiants.');
-- -----------------------------------------------------
-- Table `rookies_app_db`.`stages`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `rookies_app_db`.`stages` (
  `id` INT NOT NULL,
  `stage` VARCHAR(90) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `stages` (`id`, `stage`) VALUES
(1, 'Projet en Brouillon'),
(2, 'Projet Soumis'),
(3, 'Projet en Matching'),
(4, 'Projet Matché'),
(5, 'Projet en cours'),
(6, 'Projet terminé');
-- -----------------------------------------------------
-- Table `rookies_app_db`.`company_project`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `rookies_app_db`.`company_project` (
  `id` VARCHAR(255) NOT NULL,
  `create_time` VARCHAR(45) NULL DEFAULT '10-01-2022',
  `project_types_id` INT NOT NULL,
  `end_date` DATE NOT NULL,
  `project_name` VARCHAR(255) NOT NULL,
  `goal` LONGTEXT NOT NULL,
  `ressources_available` LONGTEXT NOT NULL,
  `profiles_id` INT NOT NULL,
  `stages_id` INT NOT NULL,
  `school_ressources_id` VARCHAR(255) NULL,
  `companies_id` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_company_project_project_types1`
    FOREIGN KEY (`project_types_id`)
    REFERENCES `rookies_app_db`.`project_types` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_company_project_users1`
    FOREIGN KEY (`profiles_id`)
    REFERENCES `rookies_app_db`.`profiles` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_company_project_stages1`
    FOREIGN KEY (`stages_id`)
    REFERENCES `rookies_app_db`.`stages` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_company_project_school_ressources1`
    FOREIGN KEY (`school_ressources_id`)
    REFERENCES `rookies_app_db`.`school_ressources` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_company_project_companies1`
    FOREIGN KEY (`companies_id`)
    REFERENCES `rookies_app_db`.`companies` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE INDEX `fk_company_project_project_types1_idx` ON `rookies_app_db`.`company_project` (`project_types_id` ASC);

CREATE INDEX `fk_company_project_users1_idx` ON `rookies_app_db`.`company_project` (`profiles_id` ASC);

CREATE INDEX `fk_company_project_stages1_idx` ON `rookies_app_db`.`company_project` (`stages_id` ASC);

CREATE INDEX `fk_company_project_school_ressources1_idx` ON `rookies_app_db`.`company_project` (`school_ressources_id` ASC);

CREATE INDEX `fk_company_project_companies1_idx` ON `rookies_app_db`.`company_project` (`companies_id` ASC);



-- -----------------------------------------------------
-- Table `rookies_app_db`.`languages`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `rookies_app_db`.`languages` (
  `id` INT NOT NULL,
  `language` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `languages` (`id`, `language`) VALUES
(1, 'Français'),
(2, 'Anglais'),
(3, 'Allemand'),
(4, 'Espagnol'),
(5, 'Arabe'),
(6, 'Russe'),
(7, 'Portuguais');
-- -----------------------------------------------------
-- Table `rookies_app_db`.`school_has_teaching_field`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `rookies_app_db`.`school_has_teaching_field` (
  `school_id` VARCHAR(255) NOT NULL,
  `teaching_field_id` INT NOT NULL,
  PRIMARY KEY (`school_id`, `teaching_field_id`),
  CONSTRAINT `fk_school_has_teaching_field_school1`
    FOREIGN KEY (`school_id`)
    REFERENCES `rookies_app_db`.`schools` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_school_has_teaching_field_teaching_field1`
    FOREIGN KEY (`teaching_field_id`)
    REFERENCES `rookies_app_db`.`teaching_fields` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE INDEX `fk_school_has_teaching_field_teaching_field1_idx` ON `rookies_app_db`.`school_has_teaching_field` (`teaching_field_id` ASC);

CREATE INDEX `fk_school_has_teaching_field_school1_idx` ON `rookies_app_db`.`school_has_teaching_field` (`school_id` ASC);

INSERT INTO `school_has_teaching_field` (`school_id`, `teaching_field_id`) VALUES
('1', 1),
('1', 3);
-- -----------------------------------------------------
-- Table `rookies_app_db`.`school_project_has_teaching_field`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `rookies_app_db`.`school_project_has_teaching_field` (
  `school_project_id` VARCHAR(255) NOT NULL,
  `teaching_field_id` INT NOT NULL,
  PRIMARY KEY (`school_project_id`, `teaching_field_id`),
  CONSTRAINT `fk_school_project_has_teaching_field_school_project1`
    FOREIGN KEY (`school_project_id`)
    REFERENCES `rookies_app_db`.`school_ressources` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_school_project_has_teaching_field_teaching_field1`
    FOREIGN KEY (`teaching_field_id`)
    REFERENCES `rookies_app_db`.`teaching_fields` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE INDEX `fk_school_project_has_teaching_field_teaching_field1_idx` ON `rookies_app_db`.`school_project_has_teaching_field` (`teaching_field_id` ASC);

CREATE INDEX `fk_school_project_has_teaching_field_school_project1_idx` ON `rookies_app_db`.`school_project_has_teaching_field` (`school_project_id` ASC);

INSERT INTO `school_project_has_teaching_field` (`school_project_id`, `teaching_field_id`) VALUES
('1', 1);
-- -----------------------------------------------------
-- Table `rookies_app_db`.`school_projects_has_languages`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `rookies_app_db`.`school_projects_has_languages` (
  `school_projects_id` VARCHAR(255) NOT NULL,
  `languages_id` INT NOT NULL,
  PRIMARY KEY (`school_projects_id`, `languages_id`),
  CONSTRAINT `fk_school_projects_has_languages_school_projects1`
    FOREIGN KEY (`school_projects_id`)
    REFERENCES `rookies_app_db`.`school_ressources` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_school_projects_has_languages_languages1`
    FOREIGN KEY (`languages_id`)
    REFERENCES `rookies_app_db`.`languages` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE INDEX `fk_school_projects_has_languages_languages1_idx` ON `rookies_app_db`.`school_projects_has_languages` (`languages_id` ASC);

CREATE INDEX `fk_school_projects_has_languages_school_projects1_idx` ON `rookies_app_db`.`school_projects_has_languages` (`school_projects_id` ASC);

INSERT INTO `school_projects_has_languages` (`school_projects_id`, `languages_id`) VALUES
('1', 1),
('1', 2);
-- -----------------------------------------------------
-- Table `rookies_app_db`.`company_project_has_teaching_fields`
-- -----------------------------------------------------


CREATE TABLE IF NOT EXISTS `rookies_app_db`.`company_project_has_teaching_fields` (
  `company_project_id` VARCHAR(255) NOT NULL,
  `teaching_fields_id` INT NOT NULL,
  PRIMARY KEY (`company_project_id`, `teaching_fields_id`),
  CONSTRAINT `fk_company_project_has_teaching_fields_company_project1`
    FOREIGN KEY (`company_project_id`)
    REFERENCES `rookies_app_db`.`company_project` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_company_project_has_teaching_fields_teaching_fields1`
    FOREIGN KEY (`teaching_fields_id`)
    REFERENCES `rookies_app_db`.`teaching_fields` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION);

CREATE INDEX `fk_company_project_has_teaching_fields_teaching_fields1_idx` ON `rookies_app_db`.`company_project_has_teaching_fields` (`teaching_fields_id` ASC);

CREATE INDEX `fk_company_project_has_teaching_fields_company_project1_idx` ON `rookies_app_db`.`company_project_has_teaching_fields` (`company_project_id` ASC);

INSERT INTO `company_project_has_teaching_fields` (`company_project_id`, `teaching_fields_id`) VALUES
('1', 1);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
 
